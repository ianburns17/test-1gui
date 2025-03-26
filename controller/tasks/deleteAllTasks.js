import { Task } from '../../models/Task.js';

export const deleteAllTasks = (req, res) => {
    Task.deleteAll();
    res.redirect("/");
}; 