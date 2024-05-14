import React, { useEffect, useState } from "react";
import ButtonCreateCustomers from "../components/ButtonCreateCustomers";
import ConfirmModal from "../components/ConfirmModal";
import CustomerCard from "../components/CustomersCard";
import EditModal from "../components/EditModal";
import SearchCustomers from "../components/SearchCustomers";
import {
  deleteCustomer,
  getCustomers,
  updateCustomer,
} from "../utils/customerData";
import { formatDate } from "../utils/formatDate";
import Alert from "../components/Alert";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [customerName, setCustomerName] = useState(null);
  const [customerId, setCustomerId] = useState(null);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
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

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchInput.trim()) return;
    navigate(`/search/${searchInput}`);
  };

  const openModalEdit = (customer) => {
    setShowModalEdit(true);
    setFormData({
      firstName: customer.name.split(" ")[0],
      lastName: customer.name.split(" ").slice(1).join(" "),
      dateOfBirth: formatDate(customer.dateOfBirth),
      phoneNumber: customer.phoneNumber,
      email: customer.email,
      address: customer.address,
    });
    setCustomerId(customer.id);
  };

  const editCustomer = (e) => {
    e.preventDefault();
    const customer = {
      name: `${formData.firstName} ${formData.lastName}`,
      dateOfBirth: formatDate(formData.dateOfBirth),
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      address: formData.address,
    };
    updateCustomer(customerId, customer, () => {
      fetchCustomers();
      setShowAlert(true);
      setAlertMessage("Customer updated successfully");
    });
    setShowModalEdit(false);
  };

  const openModalRemove = (customer) => {
    setShowModal(true);
    setCustomerName(customer.name);
    setCustomerId(customer.id);
  };

  const removeCustomer = () => {
    deleteCustomer(customerId, () => {
      fetchCustomers();
      setShowAlert(true);
      setAlertMessage("Customer removed successfully");
    });
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
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.5, delay: index * 0.2 },
              }}
            >
              <CustomerCard
                key={index}
                customer={customer}
                openEditModal={openModalEdit}
                openRemoveModal={openModalRemove}
              />
            </motion.div>
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
      <Alert
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        alertMessage={alertMessage}
      />
    </>
  );
};

export default HomePage;
