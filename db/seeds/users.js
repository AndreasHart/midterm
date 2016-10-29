exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('restaurants').insert({id: 1, restaurant_name: 'Alice'}),
        knex('restaurants').insert({id: 2, restaurant_name: 'Bob'}),
        knex('restaurants').insert({id: 3, restaurant_name: 'Charlie'})
      ]);
    });
};
