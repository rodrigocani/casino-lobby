import React from "react";
import SearchBar from "../SearchBar";
import Filtering from "../Filtering";
import { TrophyIcon } from "@heroicons/react/24/outline";

const Navbar = ({ searchTerm, setSearchTerm, games, onFilterChange }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="w-2/12 flex gap-2">
        <TrophyIcon className="h-10 w-10 relative" />
        <h1 className="text-3xl font-bold">Lucky Shares</h1>
      </div>
      <div className="w-1/3">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      </div>
      <div>
        <Filtering games={games} onFilterChange={onFilterChange} />
      </div>
    </div>
  );
};

export default Navbar;
