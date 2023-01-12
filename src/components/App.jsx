import { useEffect, useState } from "react";
import Game from "./Game";
import "../styles/App.css";

export default function App() {
  const todaysDate = new Date(Date.now()).toISOString().substring(0, 10);
  const [date, setDate] = useState(todaysDate);

  const [games, setGames] = useState([]);

  useEffect(() => {
    async function updateGames() {
      const url = new URL("http://localhost:1234/v2/games?");
      url.searchParams.append("date", date);

      const response = await fetch(url, { mode: "cors" });
      const json = await response.json();
      setGames(json.data);
    }

    updateGames();
  }, [date]);

  return (
    <>
      <h1>Scoreboard</h1>
      <form>
        <input
          id="date-input"
          aria-label="date-input"
          type="date"
          defaultValue={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </form>
      <div className="games-container">
        {games.map((game) => (
          <Game key={game.id} data={game} />
        ))}
      </div>
    </>
  );
}
