// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  // 
  insertOne: function(vals, cb) {
    //UNDEFINED BURGERNAME HERE
    orm.insertOne("burgers", "burger_name", vals, function(res) {
      cb(res);
    });
  },
  // update: function(objColVals, condition, cb) {
    updateOne: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  // delete: function(condition, cb) {
  //   orm.delete("burgers", condition, function(res) {
  //     cb(res);
  //   });
  // }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
