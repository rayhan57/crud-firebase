import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateCustomer from "./pages/CreateCustomer";
import SearchPage from "./pages/SearchPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customers/create" element={<CreateCustomer />} />
        <Route path="/search/:searchTerm" element={<SearchPage />} />
      </Routes>
    </Router>
  );
};

export default App;
