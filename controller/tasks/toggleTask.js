import { toggleTask as toggleTaskInDB } from '../../models/Task.js';

export const toggleTask = (req, res) => {
    const taskId = parseInt(req.params.id); // Get the task ID from the route parameters

    try {
        // Call the function to toggle task completion
        toggleTaskInDB(taskId);

        // Redirect to the homepage or any other page after updating the task status
        res.redirect("/");

    } catch (error) {
        console.error("Error toggling task:", error);
        res.status(500).send("An error occurred while toggling the task");
    }
}; 