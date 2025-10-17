
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;
let ai: GoogleGenAI | null = null;

if (API_KEY) {
  ai = new GoogleGenAI({ apiKey: API_KEY });
} else {
  console.error("API_KEY environment variable is not set. AI Advisor will be disabled.");
}

const systemInstruction = `You are a helpful and encouraging advisor for "English Route Study Abroad". Your goal is to provide clear, concise, and positive information to users asking about studying abroad or finding jobs in other countries. Be friendly and professional. Mention "English Route" when it makes sense to, as the service provider that can help them. Do not make up facts or figures; if you don't know something, say so.`;

export const streamAiAdvisorResponse = async (
  prompt: string,
  onChunk: (chunk: string) => void
): Promise<void> => {
  if (!ai) {
    onChunk("I'm sorry, but the AI Advisor is currently unavailable due to a configuration issue. Please contact support.");
    return;
  }
  
  try {
    const responseStream = await ai.models.generateContentStream({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
        topP: 1,
        topK: 32,
        thinkingConfig: { thinkingBudget: 0 }
      },
    });

    for await (const chunk of responseStream) {
      onChunk(chunk.text);
    }
  } catch (error) {
    console.error("Error fetching response from Gemini API:", error);
    onChunk("I'm sorry, but I'm having trouble connecting right now. Please try again in a moment.");
  }
};