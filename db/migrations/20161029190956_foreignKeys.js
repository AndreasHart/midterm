
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('order_item', function (table) {
      table.foreign('orderId').references('orders.id')
      table.foreign('menuItemId').references('menu_items.id')
    }),
    knex.schema.table('orders', function (table) {
      table.foreign('userId').references('users.id')
      table.foreign('restaurantId').references('restaurants.id')
    }),
      knex.schema.table('menu_items', function (table) {
      table.foreign('restaurantId').references('restaurants.id')
    })])
};

exports.down = function(knex, Promise) {
return  Promise.all([
   knex.schema.dropTable('order_item'),
   knex.schema.dropTable('menu_items'),
   knex.schema.dropTable('orders'),
   knex.schema.dropTable('users'),
   knex.schema.dropTable('restaurants')
   ])
};
