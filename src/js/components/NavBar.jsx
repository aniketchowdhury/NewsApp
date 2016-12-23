var React = require('react');
var {Link} = require('react-router');

//we are creating a NavBar in this file
export default class NavBar extends React.Component{

render() {
 return(
 <div>
   <div className="container">
   <nav className="navbar navbar-inverse navbar-fixed-top">
     <div className="container-fluid">

        <div class="nav-collapse collapse navbar-responsive-collapse">

          <ul className="nav navbar-nav">
           <li class="active"><Link to="/home">Home</Link></li>
           <li><Link to="/contact">Contact Us</Link></li>
           <li><Link to="/about">About Us</Link></li>
           <li><Link to="/favnews">Favorite News</Link></li>
           <li><Link to="/login">Login</Link></li>
           <li><Link to="http://localhost:8080/logout">Logout</Link></li>
         </ul>

      </div>
    </div>
     </nav>
   </div>
   </div>
 );
}
}
