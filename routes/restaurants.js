"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("restaurants")
      .then((results) => {
        res.json(results);
    });
  });

  router.get("/:resId", (req, res) => {
    knex
      .select("*")
      .from("restaurants")
      .where('id', req.params.resId)
      .then((results) => {
        res.json(results);
    });
  });

  router.get("/:resId/orders", (req, res) => {
    knex
      .select("*")
      .from("orders")
      .where('restaurantId', req.params.resId)
      .then((results) => {
        res.json(results);
    });
  });

  router.get("/:resId/menuitems", (req, res) => {
    knex
      .select("*")
      .from("menu_items")
      .where('restaurantId' ,req.params.resId)
      .then((results) => {
        res.json(results);
    });
  });

  return router;
};
