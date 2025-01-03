import Together from "together-ai";

const together = new Together({ apiKey: "b35ae43cb305c2a4c22c5eaad8a780e71a69078967b3e8b69c64aca30a021aff" });  // Directly use the key here

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
