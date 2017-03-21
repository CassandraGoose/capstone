var bcrypt = require('bcryptjs');
const saltRounds = 10;

exports.seed = function(knex, Promise) {
  return knex.raw('delete from people; alter sequence people_id_seq restart with 4')
    .then(function() {
      var salt = bcrypt.genSaltSync(saltRounds)

      const fewPeople = [{
        id: 1,
        password: bcrypt.hashSync('Sevenwordstomakeyouloveme4', salt),
        email: 'cassandra.torske@gmail.com'
      }, {
        id: 2,
        password: bcrypt.hashSync('123456', salt),
        email: 'panzerdog@gmail.com'
      }, {
        id: 3,
        password: bcrypt.hashSync('denna4eva', salt),
        email: 'kingkiller@chronicles.com'
      }]
      return knex('people').insert(fewPeople)
    });
};
