exports.up = function(knex, Promise) {
  return  Promise.all([
    knex.schema.table('menu_items', function (table) {
      table.foreign('restaurantId').references('restaurants.id')
    })
  ])
};

exports.down = function(knex, Promise) {
  return  Promise.all([
    knex.schema.table('menu_items', function (table) {
      table.dropforeign('restaurantId')
    })
  ])
};