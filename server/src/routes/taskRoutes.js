
const express = require("express");
const { addTasks, deleteTasks, updateTasks } = require("../controllers/tasks-controller");
const taskRoutes = express.Router();

taskRoutes.post('/tasks', addTasks)
taskRoutes.delete('/tasks', deleteTasks)
taskRoutes.patch('/tasks', updateTasks)

module.exports = taskRoutes;