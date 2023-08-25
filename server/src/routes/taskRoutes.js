
const express = require("express");
const { addTasks, deleteTasks, updateTasks, getAllTasks, getAllTasksByRole } = require("../controllers/tasks-controller");
const taskRoutes = express.Router();


taskRoutes.get('/all-tasks', getAllTasks)
taskRoutes.get('/all-tasks/:role', getAllTasksByRole)
taskRoutes.post('/', addTasks)
taskRoutes.delete('/:task_id', deleteTasks)
taskRoutes.patch('/:task_id', updateTasks)

module.exports = taskRoutes;