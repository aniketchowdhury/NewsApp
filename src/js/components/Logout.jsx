

import React from 'react';

import {hashHistory} from 'react-router';
//import NewsDisplay from './NewsDisplay.jsx';


export default class Logout extends React.Component{

  constructor(){
    super();
    //this.state={username:" "};
    //  this.state={password:" "};

  }

  logout(){
    console.log("logout called");
    $.ajax({
      url:  "http://localhost:8080/logout",
      type: "GET",
      //data:'username='+this.state.username+'&password='+this.state.password,

      success : function(msg){
        console.log("logout success");
        /*msg represents JSON data of news headlines sent back by external API*/
        //this.setState({strdata: msg});
        //alert("Sign Up Successful!!")
        hashHistory.push('/#/home');
      }.bind(this),
      error : function(err){
        console.log("error");
      }.bind(this)
    });
  }

  render(){
    return(
      <div>
        <div className="container">
          <div className="row">
            <center>
              <input type="button" className="btn btn-success btn-large" value="Log Out" style={{"width":"40%" , "height":"40px"}}onClick={this.logout.bind(this)}  /><br /><br/>
            </center>
          </div>
        </div>
      </div>
    )
  }
}
