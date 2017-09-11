// Include React
var React = require("react");

import { Container, Row, Col, Well, Media, Thumbnail, Button, Grid, Panel  } from 'react-bootstrap';


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
      <Row>
        
          <h3 className="text-center">Results</h3>
        
        

        
{/*###################################################*/}

{this.props.item.data.map(function(search, i) {
            return (
              
             
              
              <Col xs={12} md={6} key={i}  >
             
                <Thumbnail src={search.image}>
                <h3>{search.itemName}</h3>
                <p>{search.price}</p>
                </Thumbnail>
             
                </Col>
              

              
              
            );
})}

  </Row>



        
     
    );
  }
});

// Export the component back for use in other files
module.exports = Results;
