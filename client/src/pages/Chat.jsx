import { useState, useEffect } from "react";
import { useStateValue } from "../context/StateProvider";
import "../App.css";
import { getChatCompletion, generateImage } from "../utils/apiService.js"; 

function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [botIsTyping, setBotIsTyping] = useState(false);
  const [botIsGenerating, setBotIsGenerating] = useState(false);

  const [{ user }] = useStateValue();

  // Function to handle sending a chat message
  const handleMessageSubmit = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isUser: true };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");
    setBotIsTyping(true);

    try {
      const response = await getChatCompletion(input); // Call chat API
      const botMessage = { text: response.result, isUser: false };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error fetching chat response:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Error fetching response. Please try again.", isUser: false },
      ]);
    } finally {
      setBotIsTyping(false);
    }
  };

  // Function to handle generating an image
  const handleImageGenerate = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isUser: true };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");
    setBotIsGenerating(true);

    try {
      const response = await generateImage(input); // Call image generation API
      const imageMessage = { imageUrl: response.imageUrl, isImage: true, isUser: false };
      setMessages((prevMessages) => [...prevMessages, imageMessage]);
    } catch (error) {
      console.error("Error generating image:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Error generating image. Please try again.", isUser: false },
      ]);
    } finally {
      setBotIsGenerating(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800">
      {/* Chat Messages Section */}
      <div
        className={`flex flex-col items-start justify-start h-2/3 p-4 ${
          messages.length > 0 ? "overflow-y-scroll scrollbar-hide" : ""
        }`}
      >
        {messages.length === 0 ? (
          <h1 className="text-white text-center py-10 text-2xl">
            Let's Generate Awesome Outfits for You
          </h1>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className={`${
                message.isUser
                  ? "bg-gray-700 max-w-[50%] text-white self-end p-3 mx-1 my-2 rounded-[10px]"
                  : "bg-gray-600 max-w-[50%] text-white self-start p-3 mx-1 my-2 rounded-[10px]"
              }`}
            >
              {message.isImage ? (
                <div>
                  <img src={message.imageUrl} alt="Generated Outfit" />
                  <button
                    onClick={() =>
                      window.open(
                        `https://lens.google.com/uploadbyurl?url=${message.imageUrl}`,
                        "_blank",
                        "noreferrer"
                      )
                    }
                    className="mt-2 text-blue-500 underline"
                  >
                    Shop Similar
                  </button>
                </div>
              ) : (
                message.text
              )}
            </div>
          ))
        )}
        {botIsTyping && (
          <div className="bg-gray-800 max-w-[50%] text-white self-start p-2 mx-1 my-2 rounded-[10px]">
            Bot is typing...
          </div>
        )}
        {botIsGenerating && (
          <div className="bg-gray-800 max-w-[50%] text-white self-start p-2 mx-1 my-2 rounded-[10px]">
            Generating Image...
          </div>
        )}
      </div>

      {/* Input Section */}
      <div className="input-container flex justify-center items-center w-full h-1/5 p-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="w-3/4 h-1/3 p-2 border rounded-md border-green-500 outline-none"
        />
        <button
          onClick={handleMessageSubmit}
          className="ml-2 h-1/3 px-4 py-2 bg-blue-500 text-white rounded-md hover:opacity-60"
        >
          Chat
        </button>
        <button
          onClick={handleImageGenerate}
          className="ml-2 h-1/3 px-4 py-2 bg-green-500 text-white rounded-md hover:opacity-60"
        >
          Generate Image
        </button>
      </div>
    </div>
  );
}

export default Chat;
