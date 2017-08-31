var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Search = React.createClass({

  	// Here we render the component
  	render: function() {

   		return (
   			<div>
   				<p>
           		 	<Link to="/Search/Results"><button className="btn btn-primary btn-lg">Results</button></Link>
            		<Link to="/Search/Details"><button className="btn btn-danger btn-lg">Details</button></Link>
          		</p>
   			</div>
   			<div>
				{this.props.children}
			</div>
		);
  	}
});

// Export the component back for use in other files
module.exports = Search;