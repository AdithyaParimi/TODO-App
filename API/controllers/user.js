const express = require("express");
const app = express.Router();
const userModel = require("../models/user");
const { requireAuth } = require('../models/auth');

var userLoggedIn = "";
var token = "";
app
  .post("/login", (req, res, next) => {
    userModel
      .loginUser(req.body.email, req.body.password)
      .then((user) => {
        userLoggedIn = user;
        token = userLoggedIn.token;
        res.send({ success: true, errors: [], data: user });
      })
      .catch(next);
  })
  .post("/", (req, res, next) => {
    userModel
      .createUser(req.body)
      .then((user) => {
        console.log(user);
        res.status(200).send({ success: true, errors: [], data: user });
      })
      .catch(next);
  })
  .get("/", requireAuth, (req, res, next) => {
    userModel.fromToken(token);
    userModel
      .getList()
      .then((users) => {
        console.log(users);
        res.status(200).send({ success: true, errors: [], data: users });
      })
      .catch(next);
  })
  .get("/:id", (req, res, next) => {
    userModel.fromToken(token);
    userModel
      .getUser(req.params.id)
      .then((users) => {
        res.status(200).send({ success: true, errors: [], data: users });
      })
      .catch(next);
  })
  .get("/handle/:handle", (req, res, next) => {
    userModel.fromToken(token);
    userModel
      .getUserByHandle(req.params.handle)
      .then((users) => {
        res.status(200).send({ success: true, errors: [], data: users });
      })
      .catch(next);
  })

  .put("/:id", (req, res, next) => {
    userModel.fromToken(token);
    userModel
      .updateUser(req.params.id, req.body)
      .then((users) => {
        res.status(200).send({ success: true, errors: [], data: users });
      })
      .catch(next);
  })

  .delete("/:id", (req, res, next) => {
    userModel.fromToken(token);
    userModel
      .deleteUser(req.params.id)
      .then((deletedUser) => {
        res.status(200).send({ success: true, errors: [], data: deletedUser });
      })
      .catch(next);
  });

module.exports = app;
