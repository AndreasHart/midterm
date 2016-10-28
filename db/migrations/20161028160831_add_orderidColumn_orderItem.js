
exports.up = function(knex, Promise) {
  return  Promise.all([
    knex.schema.table('order_item', function (table) {
      table.integer('orderid')
      table.foreign('orderid').references('orders.id')
    })
  ])
};

exports.down = function(knex, Promise) {
  return  Promise.all([
    knex.schema.table('order_item', function (table) {
      table.dropforeign('orderid')
      table.dropColumn('orderid')
    })
  ])
};
