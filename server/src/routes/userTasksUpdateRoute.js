const express = require("express");
const { updateTasks, getAllMyTasks } = require("../controllers/tasks-controller");
const updateUserTasksRoute = express.Router();

updateUserTasksRoute.patch('/user-assigned-task', updateTasks)
updateUserTasksRoute.get('/get-all-user-assigned-task', getAllMyTasks)
module.exports = updateUserTasksRoute;