import React from "react";

const CategoryDropdown = ({
  categories,
  selectedCategory,
  onCategoryChange,
  isActive,
}) => {
  return (
    <select
      className={`w-40 h-12 appearance-none border text-center p-3 rounded-full ${isActive ? "bg-gray-200" : "bg-white"}`}
      id="category"
      value={selectedCategory}
      onChange={(e) => onCategoryChange(e.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map((cat, index) => (
        <option key={index} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
};

export default CategoryDropdown;
