import { Task } from '../../models/Task.js';

export const addTask = (req, res) => {
    const { title, description, priority } = req.body;
    if (!title) {
        return res.status(400).send("Task title is required");
    }
    const task = new Task(title, description, priority);
    Task.add(task);
    res.redirect("/");
}; 