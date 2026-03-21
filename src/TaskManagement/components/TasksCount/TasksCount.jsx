export const TasksCount = ({ taskCounts }) => {
  return (
    <section role="region" aria-label="Task statistics" aria-live="polite" aria-atomic="true" className="grid grid-cols-3 gap-4 mb-6">
      <div
        role="group"
        aria-label={`Total tasks: ${taskCounts.total}`}
        className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-4 text-center animate-fadeInUp transition-transform duration-200 hover:scale-105 cursor-default"
        style={{ animationDelay: "0ms" }}
      >
        <p className="text-2xl font-bold text-gray-800 dark:text-gray-100" aria-hidden="true">
          {taskCounts.total}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1" aria-hidden="true">
          Total Tasks
        </p>
      </div>
      <div
        role="group"
        aria-label={`Pending tasks: ${taskCounts.pending}`}
        className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-4 text-center animate-fadeInUp transition-transform duration-200 hover:scale-105 cursor-default"
        style={{ animationDelay: "60ms" }}
      >
        <p className="text-2xl font-bold text-yellow-500" aria-hidden="true">
          {taskCounts.pending}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1" aria-hidden="true">
          Pending
        </p>
      </div>
      <div
        role="group"
        aria-label={`Completed tasks: ${taskCounts.completed}`}
        className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-4 text-center animate-fadeInUp transition-transform duration-200 hover:scale-105 cursor-default"
        style={{ animationDelay: "120ms" }}
      >
        <p className="text-2xl font-bold text-green-500" aria-hidden="true">
          {taskCounts.completed}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1" aria-hidden="true">
          Completed
        </p>
      </div>
    </section>
  );
};
