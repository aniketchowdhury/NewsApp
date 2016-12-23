var express = require('express');
var router = express.Router();
var newsdata = require('../models/newsmodel.js');



/* GET users listing. */
router.get('/view', isLoggedIn, function(req, res, next) {
  newsdata.find({},function(err,allnews){
    if(err) throw err;
    res.send(allnews);
  });
  console.log("View saved news");
});
/*
router.delete("/del",function(req,res) {
if(req.body){
var request=req.body.Title;
newsdata.remove({Title:request},function(err){
if(err){
res.send("Error in deleting the data");
}
else{
res.send("Data is deleted successfully");
}
});
}
else{
res.send("no data found to delete");
}
});
*/
/*
creating delete router

*/
router.delete('/del', isLoggedIn, function(req, res, next) {

  newsdata.findOne({Title:req.body.Title}, function(err,news)
  {
    if(err)
    {
      res.send("there is an error");
    }
    else
    {
      newsdata.remove({Title:req.body.Title},function(err1){
        if(err1)
        {
          res.send("there is an error");
        }
        else
        {
          res.send("data removed");
        }
      })
    }
  });
});

router.post('/save', isLoggedIn,function(req, res, next) {

  var newnewsmodel=new newsdata();
  newnewsmodel.Title=req.body.title;
  console.log(newnewsmodel.Title);
  newnewsmodel.Description=req.body.description;
  newnewsmodel.Author=req.body.author;
  newnewsmodel.Url=req.body.url;
  newnewsmodel.urlToImage=req.body.urlToImage;
  newnewsmodel.save();

  res.send('save news');
});

router.put('/update',isLoggedIn, function(req, res, next) {

  newsdata.update({Title:req.body.Title},{$set:{Comments:req.body.Comments}},function(err)
  {
    if(err)
    {
      res.send("there is an error");
    }
    else {
      res.send("Comments Updated Successfully");
    }
  })
  //res.send('Update news');
});

router.get('/logout',function(req,res){
  console.log("Logging out");
  req.session.destroy();
  res.send(401);
});

function isLoggedIn (req, res, next) {
  if(req.isAuthenticated()){
    return next()
    ;}
    else {
      res.json('not authenticated');
    }
  };



  module.exports = router;
