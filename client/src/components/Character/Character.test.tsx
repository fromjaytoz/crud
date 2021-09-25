import { render, screen, fireEvent } from "@testing-library/react";
import Character from "../Character/Character";

const testCharacter = (
  <Character
    name={"Test"}
    strength={0}
    agility={0}
    intelligence={0}
    charClass={"Test"}
    _id="i-am-a-test"
  />
);
describe("Tests Character component's initial render", () => {
  test("A given character component renders properly", async () => {
    await render(testCharacter);
    const character = await screen.findByTestId("character-i-am-a-test");
    expect(character).toBeInTheDocument();
  });
  test("Character name appears", async () => {
    await render(testCharacter);
    const charStats = await screen.findAllByTestId("rendered-stat");
    const name = charStats[0];
    expect(name).toBeInTheDocument();
  });
});

describe("Tests Character.tsx functionality", () => {
  test("Clicking name element renders input box/stat editor", async () => {
    await render(testCharacter);
    const charStatElements = await screen.findAllByTestId(
      "character-i-am-a-test-stat"
    );
    const nameElement = charStatElements[0];
    expect(nameElement).toBeInTheDocument();
    fireEvent.click(nameElement);
    const statEditor = await screen.findByTestId("stat-editor");
    expect(statEditor).toBeInTheDocument();
  });
  test("Clicking name element gets rid of span", async () => {
    await render(testCharacter);
    const charStatElements = await screen.findAllByTestId(
      "character-i-am-a-test-stat"
    );
    const nameElement = charStatElements[0];
    const charStats = await screen.findAllByTestId("rendered-stat");
    const name = charStats[0];
    fireEvent.click(nameElement);
    expect(name).not.toBeInTheDocument();
  });
  test("Clicking name element and blurring it removes it", async () => {
    await render(testCharacter);
    const charStatElements = await screen.findAllByTestId(
      "character-i-am-a-test-stat"
    );
    const nameElement = charStatElements[0];
    fireEvent.click(nameElement);
    const statEditor = await screen.findByTestId("stat-editor");
    fireEvent.blur(statEditor);
    expect(statEditor).not.toBeInTheDocument();
  });
  //Add an blur event here that gets rid of the input box
});
