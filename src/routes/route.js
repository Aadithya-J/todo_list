const express = require('express');

const router = express.Router();

const { getAllTasks } = require('../controller/getController');

router.get('/', getAllTasks);


module.exports = router;