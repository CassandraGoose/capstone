exports.up = function(knex) {
  return knex.schema
    .createTable('people', function(table) {
      table.increments('id').primary();
      table.string('username').notNull().unique();
      table.string('password').notNull();
      table.string('email').notNull().unique();
    })
    .createTable('mood', function(table) {
      table.increments('id').primary();
      table.string('moodeName');
    })
    .createTable('color', function(table) {
      table.increments('id').primary();
      table.string('colorName')
    })
    .createTable('keyword', function(table) {
      table.increments('id').primary();
      table.string('keywordName')
    })
    .createTable('uploaded_images', function(table) {
      table.increments('id').primary();
      table.integer('moodId').unsigned().references('id').inTable('mood').onDelete('CASCADE');
      table.integer('colorId').unsigned().references('id').inTable('color').onDelete('CASCADE');
      table.integer('keywordId').unsigned().references('id').inTable('keyword').onDelete('CASCADE');
      table.integer('popularity');
    })
    .createTable('collected_images', function(table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('id').inTable('people').onDelete('CASCADE');
      table.integer('moodId').unsigned().references('id').inTable('mood').onDelete('CASCADE');
      table.integer('colorId').unsigned().references('id').inTable('color').onDelete('CASCADE');
      table.integer('keywordId').unsigned().references('id').inTable('keyword').onDelete('CASCADE');
      table.integer('popularity');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('people')
    .dropTableIfExists('uploaded_images')
    .dropTableIfExists('collected_images')
    .dropTableIfExists('mood')
    .dropTableIfExists('color')
    .dropTableIfExists('keyword');
};
