var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ItemsSchema = new Schema({
  itemName:{
  	type: String
  },
  category:{
  	type: String
  },
  owner: {
  	type: String
  },
  location: {
    type: String
  },
  price: {
    type: 
  },
  image:{
  	type:
  },
  availability:{
  	type:
  },
  earned:{
  	type:
  }
});

var Items = mongoose.model("Items", ItemsSchema);
module.exports = Items;