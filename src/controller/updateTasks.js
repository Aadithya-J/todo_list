const { Task } = require('../models/task');

const updateTaskByid = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
    updateTaskByid
}