//set up router with express
const router = require('express').Router();

//import helper functions
const User = require("./users-model");

//import middleware
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, (req,res)=>{
    Users.find()
    .then(users=>{
        res.json(users)
    })
    .catch(err=>res.send(err))
})

module.exports = router; 