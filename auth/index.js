const express = require('express')
const router = express.Router()
const knex = require('../db')
var bcrypt = require('bcryptjs');
const saltRounds = 10;

//bring in the fucntion getOneByEmail
router.get('/', (req, res) => {
  res.json({
    message: 'working'
  })
})

function validUser(user) {
  const validEmail = typeof user.email === 'string' &&
    user.email.trim() != '';
  const validPassword = typeof user.password === 'string' &&
    user.password.trim() != '' &&
    user.password.trim().length >= 6;
  return validEmail && validPassword
}

function getOneByEmail() {
  return knex('people').where('email', email).first()
}

function creatething(user) {
  return knex('people').insert(user, 'id').then(ids => {
    return ids[0]
  })
}

router.post('/signup', (req, res, next) => {
  if (validUser(req.body)) {
    People.getOneByEmail(req.body.email)
      .then(user => {
        console.log('people', people);
        if (!people) {
          bcrypt.hash(req.body.password, saltRounds)
            .then((hash) => {
              const user = {
                username: req.body.username,
                email: req.body.email,
                password: hash
              }

              People.create(user)
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

module.exports = router
