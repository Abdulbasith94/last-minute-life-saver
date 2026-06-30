import {
  createContext,
  useContext,
  useMemo,
} from "react";

import {
  useTasks,
} from "./TaskContext";

import analyticsService
from "../services/analyticsService";

const AnalyticsContext =
  createContext();

export function AnalyticsProvider({
  children,
}) {

  const {
    tasks,
  } =
    useTasks();

  const analytics =
    useMemo(
      () =>
        analyticsService.generateAnalytics(
          tasks
        ),
      [tasks]
    );

  const weekly =
    useMemo(
      () =>
        analyticsService.generateWeeklyData(),
      []
    );

  const focus =
    useMemo(
      () =>
        analyticsService.calculateFocusScore(
          tasks
        ),
      [tasks]
    );

  return (

    <AnalyticsContext.Provider
      value={{
        analytics,
        weekly,
        focus,
      }}
    >

      {children}

    </AnalyticsContext.Provider>

  );

}

export function useAnalytics() {

  return useContext(
    AnalyticsContext
  );

}