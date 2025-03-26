import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();
const PORT = 3000;

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("hs"));

// Routes
app.use('/', taskRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
