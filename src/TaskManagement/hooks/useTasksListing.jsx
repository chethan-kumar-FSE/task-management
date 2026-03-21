import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { taskManager } from "../utils/taskManager";
import { OPERATION } from "../constants/constant";

export const useTasksListing = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentTasks, setCurrentTasks] = useState(taskManager?.getTasks() || []);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedPriority, setSelectedPriority] = useState("all");
  const [viewType, setViewType] = useState("grid"); // "grid" | "compact"

  let isEdit = searchParams.get("modal") === OPERATION.EDIT;

  const isFormModalOpen = searchParams.get("modal") === OPERATION.ADD || searchParams.get("modal") === OPERATION?.EDIT;
  const isDeleteModalOpen = searchParams.get("modal") === OPERATION.DELETE;

  const taskId = searchParams.get("taskId");

  const taskCounts = useMemo(() => {
    let total = currentTasks.length;
    let pending = 0;
    let completed = 0;

    for (let task of currentTasks) {
      if (task?.status === "pending") pending++;
      if (task?.status === "completed") completed++;
    }

    return { total, pending, completed };
  }, [currentTasks]);

  const filteredTasks = useMemo(() => {
    return currentTasks.filter((task) => {
      const matchesSearch =
        !searchQuery ||
        task?.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task?.description?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus = selectedStatus === "all" || task?.status === selectedStatus;

      const matchesPriority = selectedPriority === "all" || task?.priority === selectedPriority;

      return matchesSearch && matchesStatus && matchesPriority;
    });
  }, [currentTasks, searchQuery, selectedStatus, selectedPriority]);

  const handleAddTask = () => {
    setSearchParams({ modal: OPERATION.ADD });
  };

  const closeModal = () => {
    setSearchParams({}, { replace: true });
  };

  const handleEditTask = (taskId) => {
    setSearchParams({ modal: OPERATION.EDIT, taskId: taskId });
  };

  const handleConfirm = () => {
    const updatedTasks = taskManager.deleteTask(taskId);
    setCurrentTasks(updatedTasks);
    setSearchParams({}, { replace: true });
  };

  const handleCancel = () => {
    setSearchParams({}, { replace: true });
  };

  const handleDeleteTask = (taskId) => {
    setSearchParams({ modal: OPERATION.DELETE, taskId: taskId });
  };
  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleStatusFilter = (e) => {
    setSelectedStatus(e.target.value);
  };

  const handlePriorityFilter = (e) => {
    setSelectedPriority(e.target.value);
  };

  const handleToggleTaskStatus = (taskId) => {
    const updatedTasks = taskManager.updateToggleStatus(taskId);
    setCurrentTasks(updatedTasks);
  };

  return {
    currentTasks,
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
    hasItems: taskManager.hasItems(),
  };
};
