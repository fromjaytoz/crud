import { render, screen } from "@testing-library/react";
import App from "./App";
import CharCreation from "./pages/CharCreation/CharCreation";
import AllCharacters from "./pages/AllCharacters/AllCharacters";

describe("home renders properly", () => {
  test("main text displays", () => {
    render(<App />);
    const linkElement: HTMLElement | null = screen.getByText(/Jorell's Table/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("navbar is present", () => {
    render(<App />);
    const nav: HTMLElement | null = screen.getByTestId("nav");
    expect(nav).toBeInTheDocument();
  });
});
