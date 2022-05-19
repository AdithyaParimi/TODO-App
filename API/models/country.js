const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { db, isConnected, ObjectId } = require("../config/db.js");

const collection = db.db("TaskManagementDB").collection("countries");

const getList = async () => {
    return (await collection.find().toArray());
  };

  const getCountries = async (search) => {
    return (await collection.find({$or:[{country_name: {$regex:search, $options: 'i'}}]}).toArray());
  };

  module.exports={
    getList,
    getCountries
  }
