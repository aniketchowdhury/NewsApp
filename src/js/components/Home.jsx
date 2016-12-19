//import 'file?name=[name].[ext]!../index.html';

import React from 'react';

//import ReactDOM from 'react-dom';

import NewsComponent from './NewsComponent.jsx';
import SiblingComponent from './SiblingComponent.jsx';

export default class Home extends React.Component{

constructor(){



super();
this.state={newsArr:[]};
this.fetchNewsFromExternalAPI=this.fetchNewsFromExternalAPI.bind(this);

}

fetchNewsFromExternalAPI(msgg) {
    $.ajax({
     url: "https://newsapi.org/v1/articles?source="+msgg+"&sortBy=top&apiKey=887dab75b1944f8fabce72b42ab53a74",
     type: "GET",
     dataType: 'JSON',

     success : function(msg){
          console.log(msg);
          this.setState({newsArr:msg.articles})



    }.bind(this),

    error: function(err){
    }.bind(this)
});
}




render(){

return (

<div>

<SiblingComponent newsdata={this.fetchNewsFromExternalAPI.bind(this)} />
<NewsComponent newsArrRef={this.state.newsArr} />
</div>
)
}

}
