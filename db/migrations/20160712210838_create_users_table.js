exports.up = function(knex, Promise) {
  return  Promise.all([
    knex.schema.createTable('users', function (table) {
      table.increments();
      table.string('name');
      table.string('phoneNumber');
      table.string('address')
      table.boolean('glutenFree')
      table.boolean('dairyFree')
      table.boolean('vegetarian')
      table.boolean('vegan')
      table.string('allergies')
    })
  ])
};

exports.down = function(knex, Promise) {
  return  Promise.all([
    knex.schema.dropTable('users')
  ])
};
