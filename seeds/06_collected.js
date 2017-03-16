exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('delete from collected_images; alter sequence collected_images_id_seq restart with 3')
    .then(function() {
      const manyCollected_Images = [{
        id: 1,
        URL: 'https://d.fastcompany.net/multisite_files/fastcompany/imagecache/1280/poster/2015/08/3049875-poster-p-1-the-2015-innovation-by-design-awards-winners.jpg',
        user_id: 1,
        mood:'peaceful',
        color: 'orange',
        keyword: 'copper',
        popularity: 5
      }, {
        id: 2,
        URL: "https://68.media.tumblr.com/669cfb7fea91732af4f1611a0f464a25/tumblr_olj3yl7cfk1u16n75o1_500.jpg",
        user_id: 3,
        mood: 'happy',
        color: 'white',
        keyword: 'tribal',
        popularity: 10
      }]
      return knex('collected_images').insert(manyCollected_Images)
    });
};
