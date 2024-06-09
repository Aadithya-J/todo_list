const { Task } = require('../models/task');

const updateTitleById = async (req, res) => {
    console.log("updating title of task");
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, { title: req.body.title }, { new: true });
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(task);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const updateCompletedById = async (req, res) => {
    console.log("updating completed of task");
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, { completed: req.body.completed }, { new: true });
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
    updateTitleById,
    updateCompletedById,
}