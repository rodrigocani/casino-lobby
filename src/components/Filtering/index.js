import React, { useState } from "react";
import CategoryDropdown from "./CategoryDropdown";
import ProviderDropdown from "./ProviderDropdown";
import useFilteredProviders from "../helpers/useFilteredProviders";
import useFilteredCategories from "../helpers/useFilteredCategories";

const Filtering = ({ games, onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProvider, setSelectedProvider] = useState("");

  const filteredProviders = useFilteredProviders(games, selectedCategory);
  const filteredCategories = useFilteredCategories(games, selectedProvider);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onFilterChange(category, selectedProvider);
  };

  const handleProviderChange = (provider) => {
    setSelectedProvider(provider);
    onFilterChange(selectedCategory, provider);
  };

  return (
    <div className="flex gap-4">
      <CategoryDropdown
        categories={filteredCategories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        isActive={!!selectedCategory}
      />
      <ProviderDropdown
        providers={filteredProviders}
        selectedProvider={selectedProvider}
        onProviderChange={handleProviderChange}
        isActive={!!selectedProvider}
      />
    </div>
  );
};

export default Filtering;
