exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('delete from mood; alter sequence mood_id_seq restart with 3')
    .then(function() {
      const manyMoods = [{
        moodName: 'Sad'
      }, {
        moodName: 'Happy'
      }]
      return knex('mood').insert(manyMoods)
    });
};
