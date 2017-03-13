exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('delete from mood; alter sequence mood_id_seq restart with 3')
    .then(function() {
      const manyMoods = [{
        id: 1,
        moodName: 'Sad'
      }, {
        id: 2,
        moodName: 'Happy'
      }]
      return knex('mood').insert(manyMoods)
    });
};
