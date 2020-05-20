// //set up router with express
// const router = require('express').Router();

// // //import helper functions
// const User = require("./users-model");

// // //import middleware

// const { restricted} = require("../users/users-service.js");

// router.get('/', restricted, (req,res)=>{
//     Users.find()
//     .then(users=>{
//         res.json(users)
//     })
//     .catch(err=>res.send(err))
// })

// module.exports = router; 

const express = require("express");
const router = require("express").Router();

const Users = require("./users-model.js");

function restricted(req, res, next) {
  if (req.session && req.session.loggedIn) {
    next();
  } else {
    res.status(401).json({ you: "cannot pass!" });
  }
}

router.use(restricted);

router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});


module.exports = router;