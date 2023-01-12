import { render, screen } from "@testing-library/react";
import App from "../components/App";

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

it("renders at least one game on initial page load", async () => {
  render(<App />);
  const games = await screen.findAllByTestId("game");
  expect(games.length).toBeGreaterThan(1);
});

it("renders games on date change", async () => {
  render(<App />);
  const games = await screen.findAllByTestId("game");
  expect(games.length).toBeGreaterThan(1);
});
