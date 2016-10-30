const uuid = require('node-uuid');
const bwid ='08f90ce8-8a8e-496d-a5d6-859d05b12c2a';
exports.seed = function(knex, Promise) {
  return knex('restaurants').del()
  knex('menu_items').del()
  .then(function () {
    return Promise.all([
      knex('restaurants').insert({id: uuid.v4(), restaurant_name: 'burritoworld'}),
      knex('menu_items').insert({id: uuid.v4(),restaurantId:bwid, dishName: 'chicken burrito'}),
      knex('menu_items').insert({id: uuid.v4(),restaurantId:bwid, dishName: 'beef burrito'}),
      knex('menu_items').insert({id: uuid.v4(),restaurantId:bwid, dishName: 'pork burrito'}),
      knex('menu_items').insert({id: uuid.v4(),restaurantId:bwid, dishName: 'gwacamole'}),
      knex('menu_items').insert({id: uuid.v4(),restaurantId:bwid, dishName: 'fountain pop'}),
      knex('menu_items').insert({id: uuid.v4(),restaurantId:bwid, dishName: 'nachos'}),

      knex('restaurants').insert({id: uuid.v4(), restaurant_name: 'tacoheaven'}),
      knex('restaurants').insert({id: uuid.v4(), restaurant_name: 'eadables'})
      ]);
  });
};

