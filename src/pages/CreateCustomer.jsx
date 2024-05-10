import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useNavigate } from "react-router-dom";
import { createCustomer } from "../utils/customerData";

const CreateCustomer = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    phoneNumber: "",
    email: "",
    address: "",
  });
  const phoneNumberIsValid = formData.phoneNumber.length > 10;

  const formatDate = (date) => {
    const [year, month, day] = date.split("-");
    return `${day}.${month}.${year}`;
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!phoneNumberIsValid) {
      alert("Phone number is not valid");
      return;
    }
    const customer = {
      name: `${formData.firstName} ${formData.lastName}`,
      dateOfBirth: formatDate(formData.dateOfBirth),
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      address: formData.address,
    };
    createCustomer(customer, () => navigate("/"));
  };

  return (
    <div className="container mt-5 rounded-md bg-white px-3 py-4 lg:mt-10">
      <h1 className="text-xl lg:text-2xl">Create Customer</h1>

      <form onSubmit={handleSubmit}>
        <div className="mt-3 text-sm">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            placeholder="John"
            value={formData.firstName}
            onChange={handleInputChange}
            className="mt-1 w-full rounded border p-2 focus:outline-none focus:ring-1 focus:ring-indigo-600"
            required
          />
        </div>

        <div className="mt-3 text-sm lg:text-base">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            placeholder="Doe"
            value={formData.lastName}
            onChange={handleInputChange}
            className="mt-1 w-full rounded border p-2 focus:outline-none focus:ring-1 focus:ring-indigo-600"
            required
          />
        </div>

        <div className="mt-3 text-sm lg:text-base">
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            className="mt-1 w-full rounded border p-2 focus:outline-none focus:ring-1 focus:ring-indigo-600"
            required
          />
        </div>

        <div className="mt-3 text-sm lg:text-base">
          <label htmlFor="phoneNumber">Phone Number</label>
          <PhoneInput
            value={formData.phoneNumber}
            onChange={(value) =>
              setFormData({ ...formData, phoneNumber: value })
            }
            inputClassName={`mt-1 w-full rounded p-2 focus:outline-none focus:ring-1 focus:ring-indigo-600`}
          />
        </div>

        <div className="mt-3 text-sm lg:text-base">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="YR4dG@example.com"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 w-full rounded border p-2 focus:outline-none focus:ring-1 focus:ring-indigo-600"
            required
          />
        </div>

        <div className="mt-3 text-sm lg:text-base">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="123 Main St, Anytown USA"
            value={formData.address}
            onChange={handleInputChange}
            className="mt-1 w-full rounded border p-2 focus:outline-none focus:ring-1 focus:ring-indigo-600"
            required
          />
        </div>

        <div className="mt-5 space-y-2 text-sm lg:text-base">
          <button
            type="submit"
            className="w-full rounded bg-indigo-600 p-2 text-white hover:bg-indigo-500"
          >
            Create
          </button>
          <button
            className="w-full rounded border border-gray-300 p-2 hover:bg-gray-300"
            onClick={() => navigate("/")}
          >
            Discard
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCustomer;
