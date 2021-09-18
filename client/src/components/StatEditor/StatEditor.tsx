import React, { useState } from "react";

interface StatEdit {
  originalStat: number | string;
  dispatch: React.Dispatch<{}>;
}

const StatEditor: React.FC<StatEdit> = ({ originalStat, dispatch }) => {
  const [input, setInput] = useState(originalStat);
  return (
    <input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onBlur={async (e) => {
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
