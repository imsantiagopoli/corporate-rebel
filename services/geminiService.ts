import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const decodeCorporateSpeak = async (jargon: string): Promise<string> => {
  if (!apiKey) {
    console.error("API Key is missing");
    return "Error: API Key missing. The corporate firewall blocked us.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: jargon,
      config: {
        systemInstruction: `You are a cynical, rebellious, anti-corporate anarchist. 
        Your job is to translate 'Corporate Speak' (boring, bureaucratic, safe language) into 'The Truth' (brutal, honest, aggressive, and funny). 
        Keep the response short (under 20 words). 
        Be biting and satirical. 
        Example: 
        Input: "Let's circle back." 
        Output: "I'm ignoring you until I have a better excuse."
        Input: "We are a family."
        Output: "We expect you to work unpaid overtime."`,
        temperature: 0.9,
      },
    });

    return response.text || "Translation failed. The matrix is glitching.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "System Failure. The bureaucracy was too strong.";
  }
};
