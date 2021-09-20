export interface CharacterInterface {
  name: string;
  strength: number;
  agility: number;
  intelligence: number;
  charClass: string;
  _id: string;
} //Fundamental structure for character data going in and out of server

export interface StringEditorStateToggle {
  value: string;
  renderStatEditor: HTMLInputElement | HTMLSpanElement;
} //reducer of useReducer's state if this state is a STRING

export interface NumberEditorStateToggle {
  value: number;
  renderStatEditor: HTMLInputElement | HTMLSpanElement;
} //reducer of useReducer's state if this state is a NUMBER

export interface StatEditAction {
  type: string;
  payload?: number | string;
  dispatch: React.Dispatch<StatEditAction>;
} //reducer of useReducer's action if this state is a STRING

export interface StatEdit {
  originalStat: number | string;
  dispatch: React.Dispatch<StatEditAction>;
} //reducer of useReducer's action if this state is a STRING
