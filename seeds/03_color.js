exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('delete from color; alter sequence color_id_seq restart with 3')
    .then(function() {
      const manyColors = [{
        name: 'Red'
      }, {
        name: 'Black'
      }]
      return knex('color').insert(manyColors)
    });
};
