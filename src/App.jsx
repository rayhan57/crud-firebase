import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateCustomer from "./pages/CreateCustomer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customers/create" element={<CreateCustomer />} />
      </Routes>
    </Router>
  );
};

export default App;
