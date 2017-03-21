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

router.get('/images', (req, res, next) => {
  knex('uploaded_images')
    .then(uploaded_images => res.json(uploaded_images))
    .catch(err => next(err))
})

router.get('/user/:id/collection/', authMiddleware.allowAccess, (req, res) => {

// unsure about the what to compare ids to. is it just user_id? 
  knex('collected_images').where(req.params.id, 'collected_images.user_id')
    .then(collected_images => res.json(collected_images))
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


router.get("https://apicloud-colortag.p.mashape.com/tag-url.json?palette=simple&sort=relevance&url=" + imageURL)
  .header("X-Mashape-Key", "long string of crazyness here")
  .header("Accept", "applicatoin/json")
  .end(function(result) {
    console.log(result.status, result.headers, result.body);
  })

router.post("https://apicloud-colortag.p.mashape.com/tag-file.json")
  .header("X-Mashape-Key", "long string of crazyness")
  .attach("image", fs.createReadStream("<image files goes here>"))
  .field("palette", "simple")
  .field("sort", "relavance")
  .end(function(result) {
    console.log(result.status, result.headers, result.body);
  })

module.exports = router
