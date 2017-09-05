// Include React
var React = require("react");

import { Container, Row, Col, Well, Media, Thumbnail, Button, Grid  } from 'react-bootstrap';


// Creating the Results component
var Results = React.createClass({

  // isDefined: function(obj){
  //   if(obj.data!==undefined){
  //     return obj.data;
  //   }else{
  //     return [];
  //   }
  // },

  // Here we render the function
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Results</h3>
        </div>
        <div className="panel-body text-center">

        
{/*###################################################*/}

{this.props.item.data.map(function(search, i) {
            return (
              <Grid key={i}>
              <Row>
              <Col xs={6} md={4}>
                <Thumbnail src={search.image}>
                <h3>{search.itemName}</h3>
                <p>{search.price}</p>
                </Thumbnail>
                </Col>
                </Row>

              </Grid>
            );
})}


{/*###################################################*/}
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Results;
