var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Login = React.createClass({

  	// Here we render the component
  	render: function() {

   		return (
   			<div>
   				<p>
           		 	<Link to="/Login/SignIn"><button className="btn btn-primary btn-lg">Login</button></Link>
            		<Link to="/Login/SignUp"><button className="btn btn-danger btn-lg">Sign Up</button></Link>
          		</p>
   			</div>
   			<div>
				{this.props.children}
			</div>
		);
  	}
});

// Export the component back for use in other files
module.exports = Login;