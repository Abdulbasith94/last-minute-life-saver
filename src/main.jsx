import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./index.css";

import { TaskProvider } from "./context/TaskContext";

import { AIProvider } from "./context/AIContext";

import { ChatProvider, } from "./context/ChatContext";

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>

    <BrowserRouter>

      <TaskProvider>

        <AIProvider>

          <ChatProvider>

            <App/>

          </ChatProvider>

        </AIProvider>

      </TaskProvider>

    </BrowserRouter>

  </React.StrictMode>

);