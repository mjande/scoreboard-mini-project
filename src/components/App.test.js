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

test("renders today's games on initial page load", () => {
  render(<App />);
  const games = screen.getByRole("game");
  expect(games).toHaveLength(25);
});
