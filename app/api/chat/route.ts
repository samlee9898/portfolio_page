import OpenAI from "openai";
import { readFile } from 'fs/promises';
import path from "path";

const prompt = await readFile(
  path.join(process.cwd(), "data", "prompt.txt"),
  "utf8"
);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      messages?: ChatMessage[];
    };

    const messages = body.messages;

    if (!messages || messages.length === 0) {
      return Response.json(
        { error: "At least one message is required." },
        { status: 400 }
      );
    }

    const response = await openai.responses.create({
      model: "gpt-5.6",
      instructions: prompt.trim(),

      input: messages.map((message) => ({
        role: message.role,
        content: message.content,
      })),
    });

    return Response.json({
      message: response.output_text,
    });
  } catch (error) {
    console.error("Chat API error:", error);

    return Response.json(
      { error: "Unable to generate a response." },
      { status: 500 }
    );
  }
}