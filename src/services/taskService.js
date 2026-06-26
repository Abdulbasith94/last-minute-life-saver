// ============================================
// TASK SERVICE
// Last Minute Life Saver
// ============================================

const STORAGE_KEY = "lastMinuteLifeSaverTasks";

const priorityWeight = {
  High: 3,
  Medium: 2,
  Low: 1,
};

const taskService = {
  createTask(task) {
    const newTask = {
      id: Date.now(),
      title: task.title?.trim() || "",
      description: task.description?.trim() || "",
      priority: task.priority || "Medium",
      deadline: task.deadline,
      estimatedHours: Number(task.estimatedHours) || 1,
      category: task.category || "General",
      completed: false,
      createdAt: new Date().toISOString(),
    };

    newTask.risk = this.calculateRisk(newTask);

    return newTask;
  },

  updateTask(tasks, updatedTask) {
    const task = {
      ...updatedTask,
      risk: this.calculateRisk(updatedTask),
    };

    return tasks.map((item) =>
      item.id === task.id ? task : item
    );
  },

  deleteTask(tasks, id) {
    return tasks.filter((task) => task.id !== id);
  },

  toggleComplete(tasks, id) {
    return tasks.map((task) => {
      if (task.id !== id) return task;

      return {
        ...task,
        completed: !task.completed,
      };
    });
  },

  getCompleted(tasks) {
    return tasks.filter((task) => task.completed);
  },

  getPending(tasks) {
    return tasks.filter((task) => !task.completed);
  },

  getHighPriority(tasks) {
    return tasks.filter(
      (task) =>
        task.priority === "High" &&
        !task.completed
    );
  },

  searchTasks(tasks, keyword) {
    if (!keyword) return tasks;

    const search = keyword.toLowerCase();

    return tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(search) ||
        task.description.toLowerCase().includes(search) ||
        task.category.toLowerCase().includes(search)
    );
  },

  filterByCategory(tasks, category) {
    if (!category || category === "All") return tasks;

    return tasks.filter(
      (task) => task.category === category
    );
  },

  filterByPriority(tasks, priority) {
    if (!priority || priority === "All") return tasks;

    return tasks.filter(
      (task) => task.priority === priority
    );
  },

  sortByDeadline(tasks) {
    return [...tasks].sort(
      (a, b) =>
        new Date(a.deadline) -
        new Date(b.deadline)
    );
  },

  sortByPriority(tasks) {
    return [...tasks].sort(
      (a, b) =>
        priorityWeight[b.priority] -
        priorityWeight[a.priority]
    );
  },

  calculateRisk(task) {
    if (!task.deadline) return 0;

    const now = new Date();

    const deadline = new Date(task.deadline);

    const hoursLeft =
      (deadline - now) / (1000 * 60 * 60);

    let risk = 0;

    if (hoursLeft <= 12) risk += 50;
    else if (hoursLeft <= 24) risk += 35;
    else if (hoursLeft <= 48) risk += 20;
    else risk += 10;

    if (task.priority === "High") risk += 35;
    else if (task.priority === "Medium") risk += 20;
    else risk += 10;

    if ((task.estimatedHours || 0) >= 8) risk += 15;
    else if ((task.estimatedHours || 0) >= 4) risk += 10;
    else risk += 5;

    return Math.min(risk, 100);
  },

  getTaskStatistics(tasks) {
    const total = tasks.length;

    const completed = tasks.filter(
      (task) => task.completed
    ).length;

    const pending = total - completed;

    const highPriority = tasks.filter(
      (task) =>
        task.priority === "High" &&
        !task.completed
    ).length;

    const averageRisk =
      total === 0
        ? 0
        : Math.round(
            tasks.reduce(
              (sum, task) =>
                sum + (task.risk || 0),
              0
            ) / total
          );

    return {
      total,
      completed,
      pending,
      highPriority,
      averageRisk,
      completionRate:
        total === 0
          ? 0
          : Math.round(
              (completed / total) * 100
            ),
    };
  },

  saveTasks(tasks) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(tasks)
    );
  },

  loadTasks(defaultTasks = []) {
    const stored =
      localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      const initialized = defaultTasks.map(
        (task) => ({
          ...task,
          risk: this.calculateRisk(task),
        })
      );

      this.saveTasks(initialized);

      return initialized;
    }

    try {
      return JSON.parse(stored).map((task) => ({
        ...task,
        risk: this.calculateRisk(task),
      }));
    } catch {
      return defaultTasks.map(task => ({
           ...task,
          risk: this.calculateRisk(task),
      }));
    }
  },
};

export default taskService;