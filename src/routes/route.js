const express = require('express');

const router = express.Router();

const { getAllTasks, getTaskById } = require('../controller/getTasks');
const { addNewTask } = require('../controller/addTasks');
const { deleteTask } = require('../controller/deleteTask');

router.get('/getTask', getAllTasks);
router.post('/addTask',addNewTask);
router.delete('/deleteTask/:id', deleteTask);

module.exports = router;