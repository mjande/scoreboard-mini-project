import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import dayjs from "dayjs";
import App from "../components/App";

// TODO: mock the API call (fairly time-consuming because of the complexity of the API data)
it("renders at least one game on initial page load", async () => {
  render(<App />);
  const games = await screen.findAllByTestId("game");
  expect(games.length).toBeGreaterThan(1);
});

it("renders games for today on initial page load", async () => {
  render(<App />);
  const todaysDate = dayjs(new Date().toISOString().substring(0, 10)).format(
    "dddd, MMMM D, YYYY"
  );

  const dateElement = screen.getByText(new RegExp(todaysDate));
  expect(dateElement).toBeInTheDocument();
});

it("reflects queried date on date change", async () => {
  render(<App />);
  const dateInput = screen.getByLabelText("date-input");
  userEvent.type(dateInput, "01132023");

  const dateElement = await screen.findByText(/Friday, January 13, 2023/);
  expect(dateElement).toBeInTheDocument();
});
