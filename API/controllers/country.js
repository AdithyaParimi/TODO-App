const express = require("express");
const { requireAuth } = require("../models/auth");
const app = express.Router();
const countryModel = require("../models/country");

app
  .get("/", requireAuth, (req, res, next) => {
    countryModel
      .getList()
      .then((c) => {
        console.log(c);
        res.send({ success: true, errors: [], data: c });
      })
      .catch(next);
  })
  .get("/:search", requireAuth, (req, res, next) => {
    countryModel
      .getCountries(req.params.search)
      .then((c) => {
        console.log(c);
        res.send({ success: true, errors: [], data: c });
      })
      .catch(next);
  })

  
module.exports = app;
