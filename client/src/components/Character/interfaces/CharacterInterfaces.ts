export interface CharacterInterface {
  name: string;
  strength: number;
  agility: number;
  intelligence: number;
  charClass: string;
  _id: string;
}

export interface CharAttributeString {
  value: string;
  renderStatEditor: HTMLInputElement;
  clicked: boolean;
}

export interface CharAttributeNumber {
  value: number;
  renderStatEditor: HTMLInputElement;
  clicked: boolean;
}

export interface StatEditAction {
  type: string;
  payload?: number | string;
  dispatch: React.Dispatch<StatEditAction>;
}

export interface StatEdit {
  originalStat: number | string;
  dispatch: React.Dispatch<StatEditAction>;
}
