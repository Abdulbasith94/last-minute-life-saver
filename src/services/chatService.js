// ============================================
// CAPSULE AI CHAT SERVICE
// Last Minute Life Saver
// ============================================

import { askGemini } from "../lib/gemini";

const chatService = {

  async sendMessage(message, tasks = []) {

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

    } catch (error) {

      return {
        success: false,
        message:
          "Capsule AI encountered an error.",
      };

    }

  },

  getWelcomeMessage(tasks = []) {

    const pending =
      tasks.filter(
        task =>
          !task.completed
      ).length;

    const completed =
      tasks.filter(
        task =>
          task.completed
      ).length;

    return `
Hello, I'm Capsule AI.

I analyzed your productivity system.

Completed Tasks: ${completed}
Pending Tasks: ${pending}

You can ask me:

• What should I do today?
• Which task is highest priority?
• Create a study plan.
• Help me with deadlines.
• I'm feeling stressed.
• Create an emergency schedule.
`;

  },

  getSuggestions() {

    return [

      "What should I do today?",

      "Which task is highest priority?",

      "Create a study plan",

      "Help me finish before deadline",

      "Create emergency plan",

      "I'm feeling stressed",

    ];

  },

};

export default chatService;