/*
          This file maps the json data to an array and sends it to newsdisplay file for displaying news

*/

import React from 'react';

import NewsDisplay from './NewsDisplay.jsx';
export default class NewsComponent extends React.Component{
constructor(){
super();

}


render(){
var newsCollection= this.props.newsArrRef.map(function(a){

return(
<NewsDisplay datanews={a}/>

)
})
return(

<div>
{newsCollection}
</div>
)
}
}
