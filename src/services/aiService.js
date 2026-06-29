// ============================================
// CAPSULE AI SERVICE
// Last Minute Life Saver
// ============================================

const aiService = {

  // =================================
  // DASHBOARD ANALYTICS
  // =================================

  getDashboardAnalytics(tasks = []) {

    const completed =
      tasks.filter(
        t => t.completed
      );

    const pending =
      tasks.filter(
        t => !t.completed
      );

    const critical =
      pending.filter(
        t =>
          (t.risk || 0) >= 70
      );

    const lifeScore =
      Math.max(
        0,
        100 -
          critical.length * 10
      );

    const averageRisk =
      pending.length
        ? Math.round(
            pending.reduce(
              (
                a,
                b
              ) =>
                a +
                (b.risk ||
                  0),
              0
            ) /
              pending.length
          )
        : 0;

    return {

      totalTasks:
        tasks.length,

      completedTasks:
        completed.length,

      pendingTasks:
        pending.length,

      criticalTasks:
        critical,

      lifeScore,

      averageRisk,

      upcoming:
        pending.slice(
          0,
          3
        ),

      survivalPlan:
        pending.slice(
          0,
          3
        ),

      recommendation:
        averageRisk >=
        70
          ? "START NOW"
          : "Continue current pace",

      insights: [
        "Your productivity increases during morning hours.",
        "Avoid multitasking.",
        "Focus on high risk tasks.",
      ],

    };

  },

  // =================================
  // SYSTEM HEALTH
  // =================================

  getSystemHealth() {

    return {

      prediction:
        "Online",

      analyzer:
        "Monitoring",

      planner:
        "Active",

      intelligence:
        "Ready",

      health:
        98.7,

    };

  },

  // =================================
  // CRITICAL ALERT
  // =================================

  getCriticalAlert(
    tasks = []
  ) {

    const critical =
      tasks
        .filter(
          t =>
            !t.completed
        )
        .sort(
          (
            a,
            b
          ) =>
            (b.risk ||
              0) -
            (a.risk ||
              0)
        )[0];

    if (
      !critical
    ) {

      return {

        risk: 0,

        task:
          "None",

        recommendation:
          "Safe",

      };

    }

    return {

      risk:
        critical.risk ||
        0,

      task:
        critical.title,

      recommendation:
        "START NOW",

    };

  },

  // =================================
  // NOTIFICATION ENGINE
  // =================================

  generateAlerts(
    tasks = []
  ) {

    const alerts =
      [];

    const pending =
      tasks.filter(
        task =>
          !task.completed
      );

    pending.forEach(
      task => {

        const deadline =
          new Date(
            task.deadline
          );

        const now =
          new Date();

        const hours =
          Math.floor(
            (
              deadline -
              now
            ) /
            (
              1000 *
              60 *
              60
            )
          );

        if (
          hours <= 12
        ) {

          alerts.push({

            id:
              Date.now() +
              Math.random(),

            type:
              "critical",

            title:
              "Critical Deadline",

            task:
              task.title,

            message:
              `Only ${hours} hours remaining.`,

            risk:
              95,

          });

        }

        else if (
          hours <= 24
        ) {

          alerts.push({

            id:
              Date.now() +
              Math.random(),

            type:
              "warning",

            title:
              "High Priority Alert",

            task:
              task.title,

            message:
              "Deadline approaching.",

            risk:
              75,

          });

        }

      }
    );

    return alerts;

  },

  // =================================
  // SUCCESS
  // =================================

  calculateSuccessProbability(
    tasks
  ) {

    const completed =
      tasks.filter(
        t =>
          t.completed
      ).length;

    const total =
      tasks.length;

    if (
      total === 0
    )
      return 100;

    return Math.round(
      (
        completed /
        total
      ) *
        100
    );

  },

  // =================================
  // MOTIVATION
  // =================================

  generateMotivation(
    score
  ) {

    if (
      score >= 80
    )
      return "Excellent progress.";

    if (
      score >= 50
    )
      return "Keep moving.";

    return "Start immediately.";

  },

};

export default aiService;