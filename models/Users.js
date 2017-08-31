var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name:{
  	type: String
  },
  email:{
  	type: String
  },
  location: {
  	type: String
  },
  password: {
    type: String
  },
  price: {
    type: String
  },
  accountForRecievingMoney:{
    type:String
  }
});

var Users = mongoose.model("Users", UserSchema);
module.exports = Users;