import {
  CharAttributeString,
  CharAttributeNumber,
  StatEditAction,
} from "../interfaces/CharacterInterfaces";

/*Separate types because CharacterInterface will only accept one or the other data type*/
export type StringStatEditor = [
  state: CharAttributeString,
  dispatch: React.Dispatch<StatEditAction>
]; //For useReducer's returned array in the useAttribute hook if your edited state is a STRING
export type NumberStatEditor = [
  state: CharAttributeNumber,
  dispatch: React.Dispatch<StatEditAction>
]; //For useReducer's returned array in the useAttribute hook if your edited state is a NUMBER

export type StringStatReducer = (
  state: CharAttributeString,
  action: StatEditAction
) => any; //For any useReducer in useAttributes if your edited state is a STRING

export type NumberStatReducer = (
  state: CharAttributeString,
  action: StatEditAction
) => any; //For any useReducer in useAttributes if your edited state is a NUMBER
