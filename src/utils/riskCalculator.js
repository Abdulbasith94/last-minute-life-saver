// ============================================
// CAPSULE AI RISK CALCULATOR
// Last Minute Life Saver
// ============================================

const priorityWeight = {
  High: 35,
  Medium: 20,
  Low: 10,
};

export function calculateTaskRisk(task) {
  if (!task) return 0;

  let risk = 0;

  // Deadline Risk
  if (task.deadline) {
    const now = new Date();

    const deadline = new Date(
      task.deadline + "T23:59:59"
    );

    const hours =
      (deadline - now) /
      (1000 * 60 * 60);

    if (hours <= 6)
      risk += 45;

    else if (hours <= 12)
      risk += 35;

    else if (hours <= 24)
      risk += 25;

    else if (hours <= 48)
      risk += 15;

    else
      risk += 5;
  }

  // Priority Risk
  risk +=
    priorityWeight[
      task.priority
    ] || 10;

  // Workload Risk
  const hours =
    Number(
      task.estimatedHours
    ) || 1;

  if (hours >= 8)
    risk += 20;

  else if (hours >= 5)
    risk += 12;

  else
    risk += 5;

  // Completed Task
  if (task.completed)
    risk = 0;

  return Math.min(
    Math.round(risk),
    100
  );
}

export function calculateLifeScore(
  tasks
) {
  if (
    !tasks ||
    tasks.length === 0
  )
    return 100;

  const total =
    tasks.length;

  const completed =
    tasks.filter(
      (t) => t.completed
    ).length;

  const completion =
    (completed / total) *
    100;

  const averageRisk =
    tasks.reduce(
      (sum, task) =>
        sum +
        calculateTaskRisk(
          task
        ),
      0
    ) / total;

  let score =
    completion * 0.7 +
    (100 -
      averageRisk) *
      0.3;

  return Math.max(
    0,
    Math.min(
      100,
      Math.round(score)
    )
  );
}

export function getCriticalTasks(
  tasks
) {
  return tasks
    .filter(
      (task) =>
        !task.completed
    )
    .map((task) => ({
      ...task,
      risk:
        calculateTaskRisk(
          task
        ),
    }))
    .filter(
      (task) =>
        task.risk >= 70
    )
    .sort(
      (a, b) =>
        b.risk -
        a.risk
    );
}

export function getUpcomingTasks(
  tasks
) {
  return tasks
    .filter(
      (task) =>
        !task.completed
    )
    .map((task) => {
      const diff =
        Math.ceil(
          (new Date(
            task.deadline +
              "T23:59:59"
          ) -
            new Date()) /
            (1000 *
              60 *
              60 *
              24)
        );

      return {
        ...task,
        daysLeft: diff,
        risk:
          calculateTaskRisk(
            task
          ),
      };
    })
    .sort(
      (a, b) =>
        a.daysLeft -
        b.daysLeft
    );
}

export function generateSurvivalPlan(
  tasks
) {
  const critical =
    getCriticalTasks(
      tasks
    ).slice(0, 3);

  const times = [
    "08:00 AM",
    "11:00 AM",
    "03:00 PM",
  ];

  return critical.map(
    (
      task,
      index
    ) => ({
      time:
        times[index] ||
        "06:00 PM",
      task:
        task.title,
      success:
        Math.max(
          50,
          100 -
            task.risk
        ),
    })
  );
}

export function getAIRecommendation(
  tasks
) {
  const critical =
    getCriticalTasks(
      tasks
    );

  if (
    critical.length === 0
  ) {
    return {
      type:
        "success",
      message:
        "You're performing exceptionally well today.",
    };
  }

  return {
    type:
      "danger",
    message: `Start "${critical[0].title}" immediately to avoid missing the deadline.`,
  };
}