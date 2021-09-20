import { useReducer } from "react";
import StatEditor from "../../StatEditor/StatEditor";

//Interfaces
import { CharAttributeState, StatEditAction } from "../Character";
import CharacterInterface from "../interfaces/CharacterInterface";

const useAttributes = ({
  name,
  strength,
  agility,
  intelligence,
  charClass,
  _id,
}: CharacterInterface) => {
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
  const [strengthState, strengthDispatch] = useReducer<
    (state: CharAttributeState, action: StatEditAction) => any
  >(statEditReducer, initialState(strength));
  const [agilityState, agilityDispatch] = useReducer<
    (state: CharAttributeState, action: StatEditAction) => any
  >(statEditReducer, initialState(agility));
  const [intelligenceState, intelligenceDispatch] = useReducer<
    (state: CharAttributeState, action: StatEditAction) => any
  >(statEditReducer, initialState(intelligence));
  const [classState, classDispatch] = useReducer<
    (state: CharAttributeState, action: StatEditAction) => any
  >(statEditReducer, initialState(charClass));

  return {
    charName: { state: nameState, dispatch: nameDispatch },
    str: { state: strengthState, dispatch: strengthDispatch },
    agi: { state: agilityState, dispatch: agilityDispatch },
    int: { state: intelligenceState, dispatch: intelligenceDispatch },
    charClass: { state: classState, dispatch: classDispatch },
  };
};

export default useAttributes;
