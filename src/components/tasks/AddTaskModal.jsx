import { useState } from "react";
import { X } from "lucide-react";
import { useTasks } from "../../context/TaskContext";

export default function AddTaskModal({
  open,
  onClose,
}) {
  const { addTask } = useTasks();

  const initialForm = {
    title: "",
    description: "",
    priority: "Medium",
    deadline: "",
    estimatedHours: 1,
    category: "General",
  };

  const [form, setForm] = useState(initialForm);

  if (!open) return null;

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.title.trim()) {
      alert("Task title is required.");
      return;
    }

    if (!form.deadline) {
      alert("Please select a deadline.");
      return;
    }

    addTask(form);

    setForm(initialForm);

    onClose();
  }

  function handleClose() {
    setForm(initialForm);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-center items-center p-4">

      <div className="w-full max-w-2xl bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl">

        {/* Header */}

        <div className="flex justify-between items-center px-6 py-5 border-b border-slate-700">

          <h2 className="text-2xl font-bold">
            Add New Task
          </h2>

          <button
            onClick={handleClose}
            className="hover:text-red-400 transition"
          >
            <X size={24} />
          </button>

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-5"
        >

          {/* Title */}

          <div>

            <label className="block mb-2 font-medium">
              Task Title
            </label>

            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Enter task title"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-500"
            />

          </div>

          {/* Description */}

          <div>

            <label className="block mb-2 font-medium">
              Description
            </label>

            <textarea
              rows="4"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Enter description"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-500 resize-none"
            />

          </div>

          {/* Priority + Category */}

          <div className="grid md:grid-cols-2 gap-5">

            <div>

              <label className="block mb-2">
                Priority
              </label>

              <select
                name="priority"
                value={form.priority}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3"
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>

            </div>

            <div>

              <label className="block mb-2">
                Category
              </label>

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3"
              >
                <option>Project</option>
                <option>Assignment</option>
                <option>Exam</option>
                <option>Personal</option>
                <option>General</option>
              </select>

            </div>

          </div>

          {/* Deadline + Hours */}

          <div className="grid md:grid-cols-2 gap-5">

            <div>

              <label className="block mb-2">
                Deadline
              </label>

              <input
                type="date"
                name="deadline"
                value={form.deadline}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3"
              />

            </div>

            <div>

              <label className="block mb-2">
                Estimated Hours
              </label>

              <input
                type="number"
                min="1"
                name="estimatedHours"
                value={form.estimatedHours}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3"
              />

            </div>

          </div>

          {/* Buttons */}

          <div className="flex justify-end gap-4 pt-3">

            <button
              type="button"
              onClick={handleClose}
              className="px-6 py-3 rounded-xl border border-slate-600 hover:bg-slate-800 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 transition font-semibold"
            >
              Add Task
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}