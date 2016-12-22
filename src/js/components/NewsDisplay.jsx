import React from 'react';

export default class NewsDisplay extends React.Component{

constructor()
   {
     super();


   }
   saveIt()
   {
   $.ajax({
   url: "http://localhost:8080/news/save",
   type: "POST",
   dataType: 'JSON',
    data:this.props.datanews,
   success : function(msg)
   {
   console.log("this is coming to save function");

   }.bind(this),

   error: function(err){
   }.bind(this)
   });
   }
//                     <input type="button" className="btn btn-primary" value="save" onClick={this.saveIt.bind(this)} />

   render()
    {
       return(
           <div>
             <div className="container">
               <div className="jumbotron">
                   <div className="row">
                       <div className="col-sm-6">

                         <img src={this.props.datanews.urlToImage} class="img-responsive" style={{width:"200px" ,height:"200px"}}  />

                       </div>
                     <div className="col-sm-6">
                     <div className="well">
                     <a href={this.props.datanews.url}><h4>{this.props.datanews.title}</h4></a>
                     <h4>{this.props.datanews.author}</h4>

                     </div>
                      <input type="button" className="btn btn-primary" value="save" onClick={this.saveIt.bind(this)} />
                    </div>
                   </div>
                 </div>
                 <hr />
               </div>
           </div>

           )
   }
}
