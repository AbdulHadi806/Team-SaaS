const Task = require("../model/tasksModal");

const addTasks = async (req, res) => {
    if (!req.body.task) {
        res.status(403).json({ message: "Please add task", status: false })
    }
    try {
        const newTask = await new Task({
            task: req.body.task,
            assigned_to: req.body.assigned_to,
            Created_By: req.user._id,
            assigned_to_role: req.body.assigned_to_role
        })
        await newTask.save()
        return res.status(200).json({ message: "Task created Successfully", status: true })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Unsuccessfull in creating a task.", status: false })
    }
}

const deleteTasks = async (req, res) => {
    try {
        const _id = req.params.task_id
        const existingTask = await Task.findById(_id)
        if (!existingTask) {
           return res.status(404).json({ message: "Task not found", status: false })
        }
        await Task.findByIdAndDelete(_id)
        res.status(200).json({ message: "Task Successfully deleted", status: true })
    } catch (err) {
        res.json(500).json({ message: "Failed to delete Task.", status: false })
    }
}

const updateTasks = async (req, res) => {
    try {
        const _id = req.params.task_id
        const existingTask = await Task.findById(_id)
        if (!existingTask) {
            return res.status(404).json({ message: "Task not found", status: false });
        }
        existingTask.status = true
        await existingTask.save();
        res.status(200).json({ message: "Task updated successfully", status: true })
    } catch (err) {
        res.json(500).json({ message: "Falied To update task", status: false })
    }
}

const getAllTasks = async (req, res) => {
    try {
        const adminId = req.user._id;
        const getAllTasks = await Task.find({ Created_By: adminId })
        if (!getAllTasks) {
            return res.status(404).json({ message: "No Task Found", status: false })
        }
        res.status(200).json({ message: "Tasks Found", status: true, getAllTasks })
    } catch (err) {
        res.json(500).json({ message: "Something Went Wrong", status: false })
    }
}
const getAllMyTasks = async (req, res) => {
    try {
        const user_Id = req.user._id
        const getAllTasks = await Task.find({ assigned_to: user_Id })
        if(!getAllTasks){
            return res.status(404).json({message: "No assigned Task found.", status: false})
        }
        res.status(200).json({message: "Tasks Found", status: true, getAllTasks})
    } catch (err) {
        res.json(500).json({ message: "Something Went Wrong", status: false })
    }
}

const getAllTasksByRole = async (req, res) => {
    try {
        const taskCategory = req.params.role;
        const getAllTasksByRole = await Task.find({assigned_to_role: taskCategory})
        if(!getAllTasksByRole) {
            return res.status(404).json({message: "No Tasks Found.", status: false})
        }
        res.status(200).json({message:"Tasks Found.", status: true, getAllTasksByRole})
    } catch(err) {
        res.status(500).json({message: "Failed to fetch Tasks.", status: false})
    }
}

exports.getAllTasksByRole = getAllTasksByRole;
exports.getAllMyTasks = getAllMyTasks;
exports.getAllTasks = getAllTasks;
exports.updateTasks = updateTasks;
exports.deleteTasks = deleteTasks;
exports.addTasks = addTasks;