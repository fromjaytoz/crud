import React from "react";
import CharacterInterface from "../../interfaces/CharacterInterface";
import axios from "axios";

const Character: React.FC<CharacterInterface> = ({
  agility,
  charClass,
  intelligence,
  name,
  strength,
  _id,
}) => {
  const deleteChar = (charId: string) => {
    try {
      axios.delete("http://localhost:3001/deleteChar", {
        data: { id: charId },
      });
      console.log(charId + " deleted");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>{name}</h1>
      <p>Strength:{strength}</p>
      <p>Agility:{agility}</p>
      <p>Intelligence:{intelligence}</p>
      <p>Class:{charClass}</p>
      <button onClick={() => deleteChar(_id)}>Delete {_id}</button>
    </div>
  );
};

export default Character;
