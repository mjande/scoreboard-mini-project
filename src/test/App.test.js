import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../components/App";

it("renders at least one game on initial page load", async () => {
  render(<App />);
  const games = await screen.findAllByTestId("game");
  expect(games.length).toBeGreaterThan(1);
});

it("renders games for today on initial page load", async () => {
  render(<App />);
  const gameDates = await screen.findAllByTestId("date");
  const todaysDate = new Date().toISOString().substring(0, 10);

  expect(
    gameDates.every((game) => game.textContent === todaysDate)
  ).toBeTruthy();
});

// TODO revise with mocked API data
it("renders games for new date on date change", async () => {
  render(<App />);
  const dateInput = screen.getByLabelText("date-input");
  userEvent.type(dateInput, "01132023");

  const gameDates = await screen.findAllByTestId("date");
  console.log(gameDates[0].textContent);

  expect(
    gameDates.every((game) => game.textContent === "2023-01-13")
  ).toBeTruthy();
});
