import { STATUS } from "../constants/constant";

class TaskManager {
  constructor() {
    this.TASK_KEY = "TASK_KEY";
  }

  getTasks() {
    try {
      const data = localStorage.getItem(this.TASK_KEY);
      return data ? JSON.parse(data) : [];
    } catch (err) {
      console.error("Corrupted localStorage", err);
      return [];
    }
  }

  setTasks(tasks) {
    localStorage.setItem(this.TASK_KEY, JSON.stringify(tasks));
  }

  addTask(item) {
    if (!item) {
      throw new Error("Task is required");
    }

    const tasks = this.getTasks();
    const updated = [...tasks, item];

    this.setTasks(updated);
    return updated;
  }

  getTask(taskId) {
    if (!taskId) {
      throw new Error("taskId is required");
    }

    const tasks = this.getTasks();
    return tasks.find((task) => task.taskId === taskId);
  }

  updateTask(taskId, updatedTask) {
    if (!taskId || !updatedTask) {
      throw new Error("taskId and updatedTask are required");
    }

    const tasks = this.getTasks();

    const updated = tasks.map((task) => (task.taskId === taskId ? { ...task, ...updatedTask } : task));

    this.setTasks(updated);
    return updated;
  }

  deleteTask(taskId) {
    if (!taskId) {
      throw new Error("taskId is required");
    }

    const tasks = this.getTasks();
    const updated = tasks.filter((task) => task.taskId !== taskId);

    this.setTasks(updated);
    return updated;
  }

  updateToggleStatus(taskId) {
    if (!taskId) {
      throw new Error("taskId is required");
    }

    const tasks = this.getTasks();

    const updated = tasks.map((task) =>
      task.taskId === taskId
        ? {
            ...task,
            status: task.status === STATUS.PENDING ? STATUS.COMPLETED : STATUS.PENDING,
          }
        : task,
    );

    this.setTasks(updated);
    return updated;
  }

  hasItems() {
    const items = this.getTasks();
    return items.length > 0;
  }
}
const taskManager = new TaskManager();
export { taskManager };
