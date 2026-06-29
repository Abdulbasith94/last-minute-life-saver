// ============================================
// DASHBOARD SERVICE
// Last Minute Life Saver
// ============================================

const dashboardService = {

  getDashboardAnalytics(tasks = []) {

    const total =
      tasks.length;

    const completed =
      tasks.filter(
        task =>
          task.completed
      ).length;

    const pending =
      total - completed;

    const highPriority =
      tasks.filter(
        task =>
          task.priority === "High" &&
          !task.completed
      ).length;

    const completionRate =
      total === 0
        ? 0
        : Math.round(
            (completed / total) *
              100
          );

    const riskLevel =
      highPriority > 0
        ? Math.min(
            100,
            highPriority * 20
          )
        : 0;

    return {

      total,

      completed,

      pending,

      highPriority,

      completionRate,

      riskLevel,

      lifeScore:
        Math.max(
          0,
          100 - riskLevel
        ),

      productivity:
        completionRate,

      aiSaved:
        completed * 2,

      nextDeadline:
        tasks.find(
          task =>
            !task.completed
        ) || null,

    };

  },

  getLifeScore(
    tasks = []
  ) {

    const analytics =
      this.getDashboardAnalytics(
        tasks
      );

    return (
      analytics.lifeScore
    );

  },

  getRiskLevel(
    tasks = []
  ) {

    const analytics =
      this.getDashboardAnalytics(
        tasks
      );

    return (
      analytics.riskLevel
    );

  },

};

export default dashboardService;