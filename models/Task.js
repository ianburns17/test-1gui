import { query } from "../config/db.js";

// Get all tasks
export const getAllTasks = async (search) => {
    if (search) {
        try {
            const result = await query(
                "SELECT * FROM tasks WHERE LOWER(title) LIKE $1 OR LOWER(description) LIKE $1 ORDER BY priority DESC",
                [`%${search.toLowerCase()}%`]
            );
            return result.rows;
        } catch (error) {
            console.error("Error searching tasks:", error);
            throw error;
        }
    }else {
    try {
        const result = await query("SELECT * FROM tasks ORDER BY priority DESC");
        return result.rows;
    } catch (error) {
        console.error("Error fetching tasks:", error);
        throw error;
      }  }
};

// Add a new task
export const addTask = async (title, description, priority = 0) => {
    try {
        const result = await query(
            "INSERT INTO tasks (title, description, priority) VALUES ($1, $2, $3) RETURNING *",
            [title, description, priority]
        );
        return result.rows[0];
    } catch (error) {
        console.error("Error adding task:", error);
        throw error;
    }
};

// Delete a task by ID
export const deleteTask = async (id) => {
    try {
        const result = await query("DELETE FROM tasks WHERE id = $1 RETURNING *", [id]);
        return result.rows[0];
    } catch (error) {
        console.error("Error deleting task:", error);
        throw error;
    }
};

// Delete all tasks
export const deleteAllTasks = async () => {
    try {
        const result = await query("DELETE FROM tasks RETURNING *");
        return result.rows;
    } catch (error) {
        console.error("Error deleting all tasks:", error);
        throw error;
    }
};

// Toggle task completion by ID
export const toggleTask = async (id) => {
    try {
        const result = await query(
            "UPDATE tasks SET completed = NOT completed WHERE id = $1 RETURNING *",
            [id]
        );
        return result.rows[0];
    } catch (error) {
        console.error("Error toggling task completion:", error);
        throw error;
    }
};

