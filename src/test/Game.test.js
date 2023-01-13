import { render, screen } from "@testing-library/react";
import Game from "../components/Game";

const gameData = {
  gender_id: "1",
  sport_id: "1",
  game_teams: [
    {
      home: true,
      score: 24,
      team: { name: "Team 1", image: "#", mascot: "Bears", state: "WA" },
    },
    {
      home: false,
      score: 12,
      team: { name: "Team 2", image: "#", mascot: "Eagles", state: "WA" },
    },
  ],
};

it("renders normally with ideal data", () => {
  render(<Game data={gameData} />);
  expect(screen.getByTestId("state").textContent).toBe("WA");
  expect(screen.getByTestId("sport").textContent).toBe("Men's Basketball");
  expect(screen.getByTestId("home-team-img")).toBeInTheDocument();
  expect(screen.getByTestId("home-team-name").textContent).toBe("Team 1 Bears");
  expect(screen.getByTestId("home-team-score").textContent).toBe("24");
  expect(screen.getByTestId("away-team-img")).toBeInTheDocument();
  expect(screen.getByTestId("away-team-name").textContent).toBe(
    "vs. Team 2 Eagles"
  );
  expect(screen.getByTestId("away-team-score").textContent).toBe("12");
});

it("renders correctly with missing mascot image", () => {
  const badGameData = gameData;
  badGameData["game_teams"][0]["team"].image = null;

  render(<Game data={badGameData} />);
  expect(screen.queryByTestId("home-team-img")).not.toBeInTheDocument();
});

it("renders correctly with missing mascot name", () => {
  const badGameData = gameData;
  badGameData["game_teams"][0]["team"].mascot = null;
  render(<Game data={badGameData} />);

  expect(screen.getByTestId("home-team-name").textContent).toBe("Team 1 ");
});
