import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders today's games on initial page load", () => {
  render(<App />);
  const games = screen.getByRole("game");
  expect(games).toHaveLength(25);
});
