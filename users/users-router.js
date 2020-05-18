//set up router with express
const router = require('express').Router();

//import helper functions
const User = require("./users-model");

router.get('/', (req,res)=>{
    Users.find()
    .then(users=>{
        res.json(users)
    })
    .catch(err=>res.send(err))
})

module.exports = router; 