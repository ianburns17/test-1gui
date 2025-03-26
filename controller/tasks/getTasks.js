import { Task } from '../../models/Task.js';

export const getTasks = (req, res) => {
    const { search } = req.query;
    const filteredTasks = Task.filter(search);
    res.render("index", { tasks: filteredTasks, searchQuery: search });
}; 