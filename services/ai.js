require('dotenv').config();
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generate(conversationPrompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: `${conversationPrompt}`,
    config: {
        systemInstruction: "You have to summarize the above conversation. Summarize what they are taking about. Discard messages which are not related to the conversation",
        maxOutputTokens: 500
    }
  });
  return response.text;
}

module.exports = {
    generate
}