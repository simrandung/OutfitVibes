import React, { useState } from "react";
import { generateImage } from "../utils/apiService.js";

const ImageComponent = () => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");

  const handleImageGeneration = async () => {
    try {
      const data = await generateImage(prompt);
      setImage(data.image);
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  return (
    <div>
      <h2>Generate Image with Together AI</h2>
      <input
        type="text"
        placeholder="Enter your prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={handleImageGeneration}>Generate Image</button>
      {image && <img src={`data:image/png;base64,${image}`} alt="Generated" />}
    </div>
  );
};

export default ImageComponent;
