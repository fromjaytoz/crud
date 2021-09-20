import { useReducer } from "react";
import StatEditor from "../../StatEditor/StatEditor";
//Interfaces
import {
  CharacterInterface,
  StringEditorStateToggle,
  NumberEditorStateToggle,
  StatEditAction,
} from "../interfaces/CharacterInterfaces";

//Types
import {
  StringStatEditor,
  NumberStatEditor,
  StringStatReducer,
  NumberStatReducer,
} from "../types/CharacterTypes";

const useAttributes = ({
  name,
  strength,
  agility,
  intelligence,
  charClass,
  _id,
}: CharacterInterface) => {
  const initialState: (attribute: number | string) => {} = (attribute) => {
    return {
      value: attribute,
      renderStatEditor: <span>{attribute}</span>, //Starts out as span and toggles to <StatEditor/>
    };
  };
  const statEditReducer = (
    state: NumberEditorStateToggle | StringEditorStateToggle,
    action: StatEditAction /*<==Since we are passing the dispatch down to StatEdit*/
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

  /*Please see the types Character folder for more information on my StatEditor types*/
  const [nameState, nameDispatch]: StringStatEditor =
    useReducer<StringStatReducer>(statEditReducer, initialState(name));
  const [strengthState, strengthDispatch]: NumberStatEditor =
    useReducer<NumberStatReducer>(statEditReducer, initialState(strength));
  const [agilityState, agilityDispatch]: NumberStatEditor =
    useReducer<NumberStatReducer>(statEditReducer, initialState(agility));
  const [intelligenceState, intelligenceDispatch]: NumberStatEditor =
    useReducer<NumberStatReducer>(statEditReducer, initialState(intelligence));
  const [classState, classDispatch]: StringStatEditor =
    useReducer<StringStatReducer>(statEditReducer, initialState(charClass));

  return {
    charName: { state: nameState, dispatch: nameDispatch },
    str: { state: strengthState, dispatch: strengthDispatch },
    agi: { state: agilityState, dispatch: agilityDispatch },
    int: { state: intelligenceState, dispatch: intelligenceDispatch },
    charClass: { state: classState, dispatch: classDispatch },
  };
};

export default useAttributes;
