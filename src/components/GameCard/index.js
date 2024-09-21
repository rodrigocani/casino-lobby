import React, { useState } from "react";

const GameCard = ({ game }) => {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
      {!hasError ? (
        <img
          src={game.icon_2}
          alt={game.name}
          className="w-full h-40 object-cover"
          onError={handleError}
        />
      ) : (
        <div className="flex items-center justify-center w-full h-40 bg-gray-200">
          <span className="text-lg font-bold text-gray-900">Lucky Shares</span>
        </div>
      )}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900">{game.name}</h3>
        <p className="text-gray-500">{game.provider_title}</p>
      </div>
    </div>
  );
};

export default GameCard;
