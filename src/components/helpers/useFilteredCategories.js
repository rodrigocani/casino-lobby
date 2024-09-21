import { useEffect, useState } from "react";

const useFilteredCategories = (games, selectedProvider) => {
  const [filteredCategories, setFilteredCategories] = useState([]);

  useEffect(() => {
    if (selectedProvider) {
      const relevantCategories = [
        ...new Set(
          games
            .filter((game) => game.provider_title === selectedProvider)
            .flatMap((game) => game.cats.map((cat) => cat.title))
        ),
      ];
      setFilteredCategories(relevantCategories);
    } else {
      const allCategories = [
        ...new Set(games.flatMap((game) => game.cats.map((cat) => cat.title))),
      ];
      setFilteredCategories(allCategories);
    }
  }, [selectedProvider, games]);

  return filteredCategories;
};

export default useFilteredCategories;
