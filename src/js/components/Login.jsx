import React from 'react';

import {hashHistory} from 'react-router';
//import NewsDisplay from './NewsDisplay.jsx';


export default class Login extends React.Component{

constructor(){
  super();
    this.state={username:" "};
    this.state={password:" "};

}

updatingname(args){
  this.setState({username:args.target.value})
}

updatingpass(args){
  this.setState({password:args.target.value})
}


newuser() {

  $.ajax({
  url:  "http://localhost:8080/login/save",
  type: "POST",
  data:'username='+this.state.username+'&password='+this.state.password,

  success : function(msg){
  console.log("success");
  /*msg represents JSON data of news headlines sent back by external API*/
  //this.setState({strdata: msg});
  alert("Sign Up Successful!!")
  hashHistory.push('/#/home');
  }.bind(this),
  error : function(err){
  console.log("error");
  }.bind(this)
  });
}


logingin() {

  $.ajax({
  url:  "http://localhost:8080/login/login",
  type: "POST",
  data:'username='+this.state.username+'&password='+this.state.password,

  success : function(msg){
  console.log("success");
  /*msg represents JSON data of news headlines sent back by external API*/
  //this.setState({strdata: msg});
  hashHistory.push('/#/home');
  }.bind(this),
  error : function(err){
  console.log("error");
  alert("oops.. please re-enter");
  }.bind(this)
  });
}



render(){
  return(
    <div>
      <div className="container">
        <div className="row">
          <center>
            <h2>Login</h2>

          </center>

        </div>
        <div className="row">
          <div className="col-md-12"><center>
            <label for="username">User Name</label>&nbsp;&nbsp;
            <input type="text" placeholder="enter user name" id="user" style={{ "width":"30%", "height":"40px"}} onChange={this.updatingname.bind(this)} /><br/><br/>
            <label for="password">Password</label>&nbsp;&nbsp;
            <input type="password" placeholder="enter password" id="pass" style={{ "width":"30%", "height":"40px"}} onChange={this.updatingpass.bind(this)} />
            <br/><br/>

          </center>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12"><center>
            <input type="button" className="btn btn-success btn-large" value="Login" style={{"width":"40%" , "height":"40px"}}onClick={this.logingin.bind(this)} /><br /><br/>
            <input type="button" className="btn btn-primary btn-large" value="Sign Up" style={{"width":"40%" , "height":"40px"}}onClick={this.newuser.bind(this)} />

          </center>
        </div>


      </div>

    </div>
  </div>

  )

}
}
