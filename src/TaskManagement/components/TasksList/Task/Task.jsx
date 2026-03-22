import { PRIORITY, STATUS } from "../../../constants/constant";
import React from "react";

export const Task = (props) => {
  const { title, description, priority, date, handleEditTask, handleDeleteTask = () => {}, handleToggleTaskStatus = () => {}, status } = props || {};

  const isCompleted = status === STATUS.COMPLETED;

  return (
    <article
      aria-label={`Task: ${title}`}
      className={`w-full rounded-2xl border shadow-sm p-4 transition-all duration-200 animate-fadeInUp ${
        isCompleted
          ? "bg-gray-50 dark:bg-gray-800/60 border-gray-200 dark:border-gray-700 opacity-70"
          : "bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 hover:shadow-md hover:-translate-y-0.5"
      }`}
    >
      <h2 className={`text-sm font-semibold ${isCompleted ? "line-through text-gray-400 dark:text-gray-500" : "text-gray-800 dark:text-gray-100"}`}>
        {title}
      </h2>

      <p className={`text-xs mt-1 ${isCompleted ? "line-through text-gray-400 dark:text-gray-500" : "text-gray-500 dark:text-gray-400"}`}>
        {description}
      </p>

      <div className="flex justify-between items-center mt-3 text-xs text-gray-600 dark:text-gray-300">
        <span aria-label={`Due date: ${date}`}>{date}</span>
        <span
          aria-label={`Priority: ${priority}`}
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            priority === PRIORITY.HIGH
              ? "bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400"
              : priority === PRIORITY.MEDIUM
                ? "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-600 dark:text-yellow-400"
                : "bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400"
          }`}
        >
          {priority}
        </span>
      </div>

      <div className="mt-2 text-xs">
        <span
          aria-label={`Status: ${status}`}
          className={`px-2 py-1 rounded-full ${isCompleted ? "bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400" : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"}`}
        >
          {status}
        </span>
      </div>

      <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
        <button
          onClick={handleToggleTaskStatus}
          aria-label={isCompleted ? `Mark "${title}" as pending` : `Mark "${title}" as completed`}
          className={`text-xs font-medium transition-all duration-150 active:scale-95 cursor-pointer ${isCompleted ? "text-green-700 dark:text-green-400 hover:text-green-900 dark:hover:text-green-300" : "text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300"}`}
        >
          {isCompleted ? "Mark as Pending" : "Mark as Completed"}
        </button>

        <div className="flex gap-2" role="group" aria-label={`Actions for "${title}"`}>
          <button
            onClick={handleEditTask}
            aria-label={`Edit "${title}"`}
            className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 dark:text-gray-300 rounded transition-all duration-150 hover:bg-gray-200 dark:hover:bg-gray-600 active:scale-95 cursor-pointer"
          >
            Edit
          </button>
          <button
            onClick={handleDeleteTask}
            aria-label={`Delete "${title}"`}
            className="text-xs px-2 py-1 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded transition-all duration-150 hover:bg-red-100 dark:hover:bg-red-900/50 active:scale-95 cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  );
};
