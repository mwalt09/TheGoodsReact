var React = require("react");
var Results = require("./grandchildren/Results");
var SearchBar = require("./grandchildren/SearchBar");
var MapResults = require("./grandchildren/Map");
var helpers = require("../utils/helpers");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;





  // This function allows childrens to update the parent.
  
// Code from React-Bootstrap for Col.


var Search = React.createClass({

// Creating the Search Form component

  componentDidUpdate: function() {
    helpers.getSearch(this.state.searchTerm).then(function(response) {
      // console.log("response: " + JSON.stringify(response));
      // console.log("response data itemName: " + response.data[0].itemName);
      // // this.setState({itemName: ""});
      console.log("state item url: " + JSON.stringify(this.state.item.config.url));
      console.log("response.url: " + response.config.url)


      if (response.config.url !== this.state.item.config.url) {
        console.log("we got to this point");
        this.setState({ item : response });
      
      }
    }.bind(this));
  },

  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return { term: "",
    item: {data:[],
            config: {
              url:""
            }}
  };
  },
  setTerm: function(term) {
    this.setState({ searchTerm: term });
  },
  	// Here we render the component
  	render: function() {
      var boxForMapBox = {
        width: '60%',
        height: 400,
        border: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        float: 'left',
      };
      
   		return (



        <div className="cardsRenderContainer">


      {/* <Media style={itemCardStyle}>
       <Media.Left>
          <img width={64} height={64} src="/assets/images/thumbnail.png" alt="Image"/>
        </Media.Left>
        <Media.Body>
          <Media.Heading>Media Heading</Media.Heading>
          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
        </Media.Body>
      </Media> */}

       			<div className="col-md-6">

            <SearchBar setTerm={this.setTerm} />

          </div>

        

        <div className="row">

          <Results item={this.state.item} />

        </div>

        <div className="row">
          
          <MapResults/>

        </div>
    </div>

		  );
  	}
});

// Export the component back for use in other files
module.exports = Search;
