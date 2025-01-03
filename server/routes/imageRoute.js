import express from "express";
import { generateImage } from "../controllers/imageController.js"; // Correctly import the generateImage function

const router = express.Router();

// Set up the route to generate an image
router.post("/generate", generateImage); // Use the generateImage function for this route

export default router;
