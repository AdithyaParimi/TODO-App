const express = require("express");
const { requireAuth } = require("../models/auth");
const app = express.Router();
const taskModel = require("../models/task");

app
  .post("/", requireAuth, async (req, res, next) => {
    taskModel
      .createTask(req)
      .then((task) => {
        // console.log(task);
        res.send({ success: true, errors: [], data: task });
      })
      .catch(next);
  })
  .get("/", requireAuth, (req, res, next) => {
    taskModel
      .getList()
      .then((tasks) => {
        console.log(tasks);
        res.send({ success: true, errors: [], data: tasks });
      })
      .catch(next);
  })
  // .get("/:id", requireAuth, (req, res, next) => {
  //   taskModel
  //     .getTask(req.params.id)
  //     .then((tasks) => {
  //       res.send({ success: true, errors: [], data: tasks });
  //     })
  //     .catch(next);
  // })
  .get("/completed",requireAuth , (req, res, next) => {
    taskModel
      .getCompletedTasks(req.user._id)
      .then((tasks) => {
        res.send({ success: true, errors: [], data: tasks });
      })
      .catch(next);
  })
  .get("/current",requireAuth , (req, res, next) => {
    taskModel
      .getCurrentTasks(req.user._id)
      .then((tasks) => {
        res.send({ success: true, errors: [], data: tasks });
      })
      .catch(next);
  })
  .get("/currentUserTasks",requireAuth , (req, res, next) => {
    taskModel
      .getCurrentTasks(req.user._id)
      .then((tasks) => {
        res.send({ success: true, errors: [], data: tasks });
      })
      .catch(next);
  })
  .get("/user/:id", requireAuth, (req, res, next) => {
    taskModel
      .getTasksCreatedByUser(req.params.id)
      .then((tasks) => {
        res.send({ success: true, errors: [], data: tasks });
      })
      .catch(next);
  })

  .get("/assigned/user/:id", requireAuth, (req, res, next) => {
    taskModel
      .getTasksAssignedToUser(req.params.id)
      .then((tasks) => {
        res.send({ success: true, errors: [], data: tasks });
      })
      .catch(next);
  })

  .patch("/:id", requireAuth, (req, res, next) => {
    taskModel
      .updateTask(req.params.id, req.body)
      .then((tasks) => {
        res.send({ success: true, errors: [], data: tasks });
      })
      .catch(next);
  })

  .delete("/:id",requireAuth , (req, res, next) => {
    taskModel
      .deleteTask(req.params.id)
      .then(() => {
        res.send({ success: true, errors: [] });
      })
      .catch(next);
  });

module.exports = app;
