import { addTask as addTaskToDB } from '../../models/Task.js';

export const addTask = async (req, res) => {
    const { title, description, priority } = req.body;

    // Validation: Check if title is provided
    if (!title) {
        return res.status(400).send("Task title is required");
    }

    try {
        // Call the function to add the task to the database
        const task = await addTaskToDB(title, description, priority);

        // Redirect to the homepage or any other page after successful task addition
        res.redirect("/");
    } catch (error) {
        console.error("Error adding task:", error);
        res.status(500).send("An error occurred while adding the task");
    }
};