"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
    .select("*")
    .from("users")
    .then((results) => {
      res.json(results);
    });
  });

  router.get("/:userId", (req, res) => {
    knex
    .select("*")
    .from("users")
    .where('id', req.params.userId)
    .then((results) => {
      res.json(results);
    });
  });

  router.get("/:userId/orders", (req, res) => {
    knex
    .select("*")
    .from("orders")
    .where('userId', req.params.userId )
    .then((results) => {
      res.json(results);
    });
  });



  return router;
}