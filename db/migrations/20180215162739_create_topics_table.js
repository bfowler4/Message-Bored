
exports.up = function(knex, Promise) {
  return knex.schema.createTable(`topics`, function(table) {
    table.increments();
    table.string(`name`).unique().notNullable();
    table.timestamp(`created_at`).notNullable().defaultTo(knex.fn.now());
    table.timestamp(`updated_at`).notNullable().defaultTo(knex.fn.now());
    table.integer(`user_id`).notNullable();
    table.foreign(`user_id`).references(`users.id`).onUpdate(`CASCADE`);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(`topics`);
};
