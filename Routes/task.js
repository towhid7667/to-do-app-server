const express = require('express');
const router = express.Router();
const Task = require('../model/task');

// Create a new task
router.post('/', async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch('/:id/updateFileCount', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).send('Task not found');
    }

    task.fileCount += 1;

    await task.save();

    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});
  module.exports = router;
  

