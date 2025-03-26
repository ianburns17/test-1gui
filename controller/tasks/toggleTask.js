import { Task } from '../../models/Task.js';

export const toggleTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    Task.toggle(taskId);
    res.redirect("/");
}; 