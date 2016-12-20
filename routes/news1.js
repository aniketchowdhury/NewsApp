var express=require("express");
var router = express.Router();
var mongoose=require('mongoose');
var uristring ='mongodb://localhost/test';



/*localhost:8080/news*/
router.get("/:tst/:tst2",function(request,response){

    var reqq1=request.params.tst;
    var reqq2=request.params.tst2;

    response.send("Hello from express"+reqq1+"Hello world "+reqq2);
    console.log(reqq1+"Hii ------"+reqq2);

})


/*localhost:8080/news*/
router.put("/",function(request,response){

    console.log("Inside put");
    var req1=request.body.status;
    var req2=request.body.sources[0];
    var oldId=req2.id;
    oldId="India-i.Ibc";

    console.log(req1);
   console.log("Our array data is ------------------------------------------->"+req2.id);

   response.send("Hello from express all"+oldId);

})

/*localhost:8080/news*/
router.delete("/",function(request,response){

    response.send("Hello from express delete");


})

/*localhost:8080/news*/
router.post('/', function (req, res) {

    mongoose.connect(uristring, function (err, res) {
     if (err) {
     console.log ('ERROR connecting to: ' + uristring + '. ' + err);
     } else {
     console.log ('Succeeded connected to: ' + uristring);
     }
   });

   console.log("Inside post");
    var req1=req.body.status;
    var req2=req.body.sources;

   console.log(req1);
   console.log("Our array data is ------------------------------------------->"+req2[1].id);

   // DB Coomands
   var schema = new mongoose.Schema({
       username: String,
       password: String
     });
   var userRegister = mongoose.model('jjj', schema);

   var jamal = new userRegister ({
       username: "jamal",
       password: "Nabi"
   });


   jamal.save(function (err) {if (err) console.log ('Error on save!')});
   userRegister.find({}).exec(function(err, result) {
     if (!err) {
       console.log(result);
     } else {
       // error handling
     };
   });


   res.send("Hello from express all");
 //next() // pass control to the next handler
})

module.exports = router;
