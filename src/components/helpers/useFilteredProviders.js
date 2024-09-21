import { useEffect, useState } from "react";

const useFilteredProviders = (games, selectedCategory) => {
  const [filteredProviders, setFilteredProviders] = useState([]);

  useEffect(() => {
    if (selectedCategory && games) {
      const relevantProviders = [
        ...new Set(
          games
            .filter((game) =>
              game.cats.some((cat) => cat.title === selectedCategory)
            )
            .map((game) => game.provider_title)
        ),
      ];
      setFilteredProviders(relevantProviders);
    } else {
      const uniqueProviders = [
        ...new Set(games.map((game) => game.provider_title)),
      ];
      setFilteredProviders(uniqueProviders);
    }
  }, [selectedCategory, games]);

  return filteredProviders;
};

export default useFilteredProviders;
