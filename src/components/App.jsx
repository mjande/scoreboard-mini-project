import { useEffect, useState } from "react";
import DateInput from "./DateInput";
import { SportSelect, StateSelect } from "./SportStateSelect";
import Game from "./Game";
import "../styles/App.css";
import dayjs from "dayjs";
import GenderFilters from "./GenderFilters";

export default function App() {
  const todaysDate = new Date(Date.now()).toISOString().substring(0, 10);
  const [date, setDate] = useState(todaysDate);
  const [sportId, setSportId] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [genderId, setGenderId] = useState("");

  const [games, setGames] = useState([]);

  useEffect(() => {
    async function updateGames() {
      const url = new URL("http://localhost:1234/v2/games?");
      url.searchParams.append("date", date);

      if (sportId) {
        url.searchParams.append("sport_id", sportId);
      }
      if (stateCode) {
        url.searchParams.append("state", stateCode);
      }
      if (genderId) {
        url.searchParams.append("gender_id", genderId);
      }

      const response = await fetch(url, { mode: "cors" });
      const json = await response.json();
      setGames(json.data);
    }

    updateGames();
  }, [date, sportId, stateCode, genderId]);

  return (
    <>
      <nav></nav>
      <h1>Scoreboard</h1>
      <form>
        <DateInput date={date} setDate={setDate} />
        <SportSelect setSportId={setSportId} />
        <StateSelect setStateCode={setStateCode} />
        <GenderFilters genderId={genderId} setGenderId={setGenderId} />
      </form>

      <h2>Games for {dayjs(date).format("dddd, MMMM D, YYYY")}</h2>
      <div className="games-container">
        {games.length >= 1
          ? games.map((game) => <Game key={game.id} data={game} />)
          : "Sorry, there are no games on this date that match those conditions."}
      </div>
    </>
  );
}
