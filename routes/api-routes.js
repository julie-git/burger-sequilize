// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    app.get("/", function (req, res) {
        db.burger.findAll({raw:true})
            .then(function (data) {
               var hbsObject = {
                    burger: data
                };
                res.render("index", hbsObject);
            });
    });

     // route to create a new burger
    app.post("/api/burgers", function (req, res) {
        console.log(req.body)
        db.burger.create({
                burger_name: req.body.burger_name,
                devoured: req.body.devoured
            })
            .then(function (burgerdata) {
                res.json(burgerdata);
            });
    });

    app.put("/api/burgers/:id", function (req, res) {
         db.burger.update(
            {
                devoured: req.body.devoured
            },
            {
                where: {
                    id: req.body.id
                }
            })
            .then(function (burgerdata) {
                console.log(burgerdata)
                res.json(burgerdata);
            });
    });

    app.delete("/api/burgers/:id", function (req, res) {

        db.burger.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(function (burgerdata) {
                res.json(burgerdata);
            });
    });

};

 