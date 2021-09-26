import { render, screen } from "@testing-library/react";
import Character from "../Character/Character";

describe("Tests Character component's functionality", () => {
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
  test("A given character component renders properly", async () => {
    await render(testCharacter);
    const character = await screen.findByTestId("character-i-am-a-test");
    expect(character).toBeInTheDocument();
  });
});
