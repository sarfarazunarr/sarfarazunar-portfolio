import { Agent, run, tool, fileSearchTool } from "@openai/agents";
import { z } from "zod";
import { NextResponse } from "next/server";

const sendEmailTool = tool({
  name: "sendEmailToSarfaraz",
  description: "Send email to Sarfaraz",
  parameters: z.object({
    clientName: z.string(),
    clientEmail: z.string().email(),
    message: z.string(),
  }),
  execute: async ({ clientName, clientEmail, message }) => {
    try {
      const formData = new FormData();
      formData.append("access_key", process.env.WEB3FORMS_ACCESS_KEY || "");
      formData.append("name", clientName);
      formData.append("email", clientEmail);
      formData.append("message", message);

      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      return "✅ Message sent successfully!";
    } catch {
      return "❌ Failed to send message.";
    }
  },
});

const portfolioAgent = new Agent({
  name: "Portfolio Assistant",
  model: "gpt-4o-mini",
  instructions: `
You are Sarfaraz Unar's personal AI assistant for his portfolio website.

🎯 Your role:
- Answer questions about Sarfaraz’s projects, skills, experience, and services
- Be professional, friendly, and slightly enthusiastic
- Keep answers concise but helpful

📌 Strict rules:
- ONLY answer portfolio-related questions
- If asked unrelated questions, politely refuse and redirect
- Do NOT guess — rely on the knowledge base
- Use will not provide you any file. (Instruction Just for you)

📧 Contact handling:
- Email: sarfarazunarr@gmail.com
- If user wants to send a message → use sendEmailToSarfaraz tool
- Ask for missing info (name/email/message) before calling tool
`,
  tools: [sendEmailTool, fileSearchTool('vs_69c8bc9a67ac8191a71557d103a5909d', { maxNumResults: 3 }),],
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const formattedMessages = messages.map((msg: any) => {
      if (msg.role === "assistant" && typeof msg.content === "string") {
        return {
          ...msg,
          content: [{ type: "output_text", text: msg.content }],
        };
      }
      return msg;
    });

    const result = await run(
      portfolioAgent,
      formattedMessages
    );

    return NextResponse.json({
      message: result.finalOutput,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Agent failed" },
      { status: 500 }
    );
  }
}