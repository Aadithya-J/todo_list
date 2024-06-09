const { Task } = require('../models/task');


const addNewTask = async (req, res) => {
    try {
        const { title } = req.body;
        const newTask = await Task.create({ title });
        console.log(newTask);
        res.status(201).json(newTask);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    addNewTask
}