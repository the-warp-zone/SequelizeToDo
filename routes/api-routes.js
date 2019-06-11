// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models/");
// grab the orm from the config
// (remember: connection.js -> orm.js -> route file)

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the todos
  app.get("/api/todos", function(req, res) {
    //
    db.toDo.findAll({}).then(function(result) {
      return res.json(result);
    });
    //
    // orm.getTodos(function(results) {
    //   res.json(results);
    // });
  });

  // POST route for saving a new todo. We can create a todo using the data on req.body
  app.post("/api/todos", function(req, res) {
    var toDoList = req.body;
    // Then add the character to the database using sequelize
    db.toDo
      .create({
        text: toDoList.text,
        complete: toDoList.complete
        // isNotNull() {
        //   if (toDoList.text === null || text === "")
        //     throw new Error("YA NEED TEXT");
        // }
      })
      .then(function(results) {
        res.end();
      });
  });

  // DELETE route for deleting todos. We can access the ID of the todo to delete in
  // req.params.id
  app.delete("/api/todos/:id", function(req, res) {
    //
    db.toDo
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function(result) {
        return res.json(result);
      });
    // res.json(results);
  });
  // PUT route for updating todos. We can access the updated todo in req.body
  app.put("/api/todos/", function(req, res, next) {
    // db.toDo
    //   .find({ where: { id: req.params.id } })
    //   .on("success", function(toDo) {
    //     if (toDo) {
    //       toDo
    //         .update({
    //           text: toDo.text,
    //           complete: toDo.complete
    //         })
    //         .success(function(results) {
    //           res.json(results);
    //         });
    //     }
    //   });
    db.toDo
      .update(
        {
          text: req.body.text,
          complete: req.body.complete
        },
        {
          where: {
            id: req.body.id
          }
        }
      )
      .then(function(results) {
        res.json(results);
      })
      .catch(next);
  });
};
