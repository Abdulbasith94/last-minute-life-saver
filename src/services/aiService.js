import {
  calculateTaskRisk,
  calculateLifeScore,
  getCriticalTasks,
  getUpcomingTasks,
  generateSurvivalPlan,
  getAIRecommendation,
} from "../utils/riskCalculator";

const aiService = {
  analyzeTasks(tasks = []) {
    const analyzedTasks = tasks.map((task) => ({
      ...task,
      risk: calculateTaskRisk(task),
    }));

    return analyzedTasks;
  },

  getLifeScore(tasks = []) {
    return calculateLifeScore(tasks);
  },

  getRiskLevel(score) {
    if (score >= 80)
      return {
        label: "Critical",
        color: "red",
      };

    if (score >= 60)
      return {
        label: "High",
        color: "orange",
      };

    if (score >= 40)
      return {
        label: "Moderate",
        color: "yellow",
      };

    return {
      label: "Safe",
      color: "green",
    };
  },

  getCriticalAlert(tasks = []) {
    const critical =
      getCriticalTasks(tasks);

    if (
      critical.length === 0
    ) {
      return {
        exists: false,
        risk: 0,
        task: null,
        recommendation:
          "No critical tasks detected.",
      };
    }

    const task =
      critical[0];

    return {
      exists: true,

      task,

      risk:
        task.risk,

      recommendation: `Start "${task.title}" within the next 2 hours to maximize completion probability.`,

      estimatedSuccess:
        Math.max(
          50,
          100 -
            task.risk
        ),
    };
  },

  getUpcomingDeadlines(
    tasks = []
  ) {
    return getUpcomingTasks(
      tasks
    ).slice(0, 5);
  },

  getSurvivalPlan(
    tasks = []
  ) {
    return generateSurvivalPlan(
      tasks
    );
  },

  getInsights(
    tasks = []
  ) {
    const total =
      tasks.length;

    const completed =
      tasks.filter(
        (t) =>
          t.completed
      ).length;

    const pending =
      total -
      completed;

    const highRisk =
      getCriticalTasks(
        tasks
      ).length;

    const completion =
      total === 0
        ? 100
        : Math.round(
            (completed /
              total) *
              100
          );

    const insights =
      [];

    if (
      completion >= 70
    ) {
      insights.push(
        "📈 Your productivity level is above average."
      );
    }

    if (
      highRisk > 0
    ) {
      insights.push(
        `⚠ ${highRisk} critical task(s) require immediate attention.`
      );
    }

    if (
      pending > 3
    ) {
      insights.push(
        "💡 Avoid multitasking and focus on one task at a time."
      );
    }

    insights.push(
      "🎯 Morning hours are predicted to be your most productive period."
    );

    return insights;
  },

  getDashboardAnalytics(
    tasks = []
  ) {
    const analyzed =
      this.analyzeTasks(
        tasks
      );

    const critical =
      getCriticalTasks(
        analyzed
      );

    const recommendation =
      getAIRecommendation(
        analyzed
      );

    const averageRisk =
      analyzed.length
        ? Math.round(
            analyzed.reduce(
              (
                sum,
                task
              ) =>
                sum +
                task.risk,
              0
            ) /
              analyzed.length
          )
        : 0;

    return {
      totalTasks:
        analyzed.length,

      completedTasks:
        analyzed.filter(
          (
            task
          ) =>
            task.completed
        ).length,

      pendingTasks:
        analyzed.filter(
          (
            task
          ) =>
            !task.completed
        ).length,

      averageRisk,

      lifeScore:
        this.getLifeScore(
          analyzed
        ),

      criticalTasks:
        critical,

      upcoming:
        this.getUpcomingDeadlines(
          analyzed
        ),

      survivalPlan:
        this.getSurvivalPlan(
          analyzed
        ),

      insights:
        this.getInsights(
          analyzed
        ),

      recommendation,
    };
  },

  getSystemHealth() {
    return {
      predictionEngine:
        "Online",

      taskAnalyzer:
        "Monitoring",

      planningEngine:
        "Active",

      intelligence:
        "Ready",

      health:
        98.7,
    };
  },
};

export default aiService;