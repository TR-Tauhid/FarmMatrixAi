import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const getChatResponse = async (message) => {
  const model = genAI.getGenerativeModel({
    model: "gemini-3.1-flash-lite",
  });

  const prompt = `
You are an agricultural AI assistant helping farmers and general person.
Give practical, cost-aware advice. Make your answer in bullet point list, very  short, compact and direct. Use good emogies.

User: ${message}
`;

  const result = await model.generateContent(prompt);
  const response = await result.response;

  return response.text();
};
