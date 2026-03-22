import { useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { taskManager } from "../utils/taskManager";
import { OPERATION, PARAM_KEYS, PRIORITY, STATUS, VIEW_TYPES } from "../constants/constant";

export const useTasksListing = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const triggerRef = useRef(null);
  const [currentTasks, setCurrentTasks] = useState(taskManager?.getTasks() || []);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState(STATUS?.ALL);
  const [selectedPriority, setSelectedPriority] = useState(PRIORITY?.ALL);
  const [viewType, setViewType] = useState(VIEW_TYPES?.GRID);

  const modalSearchParam = searchParams.get(PARAM_KEYS.MODAL);

  let isEdit = searchParams.get(PARAM_KEYS.MODAL) === OPERATION.EDIT;

  const isFormModalOpen = modalSearchParam === OPERATION.ADD || modalSearchParam === OPERATION?.EDIT;
  const isDeleteModalOpen = modalSearchParam === OPERATION.DELETE;

  const taskId = searchParams.get(PARAM_KEYS.TASKID);

  const taskCounts = useMemo(() => {
    let total = currentTasks.length;
    let pending = 0;
    let completed = 0;

    for (let task of currentTasks) {
      if (task?.status === STATUS.PENDING) pending++;
      if (task?.status === STATUS.COMPLETED) completed++;
    }

    return { total, pending, completed };
  }, [currentTasks]);

  const filteredTasks = useMemo(() => {
    return currentTasks.filter((task) => {
      const matchesSearch =
        !searchQuery ||
        task?.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task?.description?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus = selectedStatus === STATUS.ALL || task?.status === selectedStatus;

      const matchesPriority = selectedPriority === PRIORITY.ALL || task?.priority === selectedPriority;

      return matchesSearch && matchesStatus && matchesPriority;
    });
  }, [currentTasks, searchQuery, selectedStatus, selectedPriority]);

  const restoreFocus = () => {
    const trigger = triggerRef.current;
    triggerRef.current = null;
    if (trigger) requestAnimationFrame(() => trigger.focus());
  };

  const handleAddTask = () => {
    triggerRef.current = document.activeElement;
    setSearchParams({ modal: OPERATION.ADD });
  };

  const closeModal = () => {
    setSearchParams({}, { replace: true });
    restoreFocus();
  };

  const handleEditTask = (taskId) => {
    triggerRef.current = document.activeElement;
    setSearchParams({ modal: OPERATION.EDIT, taskId: taskId });
  };

  const handleConfirm = () => {
    const updatedTasks = taskManager.deleteTask(taskId);
    setCurrentTasks(updatedTasks);
    setSearchParams({}, { replace: true });
    restoreFocus();
  };

  const handleCancel = () => {
    setSearchParams({}, { replace: true });
    restoreFocus();
  };

  const handleDeleteTask = (taskId) => {
    triggerRef.current = document.activeElement;
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
