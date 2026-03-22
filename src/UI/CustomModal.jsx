import { useEffect, useRef } from "react";

const FOCUSABLE_SELECTORS = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

const CustomModal = ({ isOpen, onClose, title, children, footer, closeIcon, showCloseIcon = true, closeOnOverlayClick = true }) => {
  const panelRef = useRef(null);
  const onCloseRef = useRef(onClose);
  const titleId = "modal-title";

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onCloseRef.current();
        return;
      }
      if (e.key === "Tab") {
        const focusable = panelRef.current?.querySelectorAll(FOCUSABLE_SELECTORS);
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      requestAnimationFrame(() => {
        const focusable = panelRef.current?.querySelectorAll(FOCUSABLE_SELECTORS);
        if (focusable?.length) focusable[0].focus();
      });
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? titleId : undefined}
    >
      <div
        className="absolute inset-0 bg-black/50"
        aria-hidden="true"
        onClick={closeOnOverlayClick ? onClose : undefined}
        style={{ cursor: closeOnOverlayClick ? "pointer" : "default" }}
      />
      <div ref={panelRef} className="relative z-10 w-full max-w-lg rounded-2xl bg-white dark:bg-gray-800 shadow-lg p-6 animate-slideUp">
        <div className="flex justify-between items-center mb-4">
          {title && (
            <h2 id={titleId} className="text-lg font-semibold dark:text-gray-100">
              {title}
            </h2>
          )}

          {showCloseIcon && (
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white text-xl transition-transform duration-150 hover:scale-110 active:scale-90 cursor-pointer"
            >
              {closeIcon ? closeIcon : "✕"}
            </button>
          )}
        </div>

        <div className="mb-4">{children}</div>

        {footer && <div className="border-t dark:border-gray-700 pt-3">{footer}</div>}
      </div>
    </div>
  );
};

export default CustomModal;
