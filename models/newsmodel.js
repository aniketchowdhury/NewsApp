var mongoose=require('mongoose');
/*this is the main line to include the mangoose

creates the collection newsdetails which will contain the news details

*/


var schema=mongoose.Schema;


var newsdetailsSchema=new schema({

Author:String,
Title:String,
Description:String,
Url:String,
urlToImage:String,
Comments:String

});



module.exports=mongoose.model('newsDetails',newsdetailsSchema);
