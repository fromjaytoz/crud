<<<<<<< HEAD
import React, { useReducer, useState } from "react";
import CharacterInterface from "../../interfaces/CharacterInterface";
import {
  Header,
  RegularText,
  Button
} from "../../styled/styled"
=======
import React from "react";
<<<<<<< HEAD
import CharacterInterface from "./interfaces/CharacterInterface";
import { Header, RegularText } from "../../styled/styled";
>>>>>>> 492b9814f59efca1be42f15c23a791a5ce919770
=======
>>>>>>> 577f6a1dd383a9109dad97cd203fe25bdc73d302
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
<<<<<<< HEAD
        Strength: {strengthState?.renderStatEditor}
      </RegularText>
      <RegularText>Agility: {agility}</RegularText>
      <RegularText>Intelligence: {intelligence}</RegularText>
      <RegularText m={"0 0 16px 0"}>Class: {charClass}</RegularText>
      <Button
        m={"0 0 60px 0"}
        w={"auto"}
        bg={"radial-gradient(50% 50% at 50% 50%, #E21D1D 0%, #821111 100%)"}
      onClick={() => deleteChar(_id)}>Delete {_id}</Button>
=======
        Class:{charClass.state.renderStatEditor}
      </RegularText>
      <button onClick={() => deleteChar(_id)}>Delete {_id}</button>
>>>>>>> 492b9814f59efca1be42f15c23a791a5ce919770
    </div>
  );
};

export default Character;
