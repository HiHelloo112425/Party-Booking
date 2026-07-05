import { useState, useEffect } from "react";
import Button from "../../Button";

function CustomModal({ isOpen, onClose, title, children, onConfirm }) {
  const [shouldRender, setShouldRender] = useState(isOpen);

  if (isOpen && !shouldRender) setShouldRender(true);

  const handleTransitionEnd = () => {
    if (!isOpen) setShouldRender(false);
  };

  if (!shouldRender) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      style={{
        opacity: isOpen ? 1 : 0,
        transition: "opacity 200ms ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        onTransitionEnd={handleTransitionEnd}
        className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md mx-4 animate-fade-up"
        style={{
          transform: isOpen ? "scale(1)" : "scale(0.97)",
          opacity: isOpen ? 1 : 0,
          transition: "transform 200ms ease, opacity 200ms ease",
        }}
      >

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="text-gray-600 text-sm">{children}</div>

        <div className="flex justify-end gap-2 mt-6">
          <Button
            bgColor="bg-white"
            textColor="text-black"
            borderColor="border border-gray-200"
            widthSize="w-full"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            bgColor="bg-primary-red"
            textColor="text-white"
            borderColor="border border-gray-200"
            widthSize="w-full"
            onClick={() => {
              onClose();
              onConfirm();
            }}
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CustomModal;
