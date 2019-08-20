var express = require("express");
var bodyParser = require("body-parser");
var method = require("method-override");

var PORT = process.env.PORT || 8080;

var app = express();

// This serves static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use(bodyParser.json());

// Parse application body as JSON
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(method("_method"));
// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgerController.js");

app.use("/", routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
