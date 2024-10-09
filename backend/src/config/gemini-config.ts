import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { config } from "dotenv";

config();

export const model = new ChatGoogleGenerativeAI({
  model: "gemini-pro",
  maxOutputTokens: 2048,
});