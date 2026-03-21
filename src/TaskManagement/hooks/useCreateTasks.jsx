import { useState } from "react";
import { taskManager } from "../utils/taskManager";
import { taskFields } from "../formFields/taskFields";

const useCreateTasks = ({ isEdit, taskId, setCurrentTasks, onClose }) => {
  const [formFields, setFormFields] = useState(isEdit ? taskManager.getTask(taskId) : {});
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    taskFields.forEach((field) => {
      const value = formFields[field?.name];
      const name = field?.name;

      const rules = field?.validate || {};

      if (rules?.isRequired && !value) {
        newErrors[name] = "This field is required";
        return;
      }

      if (rules?.minLength && value?.length < rules?.minLength) {
        newErrors[name] = `The min length must be ${rules?.minLength}`;
      }
    });

    setErrors(newErrors);

    return Object.values(newErrors).length > 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isInValid = validate();

    if (isInValid) return;

    let updatedTasks = [];

    if (isEdit) {
      updatedTasks = taskManager.updateTask(taskId, formFields);
    } else {
      const newTask = {
        taskId: crypto.randomUUID(),
        ...formFields,
        status: "pending",
      };
      updatedTasks = taskManager.addTask(newTask);
    }

    setCurrentTasks(updatedTasks);
    setFormFields({});

    onClose();
  };

  const handleChange = (e, name) => {
    const { value } = e.target || {};
    setFormFields((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return {
    handleChange,
    handleSubmit,
    errors,
    formFields,
  };
};

export { useCreateTasks };
