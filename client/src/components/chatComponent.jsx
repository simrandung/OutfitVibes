import React, { useState } from "react";
import { getChatCompletion } from "../utils/apiService";

const ChatComponent = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleChat = async () => {
    try {
      const data = await getChatCompletion(prompt);
      setResponse(data.result);
    } catch (error) {
      console.error("Error fetching chat completion:", error);
    }
  };

  return (
    <div>
      <h2>Chat with Together AI</h2>
      <input
        type="text"
        placeholder="Enter your prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={handleChat}>Send</button>
      <p>Response: {response}</p>
    </div>
  );
};

export default ChatComponent;
