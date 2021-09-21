import React, { useState, useEffect } from "react";
import axios from "axios";
//Hooks
import useAttributes from "./hooks/useAttributes";
//Interfaces
import {
  CharacterInterface,
  StatEditAction,
} from "./interfaces/CharacterInterfaces";
//Styling
import {
  Header,
  RegularText,
  Button
} from "../../styled/styled"

const Character: React.FC<CharacterInterface> = ({ _id, ...attributes }) => {
  const [updateShows, setUpdateShows] = useState<boolean>(false); //To prevent unneeded update requests
  const { charName, str, agi, int, charClass } = useAttributes({
    ...attributes,
    _id,
  });
  /*The useAttributes hook is for converting character attributes into a useReducer state
 that allows an attribute to be edited through a dynamic input field before being updated
 to the server*/
  const character: CharacterInterface = {
    name: charName.state.value,
    strength: str.state.value,
    agility: agi.state.value,
    intelligence: int.state.value,
    charClass: charClass.state.value,
    _id: _id,
  };

  useEffect(() => {}, []);

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
  const updateChar = (character: CharacterInterface) => {
    console.log(character);
    try {
      axios.put("http://localhost:3001/updateChar", character);
      console.log(character._id + " updated");
    } catch (err) {
      console.log(err);
    }
  };
  const dispatchOnEvent = (dispatch: React.Dispatch<StatEditAction>) => {
    dispatch({ type: "editOn", dispatch: dispatch });
  };

  return (
    <div data-testid={`character-${_id}`}>
      <Header
        onClick={() => {
          dispatchOnEvent(charName.dispatch);
        }}
      >
        {charName.state.renderStatEditor}
      </Header>
      <RegularText
        onClick={() => {
          dispatchOnEvent(str.dispatch);
        }}
      >
        Strength:{str.state.renderStatEditor}
      </RegularText>
      <RegularText
        onClick={() => {
          dispatchOnEvent(agi.dispatch);
        }}
      >
        Agility:{agi.state.renderStatEditor}
      </RegularText>
      <RegularText
        onClick={() => {
          dispatchOnEvent(int.dispatch);
        }}
      >
        Intelligence:{int.state.renderStatEditor}
      </RegularText>
      <RegularText
        m={"0 0 60px 0"}
        onClick={() => {
          dispatchOnEvent(charClass.dispatch);
        }}
      >
        Class:{charClass.state.renderStatEditor}
        </RegularText>
      <Button
        m={"0 0 60px 0"}
        w={"auto"}
        bg={"radial-gradient(50% 50% at 50% 50%, #E21D1D 0%, #821111 100%)"}
      onClick={() => deleteChar(_id)}>Delete {_id}</Button>
      <button onClick={() => updateChar(character)}>Update</button>
    </div>
  );
};

export default Character;
