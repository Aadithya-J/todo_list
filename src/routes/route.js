const express = require('express');

const router = express.Router();

const { getAllTasks } = require('../controller/getTasks');
const { addNewTask } = require('../controller/addTasks');
const { deleteTask } = require('../controller/deleteTask');
const { updateTitleById, updateCompletedById } = require('../controller/updateTasks');

router.get('/getTask', getAllTasks);
router.post('/addTask',addNewTask);
router.delete('/deleteTask/:id', deleteTask);
router.patch('/updateTitle/:id', updateTitleById);
router.patch('/updateCompleted/:id', updateCompletedById);

module.exports = router;