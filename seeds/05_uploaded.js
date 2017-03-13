exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('delete from uploaded_images; alter sequence uploaded_images_id_seq restart with 3')
    .then(function() {
      const manyUploaded_Images = [{
        id: 1,
        moodId: 1,
        colorId: 1,
        keywordId: 1,
        popularity: 5
      }, {
        id: 2,
        moodId: 2,
        colorId: 2,
        keywordId: 2,
        popularity: 10
      }]
      return knex('uploaded_images').insert(manyUploaded_Images)
    });
};
