
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('order_item', function (table) {
      table.foreign('userid').references('users.id');

    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('order_item', function (table) {
      table.dropForeign('userid')

    })
  ])
};
