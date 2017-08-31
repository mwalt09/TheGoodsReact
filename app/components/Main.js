// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Main = React.createClass({

  // Here we render the function
  render: function() {

    return (
    	<div className="container">
        	<div>
   				<p>
           		 	<Link to="/Home"><button className="btn btn-primary btn-lg">Home</button></Link>
            		<Link to="/Search"><button className="btn btn-danger btn-lg">Search</button></Link>
            		<Link to="/Login"><button className="btn btn-danger btn-lg">Login</button></Link>
          		</p>
   			</div>
          	<div>
          		{this.props.children}
          	</div>
      	</div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
