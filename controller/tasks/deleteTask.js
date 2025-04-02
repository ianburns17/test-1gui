import {deleteTask as Task } from '../../models/Task.js';

export const deleteTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    Task(taskId);
    res.redirect("/");
}; 