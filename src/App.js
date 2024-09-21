import React, { useEffect, useState } from "react";
import getGames from "./components/helpers/getGames";
import GameList from "./components/GameList";
import Navbar from "./components/Navbar";

const App = () => {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredGames, setFilteredGames] = useState([]);
  const [visibleGamesCount, setVisibleGamesCount] = useState(16);

  const fetchGames = async () => {
    const gamesData = await getGames();
    setGames(gamesData);
    setFilteredGames(gamesData);
  };

  useEffect(() => {
    fetchGames();
  }, []);

  const handleFilterChange = (category, provider) => {
    let newFilteredGames = games;

    if (category) {
      newFilteredGames = newFilteredGames.filter((game) =>
        game.cats.some((cat) => cat.title === category)
      );
    }

    if (provider) {
      newFilteredGames = newFilteredGames.filter(
        (game) => game.provider_title === provider
      );
    }

    setFilteredGames(newFilteredGames);
  };

  const filteredGamesList = filteredGames.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const loadMore = () => {
    setVisibleGamesCount((prevCount) => prevCount + 16);
  };

  return (
    <div className="container mx-auto p-6">
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        games={games}
        onFilterChange={handleFilterChange}
      />
      <GameList games={filteredGamesList.slice(0, visibleGamesCount)} />
      {visibleGamesCount < filteredGamesList.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMore}
            className="h-12 w-40 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
