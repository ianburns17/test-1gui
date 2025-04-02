import {deleteAllTasks as del} from '../../models/Task.js';

export const deleteAllTasks = (req, res) => {
    del();
    res.redirect("/");
}; 