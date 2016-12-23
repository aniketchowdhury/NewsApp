    var express = require('express');
    var router = express.Router();
    var users=require('../models/usersmodel.js');
    var passport = require('passport');
    var LocalStrategy = require('passport-local').Strategy;
    var connectflash = require('connect-flash');


    /* GET home page. */

    router.get('/view', function(req, res, next) {
      users.find({},function(err,user){
        if(err) throw err;
        res.send(user);
      });
    });

    router.post('/login',
    passport.authenticate('local', { failureRedirect: '/login/login'}),
    function(req,res){
      res.send('welcome to login');
    }
    );
/*
    router.get('/logout', function(req, res){
    req.session.destroy();
    });
    */

    //save router

    router.post('/save', function(req, res) {

      var newusers=new users();

      newusers.username=req.body.username;
      newusers.password=req.body.password;

      newusers.save();
      res.send("inserted");

    });


    //update router

    router.put('/update', function(req, res, next) {

      users.update({username:req.body.username},{$set:{password:req.body.password}},function(err)
      {
        if(err)
        {
          res.send("there is an error");
        }
        else {
          res.send("Password Updated Successfully");
        }
      })
      //res.send('Update news');
    });




    module.exports = router;
