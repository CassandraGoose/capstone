exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('delete from color; alter sequence color_id_seq restart with 3')
    .then(function() {
      const manyColors = [{
        id: 1,
        colorName: 'Red'
      }, {
        id: 2, 
        colorName: 'Black'
      }]
      return knex('color').insert(manyColors)
    });
};
