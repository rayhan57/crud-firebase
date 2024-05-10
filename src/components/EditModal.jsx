import React from "react";
import { PhoneInput } from "react-international-phone";

const EditModal = ({ show, onClose, handleSubmit, formData, setFormData }) => {
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <>
      {show && (
        <div className="fixed inset-0 bg-black/40">
          <div className="absolute left-1/2 top-1/2 w-96 -translate-x-1/2 -translate-y-1/2 overflow-auto rounded-md bg-white p-4 md:h-80 lg:h-auto">
            <h1 className="text-xl lg:text-2xl">Edit Customer</h1>

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
                  Edit
                </button>
                <button
                  className="w-full rounded border border-gray-300 p-2 hover:bg-gray-300"
                  onClick={() => onClose()}
                >
                  Discard
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditModal;
