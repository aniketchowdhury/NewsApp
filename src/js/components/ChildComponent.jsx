import React from 'react';

import GrandChild from './GrandChild.jsx';
export default class ChildComponent extends React.Component{
constructor(){
super();

}

}
render(){
var newsCollection= this.props.newsArrRef.map(function(headlineElement){

return(
<Displaynews image={headlineElement.urlToImage}  headline={headlineElement.title}  author={headlineElement.author}/>

)
})
return(

<div>
{newsCollection}
</div>
)
}
}
