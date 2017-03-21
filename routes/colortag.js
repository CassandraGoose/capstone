const express = require('express')
const router = express.Router()
const knex = require('../db')
const authMiddleware = require('./middleware')

//where do we get the imageURL???? i need it from the upload form...

unirest.get("https://apicloud-colortag.p.mashape.com/tag-url.json?palette=simple&sort=relevance&url=" + imageURL)
.header("X-Mashape-Key", process.env.MASHAPE_KEY)
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});


//the one below this is for uploading images, but i'm not sure i'll get to that. you know?
// unirest.post("https://apicloud-colortag.p.mashape.com/tag-file.json")
// .header("X-Mashape-Key", process.env.MASHAPE_KEY)
// .attach("image", fs.createReadStream("<file goes here>"))
// .field("palette", "simple")
// .field("sort", "relevance")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });


//this is what i'll get from the api
// {
//   "tags": [
//     {
//       "label": "Green",
//       "color": "#6EA76B"
//     },
//     {
//       "label": "Beige",
//       "color": "#C5AD98"
//     },
//     {
//       "label": "Red",
//       "color": "#533E34"
//     },
//     {
//       "label": "Brown",
//       "color": "#937C66"
//     },
//     {
//       "label": "Pink",
//       "color": "#DFD4CE"
//     }
//   ]
// }
//so change things to post to db with color. then err thing else shoudl still work, aye?
