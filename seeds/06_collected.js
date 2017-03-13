exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('delete from collected_images; alter sequence collected_images_id_seq restart with 3')
    .then(function() {
      const manyCollected_Images = [{
        id: 1,
        user_id: 1,
        moodId: 1,
        colorId: 1,
        keywordId: 1,
        popularity: 5
      }, {
        id: 2,
        user_id: 3,
        moodId: 2,
        colorId: 2,
        keywordId: 2,
        popularity: 10
      }]
      return knex('collected_images').insert(manyCollected_Images)
    });
};
