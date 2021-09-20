import React from "react";
import axios from "axios";
//Hooks
import useAttributes from "./hooks/useAttributes";
//Interfaces
import CharacterInterface from "./interfaces/CharacterInterface";
//Styling
import { Header, RegularText } from "../../styled/styled";

export interface CharAttributeState {
  value: number | string;
  renderStatEditor: HTMLInputElement;
  clicked: boolean;
}

export interface StatEditAction {
  type: string;
  payload?: number | string;
  dispatch: React.Dispatch<StatEditAction>; //Since we are passing the dispatch down to StatEdit
}

const Character: React.FC<CharacterInterface> = ({ _id, ...attributes }) => {
  const { charName, str, agi, int, charClass } = useAttributes({
    ...attributes,
    _id,
  });
  /*The useAttributes hook is for converting character attributes into a useReducer state
 that allows an attribute to be edited through a dynamic input field before being updated
 to the server*/

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
  const dispatchOnEvent = (dispatch: React.Dispatch<StatEditAction>) => {
    dispatch({ type: "editOn", dispatch: dispatch });
  };

  return (
    <div>
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
      <button onClick={() => deleteChar(_id)}>Delete {_id}</button>
    </div>
  );
};

export default Character;
