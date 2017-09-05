var React = require("react");

// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

// Creating the SearchBar Form component
var SearchBar = React.createClass({
  
  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return { term: "" };
  },
  //This function will respond to the user input
  handleChange: function(event) {
    this.setState({ term: event.target.value });
    console.log(this.state.term);
  },
  // When a user submits
  handleSubmit: function(event) {
    event.preventDefault();
    console.log("Button Submitted");

    // Set the parent to the search term
    this.props.setTerm(this.state.term);
    this.setState({ term: "" });
  },

  handleClick: function(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }, 

  // Here we render the component
  render: function() {
   	return (
        <div>
            <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search</h3>
        </div>
        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4 className="">
                <strong>Location</strong>
              </h4>

              {/*
                Note how each of the form elements has an id that matches the state.
                This is not necessary but it is convenient.
                Also note how each has an onChange event associated with our handleChange event.
              */}
              <input
                value={this.state.term}
                type="text"
                className="form-control text-center"
                id="term"
                onChange={this.handleChange}
                required
              />
              <br />
              <button
                className="btn btn-primary"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
                 <div>
                    {this.props.children}
                </div>
     </div>
	);
}
});

// Export the component back for use in other files
module.exports = SearchBar;