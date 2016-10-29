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

// Seperated Routes for each Resource
const restaurantRoutes = require("./routes/users");
const registerRoutes = require("./routes/register");
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

// Mount all resource routes

app.use("/api/restaurant", restaurantRoutes(knex));
app.use("api/register",registerRoutes(knex));
// Home page
app.get("/", (req, res) => {
  res.render("index");
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

/*app.get("/:restaurant", (req, res) => {
  let templateVars = {user: req.session["user"], message: req.flash('loginMessage')}
  res.render("menu" , templateVars) ;
});*/

app.get("/register", (req, res) => {
  res.render("registration");
});

app.get("/login", (req, res) => {
  res.render("login");
})

app.get("/menu", (req, res) => {
  res.render("menu");
})

app.get("/menu/id:/create", (req, res) => {
  res.render("ownerMenu");
})

app.post("/register", (req, res) => {
  res.redirect('/menu') //could redirect to cart?
});

app.post("/menu/id:/create", (req, res) => {
  res.redirect('/menu') //add in ajax to dynamically adjust menu items
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});

//gets the users password from the usernaem they entered and compares the entered password to the hash
function getUserPasswordHashandCompare(user,password){
  let i=0;
  dbHash = knex.select('password').from('users').where('name', user ).then(user=> users[0].password)
  if(dbHash && bcrypt.compareSync(password,dbHash)){
    return true
  }
  return false;
}
