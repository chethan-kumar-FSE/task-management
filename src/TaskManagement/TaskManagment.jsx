import FilterList from "./components/FilterList/FilterList";
import { TasksList } from "./components/TasksList/TasksList";
import ToggleView from "./components/ToggleView/ToggleView";
import { useTasksListing } from "./hooks/useTasksListing";
import { ThemeToggler } from "../components/ThemeToggler";
import { TasksCount } from "./components/TasksCount/TasksCount";

import { lazy, Suspense } from "react";

const TaskCreateForm = lazy(() => import("./components/TaskCreateForm/TaskCreateForm"));
const ConfirmationPopUp = lazy(() => import("../UI/ConfirmationPop"));
const CustomModal = lazy(() => import("../UI/CustomModal"));

export const TaskManagement = () => {
  const {
    setCurrentTasks,
    handleAddTask,
    handleCancel,
    handleDeleteTask,
    handleConfirm,
    handleEditTask,
    closeModal,
    isDeleteModalOpen,
    isFormModalOpen,
    isEdit,
    taskId,
    handleSearchQuery,
    handleStatusFilter,
    handlePriorityFilter,
    selectedStatus,
    selectedPriority,
    searchQuery,
    filteredTasks,
    taskCounts,
    handleToggleTaskStatus,
    setViewType,
    viewType,
    hasItems,
  } = useTasksListing();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 tracking-tight">Task Manager</h1>

        <div className="flex items-center gap-3">
          <ThemeToggler />
          <button
            onClick={handleAddTask}
            aria-label="Add a new task"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 hover:shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
          >
            Add Task
          </button>
        </div>
      </header>

      <main id="main-content">
        <TasksCount taskCounts={taskCounts} />
        {hasItems && (
          <>
            <ToggleView setViewType={setViewType} viewType={viewType} />
            <div className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <FilterList
                handleSearchQuery={handleSearchQuery}
                handlePriorityFilter={handlePriorityFilter}
                handleStatusFilter={handleStatusFilter}
                selectedStatus={selectedStatus}
                selectedPriority={selectedPriority}
                searchQuery={searchQuery}
              />
            </div>
          </>
        )}

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-4">
          <TasksList
            currentTasks={filteredTasks}
            handleEditTask={handleEditTask}
            handleDeleteTask={handleDeleteTask}
            handleToggleTaskStatus={handleToggleTaskStatus}
            viewType={viewType}
          />
        </div>
      </main>

      {isFormModalOpen && (
        <Suspense fallback={<div>Loading...</div>}>
          <CustomModal isOpen={isFormModalOpen} onClose={closeModal} title={isEdit ? "Edit Task" : "Create Task"}>
            <TaskCreateForm taskId={taskId} isEdit={isEdit} setCurrentTasks={setCurrentTasks} onClose={closeModal} />
          </CustomModal>
        </Suspense>
      )}

      {isDeleteModalOpen && (
        <Suspense fallback={<div>Loading...</div>}>
          <CustomModal isOpen={isDeleteModalOpen} onClose={handleCancel} title="Confirm Deletion">
            <ConfirmationPopUp handleConfirm={handleConfirm} handleCancel={handleCancel} confirmationText="Are you sure you want to delete ?" />
          </CustomModal>
        </Suspense>
      )}
    </div>
  );
};
