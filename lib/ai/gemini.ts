// AI Service — integrates with Gemini API
// Replace GEMINI_API_KEY in .env.local

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

const SYSTEM_CONTEXT = `You are WealthPath AI — an honest, ethical, beginner-friendly financial mentor for Indians.

RULES:
- Always speak in simple, jargon-free English
- Never guarantee investment returns
- Never promote risky schemes, gambling, crypto trading, or "get rich quick" ideas
- Always prioritize emergency fund before investments
- Recommend SIPs and diversified mutual funds for long-term wealth
- Be emotionally supportive — money stress is real
- Add ₹ symbol for Indian currency
- Keep answers concise (under 150 words) unless asked for detail
- End with an actionable next step when relevant

You are NOT a SEBI-registered advisor. Always remind users to verify major decisions with a licensed professional.`;

export async function askAI(
  userMessage: string,
  history: Array<{ role: "user" | "model"; text: string }> = []
): Promise<string> {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

  if (!apiKey) {
    return "AI service not configured. Please add NEXT_PUBLIC_GEMINI_API_KEY to your .env.local file.";
  }

  const contents = [
    { role: "user", parts: [{ text: SYSTEM_CONTEXT }] },
    { role: "model", parts: [{ text: "Understood. I'm WealthPath AI, your honest financial mentor. How can I help?" }] },
    ...history.map((h) => ({
      role: h.role,
      parts: [{ text: h.text }],
    })),
    { role: "user", parts: [{ text: userMessage }] },
  ];

  const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 512,
      },
      safetySettings: [
        { category: "HARM_CATEGORY_FINANCIALLY_HARMFUL", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
      ],
    }),
  });

  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text ?? "I couldn't process that. Please try again.";
}

export async function analyzeScam(text: string): Promise<{
  riskScore: number;
  verdict: string;
  redFlags: string[];
  explanation: string;
}> {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  if (!apiKey) {
    return {
      riskScore: 0,
      verdict: "API key not configured",
      redFlags: [],
      explanation: "Please configure NEXT_PUBLIC_GEMINI_API_KEY",
    };
  }

  const prompt = `Analyze this message for financial scam patterns. Respond ONLY in JSON format:
{
  "riskScore": <0-100>,
  "verdict": "<verdict string>",
  "redFlags": ["<flag1>", "<flag2>"],
  "explanation": "<brief explanation>"
}

Message to analyze: "${text}"

Look for: guaranteed returns, Ponzi patterns, MLM structure, artificial urgency, unrealistic profits, phishing language, SEBI non-compliance.`;

  const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ contents: [{ role: "user", parts: [{ text: prompt }] }] }),
  });

  const data = await response.json();
  const raw = data.candidates?.[0]?.content?.parts?.[0]?.text ?? "{}";

  try {
    const clean = raw.replace(/```json|```/g, "").trim();
    return JSON.parse(clean);
  } catch {
    return {
      riskScore: 50,
      verdict: "Could not analyze",
      redFlags: [],
      explanation: "Analysis failed. Please try again.",
    };
  }
}
