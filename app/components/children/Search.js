var React = require("react");
var Results = require("./grandchildren/Results");
var SearchBar = require("./grandchildren/SearchBar");
var helpers = require("../utils/helpers");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

// Creating the Search Form component
var Search = React.createClass({

  componentDidUpdate: function() {
    helpers.getSearch(this.state.searchTerm).then(function(response) {
      console.log("response: " + JSON.stringify(response));
      console.log("response data itemName: " + response.data[0].itemName);
      // this.setState({itemName: ""});
      console.log("this is the stat itemName: " + this.state.itemName);


      if (response.data[0].itemName !== this.state.itemName) {
        console.log("we got to this point");
        this.setState({ itemName : response.data[0].itemName });
      }
    }.bind(this));
  },

  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return { term: "", itemName: ""
  };
  },

  // This function allows childrens to update the parent.
  setTerm: function(term) {
    this.setState({ searchTerm: term });
  },
  
  // Here we render the component
  render: function() {
   	return (
        <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">Address Finder!</h2>
            <p className="text-center">
              <em>Enter a landmark to search for its exact address (ex: "Eiffel Tower").</em>
            </p>
          </div>

          <div className="col-md-6">

            <SearchBar setTerm={this.setTerm} />

          </div>

          <div className="col-md-6">

            <Results itemName={this.state.itemName} />

          </div>

        </div>

      </div>
	);
}
});

// Export the component back for use in other files
module.exports = Search;