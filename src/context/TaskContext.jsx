import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import taskService from "../services/taskService";

const TaskContext = createContext();

const defaultTasks = [
  {
    id: 1,
    title: "DTI Project",
    description: "Complete Final Report",
    priority: "High",
    deadline: "2026-06-30",
    estimatedHours: 6,
    completed: false,
    category: "Project",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: "AWS Assignment",
    description: "Submit Lab",
    priority: "Medium",
    deadline: "2026-06-29",
    estimatedHours: 3,
    completed: false,
    category: "Assignment",
    createdAt: new Date().toISOString(),
  },
];

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() =>
    taskService.loadTasks(defaultTasks)
  );

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priority, setPriority] = useState("All");
  const [sortBy, setSortBy] = useState("deadline");

  useEffect(() => {
    taskService.saveTasks(tasks);
  }, [tasks]);

  function addTask(task) {
    const newTask = taskService.createTask(task);

    setTasks((prev) => [...prev, newTask]);
  }

  function deleteTask(id) {
    setTasks((prev) =>
      taskService.deleteTask(prev, id)
    );
  }

  function toggleTask(id) {
    setTasks((prev) =>
      taskService.toggleComplete(prev, id)
    );
  }

  function updateTask(updatedTask) {
    setTasks((prev) =>
      taskService.updateTask(prev, updatedTask)
    );
  }

  const filteredTasks = useMemo(() => {
    let result = [...tasks];

    result = taskService.searchTasks(
      result,
      search
    );

    result = taskService.filterByCategory(
      result,
      category
    );

    result = taskService.filterByPriority(
      result,
      priority
    );

    if (sortBy === "priority") {
      result = taskService.sortByPriority(
        result
      );
    } else {
      result = taskService.sortByDeadline(
        result
      );
    }

    return result;
  }, [
    tasks,
    search,
    category,
    priority,
    sortBy,
  ]);

  const statistics = useMemo(
    () => taskService.getTaskStatistics(tasks),
    [tasks]
  );

  const value = {
    tasks,
    filteredTasks,
    statistics,

    search,
    setSearch,

    category,
    setCategory,

    priority,
    setPriority,

    sortBy,
    setSortBy,

    addTask,
    deleteTask,
    toggleTask,
    updateTask,
  };

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error(
      "useTasks must be used inside TaskProvider."
    );
  }

  return context;
}