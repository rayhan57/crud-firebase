import React, { useEffect } from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const Alert = ({ showAlert, setShowAlert, alertMessage }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [showAlert]);

  return (
    <>
      {showAlert && (
        <div className="fixed left-1/2 top-5 flex w-[80%] -translate-x-1/2 items-center gap-2 rounded-md bg-green-600 p-3 text-white">
          <FaRegCheckCircle size={20} /> <p>{alertMessage}</p>
        </div>
      )}
    </>
  );
};

export default Alert;
