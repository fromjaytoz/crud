import React from "react";
import inputTopDesign from "../../assets/input-top-design.png";
import inputBottomDesign from "../../assets/input-bottom-design.png";

import {
  TextInputSpacing,
  TextInputTopContainer,
  TextInputTopDesign,
  TextInputContainer,
  TextInput,
  TextInputBottomContainer,
  TextInputBottomDesign,
} from "./Input-styled";

//Please add an interface when converting to TypeScript

function Input({ value, onChange, d }: { value: any, onChange: any, d: any,}) {
  return (
    <TextInputSpacing>
      <TextInputTopContainer d={d}>
        <TextInputTopDesign src={inputTopDesign} />
      </TextInputTopContainer>
      <TextInputContainer>
        <TextInput value={value} onChange={onChange}/>
      </TextInputContainer>
      <TextInputBottomContainer d={d}>
        <TextInputBottomDesign src={inputBottomDesign} />
      </TextInputBottomContainer>
    </TextInputSpacing>
  );
}

export default Input;
