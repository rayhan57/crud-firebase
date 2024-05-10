import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchCustomers = ({ searchInput, setSearchInput, handleSearch }) => {
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        value={searchInput}
        className="w-full rounded border p-2 focus:outline-none focus:ring-1 focus:ring-black"
        onChange={handleInputChange}
      />
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2"
        onClick={handleSearch}
      >
        <CiSearch size={20} />
      </button>
    </div>
  );
};

export default SearchCustomers;
