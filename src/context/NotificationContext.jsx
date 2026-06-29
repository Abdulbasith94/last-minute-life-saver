import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { useTasks }
from "./TaskContext";

import aiService
from "../services/aiService";

const NotificationContext =
  createContext();

export function NotificationProvider({
  children,
}) {

  const { tasks } =
    useTasks();

  const [alerts,
    setAlerts] =
    useState([]);

  const [unread,
    setUnread] =
    useState(0);

  useEffect(() => {

    const generated =
      aiService.generateAlerts(
        tasks
      );

    setAlerts(
      generated
    );

    setUnread(
      generated.length
    );

  }, [tasks]);

  function markAsRead(
    id
  ) {

    setAlerts(
      prev =>
        prev.map(
          alert =>
            alert.id ===
            id
              ? {
                  ...alert,
                  read: true,
                }
              : alert
        )
    );

    setUnread(
      prev =>
        Math.max(
          0,
          prev - 1
        )
    );

  }

  function clearAlerts() {

    setAlerts([]);

    setUnread(0);

  }

  function addAlert(
    alert
  ) {

    setAlerts(
      prev => [

        {
          id:
            Date.now(),

          read:
            false,

          ...alert,

        },

        ...prev,

      ]
    );

    setUnread(
      prev =>
        prev + 1
    );

  }

  const value = {

    alerts,

    unread,

    addAlert,

    clearAlerts,

    markAsRead,

  };

  return (

    <NotificationContext.Provider
      value={value}
    >

      {children}

    </NotificationContext.Provider>

  );

}

export function useNotifications() {

  return useContext(
    NotificationContext
  );

}