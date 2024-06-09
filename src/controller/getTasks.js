const { Task } = require('../models/task');

getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(task);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getAllTasks,
    getTaskById
}