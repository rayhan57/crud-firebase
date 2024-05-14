import React, { useEffect } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const Alert = ({ showAlert, setShowAlert, alertMessage }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [showAlert]);

  return (
    <>
      <AnimatePresence>
        {showAlert && (
          <motion.div
            className="fixed left-1/2 top-5 flex w-[80%] -translate-x-1/2 items-center gap-2 rounded-md bg-green-600 p-3 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FaRegCheckCircle size={20} /> <p>{alertMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Alert;
