const { db, isConnected, ObjectId } = require("../config/db.js");
const collection = db.db("TaskManagementDB").collection("tasks");
const userModel = require("../models/user");

const getList = async () => {
  return await collection.find().toArray();
};

const getTask = async (id) => {
  const data = await collection.findOne({ _id: new ObjectId(id) });
  if (!data) {
    throw { statusCode: 404, message: "Task not found" };
  }
  return data;
};

const getCompletedTasks = async (id) => {
  const data = await collection.find({ createdBy: id, completed: true }).toArray();
  if (!data) {
    throw { statusCode: 404, message: "No completed Tasks" };
  }
  return data;
};

const getCurrentTasks = async (id) => {
  const data = await collection.find({ assignedTo: id, completed: false }).toArray();
  if (!data) {
    throw { statusCode: 404, message: "No completed Tasks" };
  }
  return data;
};

const getTasksCreatedByUser = async (id) => {
  const data = await collection.find({ createdBy: id }).toArray();
  if (!data) {
    throw { statusCode: 404, message: "No tasks created by this user" };
  }
  return data;
};

const getTasksAssignedToUser = async (id) => {
  const data = await collection
    .find({ assignedTo: id })
    .toArray();
  if (!data) {
    throw { statusCode: 404, message: "No tasks assigned to this user" };
  }
  return data;
};

const updateTask = async (id, body) => {
  const data = await collection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: body },
    { returnDocument: "after" }
  );

  return data;
};

const deleteTask = async (id) => {
  const data = await collection.findOneAndDelete({
    _id: new ObjectId(id),
  });
  if (!data) {
    throw { statusCode: 404, message: "Task not found" };
  }
  return data;
};

const createTask = async (req) => {
  const task = req.body;
  if (!task.message) {
    throw { statusCode: 400, message: "Task Description is required" };
  }

  const user = await userModel.getUser(task.assignedTo);
  if (!user) {
    throw { statusCode: 404, message: "Assigned User not found" };
  }
  const creator = await userModel.getUser(task.createdBy);
  if (!creator) {
    throw { statusCode: 404, message: "Created User not found" };
  }

  const result = await collection.insertOne({
    ...task
  });

  return { ...result };
};

module.exports = {
  getList,
  getTask,
  updateTask,
  deleteTask,
  getTasksCreatedByUser,
  getTasksAssignedToUser,
  createTask,
  getCompletedTasks,
  getCurrentTasks,
};
