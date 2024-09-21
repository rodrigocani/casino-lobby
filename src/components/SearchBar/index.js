import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative max-w-96">
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-500" />
      <input
        type="text"
        placeholder="Search games..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full p-3 pl-10 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200 focus:bg-gray-200"
      />
    </div>
  );
};

export default SearchBar;
