// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");


// Helper functions for making API Calls
var helper = {
// calls for the search page

  // one that is the actual search (get)
getSearch: function(searchParam) {
  console.log("searchParam: " + searchParam);
  return axios.get( "/api/search/?"+searchParam);


  // .then(function(response) {
  //   console.log("response: "+ JSON.stringify(response));
  //   console.log("response.data: "+ response.data);
  //   console.log("response.data.results: "+ response.data.results);
  //   if (response.data[0] !== undefined) {
  //     return response.data;
  //   }
  //   return ""

    // ;
  // }).catch(function (error) {
  //   console.log(error);
  // });
};

// Requesting Geocode from Mapbox API
getGeocode: function(location){
  console.log ("geocode request for: " + location);
  return axios.get("/geocoding/v5/mapbox.places/" + location +".json");
};


  // one that is an update (posts an update to the 'rented')
putAvailable: function(available) {
  return axios.update("/api/", { availablility: availability });
}
};

  // // This function serves our purpose of running the query to geolocate.
  // runQuery: function() {

  //   console.log();

  //   // Figure out the geolocation
  //   var queryURL = "http://api....json?query=" + location + "&pretty=1&key=" + ...key;
  //   return axios.get(queryURL).then(function(response) {
  //     // If get get a result, return that result's formatted address property
  //     if (response.data.results[0]) {
  //       return response.data.results[0].formatted;
  //     }
  //     // If we don't get any results:
  //     return "";
  //   });
  // },

  // This function hits our own server to retrieve the record of query results
//   getItem: function() {
//     return axios.get("/api", {
//       //ADD CODE
//     });
//   };

//   // This function posts new items to our database.
//   postItem: function(location) {
//     return axios.post("/api", { 
//       //ADD CODE

//     });
  
// };

// We export the API helper
module.exports = helper;
