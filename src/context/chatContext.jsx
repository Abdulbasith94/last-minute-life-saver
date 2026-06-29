import {
  createContext,
  useContext,
  useState,
} from "react";

import { useTasks } from "./TaskContext";
import chatService from "../services/chatService";

const ChatContext = createContext();

export function ChatProvider({
  children,
}) {
  const { tasks } =
    useTasks();

  const [messages, setMessages] =
    useState([
      {
        id: 1,
        role: "assistant",
        content:
          chatService.getWelcomeMessage(
            tasks
          ),
        timestamp:
          new Date().toISOString(),
      },
    ]);

  const [loading, setLoading] =
    useState(false);

  const suggestions =
    chatService.getSuggestions();

  async function sendMessage(
    text
  ) {
    if (!text?.trim())
      return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: text,
      timestamp:
        new Date().toISOString(),
    };

    setMessages(
      (prev) => [
        ...prev,
        userMessage,
      ]
    );

    setLoading(true);

    try {
      const response =
        await chatService.sendMessage(
          text,
          tasks
        );

      const aiMessage = {
        id:
          Date.now() +
          1,
        role:
          "assistant",
        content:
          response.message,
        timestamp:
          new Date().toISOString(),
      };

      setMessages(
        (
          prev
        ) => [
          ...prev,
          aiMessage,
        ]
      );
    } catch {
      setMessages(
        (
          prev
        ) => [
          ...prev,
          {
            id:
              Date.now() +
              1,
            role:
              "assistant",
            content:
              "Capsule AI is temporarily unavailable.",
            timestamp:
              new Date().toISOString(),
          },
        ]
      );
    }

    setLoading(false);
  }

  function clearChat() {
    setMessages([
      {
        id: 1,
        role: "assistant",
        content:
          chatService.getWelcomeMessage(
            tasks
          ),
        timestamp:
          new Date().toISOString(),
      },
    ]);
  }

  const value = {
    messages,
    loading,
    suggestions,
    sendMessage,
    clearChat,
  };

  return (
    <ChatContext.Provider
      value={value}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context =
    useContext(
      ChatContext
    );

  if (!context) {
    throw new Error(
      "useChat must be used inside ChatProvider"
    );
  }

  return context;
}