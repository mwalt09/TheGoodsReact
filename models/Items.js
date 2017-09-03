var mongoose = require("mongoose");
var Schema = mongoose.Schema;

console.log("Imported Items");

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
    type: String
  },
  image:{
  	type:String
  },
  availability:{
  	type:String
  },
  earned:{
  	type:String
  }
});

var Items = mongoose.model("Items", ItemsSchema);
module.exports = Items;