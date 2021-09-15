import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../App";
import CharCreation from "../../pages/CharCreation/CharCreation";
import AllCharacters from "../../pages/AllCharacters/AllCharacters";

describe("navbar behaves properly", () => {
  test("clicking buttons render the appropriate page", () => {
    render(<App />);
    const navButtons: HTMLElement[] | null =
      screen.getAllByTestId("nav-button");
    //Elements
    const ccButton: HTMLElement | null = navButtons[0];
    const allCharacters: HTMLElement | null = navButtons[1];
    fireEvent.click(ccButton);
    const ccPage: HTMLElement | null = screen.queryByTestId("char-creation");
    expect(ccPage).toBeInTheDocument();
    fireEvent.click(allCharacters);
    const allCharPage: HTMLElement | null = screen.queryByTestId("all-chars");
    expect(allCharPage).toBeInTheDocument();
  });
});
