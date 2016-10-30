const uuid = require('node-uuid');
const bwid =uuid.v4();
const thid =uuid.v4();
const edid =uuid.v4();

exports.seed = function(knex, Promise) {
  return Promise.all([knex('menu_items').del(),
   knex('restaurants').del()
   ])

  .then(function () {
    return Promise.all([
      knex('restaurants').insert({id: bwid, restaurant_name: 'burritoworld'}),
      knex('restaurants').insert({id: uuid.v4(), restaurant_name: 'tacoheaven'}),
      knex('restaurants').insert({id: uuid.v4(), restaurant_name: 'eadables'})
      ]);
  })
  .then(function() {
    return Promise.all([
      knex('menu_items').insert({id: uuid.v4(),restaurantId:bwid, dishName: 'chicken burrito'}),
      knex('menu_items').insert({id: uuid.v4(),restaurantId:bwid, dishName: 'beef burrito'}),
      knex('menu_items').insert({id: uuid.v4(),restaurantId:bwid, dishName: 'pork burrito'}),
      knex('menu_items').insert({id: uuid.v4(),restaurantId:bwid, dishName: 'gwacamole'}),
      knex('menu_items').insert({id: uuid.v4(),restaurantId:bwid, dishName: 'fountain pop'}),
      knex('menu_items').insert({id: uuid.v4(),restaurantId:bwid, dishName: 'nachos'}),
      knex('menu_items').insert({id: uuid.v4(),restaurantId:thid, dishName: 'chicken taco'}),
      knex('menu_items').insert({id: uuid.v4(),restaurantId:thid, dishName: 'beef taco'}),
      knex('menu_items').insert({id: uuid.v4(),restaurantId:thid, dishName: 'pork taco'}),
      knex('menu_items').insert({id: uuid.v4(),restaurantId:thid, dishName: 'gwacamole'}),
      knex('menu_items').insert({id: uuid.v4(),restaurantId:thid, dishName: 'fountain pop'}),
      knex('menu_items').insert({id: uuid.v4(),restaurantId:thid, dishName: 'taconachos'}),
      knex('menu_items').insert({id: uuid.v4(),restaurantId:edid, dishName: 'brownie'}),
      knex('menu_items').insert({id: uuid.v4(),restaurantId:edid, dishName: 'cookie'}),
      knex('menu_items').insert({id: uuid.v4(),restaurantId:edid, dishName: 'goo'}),
      knex('menu_items').insert({id: uuid.v4(),restaurantId:edid, dishName: 'lolly'}),
      knex('menu_items').insert({id: uuid.v4(),restaurantId:edid, dishName: 'fountain pop'}),
      knex('menu_items').insert({id: uuid.v4(),restaurantId:edid, dishName: 'gummies'}),])
  });
};

