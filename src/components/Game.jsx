export default function Game({ data }) {
  const date = data["date"].substring(0, 10);
  const team1 = data["game_teams"][0]["team"];
  const team1Score = data["game_teams"][0]["score"];
  const team2 = data["game_teams"][1]["team"];
  const team2Score = data["game_teams"][1]["score"];

  return (
    <div>
      <div>{date}</div>
      <div>{team1.state}</div>
      <div>{`${team1.name} ${team1.mascot} ${team1Score}`}</div>
      <div>{`${team2.name} ${team2.mascot} ${team2Score}`}</div>
    </div>
  );
}
