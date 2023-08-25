const Task = require("../model/tasksModal");

const addTasks = async(req, res) => {
    if(!req.body.task){
        res.status(403).json({message: "Please add task", status: false})
    }
    try {
        console.log(req.user, "req.user")
        const newTask = await new Task({
            task: req.body.task,
            assigned_to: req.user._id
        })
        await newTask.save()
        return res.status(200).json({message: "Task created Successfully", status: false})
    } catch(err){
        console.log(err)
        return res.status(500).json({message: "Unsuccessfull in creating a task.", status: false})
    }
}

const deleteTasks = async(req, res) => {
    try {
        const _id = req.body._id
        const existingTask = await Task.findById(_id)
        if(!existingTask){
            res.status(404).json({message: "Task not found", status: false})    
        }
        const deletedTodo = await Task.findByIdAndDelete(_id)
        console.log(deletedTodo,'existingTask') 
        res.status(200).json({message: "Task Successfully deleted", status: true})
    } catch(err) {
        res.json(500).json({message: "Failed to delete Task.", status: false})
    }
}

const updateTasks = async(req, res) => {
    try {
        
    } catch(err) {
        res.json(500).json({message: "Falied To update task", status: false})
    }
}

exports.updateTasks = updateTasks;
exports.deleteTasks = deleteTasks;
exports.addTasks = addTasks;