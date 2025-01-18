
import express from "express";
import cors from "cors";
// Import routes
import chatRoute from "./routes/chatRoute.js";
import imageRoute from "./routes/imageRoute.js";

// Initialize Express app
const app = express();
const PORT = 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Use routes
app.use("/chat", chatRoute);
app.use("/image", imageRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
