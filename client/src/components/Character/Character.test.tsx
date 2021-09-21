import { render, screen } from "@testing-library/react";
import Character from "../Character/Character";

// jest.mock("http://localhost:3001/all");
describe("test", () => {
  test("A given character component renders properly", async () => {
    await render(
      <Character
        name={"Test"}
        strength={0}
        agility={0}
        intelligence={0}
        charClass={"Test"}
        _id="1"
      />
    );
    const character = await screen.findByTestId("character-1");
    expect(character).toBeInTheDocument();
  });
});
