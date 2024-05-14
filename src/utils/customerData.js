import app from "../firebaseConfig";
import { getDatabase, ref, set, push, get, remove } from "firebase/database";

export const createCustomer = async (customer, onSuccess) => {
  const db = getDatabase(app);
  const newCustomer = push(ref(db, "customers"));
  set(newCustomer, customer)
    .then(() => {
      onSuccess();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getCustomers = async () => {
  const db = getDatabase(app);
  const customersRef = ref(db, "customers");
  const snapshot = await get(customersRef);
  const customers = snapshot.val() || {};
  return Object.keys(customers).map((key) => ({ ...customers[key], id: key }));
};

export const updateCustomer = async (id, customer, onSuccess) => {
  const db = getDatabase(app);
  const customerRef = ref(db, `customers/${id}`);
  await set(customerRef, customer)
    .then(() => {
      onSuccess();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deleteCustomer = async (id, onSuccess) => {
  const db = getDatabase(app);
  const customerRef = ref(db, `customers/${id}`);
  await remove(customerRef)
    .then(() => {
      onSuccess();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getCustomerByName = async (name) => {
  const db = getDatabase(app);
  const customersRef = ref(db, "customers");
  const snapshot = await get(customersRef);
  const customers = snapshot.val() || {};
  return Object.keys(customers)
    .map((key) => ({ ...customers[key], id: key }))
    .filter((customer) =>
      customer.name.toLowerCase().includes(name.toLowerCase()),
    );
};
