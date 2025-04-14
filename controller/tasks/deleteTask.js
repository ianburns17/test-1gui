import { deleteTask as deleteTaskInDB } from '../../models/Task.js';

export const deleteTask = async (req, res) => {
    const taskId = parseInt(req.params.id);
    
    try {
        await deleteTaskInDB(taskId);
        res.redirect("/");
    } catch (error) {
        console.error("Error deleting task:", error);
        res.status(500).send("An error occurred while deleting the task");
    }
};
