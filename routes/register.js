"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.post("/register", (req, res) => {

    knex('users')
    .insert({
     'name':name,
     'phoneNumber':phonenumber,
     'address': address,
     'glutenFree':gf,
     'dairyFree':df,
     'vegetarian':veg,
     'vegan':vegan,
     'allergies': allergies
    })
  });
  return router;
}