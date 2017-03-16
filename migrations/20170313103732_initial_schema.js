exports.up = function(knex) {
  return knex.schema
    .createTable('people', function(table) {
      table.increments('id').primary();
      table.string('username').notNull().unique();
      table.string('password').notNull();
      table.string('email').notNull().unique();
    })
    .createTable('uploaded_images', function(table) {
      table.increments('id').primary();
      table.string('URL');
      table.string('mood').notNull();
      table.string('color').notNull();
      table.string('keyword').notNull();
      table.integer('popularity');
    })
    .createTable('collected_images', function(table) {
      table.increments('id').primary();
      table.string('URL');
      table.integer('user_id').unsigned().references('id').inTable('people').onDelete('CASCADE');
      table.string('mood').notNull();
      table.string('color').notNull();
      table.string('keyword').notNull();
      table.integer('popularity');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('people')
    .dropTableIfExists('uploaded_images')
    .dropTableIfExists('collected_images');
};
