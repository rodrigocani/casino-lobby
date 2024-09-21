const getGames = async () => {
  try {
    const response = await fetch("/data.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const games = await response.json();
    return games;
  } catch (error) {
    console.error("Failed to fetch games:", error);
    return [];
  }
};

export default getGames;
