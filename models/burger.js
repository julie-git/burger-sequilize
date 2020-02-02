// Import the ORM to create functions that will interact with the database.
// var orm = require("../config/orm.js");

// var burger = {
//     selectAll: function(cb) {
//       orm.selectAll("burgers", function(res) {
//         cb(res);
//       });
//     },

//     //The variables cols and vals are arrays.
//     createOne: function(cols, vals, cb) {
//         orm.createOne("burgers", cols, vals, function(res) {
//         cb(res);
        
//       });
//     },
//     updateOne: function(objColVals, condition, cb) {
//       orm.updateOne("burgers", objColVals, condition, function(res) {
//         cb(res);
//       });
//     }
//     // delete: function(condition, cb) {
//     //   orm.delete("burgers", condition, function(res) {
//     //     cb(res);
//     //   });
//     // }
//   };

  // Export the database functions for the controller (burgers_controller.js).
  module.exports = function(sequelize, DataTypes) {
    var Burgers = sequelize.define("burger", {
      burger_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      }
      
    });
    return Burgers;
  };


// module.exports = Burgers;