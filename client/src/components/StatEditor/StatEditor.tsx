import React, { useState } from "react";

interface StatEdit {
  originalStat: number | string;
  dispatch: any;
}

const StatEditor: React.FC<StatEdit> = ({ originalStat, dispatch }) => {
  const [input, setInput] = useState(originalStat);
  return (
    <input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onBlur={async (e) => {
        const playerStatMustBeString = typeof originalStat === "string";
        const originalValueIfEmptyInput = input ? input : originalStat;
        const inputIsANumber = !isNaN(Number(input));
        const numberOrString = inputIsANumber
          ? Number(originalValueIfEmptyInput)
          : originalStat;
        const numberStatIsANumber = numberOrString;
        const newValue = playerStatMustBeString
          ? originalValueIfEmptyInput
          : numberStatIsANumber;
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
