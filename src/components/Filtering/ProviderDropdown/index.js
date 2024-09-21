import React from "react";

const ProviderDropdown = ({
  providers,
  selectedProvider,
  onProviderChange,
  isActive,
}) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  return (
    <select
      className={`w-40 h-12 appearance-none border text-center p-3 rounded-full ${isActive ? "bg-gray-200" : "bg-white"}`}
      id="provider"
      value={selectedProvider}
      onChange={(e) => onProviderChange(e.target.value)}
    >
      <option value="">All Providers</option>
      {providers.map((provider, index) => (
        <option key={index} value={provider}>
          {capitalizeFirstLetter(provider)}
        </option>
      ))}
    </select>
  );
};

export default ProviderDropdown;
