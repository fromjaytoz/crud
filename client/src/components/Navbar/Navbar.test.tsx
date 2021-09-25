import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../App";

describe("navbar behaves properly", () => {
  test("clicking buttons render the appropriate page", () => {
    render(<App />);
    const navButtons: HTMLElement[] | null =
      screen.getAllByTestId("nav-button");
    //Elements
    const homeButton: HTMLElement | null = navButtons[0];
    const ccButton: HTMLElement | null = navButtons[1];
    const allCharactersButton: HTMLElement | null = navButtons[2];
    fireEvent.click(ccButton);
    const ccPage: HTMLElement | null = screen.queryByTestId("char-creation");
    expect(ccPage).toBeInTheDocument();
    fireEvent.click(allCharactersButton);
    const allCharsPage: HTMLElement | null = screen.queryByTestId("all-chars");
    expect(allCharsPage).toBeInTheDocument();
    fireEvent.click(homeButton);
    const homePage: HTMLElement | null = screen.queryByTestId("home");
    expect(homePage).toBeInTheDocument();
  });
});
