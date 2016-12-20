var express = require('express');
var router = express.Router();
var users=require('../models/users.js');
/* GET home page. */
router.post('/', function(req, res) {

  var newusers=new users();

  newusers.username=req.body.username;
  newusers.password=req.body.password;

  newusers.save();
  res.send("inserted");

  //res.send('This is login page'+'<br>Username:'+usern+' Password:'+passw);
});

module.exports = router;
