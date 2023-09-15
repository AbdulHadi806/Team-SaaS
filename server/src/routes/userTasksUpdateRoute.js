const express = require("express");
const {
  updateTasks,
  getAllMyTasks,
} = require("../controllers/tasks-controller");
const { getUserinfo } = require("../controllers/profile-controller");
const updateUserTasksRoute = express.Router();

updateUserTasksRoute.patch("/:task_id", updateTasks);
updateUserTasksRoute.get("/get-all-user-assigned-task", getAllMyTasks);
updateUserTasksRoute.get("/my-profile", getUserinfo);
module.exports = updateUserTasksRoute;
