import { useEffect, useState } from "react";
import Form from "./Form";
import Game from "./Game";
import "../styles/App.css";
import dayjs from "dayjs";

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
      <nav></nav>
      <h1>Scoreboard</h1>
      <Form date={date} setDate={setDate} />
      <h2>Games for {dayjs(date).format("dddd, MMMM D, YYYY")}</h2>
      <div className="games-container">
        {games.map((game) => (
          <Game key={game.id} data={game} />
        ))}
      </div>
    </>
  );
}
