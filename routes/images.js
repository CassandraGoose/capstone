const express = require('express')
const router = express.Router()
const knex = require('../db')

router.get('/images', (req, res, next) => {
  knex('uploaded_images')
    .then(uploaded_images => res.json(uploaded_images))
    .catch(err => next(err))
})

router.get('/collection', (req, res, next) => {
  knex('collected_images')
    .then(collected_images => res.json(collected_images))
})

router.post('/images/upload', (req, res, next) => {
  var imagesObj = {
    //form post stuff here
    URL: req.body.URL,
    mood_id: req.body.mood_id,
    color_id: req.body.color_id,
    keyword_id: req.body.keyword_id,
    popularity: req.body.popularity
  }
  knex('uploaded_images')
    .insert(imagesObj)
    .then(uploaded_images => res.json(uploaded_images))
    .catch(err => next(err))
})

// .insert(params(req))
//     .returning('*')

// router.patch('/:id', validate, (req, res, next) => {
//   knex('posts')
//     .update(params(req))
//     .where({id: req.params.id})
//     .returning('*')
//     .then(posts => res.json(posts[0]))
//     .catch(err => next(err))
// })

// router.delete('/:id', (req, res, next) => {
//   knex('posts')
//     .del()
//     .where({id: req.params.id})
//     .then(() => res.end())
//     .catch(err => next(err))
// })
//
// router.post('/:id/votes', (req, res, next) => {
//   knex('posts')
//     .update('vote_count', knex.raw('vote_count + 1'))
//     .where({id: req.params.id})
//     .then( () => knex('posts').where({id: req.params.id}).first() )
//     .then( post => res.json({vote_count: post.vote_count}))
//     .catch(err => next(err))
// })
//
// router.delete('/:id/votes', (req, res, next) => {
//   knex('posts')
//     .update('vote_count', knex.raw('vote_count - 1'))
//     .where({id: req.params.id})
//     .then( () => knex('posts').where({id: req.params.id}).first() )
//     .then( post => res.json({vote_count: post.vote_count}))
//     .catch(err => next(err))
// })
//
// function params(req) {
//   return {
//     title: req.body.title,
//     body: req.body.body,
//     author: req.body.author,
//     image_url: req.body.image_url,
//   }
// }
//
// function validate(req, res, next) {
//   const errors = [];
//   ['title', 'body', 'author', 'image_url'].forEach(field => {
//     if (!req.body[field] || req.body[field].trim() === '') {
//       errors.push({field: field, messages: ["cannot be blank"]})
//     }
//   })
//   if (errors.length) return res.status(422).json({errors})
//   next()
// }

module.exports = router
