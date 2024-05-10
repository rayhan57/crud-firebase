import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

const CustomerCard = ({ customer, openEditModal, openRemoveModal }) => {
  const { name, dateOfBirth, phoneNumber, email, address } = customer;

  return (
    <div className="relative rounded-md bg-white p-2">
      <h1 className="mb-4 text-lg font-semibold">{name}</h1>
      <div className="space-y-2">
        <p className="text-sm font-semibold lg:text-base">
          Date of birth <br />
          <span className="font-normal">{dateOfBirth}</span>
        </p>
        <p className="text-sm font-semibold lg:text-base">
          Phone Number <br />
          <span className="font-normal">{phoneNumber}</span>
        </p>
        <p className="text-sm font-semibold lg:text-base">
          Email <br />
          <span className="font-normal">{email}</span>
        </p>
        <p className="text-sm font-semibold lg:text-base">
          Address <br />
          <span className="font-normal">{address}</span>
        </p>
      </div>

      <div className="absolute right-2 top-2 space-x-2">
        <button
          className="rounded p-1 hover:bg-gray-200"
          onClick={() => openEditModal(customer)}
        >
          <FaRegEdit size={20} />
        </button>
        <button
          className="rounded p-1 hover:bg-gray-200"
          onClick={() => openRemoveModal(customer)}
        >
          <AiOutlineDelete size={20} />
        </button>
      </div>
    </div>
  );
};

export default CustomerCard;
