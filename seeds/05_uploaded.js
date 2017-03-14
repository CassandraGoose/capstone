exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('delete from uploaded_images; alter sequence uploaded_images_id_seq restart with 3')
    .then(function() {
      const manyUploaded_Images = [{
        id: 1,
        URL: 'https://68.media.tumblr.com/0cbecf0eb327027720fe46b465629ab3/tumblr_o9qxunbWqc1v2y29fo1_500.jpg',
        mood_id: 1,
        color_id: 1,
        keyword_id: 1,
        popularity: 5
      }, {
        id: 2,
        URL: 'https://d.fastcompany.net/multisite_files/fastcompany/imagecache/1280/poster/2015/08/3049875-poster-p-1-the-2015-innovation-by-design-awards-winners.jpg',
        mood_id: 2,
        color_id: 2,
        keyword_id: 2,
        popularity: 10
      }]
      return knex('uploaded_images').insert(manyUploaded_Images)
    });
};
