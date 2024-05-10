import React from "react";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ButtonCreateCustomers = () => {
  const navigate = useNavigate();

  const handleCreateCustomer = () => {
    navigate("/customers/create");
  };

  return (
    <button
      className="flex w-full items-center justify-center gap-2 rounded bg-indigo-600 p-2 text-white hover:bg-indigo-500"
      onClick={handleCreateCustomer}
    >
      <FaPlus className="rounded bg-white/40 p-1" size={20} /> Create Customer
    </button>
  );
};

export default ButtonCreateCustomers;
