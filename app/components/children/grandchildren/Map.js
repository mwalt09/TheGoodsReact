// Include React
var React = require("react");

import ReactMapboxGl, { Layer, Marker } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoibXdhbHQwOSIsImEiOiJjajZjaWlqYjYxczBsMndsbWN6amtiNzRjIn0.9TfmdTvGjkTBrrEmucHbSw"
});


// Creating the Results component
var MapResults = React.createClass({

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
      
       <Map
       className="boxForMapBox"
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
              height: "350",
              width: "100%",
              marginRight: "20"

            }}
            center= {[  -97.7427778,30.2669444 ]}>
              <Layer
                type="symbol"
                id="marker"
                layout={{ "icon-image": "marker-15" }}>

                
              </Layer>

              
          </Map>
    );
  }
});

// Export the component back for use in other files
module.exports = MapResults;
