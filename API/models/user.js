const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { db, isConnected, ObjectId } = require("../config/db.js");

const collection = db.db("TaskManagementDB").collection("users");

const getList = async () => {
  return (await collection.find().toArray()).map((x) => ({
    ...x,
    password: undefined,
  }));
};

const getUser = async (id) => {
  const data = await collection.findOne({ _id: new ObjectId(id) });
  if (!data) {
    throw { statusCode: 404, message: "User not found" };
  }
  return data;
};

const getUserByHandle = async (handle) => {
  const data = await collection.findOne({ handle });
  if (!data)
    throw { statusCode: 404, message: "User with given handle is not found" };

  return data;
};

const getUserByEmail = async (email) => {
  const data = await collection.findOne({ email });
  if (!data) {
    throw { statusCode: 404, message: "User not found" };
  }
  return data;
};

const createUser = async (user) => {
  if (!user.email) {
    throw { statusCode: 400, message: "Email is required" };
  }
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  console.log(user);

  const result = await collection.insertOne(user);
  user = await getUser(result.insertedId);

  return { ...user, password: undefined };
};

const deleteUser = async (id) => {
  const user = await collection.findOneAndDelete({ _id: new ObjectId(id) });
  if (!user) {
    throw { statusCode: 404, message: "User not found" };
  }
  return { ...user.value, password: undefined };
};

const updateUser = async (id, newUser) => {
  if (newUser.password) {
    newUser.password = await bcrypt.hash(newUser.password, 10);
  }

  newUser = await collection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: newUser },
    { returnDocument: "after" }
  );
  console.log(newUser);

  return { ...newUser, password: undefined };
};

const loginUser = async (email, password) => {
  const user = await collection.findOne({ email });
  if (!user) {
    throw { statusCode: 404, message: "User not found" };
  }
  if (!(await bcrypt.compare(password, user.password))) {
    throw { statusCode: 401, message: "Invalid password" };
  }

  const data = { ...user, password: undefined };
  const token = jwt.sign(data, process.env.JWT_SECRET);

  return { ...data, token };
};

const fromToken = (token) => {
  // Verify the token
  return new Promise((resolve, reject) => {
    if (!token) {
      throw new Error("Not authorized, No Token!");
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  })
};

module.exports = {
  getList,
  getUser,
  updateUser,
  deleteUser,
  loginUser,
  fromToken,
  createUser,
  getUserByEmail,
  getUserByHandle,
};
