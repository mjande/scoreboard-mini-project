import { render, screen } from "@testing-library/react";
import App from "./App";

// TODO: Move API mocks and mock data to separate file
function setupFetchStub(data) {
  return function fetchStub(url) {
    return new Promise((resolve) => {
      resolve({
        json: () => Promise.resolve({ data }),
      });
    });
  };
}

// jest.spyOn(global, "fetch").mockImplementation(setupFetchStub(fakeData));

it("renders at least one game on initial page load", () => {
  render(<App />);
  const games = screen.getByRole("game");
  expect(games.length).toBeGreaterThan(1);
});

it("renders games on date change", () => {
  render(<App />);
  const games = screen.getAllByRole("game for 1/11/22");
  expect(games.length).toBeGreaterThan(1);
});
