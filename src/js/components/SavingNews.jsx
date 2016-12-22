import React from 'react';
import FavNews from './FavNews';


export default class SavingNews extends React.Component
 {

 constructor()
   {
     super();
    this.state={strdata:[]};
     this.newsfun=this.newsfun.bind(this);

   }


newsfun() {
$.ajax({
url:  "http://localhost:8080/news/view",
type: "GET",
dataType: 'JSON',

success : function(msg){
console.log("success");
/*msg reprewsents JSON data of news headlines sent back by external API*/
this.setState({strdata: msg});
}.bind(this),
error : function(err){
console.log("error");
}.bind(this)
});
}



componentDidMount(){
this.newsfun();
}


render()
{
          var newscollect= this.state.strdata.map(function(element){
     console.log(element);
              return(
              <FavNews savedata={element}/>


)

          })
   return(
       <div>
     {newscollect}
       </div>
       )
}
}
