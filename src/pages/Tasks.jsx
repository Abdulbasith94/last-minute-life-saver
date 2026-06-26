import Layout from "../components/layout/Layout";
import TaskList from "../components/tasks/TaskList";
import { useTasks } from "../context/TaskContext";

export default function Tasks() {
  const { statistics } = useTasks();

  return (
    <Layout>
      <div className="space-y-8">

        {/* Page Header */}

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

          <div>

            <h1 className="text-4xl font-bold text-white">
              Task Management
            </h1>

            <p className="text-gray-400 mt-2">
              Manage, prioritize and track your academic tasks efficiently.
            </p>

          </div>

        </div>

        {/* Statistics */}

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">

          <div className="bg-slate-900 rounded-2xl p-5 border border-slate-700">

            <p className="text-gray-400 text-sm">
              Total Tasks
            </p>

            <h2 className="text-3xl font-bold mt-2 text-cyan-400">
              {statistics.total}
            </h2>

          </div>

          <div className="bg-slate-900 rounded-2xl p-5 border border-slate-700">

            <p className="text-gray-400 text-sm">
              Pending
            </p>

            <h2 className="text-3xl font-bold mt-2 text-yellow-400">
              {statistics.pending}
            </h2>

          </div>

          <div className="bg-slate-900 rounded-2xl p-5 border border-slate-700">

            <p className="text-gray-400 text-sm">
              Completed
            </p>

            <h2 className="text-3xl font-bold mt-2 text-green-400">
              {statistics.completed}
            </h2>

          </div>

          <div className="bg-slate-900 rounded-2xl p-5 border border-slate-700">

            <p className="text-gray-400 text-sm">
              High Priority
            </p>

            <h2 className="text-3xl font-bold mt-2 text-red-400">
              {statistics.highPriority}
            </h2>

          </div>

          <div className="bg-slate-900 rounded-2xl p-5 border border-slate-700">

            <p className="text-gray-400 text-sm">
              Completion
            </p>

            <h2 className="text-3xl font-bold mt-2 text-emerald-400">
              {statistics.completionRate}%
            </h2>

          </div>

        </div>

        {/* Task List */}

        <TaskList />

      </div>
    </Layout>
  );
}