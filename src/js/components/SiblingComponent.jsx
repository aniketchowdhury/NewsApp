import React from 'react';

export default class SiblingComponent extends React.Component{
newfunction()
{
console.log("data +++");
var data = document.getElementById("news").value;
this.props.newsdata(data);
console.log(data);
}
render(){
return(
<div>
    <div className="container">
    <div className="row">

    <div className="well">
    <h1><center>Global News!</center></h1>
    <input type="text" placeholder="search news" id="news" style={{ "width":"100%", "height":"40px"}} /><br/><br/>

     <input type="button" className="btn btn-primary" value="search" onClick={this.newfunction.bind(this)} style={{"margin-left":"45%"}} />
     <span class="glyphicon glyphicon-search" ></span>
     </div>
    </div>

    </div>
    </div>

)
}
}
