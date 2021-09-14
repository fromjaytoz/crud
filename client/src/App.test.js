import { render, screen } from "@testing-library/react";
import App from "./App";
import CharCreation from "./pages/CharCreation/CharCreation";
import AllCharacters from "./pages/AllCharacters/AllCharacters";

describe("home renders properly", () => {
  test("renders ", () => {
    render(<App />);
    const linkElement = screen.getByText(/Jorell's Table/i);
    expect(linkElement).toBeInTheDocument();
  });
});
