import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomerCard from "../components/CustomersCard";
import { motion } from "framer-motion";
import {
  deleteCustomer,
  getCustomerByName,
  updateCustomer,
} from "../utils/customerData";
import ConfirmModal from "../components/ConfirmModal";
import EditModal from "../components/EditModal";
import Alert from "../components/Alert";
import { formatDate } from "../utils/formatDate";

const SearchPage = () => {
  const { searchTerm } = useParams();
  const [customersSearch, setCustomersSearch] = useState([]);
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
    const customers = await getCustomerByName(searchTerm);
    setCustomersSearch(customers);
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
    <div className="container mt-5 lg:mt-10">
      <h1 className="text-lg lg:text-xl">
        Search results for: <span className="font-semibold">{searchTerm}</span>
      </h1>

      <div className="mt-3 grid gap-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {customersSearch.map((customer, index) => (
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
    </div>
  );
};

export default SearchPage;
