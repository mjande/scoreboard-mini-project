import "../styles/Game.css";

const sportDict = {
  1: "Basketball",
  2: "Football",
  3: "Baseball",
  4: "Softball",
  5: "Lacrosse",
  6: "Soccer",
  7: "Volleyball",
  8: "Field Hockey",
  9: "Ice Hockey",
  10: "Water Polo",
  11: "Cross Country",
  12: "Golf",
  13: "Tennis",
};

export default function Game({ data }) {
  const team1 = data["game_teams"][0]["team"];
  const team1Score = data["game_teams"][0]["score"];
  const team2 = data["game_teams"][1]["team"];
  const team2Score = data["game_teams"][1]["score"];

  return (
    <div data-testid={"game"} className="game-container">
      <div className="game-row info-row">
        <div>{team1.state}</div>
        <div>{sportDict[team1.sport_id]}</div>
      </div>

      <div className="game-row team-row">
        <div>{`${team1.name} ${team1.mascot}`}</div>
        <div>{team1Score}</div>
      </div>
      <div className="game-row team-row">
        <div>{`${team2.name} ${team2.mascot}`}</div>
        <div>{team2Score}</div>
      </div>
    </div>
  );
}
