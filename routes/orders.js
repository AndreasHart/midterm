"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("orders")
      .then((results) => {
        res.json(results);
    });
  });

  router.get("/:orderid", (req, res) => {
    knex
      .select("*")
      .from("orders")
      .where('id', req.params.orderId)
      .then((results) => {
        res.json(results);
    });
  });

  router.get("/:orderId/order_item", (req, res) => {
    knex
      .select("*")
      .from("order_item")
      .where('orderId', req.params.orderId)
      .then((results) => {
        res.json(results);
    });
  });

  return router;
}
