const Task = require('../models/task');
const AllTasks = require('../models/allTasks');


const addNewTask = async (req, res) => {
    try {
        const { title } = req.body;
        const newTask = new Task({ title, completed: false });
        await newTask.save();

        const allTasks = await AllTasks.findOne();
        allTasks.tasks.push(newTask);
        await allTasks.save();

        res.status(201).json(newTask);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
