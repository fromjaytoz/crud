import { useReducer } from "react";
import StatEditor from "../../StatEditor/StatEditor";

//Interfaces
import {
  CharacterInterface,
  CharAttributeString,
  CharAttributeNumber,
  StatEditAction,
} from "../interfaces/CharacterInterfaces";

//Types
import {
  EditableNumberStat,
  EditableStringStat,
} from "../types/CharacterTypes";

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
    state: CharAttributeNumber | CharAttributeString,
    action: StatEditAction //Since we are passing the dispatch down to StatEdit
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

  /*Please see the types Character folder for more information on my EditableStat types*/

  const [nameState, nameDispatch]: EditableStringStat = useReducer<
    (state: CharAttributeString, action: StatEditAction) => any
  >(statEditReducer, initialState(name));
  const [strengthState, strengthDispatch]: EditableNumberStat = useReducer<
    (state: CharAttributeNumber, action: StatEditAction) => any
  >(statEditReducer, initialState(strength));
  const [agilityState, agilityDispatch]: EditableNumberStat = useReducer<
    (state: CharAttributeNumber, action: StatEditAction) => any
  >(statEditReducer, initialState(agility));
  const [intelligenceState, intelligenceDispatch]: EditableNumberStat =
    useReducer<(state: CharAttributeNumber, action: StatEditAction) => any>(
      statEditReducer,
      initialState(intelligence)
    );
  const [classState, classDispatch]: EditableStringStat = useReducer<
    (state: CharAttributeString, action: StatEditAction) => any
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
