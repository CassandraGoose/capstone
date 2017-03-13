exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('delete from keyword; alter sequence keyword_id_seq restart with 3')
    .then(function() {
      const manyKeywords = [{
        id: 1,
        keywordName: 'Ham'
      }, {
        id: 2,
        keywordName: 'Design'
      }]
      return knex('keyword').insert(manyKeywords)
    });
};
