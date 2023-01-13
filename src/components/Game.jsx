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

const genderDict = {
  1: "Men's",
  2: "Women's",
  3: "Coed",
};

export default function Game({ data }) {
  // Assigns team data for home and away to constant (doesn't account for neutral sites)
  const homeTeam = data["game_teams"][0]["home"]
    ? data["game_teams"][0]
    : data["game_teams"][1];
  const awayTeam = data["game_teams"][0]["home"]
    ? data["game_teams"][1]
    : data["game_teams"][0];

  const team1 = data["game_teams"][0]["team"];
  const team1Score = data["game_teams"][0]["score"];
  const team2 = data["game_teams"][1]["team"];
  const team2Score = data["game_teams"][1]["score"];

  return (
    <div data-testid={"game"} className="game-container">
      <div className="game-row info-row">
        <div>{homeTeam["team"].state}</div>
        <div>{`${genderDict[data["gender_id"]]} ${
          sportDict[team1.sport_id]
        }`}</div>
      </div>

      <div className="game-row team-row">
        <div>{`${homeTeam["team"].name} ${homeTeam["team"].mascot}`}</div>
        <div>{homeTeam["score"]}</div>
      </div>
      <div className="game-row team-row">
        <div>{`${awayTeam["team"].name} ${awayTeam["team"].mascot}`}</div>
        <div>{awayTeam["score"]}</div>
      </div>
    </div>
  );
}
