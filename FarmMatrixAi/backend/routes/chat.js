const express = require("express");
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");

// @route   POST /api/chat
// @desc    Process chatbot messages
router.post("/", async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== "string" || message.trim() === "") {
      return res
        .status(400)
        .json({ response: "Please provide a valid message." });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.json({
        response:
          "AI is currently offline. Please add your GEMINI_API_KEY to the backend environment variables.",
      });
    }

    const modelName = process.env.GEMINI_MODEL || "gemma-3-1b";

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: modelName });
    console.log(modelName);

    // Map history to Gemini's expected format
    const formattedHistory = [];
    let lastRole = null;

    (history || []).forEach((msg) => {
      if (msg.role === "system") return;
      if (!msg.content) return;

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

    let errorMessage =
      "Trouble connecting to the AI brain. Please try again later.";
    let statusCode = 500;

    const errStr = (error.message || error.toString() || "").toLowerCase();
    if (errStr) {
      if (errStr.includes("safety")) {
        errorMessage =
          "Your message was blocked by safety filters. Please rephrase and try again.";
        statusCode = 400;
      } else if (errStr.includes("429") || errStr.includes("quota")) {
        errorMessage =
          "The AI is currently overloaded with requests. Please wait a moment and try again.";
        statusCode = 429;
      } else if (
        errStr.includes("503") ||
        errStr.includes("high demand") ||
        errStr.includes("unavailable")
      ) {
        errorMessage =
          "The AI is currently experiencing high demand. Please try again in a few moments.";
        statusCode = 503;
      } else {
        errorMessage =
          "An unexpected technical issue occurred while processing your request. Please try again later.";
      }
    }

    res.status(statusCode).json({ response: errorMessage });
  }
});

module.exports = router;
