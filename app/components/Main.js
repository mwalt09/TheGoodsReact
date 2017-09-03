// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

import NavBar from "./children/Navbar.js";



var Main = React.createClass({


  // Here we render the function
  render: function() {

    return (


    	<div>
        	<div>
   				    <NavBar />
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
