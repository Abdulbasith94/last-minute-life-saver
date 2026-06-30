// ====================================
// CAPSULE ANALYTICS ENGINE
// ====================================

const analyticsService = {

  // =================================
  // MAIN ANALYTICS
  // =================================

  generateAnalytics(tasks = []) {

    const total =
      tasks.length;

    const completed =
      tasks.filter(
        task =>
          task.completed
      ).length;

    const pending =
      tasks.filter(
        task =>
          !task.completed
      ).length;

    const highPriority =
      tasks.filter(
        task =>
          task.priority ===
          "High"
      ).length;

    const completionRate =
      total === 0
        ? 0
        : Math.round(
            (
              completed /
              total
            ) * 100
          );

    const averageRisk =
      total === 0
        ? 0
        : Math.round(
            tasks.reduce(
              (
                sum,
                task
              ) =>
                sum +
                (task.risk || 0),
              0
            ) / total
          );

    const productivity =
      Math.max(
        0,
        completionRate -
        averageRisk / 4
      );

    return {

      total,

      completed,

      pending,

      highPriority,

      completionRate,

      averageRisk,

      productivity,

    };

  },

  // =================================
  // WEEKLY DATA
  // =================================

  generateWeeklyData() {

    return [

      {
        day: "Mon",
        score: 72,
      },

      {
        day: "Tue",
        score: 84,
      },

      {
        day: "Wed",
        score: 68,
      },

      {
        day: "Thu",
        score: 91,
      },

      {
        day: "Fri",
        score: 78,
      },

      {
        day: "Sat",
        score: 88,
      },

      {
        day: "Sun",
        score: 95,
      },

    ];

  },

  // =================================
  // FOCUS SCORE
  // =================================

  calculateFocusScore(tasks) {

    const completed =
      tasks.filter(
        t =>
          t.completed
      ).length;

    const pending =
      tasks.length -
      completed;

    return Math.max(
      0,
      Math.min(
        100,
        completed * 20 -
        pending * 5 +
        50
      )
    );

  },

};

export default analyticsService;