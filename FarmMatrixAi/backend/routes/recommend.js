const express = require("express");
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");

// @route   POST /api/recommend
// @desc    Get AI crop recommendation based on parameters
router.post("/", async (req, res) => {
  try {
    const {
      nitrogen,
      phosphorus,
      potassium,
      temperature,
      humidity,
      ph,
      rainfall,
      additionalNotes,
      lat,
      lng,
    } = req.body;

    console.log("\n=== Analyzing Field Telemetry ===");
    console.log(JSON.stringify(req.body, null, 2));

    if (!process.env.GEMINI_API_KEY) {
      return res
        .status(500)
        .json({ success: false, message: "AI API Key missing on server." });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

    const prompt = `Act as an expert agronomist AI. Based on the following field telemetry, recommend the single best crop to plant:
    Nitrogen (N): ${nitrogen} mg/kg | Phosphorus (P): ${phosphorus} mg/kg | Potassium (K): ${potassium} mg/kg
    Temperature: ${temperature}°C | Humidity: ${humidity}% | Soil pH: ${ph} | Rainfall: ${rainfall}mm
    Additional Notes: ${additionalNotes} | Coordinates: Lat ${lat}, Lng ${lng}
    
    Add an explaination why it's good for this location this season and this soil content and so on.

    Return ONLY a raw JSON object (no markdown formatting, no backticks) with these exact keys:
    optimalCrop (string), confidence (number between 0 and 100), modelUsed (string, e.g., "Neural Ensemble v2.1"), yieldProjection (string, e.g., "4.2 Tons/Acre"), marketDemand (string, e.g., "High"), agronomistTip (string).`;

    const aiResult = await model.generateContent(prompt);
    const responseText = aiResult.response
      .text()
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();
    const recommendation = JSON.parse(responseText);

    res
      .status(200)
      .json({
        success: true,
        message: "AI Analysis Complete",
        data: recommendation,
      });
  } catch (error) {
    console.error("Error receiving parameters:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
