exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('delete from uploaded_images; alter sequence uploaded_images_id_seq restart with 3')
    .then(function() {
      const manyUploaded_Images = [{
        id: 1,
        mood_id: 1,
        color_id: 1,
        keyword_id: 1,
        popularity: 5
      }, {
        id: 2,
        mood_id: 2,
        color_id: 2,
        keyword_id: 2,
        popularity: 10
      }]
      return knex('uploaded_images').insert(manyUploaded_Images)
    });
};
