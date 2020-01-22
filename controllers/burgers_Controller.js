var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burger: data
      };
      console.log("router get / hbsobject");
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/burgers", function(req, res) {
    // console.log("post api burgers");
    // console.log(req.body.burger_name);
    
    burger.createOne([
      "burger_name"
    ], [
      req.body.burger_name
    ], function(result) {
      // console.log("bg_control result of post api/burgers");
      // console.log(result);
      // Send back the ID of the new burger
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    // var conditionId = "id";
     var condition = "id = " + req.params.id;
    // var conditionVal = req.params.id;
    // var conditionCol = "id = " + req.params.id;
  
    console.log("condition", condition);

    burger.updateOne({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
    
//   router.delete("/api/cats/:id", function(req, res) {
//     var condition = "id = " + req.params.id;
  
//     cat.delete(condition, function(result) {
//       if (result.affectedRows == 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     });
//   });
  
  // Export routes for server.js to use.
  module.exports = router;
  