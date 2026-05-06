const express = require("express");
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");

// @route   POST /api/chat
// @desc    Process chatbot messages
router.post("/", async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!process.env.GEMINI_API_KEY) {
      return res.json({
        response:
          "AI is currently offline. Please add your GEMINI_API_KEY to the backend environment variables.",
      });
    }

    // const modelName = process.env.GEMINI_MODEL || "gemini-1.5-flash-latest";
    const modelName = process.env.GEMINI_MODEL || "gemini-1.5-flash-latest";
    
    console.log(`[Chat API] Attempting to use model: ${modelName}`);
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: modelName });

    // Map history to Gemini's expected format
    const formattedHistory = [];
    let lastRole = null;

    (history || []).forEach((msg) => {
      if (msg.role === "system") return;
      if (!msg.content) return; // Prevent empty content from crashing the loop

      const role = msg.role === "assistant" ? "model" : "user";

      // Gemini requires history to start with a 'user' message
      if (formattedHistory.length === 0 && role === "model") return;

      // Gemini requires alternating roles
      if (role === lastRole) {
        formattedHistory[formattedHistory.length - 1].parts[0].text +=
          `\n${msg.content}`;
      } else {
        formattedHistory.push({ role, parts: [{ text: msg.content }] });
        lastRole = role;
      }
    });

    const chat = model.startChat({ history: formattedHistory });
    const result = await chat.sendMessage(message);

    res.status(200).json({ response: result.response.text() });
  } catch (error) {
    console.error("Chat API Error:", error.message || error);
    res
      .status(500)
      .json({
        response: `AI Error: ${error.message || "Trouble connecting to brain"}`,
      });
  }
});

module.exports = router;
