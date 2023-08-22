
const express = require("express");
const { addTasks, deleteTasks } = require("../controllers/tasks-controller");
const taskRoutes = express.Router();

taskRoutes.post('/tasks', addTasks)
taskRoutes.delete('/tasks', deleteTasks)

module.exports = taskRoutes;