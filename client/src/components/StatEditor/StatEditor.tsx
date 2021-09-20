import React, { useState } from "react";

//Interfaces
import { StatEditAction } from "../Character/Character";

interface StatEdit {
  originalStat: number | string;
  dispatch: React.Dispatch<StatEditAction>;
}

const StatEditor: React.FC<StatEdit> = ({ originalStat, dispatch }) => {
  const [input, setInput] = useState(originalStat);
  //This should eventually be a div with a display:inline or inline-flex
  return (
    <input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onBlur={async () => {
        const playerStatMustBeString: boolean =
          typeof originalStat === "string";
        const originalValueIfEmptyInput: number | string = input
          ? input
          : originalStat;
        const inputIsANumber: boolean = !isNaN(Number(input));
        const numberOrString: number | string = inputIsANumber
          ? Number(originalValueIfEmptyInput)
          : originalStat;
        const newValue: number | string = playerStatMustBeString
          ? originalValueIfEmptyInput
          : numberOrString;
        //Execution
        dispatch({
          type: "editOff",
          payload: newValue || newValue === 0 ? newValue : originalStat,
          dispatch: dispatch,
        });
      }}
      onKeyUp={(e) => {
        e.keyCode === 13 && e.currentTarget.blur();
      }}
      onMouseOver={(e) => e.currentTarget.focus()}
    ></input>
  );
};

export default StatEditor;
