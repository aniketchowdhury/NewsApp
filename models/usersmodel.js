var mongoose=require('mongoose');
/*this is the main line to include the mangoose

  contains the collection which has the userDetails and paswords


*/


var schema=mongoose.Schema;


var userDetailsSchema=new schema({

username:String,
password:String

});


module.exports=mongoose.model('userDetails',userDetailsSchema);
