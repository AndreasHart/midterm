
exports.up = function(knex, Promise) {
  return  Promise.all([
    knex.schema.createTable('menu_items', function (table) {
        table.increments('id');
        table.integer('restaurantId');
        table.string('dishName')
        table.string('description')
        table.integer('price')
        table.integer('avg_cook_time')
        table.integer('picture_id')
        table.boolean('glutenFree')
        table.boolean('dairyFree')
        table.boolean('vegetarian')
        table.boolean('vegan')
        table.string('ingredients')
        })
    ])
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('menu_items')
};
