
exports.up = function(knex, Promise) {
  return knex.schema.createTable(`messages`, function(table) {
    table.increments();
    table.text(`body`).notNullable();
    table.timestamp(`created_at`).notNullable().defaultTo(knex.fn.now());
    table.timestamp(`updated_at`).notNullable().defaultTo(knex.fn.now());
    table.integer(`user_id`).notNullable();
    table.foreign(`user_id`).references(`users.id`).onUpdate(`CASCADE`);
    table.integer(`topic_id`).notNullable();
    table.foreign(`topic_id`).references(`topics.id`).onUpdate(`CASCADE`);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(`messages`);
};
