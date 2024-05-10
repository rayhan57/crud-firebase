import React, { useEffect, useState } from "react";
import SearchCustomers from "../components/SearchCustomers";
import ButtonCreateCustomers from "../components/ButtonCreateCustomers";
import CustomerCard from "../components/CustomersCard";
import ConfirmModal from "../components/ConfirmModal";
import EditModal from "../components/EditModal";
import { deleteCustomer, getCustomers } from "../utils/customerData";

const HomePage = () => {
  const [customers, setCustomers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [customerName, setCustomerName] = useState(null);
  const [customerId, setCustomerId] = useState(null);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    phoneNumber: "",
    email: "",
    address: "",
  });

  const fetchCustomers = async () => {
    const customers = await getCustomers();
    setCustomers(customers);
  };

  const handleSearch = () => {
    if (!searchInput) return;
    console.log(searchInput);
  };

  const openModalEdit = (customer) => {
    setShowModalEdit(true);
    const formattedDate = (date) => {
      const [day, month, year] = date.split(".");
      return `${year}-${month}-${day}`;
    };
    setFormData({
      firstName: customer.name.split(" ")[0],
      lastName: customer.name.split(" ").slice(1).join(" "),
      dateOfBirth: formattedDate(customer.dateOfBirth),
      phoneNumber: customer.phoneNumber,
      email: customer.email,
      address: customer.address,
    });
  };

  const editCustomer = (e) => {
    e.preventDefault();
    console.log("Edit customer");
  };

  const openModalRemove = (customer) => {
    setShowModal(true);
    setCustomerName(customer.name);
    setCustomerId(customer.id);
  };

  const removeCustomer = () => {
    deleteCustomer(customerId, () => fetchCustomers());
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <>
      <div className="container mt-5 lg:mt-10">
        <h1 className="text-center text-2xl">Customers</h1>

        <div className="mt-3 space-y-3 rounded-md bg-white p-2">
          <ButtonCreateCustomers />
          <SearchCustomers
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            handleSearch={handleSearch}
          />
        </div>

        <div className="mt-3 grid gap-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {customers.map((customer, index) => (
            <CustomerCard
              key={index}
              customer={customer}
              openEditModal={openModalEdit}
              openRemoveModal={openModalRemove}
            />
          ))}
        </div>
      </div>
      <ConfirmModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={removeCustomer}
        customerName={customerName}
      />
      <EditModal
        show={showModalEdit}
        onClose={() => setShowModalEdit(false)}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={editCustomer}
      />
    </>
  );
};

export default HomePage;
