const ToggleView = ({ setViewType, viewType }) => {
  return (
    <div role="group" aria-label="View layout" className="flex justify-end mb-4 gap-2">
      <button
        onClick={() => setViewType("grid")}
        aria-pressed={viewType === "grid"}
        className={`px-3 py-1 rounded-lg text-sm transition-all duration-200 active:scale-95 cursor-pointer ${viewType === "grid" ? "bg-blue-600 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"}`}
      >
        Card View
      </button>

      <button
        onClick={() => setViewType("list")}
        aria-pressed={viewType === "list"}
        className={`px-3 py-1 rounded-lg text-sm transition-all duration-200 active:scale-95 cursor-pointer ${viewType === "list" ? "bg-blue-600 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"}`}
      >
        List View
      </button>
    </div>
  );
};

export default ToggleView;
