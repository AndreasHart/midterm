"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();
const bcrypt      = require('bcrypt');
const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');
const uuid        = require('node-uuid')
const flash       = require('connect-flash')
// Seperated Routes for each Resource
const restaurantRoutes = require("./routes/restaurants");
const usersRoutes = require("./routes/users");
const ordersRoutes = require ("./routes/orders");
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

app.use("/api/restaurants", restaurantRoutes(knex));
app.use("/api/users",usersRoutes(knex));
app.use("/api/orders", ordersRoutes(knex));
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
  //let templateVars = {user: req.session["user"], message: req.flash('loginMessage')}
  res.render("login"); //templateVars) ;
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


app.get("/register", (req, res) => {
  res.render("registration" );
});

app.post("/register", (req, res) => {
  return checkIfUsernameExists(req.body.name)
  .then(value => {
    //true or false
    console.log(req.body.password)
    if(req.body.password){
      console.log('inside')
      if(!value) {
        return knex('users')
        .insert({
          'id':uuid.v4(),
          'name':req.body.name,
          'email':req.body.email,
          'phoneNumber':req.body.phoneNumber,
          'address': req.body.address,
          'password':bcrypt.hashSync(req.body.password, 10),
          'glutenFree':true,
          'dairyFree':true,
          'vegetarian':true,
          'vegan':true,
          'allergies': true,
        })
        console.log('you made a user');
        return res.redirect('login')
      } else {
        return console.log('be more creative in your username/password')
      }
    }
  })
});



app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/menu", (req, res) => {
  res.render("menu");
});

app.get("/menu/id:/create", (req, res) => {
  res.render("ownerMenu");
});

app.post("/menu/id:/create", (req, res) => {
  res.redirect('/menu') //add in ajax to dynamically adjust menu items
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});

//gets the users password from the usernaem they entered and compares the entered password to the hash
function getUserPasswordHashandCompare(user,password){

  dbHash = knex
  .select('password')
  .from('users')
  .where('name', user )
  .then(user => users[0].password)
  if(dbHash && bcrypt.compareSync(password,dbHash)){
    return true
  }
  return false;
}

function checkIfUsernameExists(name){

  return knex
  .select('name')
  .from('users')
  .where('name', name)
  .then((users)=>{

    if(users.length > 0) {
      return true;
    } else {
      return false;
    }
  })

}
