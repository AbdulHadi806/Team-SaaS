
const express = require("express");
const { addTasks, deleteTasks, updateTasks, getAllTasks } = require("../controllers/tasks-controller");
const taskRoutes = express.Router();


taskRoutes.get('/all-tasks', getAllTasks)
taskRoutes.post('/tasks', addTasks)
taskRoutes.delete('/tasks', deleteTasks)
taskRoutes.patch('/tasks', updateTasks)

module.exports = taskRoutes;