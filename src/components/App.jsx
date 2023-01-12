import { useEffect, useState } from "react";
import Game from "./Game";
import "./App.css";

export default function App() {
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));

  const [games, setGames] = useState([]);

  async function updateGames() {
    const date = document.getElementById("date-input").value;
    const url = new URL(
      "http://localhost:1234/v2/games?date=2022-05-12&priority_order=true"
    );
    url.searchParams.append("date", date);

    const response = await fetch(url, { mode: "cors" });
    const json = await response.json();
    setGames(json.data);
    console.log(json.data[0]);
  }

  useEffect(() => {
    updateGames();
  }, [date]);

  return (
    <div>
      <h1>Scoreboard</h1>
      <form>
        <input
          id="date-input"
          type="date"
          defaultValue={date}
          onChange={(e) => setDate(e.value)}
        />
      </form>
      <div id="games-container">
        {games.map((game) => (
          <Game key={game.id} data={game} />
        ))}
      </div>
    </div>
  );
}
