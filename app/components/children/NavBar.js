var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;
var ReactBootstrap = require("react-bootstrap");
var Navbar = ReactBootstrap.Navbar,
Nav = ReactBootstrap.Nav,
NavItem = ReactBootstrap.NavItem,
DropdownButton = ReactBootstrap.DropdownButton,
MenuItem = ReactBootstrap.MenuItem,
NavDropdown = ReactBootstrap.NavDropdown;

function handleSelect(selectedKey) {
  alert('selected ' + selectedKey);
}


var NavBar = React.createClass({

  	// Here we render the component
  	render: function() {

   		return (
        <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">The Good$</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="/Search"><Link to="/Search">Search</Link></NavItem>
        <NavItem eventKey={2} href="/Home"><Link to="/Home">Home</Link></NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
		);
  	}
});

// Export the component back for use in other files
module.exports = NavBar;
