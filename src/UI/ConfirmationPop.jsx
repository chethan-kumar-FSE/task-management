export const ConfirmationPopUp = ({ handleCancel, handleConfirm, confirmationText }) => {
  return (
    <div className="text-center" role="alertdialog" aria-describedby="confirm-text">
      <div aria-hidden="true" className="flex items-center justify-center w-12 h-12 mx-auto rounded-full bg-red-100 mb-4 animate-fadeInUp">
        <span className="text-red-600 text-xl">!</span>
      </div>

      <p id="confirm-text" className="text-sm text-gray-700 dark:text-gray-300 font-medium mb-6 leading-relaxed">
        {confirmationText}
      </p>

      <div className="flex justify-center gap-3">
        <button
          onClick={handleCancel}
          aria-label="Cancel deletion"
          className="px-4 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-150 active:scale-95 cursor-pointer"
        >
          Cancel
        </button>

        <button
          onClick={handleConfirm}
          aria-label="Confirm deletion"
          className="px-4 py-2 text-sm rounded-lg bg-red-600 text-white hover:bg-red-700 hover:shadow-md transition-all duration-150 active:scale-95 shadow-sm cursor-pointer"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
