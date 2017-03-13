exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('delete from keyword; alter sequence keyword_id_seq restart with 3')
    .then(function() {
      const manyKeywords = [{
        name: 'Ham'
      }, {
        name: 'Design'
      }]
      return knex('keyword').insert(manyKeywords)
    });
};
