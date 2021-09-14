import React from "react";
import CharacterInterface from "../../interfaces/CharacterInterface";

const Character: React.FC<CharacterInterface> = ({
  agility,
  charClass,
  intelligence,
  name,
  strength,
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>Strength:{strength}</p>
      <p>Agility:{agility}</p>
      <p>Intelligence:{intelligence}</p>
      <p>Class:{charClass}</p>
    </div>
  );
};

export default Character;
