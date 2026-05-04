const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');

// @route   POST /api/chat
// @desc    Process chatbot messages
router.post('/', async (req, res) => {
  try {
    const { message, history } = req.body;
    
    if (!process.env.GEMINI_API_KEY) {
       return res.json({ response: "AI is currently offline. Please add your GEMINI_API_KEY to the backend environment variables." });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Map history to Gemini's expected format
    const formattedHistory = (history || []).map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    })).filter(msg => msg.role !== 'system');

    const chat = model.startChat({ history: formattedHistory });
    const result = await chat.sendMessage(message);
    
    res.status(200).json({ response: result.response.text() });
  } catch (error) {
    console.error("Chat API Error:", error);
    res.status(500).json({ response: "Sorry, I am having trouble connecting to my AI brain right now." });
  }
});

module.exports = router;