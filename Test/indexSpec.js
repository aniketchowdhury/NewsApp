var should = require("chai").should(),
assert = require ("chai").assert,
supertest = require("supertest"),
app = require("../bin/www");
//var user = require(../server/routes/users);
//var news = require(../server/routes/news);

var url = supertest("http://localhost:8080");
var request = require("supertest");
var server = request.agent("http://localhost:8080");

/*
describe("Testing the first route", function(err){
 it("should handle and send the computed info", function(done){
   var myObj = {
     "username":"aniketbhai",
 "password":"14121992"
};
   url
       .post("/login/save")
       .send(myObj)
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);


         assert.equal("inserted",res.text, "error in registering");

         done();
       });

 });
});


describe("Testing the 2nd route", function(err){
 it("should handle and send the computed info", function(done){
   var myObj = {
     "username":"aniketbhai",
 "password":"14121992"
};
   url
       .post("/login/login")
       .send(myObj)
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);


         assert.equal("welcome to login",res.text, "error in registering");

         done();
       });

 });
});


describe("Testing the fourth route", function(err){
 it("should handle the request", function(done){
 server
       .post("/login/login")
       .expect(200)
       .send({username:"Aniket",password:"12345"})
       .end(function(err,res){
         if (err) {
                        throw err;
                }
         assert.equal("welcome to login",res.text, "res.text is not matching with welcome to login");
         //res.text.should.be.equal("Hello!");
           done();
       });
 });
 it("should handle the request", function(done){
 server
       .post("/news/save")
       .expect(200)
       .send({

"author": "Napier Lopez",
"title": "Facebook Live gets an audio-only mode for all the podcasters out there",
"description": "While last week Facebook built on Live’s video chops with the introduction of 360-degree video, this time around it’s paring down on the tech a bit with something a bit more old school: live audio. Relive the glory days of live radio! In all seriousness, there are plenty of situations where audio-only streams are welcome …",
"url": "http://thenextweb.com/facebook/2016/12/20/facebook-live-gets-audio-mode-podcasters/",
"urlToImage": "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2016/12/finalhero.png",

})
       .end(function(err,res){
         if (err) {
                        throw err;
                }
         assert.equal("save news",res.text, "res.text is not matching with news has been saved");
         //res.text.should.be.equal("Hello!");
           done();
       });
 });
});

describe("Testing the fourth route", function(err){
 it("should handle the request", function(done){
 server
       .post("/login/login")
       .expect(200)
       .send({username:"Aniket",password:"12345"})
       .end(function(err,res){
         if (err) {
                        throw err;
                }
         assert.equal("welcome to login",res.text, "res.text is not matching with welcome to login");
         //res.text.should.be.equal("Hello!");
           done();
       });
 });
 it("should handle the request", function(done){
 server
       .put("/news/update")
       .expect(200)
       .send({

//"Author": "Napier Lopez",
"title": "Facebook Live gets an audio-only mode for all the podcasters out there",
//"Description": "While last week Facebook built on Live’s video chops with the introduction of 360-degree video, this time around it’s paring down on the tech a bit with something a bit more old school: live audio. Relive the glory days of live radio! In all seriousness, there are plenty of situations where audio-only streams are welcome …",
//"Url": "http://thenextweb.com/facebook/2016/12/20/facebook-live-gets-audio-mode-podcasters/",
//"urlToImage": "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2016/12/finalhero.png",
"Comments": "ohh great"
})
       .end(function(err,res){
         if (err) {
                        throw err;
                }
         assert.equal("Comments Updated Successfully",res.text, "res.text is not matching with news has been saved");
         //res.text.should.be.equal("Hello!");
           done();
       });
 });
});

*/
describe("Testing the fifth route", function(err){
 it("should handle the request", function(done){
 server
       .post("/login/login")
       .expect(200)
       .send({username:"Aniket",password:"12345"})
       .end(function(err,res){
         if (err) {
                        throw err;
                }
         assert.equal("welcome to login",res.text, "res.text is not matching with welcome to login");
         //res.text.should.be.equal("Hello!");
           done();
       });
 });
 it("should handle the request", function(done){
 server
       .delete("/news/del")
       .expect(200)
       .send({

//"Author": "Napier Lopez",
"title": "Facebook Live gets an audio-only mode for all the podcasters out there",
//"Description": "While last week Facebook built on Live’s video chops with the introduction of 360-degree video, this time around it’s paring down on the tech a bit with something a bit more old school: live audio. Relive the glory days of live radio! In all seriousness, there are plenty of situations where audio-only streams are welcome …",
//"Url": "http://thenextweb.com/facebook/2016/12/20/facebook-live-gets-audio-mode-podcasters/",
//"urlToImage": "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2016/12/finalhero.png",
//"Comments": "ohh great"
})
       .end(function(err,res){
         if (err) {
                        throw err;
                }
         assert.equal("data removed",res.text, "res.text is not matching with news has been saved");
         //res.text.should.be.equal("Hello!");
           done();
       });
 });
});
