var React = require('react');
var {Link} = require('react-router');
export default class NavBar extends React.Component{

render() {
 return(
 <div>
   <nav className="navbar navbar-inverse navbar-fixed-top">
     <div className="container-fluid">
       <ul className="nav navbar-nav">
           <li class="active"><Link to="/home">Home</Link></li>
           <li><Link to="/contact">Contact Us</Link></li>
           <li><Link to="/about">About Us</Link></li>
           <li><Link to="/favnews">Favorite News</Link></li>
           <li><Link to="/login">Login</Link></li>
        </ul>

      </div>
     </nav>
   </div>
 );
}
}
