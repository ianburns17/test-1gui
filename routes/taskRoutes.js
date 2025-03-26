import express from 'express';
import { getTasks } from '../controller/tasks/getTasks.js';
import { addTask } from '../controller/tasks/addTask.js';
import { toggleTask } from '../controller/tasks/toggleTask.js';
import { deleteTask } from '../controller/tasks/deleteTask.js';
import { deleteAllTasks } from '../controller/tasks/deleteAllTasks.js';

const router = express.Router();

// Task routes
router.get('/', getTasks);
router.post('/add-task', addTask);
router.post('/toggle-task/:id', toggleTask);
router.post('/delete-task/:id', deleteTask);
router.post('/delete-all', deleteAllTasks);

export default router; 