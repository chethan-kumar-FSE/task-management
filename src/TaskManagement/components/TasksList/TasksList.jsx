import { VIEW_TYPES } from "../../constants/constant";
import { Task } from "./Task/Task";

export const TasksList = (props) => {
  const { currentTasks, handleEditTask, handleDeleteTask, handleToggleTaskStatus, viewType = VIEW_TYPES.GRID } = props || {};
  return (
    <section aria-label="Tasks list" className="w-full">
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {!currentTasks || currentTasks.length === 0 ? "No tasks found." : `${currentTasks.length} task${currentTasks.length === 1 ? "" : "s"} shown.`}
      </div>

      {(!currentTasks || currentTasks.length === 0) && (
        <div className="flex flex-col items-center justify-center py-16 text-center text-gray-500 dark:text-gray-400">
          <p className="text-lg font-medium">No tasks found</p>
          <p className="text-sm mt-1">Try adjusting filters or add a new task</p>
        </div>
      )}

      <ul
        role="list"
        className={`w-full transition-all duration-300 ${
          viewType === VIEW_TYPES.LIST
            ? "flex flex-col gap-4 items-stretch"
            : viewType === VIEW_TYPES.GRID
              ? "grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
              : "grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {currentTasks?.map((task) => (
          <li
            key={task?.taskId}
            className={`w-full transition-all duration-300 list-none ${viewType === VIEW_TYPES.GRID ? "scale-[0.97]" : "scale-100"}`}
          >
            <Task
              {...task}
              handleEditTask={() => handleEditTask(task?.taskId)}
              handleDeleteTask={() => handleDeleteTask(task?.taskId)}
              handleToggleTaskStatus={() => handleToggleTaskStatus(task?.taskId)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
