import { getAllTasks } from '../../models/Task.js';

export const getTasks = async (req, res) => {
    const { search } = req.query;

    try {
        // Fetch tasks from the database, filtered by the search query if provided
        const tasks = await getAllTasks(search);

        // Render the tasks with the search query included in the view
        res.render("index", { tasks, searchQuery: search, error: undefined });
    } catch (error) {
        console.error("Error fetching tasks:", error);
        res.status(500).send("An error occurred while fetching tasks");
    }
};
