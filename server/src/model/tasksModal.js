const mongoose = require('mongoose')


const subtaskSchema = new mongoose.Schema({
    description: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  });

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
        unique: false
    },
    status: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
    },
    subtasks: {
        type: [subtaskSchema],
        default: []
    },
    // assigned_to_role: {
    //     type: String,
    //     ref: 'User', 
    //     required: true
    // },
    assigned_to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, { timestamps: true });

const Task = new mongoose.model("Task", taskSchema)
module.exports = Task