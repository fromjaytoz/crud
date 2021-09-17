import React from "react";
import CharacterInterface from "../../interfaces/CharacterInterface";
import {
  Header,
  RegularText
} from "../../styled/styled"

const Character: React.FC<CharacterInterface> = ({
  agility,
  charClass,
  intelligence,
  name,
  strength,
}) => {
  return (
    <div>
      <Header>{name}</Header>
      <RegularText>Strength: {strength}</RegularText>
      <RegularText>Agility: {agility}</RegularText>
      <RegularText>Intelligence: {intelligence}</RegularText>
      <RegularText
        m={"0 0 60px 0"}
      >Class: {charClass}</RegularText>
    </div>
  );
};

export default Character;
