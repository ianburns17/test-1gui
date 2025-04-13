import { addTask as addTaskToDB, getAllTasks } from '../../models/Task.js';

export const addTask = async (req, res) => {
    const { title, description, priority } = req.body;
    const tasks = await getAllTasks();

    const numericPriority = parseInt(priority);

    if (!title) {
        return res.render('index', {
            tasks,
            searchQuery: '',
            error: "Task title is required"
        });
    }

    if (title.length < 3 || title.length > 100) {
        return res.render('index', {
            tasks,
            searchQuery: '',
            error: "Task title must be between 3 and 100 characters."
        });
    }

    if (description && description.length > 500) {
        return res.render('index', {
            tasks,
            searchQuery: '',
            error: "Task description cannot exceed 500 characters."
        });
    }

    if (isNaN(numericPriority) || numericPriority < 1 || numericPriority > 3) {
        return res.render('index', {
            tasks,
            searchQuery: '',
            error: "Priority must be between 1 (Highest) and 3 (Low)."
        });
    }

    try {
        await addTaskToDB(title, description, numericPriority);
        res.redirect("/");
    } catch (error) {
        console.error("Error adding task:", error);
        res.render('index', {
            tasks,
            searchQuery: '',
            error: "An error occurred while adding the task"
        });
    }
};
