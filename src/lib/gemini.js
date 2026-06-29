// ============================================
// CAPSULE AI + GROQ HYBRID ENGINE
// File Name: gemini.js (kept for compatibility)
// Last Minute Life Saver
// ============================================

const API_KEY =
  import.meta.env
    .VITE_GROQ_API_KEY;

const GROQ_URL =
  "https://api.groq.com/openai/v1/chat/completions";

export async function askGemini(
  prompt,
  tasks = []
) {

  // =====================================
  // LOCAL CAPSULE AI
  // =====================================

  const local =
    localCapsuleAI(
      prompt,
      tasks
    );

  if (local)
    return local;

  // =====================================
  // GROQ FALLBACK
  // =====================================

  try {

    if (!API_KEY) {
      console.error(
        "GROQ KEY:",
        API_KEY
      );

      return "Groq API key not configured.";
    }

    console.log(
      "GROQ KEY LOADED"
    );

    const response =
      await fetch(
        GROQ_URL,
        {
          method: "POST",

          headers: {
            Authorization:
              `Bearer ${API_KEY}`,

            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({

            model:
              "llama-3.3-70b-versatile",

            messages: [

              {
                role: "system",

                content: `
You are Capsule AI.

You are an emergency productivity assistant.

Provide concise, practical, actionable responses.
`,
              },

              {
                role: "user",

                content: `
Current Tasks:

${JSON.stringify(
  tasks,
  null,
  2
)}

User Question:

${prompt}
`,
              },

            ],

            temperature: 0.7,

            max_tokens: 500,

          }),

        }
      );

    const data =
      await response.json();

    console.log(
      "FULL GROQ RESPONSE:"
    );

    console.log(data);

    if (!response.ok) {

      return `Groq Error ${response.status}: ${
        data?.error?.message ||
        "Unknown Error"
      }`;

    }

    const text =
      data
        ?.choices?.[0]
        ?.message
        ?.content;

    if (text)
      return text;

    return "No response generated.";

  }

  catch (error) {

    console.error(
      error
    );

    return "Capsule AI service unavailable.";

  }

}

// =====================================
// LOCAL CAPSULE AI
// =====================================

function localCapsuleAI(
  prompt,
  tasks
) {

  const text =
    prompt.toLowerCase();

  // PRIORITY

  if (
    text.includes(
      "what should i do"
    ) ||
    text.includes(
      "which task"
    )
  ) {

    const pending =
      tasks
        .filter(
          t =>
            !t.completed
        )
        .sort(
          (
            a,
            b
          ) =>
            (b.risk || 0) -
            (a.risk || 0)
        );

    if (
      pending.length ===
      0
    ) {
      return "You have completed all tasks.";
    }

    return `Start "${pending[0].title}" immediately. Risk level: ${pending[0].risk}%`;

  }

  // STRESS

  if (
    text.includes(
      "stress"
    ) ||
    text.includes(
      "stressed"
    )
  ) {

    const completed =
      tasks.filter(
        t =>
          t.completed
      ).length;

    return `You have already completed ${completed} tasks. Focus only on your next highest priority task.`;

  }

  // DEADLINES

  if (
    text.includes(
      "deadline"
    )
  ) {

    const critical =
      tasks
        .filter(
          t =>
            !t.completed
        )
        .sort(
          (
            a,
            b
          ) =>
            (b.risk || 0) -
            (a.risk || 0)
        )[0];

    if (!critical)
      return "No urgent deadlines detected.";

    return `Highest risk task is "${critical.title}" with risk score ${critical.risk}%.`;

  }

  // STUDY PLAN

  if (
    text.includes(
      "study"
    )
  ) {

    return `
08:00 AM - Study difficult topics
11:00 AM - Practice questions
03:00 PM - Revision
07:00 PM - Mock test
`;

  }

  // EMERGENCY

  if (
    text.includes(
      "emergency"
    )
  ) {

    return `
Emergency Action Plan

1. Finish highest priority task.
2. Ignore low priority tasks.
3. Work in 45-minute focus blocks.
4. Take 10-minute breaks.
5. Submit before deadline.
`;

  }

  return null;

}