import { GoogleGenAI } from "@google/genai";

// We check if the key exists to prevent crashing if not provided, 
// though the prompt implies it might be available in the env.
const apiKey = process.env.API_KEY || '';
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const getExplanation = async (topic: string, questionContent: string): Promise<string> => {
  if (!ai) return "AI Teacher is offline (API Key missing).";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are a friendly and helpful English teacher for 5th-grade students.
      
      Explain this grammar rule or concept briefly and simply (max 2 sentences).
      Topic: ${topic}
      Context Question: ${questionContent}
      
      Keep it encouraging!`,
    });
    return response.text || "Could not generate an explanation.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Sorry, I couldn't explain that right now.";
  }
};
