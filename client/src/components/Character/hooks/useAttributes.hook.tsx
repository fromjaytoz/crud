import React, { useReducer } from "react";
import { CharAttributeState, StatEditAction } from "../Character";
import CharacterInterface from "../interfaces/CharacterInterface";
import StatEditor from "../../StatEditor/StatEditor";

interface Test {
  name: string;
}

const useAttributes = ({ name }: { name: string }) => {
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
  const [nameState, nameDispatch] = useReducer<
    (state: CharAttributeState, action: StatEditAction) => any
  >(statEditReducer, initialState(name));
  return { charName: { state: nameState, dispatch: nameDispatch } };
};

export default useAttributes;
