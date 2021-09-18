import React, { useState } from "react";

interface StatEdit {
  originalStat: number | string;
  dispatch: any;
}

const StatEditor: React.FC<StatEdit> = ({ originalStat, dispatch }) => {
  return (
    <input
      onBlur={async (e) => {
        const playerStatMustBeString = typeof originalStat === "string";
        const whatUserTyped = e.target.value;
        const notAnEmptyString = whatUserTyped.length
          ? whatUserTyped
          : originalStat;
        const numberStatIsANumber = Number(
          isNaN(Number(whatUserTyped)) ? originalStat : notAnEmptyString
        );
        //Execution
        originalStat = playerStatMustBeString
          ? notAnEmptyString
          : numberStatIsANumber;
        console.log(originalStat);
        dispatch({ type: "editOff", payload: originalStat });
      }}
      onKeyUp={(e) => {
        e.keyCode === 13 && e.currentTarget.blur();
      }}
      onMouseOver={(e) => e.currentTarget.focus()}
      placeholder={`Changing '${originalStat}'`}
    ></input>
  );
};

export default StatEditor;
