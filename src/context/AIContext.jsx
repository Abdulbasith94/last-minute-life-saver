import {
  createContext,
  useContext,
  useMemo,
} from "react";

import { useTasks } from "./TaskContext";

import aiService from "../services/aiService";

const AIContext = createContext();

export function AIProvider({
  children,
}) {
  const { tasks } =
    useTasks();

  const analytics =
    useMemo(() => {
      return aiService.getDashboardAnalytics(
        tasks
      );
    }, [tasks]);

  const system =
    useMemo(() => {
      return aiService.getSystemHealth();
    }, []);

  const criticalAlert =
    useMemo(() => {
      return aiService.getCriticalAlert(
        tasks
      );
    }, [tasks]);

  const value = {
    // Main Dashboard Data
    analytics,

    // Life Score
    lifeScore:
      analytics.lifeScore,

    // Risk
    averageRisk:
      analytics.averageRisk,

    // Critical Tasks
    criticalTasks:
      analytics.criticalTasks,

    // Upcoming
    upcoming:
      analytics.upcoming,

    // Today's Plan
    survivalPlan:
      analytics.survivalPlan,

    // AI Insights
    insights:
      analytics.insights,

    // Recommendation
    recommendation:
      analytics.recommendation,

    // Alerts
    criticalAlert,

    // System
    system,

    // Statistics
    totalTasks:
      analytics.totalTasks,

    completedTasks:
      analytics.completedTasks,

    pendingTasks:
      analytics.pendingTasks,
  };

  return (
    <AIContext.Provider
      value={value}
    >
      {children}
    </AIContext.Provider>
  );
}

export function useAI() {
  const context =
    useContext(
      AIContext
    );

  if (!context) {
    throw new Error(
      "useAI must be used inside AIProvider"
    );
  }

  return context;
}