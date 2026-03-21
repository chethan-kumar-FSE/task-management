import { taskFields } from "../../formFields/taskFields";
import { CustomFields } from "../../../UI/CustomFormFields";
import { useCreateTasks } from "../../hooks/useCreateTasks";

const TaskCreateForm = ({ setCurrentTasks, onClose, isEdit, taskId }) => {
  const { handleChange, handleSubmit, formFields, errors } = useCreateTasks({
    setCurrentTasks,
    onClose,
    isEdit,
    taskId,
  });

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} aria-label={isEdit ? "Edit task form" : "Create task form"} noValidate className="space-y-5">
        <div className="grid grid-cols-1 gap-4">
          {taskFields.map((field) => {
            return (
              <div key={field?.id} className="flex flex-col gap-1">
                <CustomFields
                  {...field}
                  value={formFields[field?.name] || ""}
                  error={errors[field?.name]}
                  onChange={(e) => handleChange(e, field?.name)}
                  className={`w-full px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 ${
                    errors[field?.name] ? "border-red-400 focus:ring-red-400" : "border-gray-200 focus:ring-blue-500"
                  }`}
                />
              </div>
            );
          })}
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-150 active:scale-95 cursor-pointer"
          >
            Cancel
          </button>

          <button type="submit" className="px-5 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md transition-all duration-150 active:scale-95 shadow-sm cursor-pointer">
            {isEdit ? "Update Task" : "Create Task"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskCreateForm;
