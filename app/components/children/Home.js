var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Home = React.createClass({

  	// Here we render the component
  	render: function() {

   		return (
        <div>
     			<div>
     				<p>
             	<Link to="/Home/RentedItems"><button className="btn btn-primary btn-lg">Their Goods</button></Link>
              <Link to="/Home/YourItems"><button className="btn btn-danger btn-lg">Your Goods</button></Link>
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
module.exports = Home;