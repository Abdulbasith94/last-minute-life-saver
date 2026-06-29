import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./index.css";

import { TaskProvider }
from "./context/TaskContext";

import { AIProvider }
from "./context/AIContext";

import { ChatProvider }
from "./context/ChatContext";

import {
  NotificationProvider,
}
from "./context/NotificationContext";

ReactDOM
  .createRoot(
    document.getElementById(
      "root"
    )
  )
  .render(

    <React.StrictMode>

      <BrowserRouter>

        <TaskProvider>

          <NotificationProvider>

            <AIProvider>

              <ChatProvider>

                <App />

              </ChatProvider>

            </AIProvider>

          </NotificationProvider>

        </TaskProvider>

      </BrowserRouter>

    </React.StrictMode>

  );