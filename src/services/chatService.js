// ============================================
// CAPSULE AI CHAT SERVICE
// Last Minute Life Saver
// ============================================

import { askGemini }
from "../lib/gemini";

const chatService = {

  async sendMessage(
    message,
    tasks = []
  ) {

    const command =
      this.executeCommand(
        message,
        tasks
      );

    if (command)
      return {
        success: true,
        message: command,
      };

    try {

      const response =
        await askGemini(
          message,
          tasks
        );

      return {
        success: true,
        message: response,
      };

    }

    catch {

      return {
        success: false,
        message:
          "Capsule AI encountered an error.",
      };

    }

  },

  // ==================================
  // SMART COMMANDS
  // ==================================

  executeCommand(
    message,
    tasks
  ) {

    const text =
      message.toLowerCase();

    // ----------------
    // /emergency
    // ----------------

    if (
      text ===
      "/emergency"
    ) {

      const pending =
        tasks.filter(
          t =>
            !t.completed
        );

      return `
🚨 EMERGENCY MODE

Pending Tasks:
${pending.length}

Strategy:

1. Ignore low priority tasks.
2. Complete highest risk task first.
3. Work in 45-minute sessions.
4. Submit unfinished work before deadline.
5. Sleep after completion.
`;

    }

    // ----------------
    // /study
    // ----------------

    if (
      text ===
      "/study"
    ) {

      return `
📚 AI STUDY PLAN

08:00 - Difficult Topics
10:00 - Practice Problems
01:00 - Revision
04:00 - Mock Test
07:00 - Final Review
`;

    }

    // ----------------
    // /motivate
    // ----------------

    if (
      text ===
      "/motivate"
    ) {

      const completed =
        tasks.filter(
          t =>
            t.completed
        ).length;

      return `
🔥 CAPSULE MOTIVATION

Completed Tasks:
${completed}

Progress compounds.

Do the next task.

Not the entire semester.
Not the entire project.

Just the next task.
`;

    }

    // ----------------
    // /analyze
    // ----------------

    if (
      text ===
      "/analyze"
    ) {

      const completed =
        tasks.filter(
          t =>
            t.completed
        ).length;

      const pending =
        tasks.filter(
          t =>
            !t.completed
        ).length;

      const high =
        tasks.filter(
          t =>
            t.priority ===
              "High" &&
            !t.completed
        ).length;

      return `
📊 CAPSULE ANALYSIS

Completed:
${completed}

Pending:
${pending}

High Priority:
${high}

Productivity:
${
  completed +
  pending ===
  0
    ? 0
    : Math.round(
        completed *
        100 /
        (
          completed +
          pending
        )
      )
}%

Recommendation:

Focus on high-risk tasks immediately.
`;

    }

    // ----------------
    // /rescue
    // ----------------

    if (
      text ===
      "/rescue"
    ) {

      return `
🚑 DEADLINE RESCUE MODE

STEP 1:
List all pending tasks.

STEP 2:
Ignore low priority work.

STEP 3:
Finish highest risk task.

STEP 4:
Submit partial work if necessary.

STEP 5:
Repeat.
`;

    }

    return null;

  },

  // ==================================
  // WELCOME
  // ==================================

  getWelcomeMessage(
    tasks = []
  ) {

    const pending =
      tasks.filter(
        t =>
          !t.completed
      ).length;

    const completed =
      tasks.filter(
        t =>
          t.completed
      ).length;

    return `
Hello, I'm Capsule AI.

Completed Tasks:
${completed}

Pending Tasks:
${pending}

Commands:

/study
/emergency
/motivate
/analyze
/rescue

Or ask anything.
`;

  },

  getSuggestions() {

    return [

      "What should I do today?",

      "Which task is highest priority?",

      "Create a study plan",

      "/emergency",

      "/motivate",

      "/analyze",

    ];

  },

};

export default chatService;