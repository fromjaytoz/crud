import React, { useReducer } from "react";
import CharacterInterface from "./interfaces/CharacterInterface";
import { Header, RegularText } from "../../styled/styled";
import axios from "axios";
import StatEditor from "../StatEditor/StatEditor";
import useAttributes from "./hooks/useAttributes.hook";

export interface CharAttributeState {
  value: number | string;
  renderStatEditor: HTMLInputElement;
  clicked: boolean;
}

export interface StatEditAction {
  type: string;
  payload?: number | string;
  dispatch: React.Dispatch<StatEditAction>; //since we are passing the dispatch down to StatEdit
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
  const statEditReducer = (
    state: CharAttributeState,
    action: StatEditAction
  ) => {
    switch (action.type) {
      case "editOn":
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
  const { charName } = useAttributes({ name });
  const [strengthState, strengthDispatch] = useReducer<
    (state: CharAttributeState, action: StatEditAction) => any
  >(statEditReducer, initialState(strength));
  const [agilityState, agilityDispatch] = useReducer<
    (state: CharAttributeState, action: StatEditAction) => any
  >(statEditReducer, initialState(strength));
  const [intelligenceState, intelligenceDispatch] = useReducer<
    (state: CharAttributeState, action: StatEditAction) => any
  >(statEditReducer, initialState(strength));

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
          dispatchOnEvent(strengthDispatch);
        }}
      >
        Strength:{strengthState?.renderStatEditor}
      </RegularText>
      <RegularText>Agility:{agilityState.renderStatEditor}</RegularText>
      <RegularText>
        Intelligence:{intelligenceState.renderStatEditor}
      </RegularText>
      <RegularText m={"0 0 60px 0"}>Class:{charClass}</RegularText>
      <button onClick={() => deleteChar(_id)}>Delete {_id}</button>
    </div>
  );
};

export default Character;
