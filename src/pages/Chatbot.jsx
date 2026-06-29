import { useState, useRef, useEffect } from "react";

import Layout from "../components/layout/Layout";

import EmergencyPanel from "../components/chat/EmergencyPanel";

import ProductivityCoach from "../components/chat/ProductivityCoach";

import FocusMode from "../components/chat/FocusMode";

import {
  Send,
  Bot,
  User,
  Loader2,
  Trash2,
  Sparkles,
  Mic,
  MicOff,
} from "lucide-react";

import { useChat } from "../context/ChatContext";

export default function Chatbot() {

  const {
    messages,
    loading,
    suggestions,
    sendMessage,
    clearChat,
  } = useChat();

  const [input, setInput] =
    useState("");

  const [listening, setListening] =
    useState(false);

  const bottomRef =
    useRef(null);

  useEffect(() => {

    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [messages, loading]);

  async function handleSend() {

    if (!input.trim())
      return;

    const text = input;

    setInput("");

    await sendMessage(text);

  }

  async function handleSuggestion(
    suggestion
  ) {

    await sendMessage(
      suggestion
    );

  }

  function startVoiceInput() {

    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {

      alert(
        "Speech recognition is not supported in this browser."
      );

      return;
    }

    const recognition =
      new SpeechRecognition();

    recognition.lang =
      "en-US";

    recognition.continuous =
      false;

    recognition.interimResults =
      false;

    recognition.onstart =
      () =>
        setListening(
          true
        );

    recognition.onend =
      () =>
        setListening(
          false
        );

    recognition.onerror =
      () =>
        setListening(
          false
        );

    recognition.onresult =
      (
        event
      ) => {

        const transcript =
          event
            .results[0][0]
            .transcript;

        setInput(
          transcript
        );

      };

    recognition.start();

  }

  return (

    <Layout>

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <div className="flex items-center gap-3">

            <Sparkles className="text-green-400" />

            <h1 className="text-4xl font-bold">

              Capsule AI

            </h1>

          </div>

          <p className="text-slate-400 mt-3">

            Your AI emergency productivity assistant

          </p>

        </div>

        <button
          onClick={clearChat}
          className="
            flex
            items-center
            gap-2
            px-5
            py-3
            rounded-xl
            bg-red-500/10
            hover:bg-red-500/20
            transition
          "
        >

          <Trash2 size={18} />

          Clear

        </button>

      </div>

      {/* Suggestions */}

      <div className="flex flex-wrap gap-3 mb-8">

        {suggestions.map(
          (
            suggestion,
            index
          ) => (

            <button
              key={index}
              onClick={() =>
                handleSuggestion(
                  suggestion
                )
              }
              className="
                px-4
                py-2
                rounded-xl
                bg-slate-800
                hover:bg-slate-700
                transition
              "
            >

              {suggestion}

            </button>

          )
        )}

      </div>

      {/* Emergency Dashboard */}

      <EmergencyPanel />
      <ProductivityCoach />
      <FocusMode />

      {/* Chat Window */}

      <div
        className="
          mt-8
          bg-slate-900
          rounded-3xl
          h-[600px]
          overflow-y-auto
          p-6
          space-y-6
        "
      >

        {messages.map(
          (
            message
          ) => (

            <div
              key={
                message.id
              }
              className={`
                flex
                ${
                  message.role ===
                  "user"
                    ? "justify-end"
                    : "justify-start"
                }
              `}
            >

              <div
                className={`
                  max-w-[70%]
                  rounded-2xl
                  p-5
                  ${
                    message.role ===
                    "user"
                      ? "bg-green-600"
                      : "bg-slate-800"
                  }
                `}
              >

                <div className="flex items-center gap-2 mb-3">

                  {
                    message.role ===
                    "user"
                    ? (
                      <User
                        size={18}
                      />
                    )
                    : (
                      <Bot
                        size={18}
                        className="text-green-400"
                      />
                    )
                  }

                  <span className="font-semibold">

                    {
                      message.role ===
                      "user"
                        ? "You"
                        : "Capsule AI"
                    }

                  </span>

                </div>

                <div className="whitespace-pre-wrap leading-7">

                  {
                    message.content
                  }

                </div>

              </div>

            </div>

          )
        )}

        {
          loading && (

            <div className="flex">

              <div className="bg-slate-800 rounded-2xl p-5">

                <div className="flex items-center gap-3">

                  <Loader2
                    className="
                      animate-spin
                      text-green-400
                    "
                    size={20}
                  />

                  <span>

                    Capsule AI is thinking...

                  </span>

                </div>

              </div>

            </div>

          )
        }

        <div ref={bottomRef} />

      </div>

      {/* Input */}

      <div className="flex gap-4 mt-8">

        <input
          value={input}
          onChange={
            (e) =>
              setInput(
                e.target.value
              )
          }
          onKeyDown={
            (e) => {

              if (
                e.key ===
                "Enter"
              ) {

                handleSend();

              }

            }
          }
          placeholder="Ask Capsule AI anything..."
          className="
            flex-1
            bg-slate-900
            rounded-2xl
            px-6
            py-5
            outline-none
            border
            border-slate-700
          "
        />

        <button
          onClick={
            startVoiceInput
          }
          className={`
            px-6
            rounded-2xl
            flex
            items-center
            justify-center
            transition
            ${
              listening
                ? "bg-red-600"
                : "bg-slate-800"
            }
          `}
        >

          {
            listening
              ? <MicOff />
              : <Mic />
          }

        </button>

        <button
          onClick={
            handleSend
          }
          disabled={
            loading
          }
          className="
            px-8
            rounded-2xl
            bg-green-600
            hover:bg-green-700
            transition
            flex
            items-center
            justify-center
          "
        >

          <Send />

        </button>

      </div>

    </Layout>

  );

}