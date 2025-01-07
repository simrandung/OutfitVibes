import Together from "together-ai";

const together = new Together({ apiKey: "c01f7fd0256ddbd195f783315e085fc4f7b464bf462dc58dd0c2e8f5c1bd5382" });  // Directly use the key here

export const chatCompletion = async (req, res) => {
  try {
    const { messages } = req.body;

    const response = await together.chat.completions.create({
      messages,
      model: "meta-llama/Llama-3.3-70B-Instruct-Turbo",
      max_tokens: null,
      temperature: 0.7,
      top_p: 0.7,
      top_k: 50,
      repetition_penalty: 1,
      stop: ["<|eot_id|>", "<|eom_id|>"],
      stream: true,
    });

    let fullResponse = "";
    for await (const token of response) {
      fullResponse += token.choices[0]?.delta?.content;
    }

    res.status(200).json({ result: fullResponse });
  } catch (error) {
    console.error("Chat completion error:", error);
    res.status(500).json({ error: "Error generating chat response" });
  }
};
