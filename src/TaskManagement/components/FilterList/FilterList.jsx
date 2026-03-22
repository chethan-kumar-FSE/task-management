import { CustomFields } from "../../../UI/CustomFormFields";
import { PRIORITY, STATUS } from "../../constants/constant";

const statusOptions = [
  { label: "All", value: "all" },
  { label: "Pending", value: STATUS.PENDING },
  { label: "Completed", value: STATUS.COMPLETED },
];

const priorityOptions = [
  { label: "All", value: "all" },
  { label: "Low", value: PRIORITY.LOW },
  { label: "Medium", value: PRIORITY.MEDIUM },
  { label: "High", value: PRIORITY.HIGH },
];

const FilterList = ({ handleSearchQuery, handleStatusFilter, handlePriorityFilter, selectedStatus, selectedPriority, searchQuery }) => {
  return (
    <div role="search" aria-label="Filter tasks" className="flex flex-col md:flex-row md:items-center gap-4">
      <div className="flex-1">
        <CustomFields
          id="search-tasks"
          fieldType="textField"
          label="Search"
          value={searchQuery}
          onChange={handleSearchQuery}
          placeholder="Search tasks..."
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
      </div>

      <div className="w-full md:w-48">
        <CustomFields
          id="filter-status"
          fieldType="selectField"
          label="Status"
          value={selectedStatus}
          onChange={handleStatusFilter}
          options={statusOptions}
          className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
      </div>

      <div className="w-full md:w-48">
        <CustomFields
          id="filter-priority"
          fieldType="selectField"
          label="Priority"
          value={selectedPriority}
          onChange={handlePriorityFilter}
          options={priorityOptions}
          className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
      </div>
    </div>
  );
};

export default FilterList;
