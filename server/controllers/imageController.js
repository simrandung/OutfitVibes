import express from "express";
import Together from "together-ai";

// Instantiate Together client with your API key manually
const together = new Together({
  apiKey: "b35ae43cb305c2a4c22c5eaad8a780e71a69078967b3e8b69c64aca30a021aff", // Replace with your actual API key
});

// Create an Express Router
const router = express.Router();

// Function to generate an image
export const generateImage = async (req, res) => {
  try {
    // Get the prompt from the request body
    const { prompt } = req.body;

    // Request the image generation from Together AI API
    const response = await together.images.create({
      model: "black-forest-labs/FLUX.1-dev", // Change to the appropriate model if needed
      prompt: prompt || "A beautiful scenic landscape", // Use the prompt provided by the user, or default to a sample prompt
      width: 1024,
      height: 768,
      steps: 28,
      n: 1,
      response_format: "b64_json",
    });

    // Check if response contains image data
    if (response.data && response.data[0] && response.data[0].b64_json) {
      // Send the base64 encoded image as a response
      res.json({ image: response.data[0].b64_json });
    } else {
      res.status(400).json({ error: "No image data returned" });
    }
  } catch (error) {
    // Handle errors and send an error response
    console.error("Error generating image:", error);
    res.status(500).json({ error: "Error generating image" });
  }
};

export default router;
