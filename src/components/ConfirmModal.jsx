import React from "react";

const ConfirmModal = ({ show, onClose, onConfirm, customerName }) => {
  const handleConfirm = () => {
    onClose();
    onConfirm();
  };

  return (
    <>
      {show && (
        <div className="absolute inset-0 bg-black/40">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-4">
            <h2 className="mb-2 text-xl lg:text-2xl">Delete Customer</h2>
            <p className="text-sm lg:text-base">
              Are you sure you want to delete{" "}
              <span className="font-semibold">{customerName}</span>?
            </p>
            <button
              className="mt-3 w-full rounded bg-yellow-500 p-2 text-white hover:bg-yellow-600"
              onClick={handleConfirm}
            >
              Yes
            </button>
            <button
              className="mt-2 w-full rounded border border-gray-400 p-2 hover:bg-gray-400"
              onClick={onClose}
            >
              No
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmModal;
