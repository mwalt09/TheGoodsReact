// Inclue the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;



// Reference the high-level components
var Main = require("../components/Main");
var Home = require("../components/children/Home");
var Login = require("../components/children/Login");
var Search = require("../components/children/Search");

var Details = require("../components/children/grandchildren/Details");
var RentedItems = require("../components/children/grandchildren/RentedItems");
var Results = require("../components/children/grandchildren/Results");
var SignIn = require("../components/children/grandchildren/SignIn");
var SignUp = require("../components/children/grandchildren/SignUp");
var YourItems = require("../components/children/grandchildren/YourItems");






// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>

    <Route path="/" component={Main}>
    

      {/* If user selects Child1 then show the appropriate component*/}
      <Route path="Login" component={Login} >

        {/* Child1 has its own Grandchildren options */}
        <Route path="SignUp" component={SignUp} />
        <Route path="SignIn" component={SignIn} />

        <IndexRoute component={SignIn} />

      </Route>

      {/* If user selects Child2 then show the appropriate component*/}
      <Route path="Search" component={Search} >

        <Route path="Results" component={Results} />
        <Route path="Details" component={Details} />


        <IndexRoute component={Search} />

      </Route>

      <Route path="Home" component={Home} >

        <Route path="RentedItems" component={RentedItems} />
        <Route path="YourItems" component={YourItems} />


        <IndexRoute component={Home} />

      </Route>

      {/* If user selects any other path... we get the Home Route */}

    </Route>
  </Router>
);
