import React, { useReducer, useState } from "react";
import CharacterInterface from "../../interfaces/CharacterInterface";
import {
  Header,
  RegularText,
  Button
} from "../../styled/styled"
import axios from "axios";
import StatEditor from "../StatEditor/StatEditor";

interface AttributeState {
  value: number | string;
  renderStatEditor: HTMLInputElement;
  clicked: boolean;
}

interface ReducerAction {
  type: string;
  payload: number | string;
}

const Character: React.FC<CharacterInterface> = ({
  agility,
  charClass,
  intelligence,
  name,
  strength,
  _id,
}) => {
  const initialState = (attribute: number | string) => {
    return {
      value: attribute,
      renderStatEditor: <span>{attribute}</span>,
      clicked: false,
    };
  };
  const statEditReducer = (state: any, action: any) => {
    switch (action.type) {
      case "editOn":
        console.log(state);
        return {
          ...state,
          renderStatEditor: (
            <StatEditor originalStat={state.value} dispatch={action.dispatch} />
          ),
        };
      case "editOff":
        return {
          ...state,
          renderStatEditor: <span>{action.payload}</span>,
          value: action.payload,
        };
    }
  };
  const [nameState, nameDispatch] = useReducer(
    statEditReducer,
    initialState(name)
  );
  const [strengthState, strengthDispatch] = useReducer(
    statEditReducer,
    initialState(strength)
  );

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
  const dispatchOnEvent = (dispatch: React.Dispatch<{}>) => {
    dispatch({ type: "editOn", dispatch: dispatch });
  };

  return (
    <div>
      <Header
        onClick={() => {
          dispatchOnEvent(nameDispatch);
        }}
      >
        {nameState.renderStatEditor}
      </Header>
      <RegularText
        onClick={() => {
          dispatchOnEvent(strengthDispatch);
        }}
      >
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
    </div>
  );
};

export default Character;
