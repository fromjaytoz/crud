import {
  CharAttributeString,
  CharAttributeNumber,
  StatEditAction,
} from "../interfaces/CharacterInterfaces";

export type EditableStringStat = [
  nameState: CharAttributeString,
  nameDispatch: React.Dispatch<StatEditAction>
]; //Separate types because CharacterInterface will only accept one or the other data type
export type EditableNumberStat = [
  nameState: CharAttributeNumber,
  nameDispatch: React.Dispatch<StatEditAction>
];
