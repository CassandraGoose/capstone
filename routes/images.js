const express = require('express')
const router = express.Router()
const knex = require('../db')
const authMiddleware = require('./middleware')


router.get('/images/sort', (req, res) => {
  var sortType = req.query.sortType
  var sortValue = req.query.sortValue

  knex('uploaded_images')
    .where(sortType, sortValue)
    .then(function(data) {
      res.json(data);
    })
})

router.get('/user/collection/sort', (req, res) => {
  var sortType = req.query.sortType
  console.log(req.query.sortType);
  var sortValue = req.query.sortValue
  console.log(req.query.sortValue);
  knex('collected_images')
    .where(sortType, sortValue)
    .then(function(data) {
      console.log(data);
      res.json(data);
    })
})

router.get('/images', (req, res, next) => {
  knex('uploaded_images')
    .then(uploaded_images => res.json(uploaded_images))
    .catch(err => next(err))
})

router.post('/user/collection', (req, res) => {
  console.log(req.body.user_id);
  knex('collected_images').where('collected_images.user_id', req.body.user_id)
    .then(collected_images => {
      console.log(collected_images);
      res.json(collected_images);
    })
})



router.post('/clowns', (req, res) => {
  var clownInfo = {
    name: "bozo",
    specialty: "facepaint"
  }
  knex('clown')
    .insert(clownInfo)
    .then(clowns => res.json(clowns))
})


router.post('/images/collect', (req, res, next) => {
  console.log(req.body.image)
  var collectedInfo = {
    URL: req.body.image.URL,
    user_id: req.body.user_id,
    mood: req.body.image.mood,
    color: req.body.image.color,
    keyword: req.body.image.keyword
  }
  knex('collected_images')
    .insert(collectedInfo)
    .then(collected_images => res.json(collected_images[0]))
    .catch(err => next(err))
})

router.post('/images/:id', (req, res, next) => {
  knex('uploaded_images')
    .update('popularity', knex.raw('popularity + 1'))
    .where('uploaded_images.id', req.params.id)
    .then(() => {
      knex('uploaded_images').where('uploaded_images.id', req.params.id).first()
      console.log('check popularity please');
    })
    .catch(err => next(err))
})

router.post('/upload', (req, res, next) => {
  var image = {
    URL: req.body.url,
    mood: req.body.mood,
    color: req.body.color,
    keyword: req.body.keyword,
    popularity: 0
  }
  knex('uploaded_images')
    .insert(image)
    .returning('*')
    .then(uploaded_images => res.json(uploaded_images[0]))
    .catch(err => next(err))
})

module.exports = router
