"use strict";

const express = require('express');
const router  = express.Router();
const uuid    =require('node-uuid');
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
    console.log("Getting by", req.params.resId);
    knex
    .select("*")
    .from("menu_items")
    .where('restaurantId' ,req.params.resId)
    .then((results) => {
      res.json(results);
    });
  });

  router.post("/:resId/orders", (req,res)=>{
    let id = uuid.v4();
    return Promise.all([
      knex('orders')
      .insert({id: id, restaurantId:req.params.resId, userId:res.session.user}),
      ])
    .then(()=>{
      return Promise.all([
        req.body.menuitems.forEach(()=>{
          knex('order_item')
          .insert({id: uuid.v4(), orderId:id, menuItemId:this})
        })
        ])
    })
  });

  return router;
};
