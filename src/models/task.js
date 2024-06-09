const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: true,
        default: false,
    },
});

const AllTaskSchema = new mongoose.Schema({
    allTasks : {
        type: [TaskSchema],
        required: true,
    }
});

const Task = mongoose.model("Task", TaskSchema);
const AllTask = mongoose.model("AllTask", AllTaskSchema);

module.exports = {
    Task,
    AllTask,
};