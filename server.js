"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');
const flash = require('connect-flash');
const session = require('express-session');

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

//initiate express-session
app.use(session({
  name: 'customerInfo',
  secret: 'orderUpsecret'
}));

//initiate connect-flash
app.use(flash());

// Mount all resource routes
app.use("/api/users", usersRoutes(knex));

// Home page
app.get("/", (req, res) => {
  if(req.session.user){
    res.render("index");
  }else{
    res.redirect('/login')
  }
});

//login page
app.get("/login", (req, res) => {
  let templateVars = {user: req.session["user"], message: req.flash('loginMessage')}
  res.render("login" , templateVars) ;
});

//logs the user in
app.post("/login", (req, res) => {
  if(getUserAndpasswordHash(req.body.user,req.body.password)){
      console.log('correct pass');
      req.session['user'] =  req.body.user;
      res.redirect('/');
  }else{
      req.flash('loginMessage' , 'Email/password not valid' );
      res.status(403);
      res.redirect('/login')
    }
})

app.get("/:restaurant", (req, res) => {
  let templateVars = {email: req.session["user"], message: req.flash('loginMessage')}
  res.render("menu" , templateVars) ;
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});

//gets the users password from the usernaem they entered and compares the entered password to the hash
function getUserPasswordHashandCompare(user,password){
  let i=0;
  dbHash = knex.select(password).form('users').where('name', user )
  if(dbHash){
    if(bcrypt.compareSync(password,dbHash)){
      i = 1;
    }
  }
  return i;
}
