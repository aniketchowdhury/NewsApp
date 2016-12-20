import React from 'react';



export default class FavNews extends React.Component
 {

 constructor()
   {
     super();
    this.state={strdata:[]};
     this.newsdelete=this.newsdelete.bind(this);
     this.state={comments:" "};

   }

   newsdelete() {
   $.ajax({
   url:  "http://localhost:8080/news/del",
   type: "DELETE",
   dataType: 'JSON',
   data: this.props.savedata,
   success : function(msg){
   console.log("success");
   /*msg reprewsents JSON data of news headlines sent back by external API*/
   //this.setState({strdata: msg});
   }.bind(this),
   error : function(err){
   console.log("error");
   }.bind(this)
   });
   }

   updateit() {
     $.ajax({
     url:  "http://localhost:8080/news/update",
     type: "PUT",
     data:'Title='+this.props.savedata.Title+'&Comments='+this.state.comments,

     success : function(msg){
     console.log("success");
     /*msg represents JSON data of news headlines sent back by external API*/
     //this.setState({strdata: msg});
     }.bind(this),
     error : function(err){
     console.log("error");
     }.bind(this)
     });
   }

   updating(args) {
     this.setState({comments:args.target.value});
   }

     render()
      {
         return(
             <div>
               <div className="container">
                 <div className="jumbotron">
                     <div className="row">

                         <div className="col-sm-6">

                           <img src={this.props.savedata.urlToImage} width="500px" height="300px"></img><br/><br/>
                           <input type="button" className="btn btn-danger btn-large" value="Delete" onClick={this.newsdelete.bind(this)} />
                         </div>

                       <div className="col-sm-6">
                       <a href={this.props.savedata.Url}><h4><b>{this.props.savedata.Title}</b></h4></a>
                       <h4>{this.props.savedata.Author}</h4>
                         <h5><b>Description :</b></h5>
                       <div className="well">
                       <h4>{this.props.savedata.Description}</h4>
                       </div>

                           <h5><b>Comments:</b></h5>
                           <label for="comment">{this.props.savedata.Comments}</label><br /><br/>
                           <input type="text" placeholder=" give your comments" id="news" style={{ "width":"70%", "height":"80px"}} onChange={this.updating.bind(this)} /><br/><br/>
                           <input type="button" className="btn btn-primary" value="Update Comments " onClick={this.updateit.bind(this)} />


                       </div>
                     </div>
                   </div>
               </div>
             </div>
             )
     }

 }
