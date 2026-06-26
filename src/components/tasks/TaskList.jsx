import { Plus, Search } from "lucide-react";
import { useState } from "react";

import { useTasks } from "../../context/TaskContext";
import TaskCard from "./TaskCard";
import AddTaskModal from "./AddTaskModal";

export default function TaskList() {
  const {
    filteredTasks,
    search,
    setSearch,
    category,
    setCategory,
    priority,
    setPriority,
    sortBy,
    setSortBy,
  } = useTasks();

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Top Controls */}

      <div className="bg-slate-900 rounded-2xl p-6 mb-8 border border-slate-700">

        <div className="flex flex-col lg:flex-row gap-4 justify-between">

          {/* Search */}

          <div className="relative flex-1">

            <Search
              size={18}
              className="absolute left-3 top-3.5 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search tasks..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full bg-slate-800 rounded-xl pl-10 pr-4 py-3 outline-none border border-slate-700 focus:border-cyan-500"
            />

          </div>

          {/* Filters */}

          <div className="flex flex-wrap gap-3">

            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3"
            >
              <option>All</option>
              <option>Project</option>
              <option>Assignment</option>
              <option>Exam</option>
              <option>Personal</option>
              <option>General</option>
            </select>

            <select
              value={priority}
              onChange={(e) =>
                setPriority(e.target.value)
              }
              className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3"
            >
              <option>All</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value)
              }
              className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3"
            >
              <option value="deadline">
                Sort by Deadline
              </option>

              <option value="priority">
                Sort by Priority
              </option>

            </select>

            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 px-5 py-3 rounded-xl font-semibold transition"
            >
              <Plus size={18} />

              Add Task

            </button>

          </div>

        </div>

      </div>

      {/* Task List */}

      {filteredTasks.length === 0 ? (

        <div className="bg-slate-900 rounded-2xl border border-slate-700 py-16 text-center">

          <h2 className="text-2xl font-bold">

            No Tasks Found

          </h2>

          <p className="text-gray-400 mt-3">

            Create a task or change your filters.

          </p>

        </div>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {filteredTasks.map((task) => (

            <TaskCard
              key={task.id}
              task={task}
            />

          ))}

        </div>

      )}

      {/* Add Task Modal */}

      <AddTaskModal
        open={showModal}
        onClose={() => setShowModal(false)}
      />

    </>
  );
}