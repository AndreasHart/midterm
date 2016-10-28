
exports.up = function(knex, Promise) {
  return  Promise.all([
    knex.schema.createTable('restaurants', function (table) {
      table.increments('id');
      table.string('restaurant_name')
      table.string('description')
      table.boolean('delivery')
      table.boolean('pickup')
      table.boolean('glutenFree')
      table.boolean('dairyFree')
      table.boolean('vegetarian')
      table.boolean('vegan')
    })
  ])
};

exports.down = function(knex, Promise) {
  return  Promise.all([
    knex.schema.dropTable('restaurants')
    ])
};
