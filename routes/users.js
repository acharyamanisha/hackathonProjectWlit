var express = require('express');
var router = express.Router();

const Users = require('../models/users');


/* GET users listing. */
router.post('/login', async function(req, res, next){
  let formData = {
    "email": req.body.email,
    "password": req.body.password
  }
  const user =  await Users.findOne(formData);
  
  if (user) res.redirect('/');
  else console.log('user not found')
});

router.post('/signup', async function(req, res, next){
  console.log('signup');
  let formData = {
    "name": req.body.name,
    "age": req.body.age,
    "email": req.body.email,
    "phonenumber": req.body.phoneNumber
  }
  await Users.insertMany(formData);
  res.redirect('/')
})

module.exports = router;
