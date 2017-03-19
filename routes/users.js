const express = require('express')
const router = express.Router()
const knex = require('../db')
var bcrypt = require('bcryptjs')
const saltRounds = 10

//bring in the function getOneByEmail
router.get('/signup', (req, res) => {
  res.status(200).json({
    message: 'working'
  })
})

router.get('/users', (req, res) => {
  knex('people')
    .then(people => res.json(people))
    .catch(err => next(err))
})

function validPerson(user) {
  const validEmail = typeof user.email === 'string' &&
    user.email.trim() != '';
  const validPassword = typeof user.password === 'string' &&
    user.password.trim() != '' &&
    user.password.trim().length >= 6;
  return validEmail && validPassword
}

function getOneByEmail(email) {
  return knex('people').where('email', email).first()
}

function createPerson(person) {
  return knex('people').insert(person, 'id').then(ids => {
    return ids[0]
  })
}

router.post('/signup', (req, res, next) => {
  if (validPerson(req.body)) {
    getOneByEmail(req.body.email)
      .then(person => {
        console.log('person', person);
        if (!person) {
          bcrypt.hash(req.body.password, saltRounds)
            .then((hash) => {
              const person = {
                username: req.body.username,
                password: hash,
                email: req.body.email
              }

              createPerson(person)
                .then(id => {
                  res.json({
                    id,
                    message: 'signup route working'
                  })
                })
                //redirect
            })
        } else {
          next(new Error('Email in already in use'))
        }
      })
  } else {
    next(new Error('Invalid user'))
  }
})

router.post('/signin', function(req, res, next) {
  if(validPerson(req.body)) {
    getOneByEmail(req.body.email)
    .then(person => {
      console.log('person', person);
      if(person){
        bcrypt.compare(req.body.password, person.password)
        .then(function(result) {
          if(result) {
            res.json({
              result,
              message: "logging in bro"
            })
          }else {
            next(new Error('invalid login'))
          }
        })
      } else {
        next(new Error('invalid login'))
      }
    })
  } else {
    next(new Error('Invalid Login'))
  }

})

module.exports = router