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

  const state = homeTeam["team"].state;
  const sport = `${genderDict[data.gender_id]} ${sportDict[data.sport_id]}`;

  // If no image data, img element var is undefined
  const homeTeamImg = homeTeam["team"]["image"] && (
    <img
      src={homeTeam["team"]["image"]}
      alt={`${homeTeam["team"].name} mascot`}
      data-testid="home-team-img"
    />
  );
  const awayTeamImg = awayTeam["team"]["image"] && (
    <img
      src={awayTeam["team"]["image"]}
      alt={`${awayTeam["team"].name} mascot`}
      data-testid="away-team-img"
    />
  );

  // In case either team is missing mascot data
  const homeTeamMascot = homeTeam["team"].mascot || "";
  const awayTeamMascot = awayTeam["team"].mascot || "";

  const homeTeamName = `${homeTeam["team"].name} ${homeTeamMascot}`;
  const awayTeamName = `vs. ${awayTeam["team"].name} ${awayTeamMascot}`;

  return (
    <div className="game-container" data-testid="game">
      <div className="game-row info-row">
        <div data-testid="state">{state}</div>
        <div data-testid="sport">{sport}</div>
      </div>

      <div className="game-row team-row">
        <div className="mascot-team">
          {homeTeamImg}
          <div data-testid="home-team-name">{homeTeamName}</div>
        </div>
        <div className="team-score" data-testid="home-team-score">
          {homeTeam["score"]}
        </div>
      </div>
      <div className="game-row team-row">
        <div className="mascot-team">
          {awayTeamImg}
          <div data-testid="away-team-name">{awayTeamName}</div>
        </div>

        <div className="team-score" data-testid="away-team-score">
          {awayTeam["score"]}
        </div>
      </div>
    </div>
  );
}
