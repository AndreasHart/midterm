exports.up = function(knex, Promise) {
  return  Promise.all([
    knex.schema.table('order_item', function (table) {
      table.foreign('menuItemId').references('menu_items.id')
    })
  ])
};

exports.down = function(knex, Promise) {
  return  Promise.all([
    knex.schema.table('order_item', function (table) {
      table.dropforeign('menuItemId')
    })
  ])
};

