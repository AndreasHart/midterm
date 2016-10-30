exports.up = function(knex, Promise) {
  return  Promise.all([
    knex.schema.createTable('users', function (table) {
      table.uuid('id').primary();
      table.string('email');
      table.string('name');
      table.string('phoneNumber');
      table.string('password')
      table.string('address');
      table.boolean('glutenFree');
      table.boolean('dairyFree');
      table.boolean('vegetarian');
      table.boolean('vegan');
      table.string('allergies');
    }),
    knex.schema.createTable('orders', function (table) {
      table.uuid('id').primary();
      table.uuid('restaurantId');
      table.uuid('userId');
      table.boolean('pickup');
      table.boolean('delivery');
      table.string('specialRequests');
    }),
    knex.schema.createTable('menu_items', function (table) {
      table.uuid('id').primary();
      table.uuid('restaurantId');
      table.string('dishName');
      table.string('description');
      table.integer('price');
      table.integer('avg_cook_time');
      table.integer('picture_id');
      table.boolean('glutenFree');
      table.boolean('dairyFree');
      table.boolean('vegetarian');
      table.boolean('vegan');
      table.string('ingredients');
    }),
    knex.schema.createTable('restaurants', function (table) {
      table.uuid('id').primary();
      table.string('restaurant_name');
      table.string('description');
      table.boolean('delivery');
      table.boolean('pickup');
      table.boolean('glutenFree');
      table.boolean('dairyFree');
      table.boolean('vegetarian');
      table.boolean('vegan');
    }),
    knex.schema.createTable('order_item', function (table) {
      table.uuid('id').primary();
      table.uuid('orderId');
      table.uuid('menuItemId');
      table.string('description');
    }),

    ])
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
