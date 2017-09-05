var React = require("react");
var Results = require("./grandchildren/Results");
var SearchBar = require("./grandchildren/SearchBar");
var helpers = require("../utils/helpers");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

import { Container, Row, Col, Well, Media, Thumbnail, Button, Grid  } from 'react-bootstrap';



  // This function allows childrens to update the parent.
  
// Code from React-Bootstrap for Col.


var Search = React.createClass({

// Creating the Search Form component

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

      <Grid>
        <Row>
          <Col xs={6} md={4}>
            <Thumbnail src="/assets/images/thumbnail.png" alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Description</p>
              <p>
                <Button bsStyle="primary">Button</Button>&nbsp;
                <Button bsStyle="default">Button</Button>
              </p>
            </Thumbnail>
          </Col>

          <div style={boxForMapBox}>

          </div>
        </Row>
      </Grid>



       			<div>
       				<p>
               	<Link to="/Search/Results"><button className="btn btn-primary btn-lg">Results</button></Link>
                <Link to="/Search/Details"><button className="btn btn-danger btn-lg">Details</button></Link>
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
module.exports = Search;
