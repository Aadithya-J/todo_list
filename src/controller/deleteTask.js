const { Task } = require('../models/task');

deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({ message: 'Task deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    deleteTask
}
