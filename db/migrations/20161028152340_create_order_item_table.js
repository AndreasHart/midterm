exports.up = function(knex, Promise) {
  return  Promise.all([
    knex.schema.createTable('order_item', function (table) {
      table.increments('id');
      table.integer('userid')
      table.integer('menuItemId')
      table.string('description')
    })
  ])
};

exports.down = function(knex, Promise) {
  return  Promise.all([
    knex.schema.dropTable('order_item')
    ])
};