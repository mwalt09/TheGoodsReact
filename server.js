// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require Schemas
var Items = require("./models/Items");
var Users = require("./models/Users");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect("mongodb://localhost/theGoodsReactdb");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// This is the route we will send GET requests to retrieve our most recent search data.
app.get("/api/search/", function(req, res) {
  console.log("API/Search Hit");
  var searchTerm = Object.keys(req.query)[0];
  console.log("req.query key: " + searchTerm);


  Items.find({"itemName": {$regex : ".*"+searchTerm+".*"}}).limit(10).exec(function(err, doc) {
      if (err) {
        console.log(err);
      }
      else {
        // console.log("This is our doc: " + doc);
        res.send(doc);
      }
    });
});
// We will call this route the moment our page gets rendered
app.put("/api", function(req, res) {
  console.log("BODY: " + req.body.availabiltiy);

  Available.set({
    availabiltiy: req.body.availabiltiy,
    date: Date.now()
  }, function(err) {
    if (er) {
      console.log(err);
    }
    else {
      res.send("Saved Rent");
    }
  });

  // We will find all the records, sort it in descending order, then limit the records to 5
  // History.find({}).sort([
  //   ["date", "descending"]
  // ]).limit(5).exec(function(err, doc) {
  //   if (err) {
  //     console.log(err);
  //   }
  //   else {
  //     res.send(doc);
  //   }
  // });
});

// This is the route we will send POST requests to save each search.
app.post("/api", function(req, res) {
  console.log("BODY: " + req.body.location);

  // Here we'll save the location based on the JSON input.
  // We'll use Date.now() to always get the current date time
  // History.create({
  //   location: req.body.location,
  //   date: Date.now()
  // }, function(err) {
  //   if (err) {
  //     console.log(err);
  //   }
  //   else {
  //     res.send("Saved Search");
  //   }
  // });
});

app.post("/api/createItem", function(req, res) {
  console.log("ITEMS: "+ req.body.itemName);
  Items.create({
    itemName: req.body.itemName,
    category: req.body.category,
    owner: req.body.owner,
    location: req.body.location,
    price: req.body.price,
    image: req.body.image,
    availabiltiy: req.body.availabiltiy,
    earned: req.body.earned
  }), function(error) {
    if (error) {
      console.log(error);
    } else {
      res.redirect("/");
    }
  };
});

app.listen(PORT, function(){
	console.log("App listening on PORT: " + PORT);
});