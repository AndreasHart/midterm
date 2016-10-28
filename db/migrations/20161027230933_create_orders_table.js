
exports.up = function(knex, Promise) {
    return  Promise.all([
        knex.schema.createTable('orders', function (table) {
            table.increments('id');
            table.integer('userid');
            table.boolean('pickup')
            table.boolean('delivery')
            table.string('specialRequests')
        })
    ])
};

exports.down = function(knex, Promise) {
  return  Promise.all([
    knex.schema.dropTable('orders')
    ])
};
