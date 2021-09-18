import React, { useReducer, useEffect } from "react";
import CharacterInterface from "../../interfaces/CharacterInterface";
import {
  Header,
  RegularText,
  Button
} from "../../styled/styled"
import axios from "axios";

interface AttributeState {
  value: number | string;
  render: any;
  clicked: boolean;
}

interface ReducerAction {
  type: string;
  payload: number;
}

const Character: React.FC<CharacterInterface> = ({
  agility,
  charClass,
  intelligence,
  name,
  strength,
  _id,
}) => {
  const initialState = (attribute: number | string) => {
    return {
      value: attribute,
      render: <span>{attribute}</span>,
      clicked: false,
    };
  };
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "unclicked":
        console.log(state);
        return {
          ...state,
          render: (
            <input
              onChange={(e) => {
                const valueIsString = typeof state.value === "string";
                const inputValue = e.target.value;
                state.value = valueIsString
                  ? inputValue
                  : Number(
                      isNaN(Number(inputValue)) ? state.value : inputValue
                    );
                console.log(state);
              }}
              onBlur={async (e) => {
                console.log(state.value);
                action.dispatch({ type: "clicked", payload: state.value });
              }}
              onKeyUp={(e) => {
                e.keyCode === 13 && e.currentTarget.blur();
              }}
            ></input>
          ),
        };
      case "clicked":
        return { ...state, render: <span>{action.payload}</span> };
    }
  };
  const [nameState, nameDispatch] = useReducer(reducer, initialState(name));
  const [strengthState, strengthDispatch] = useReducer(
    reducer,
    initialState(strength)
  );

  const deleteChar = (charId: string) => {
    try {
      axios.delete("http://localhost:3001/deleteChar", {
        data: { id: charId },
      });
      console.log(charId + " deleted");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Header
        onClick={() => {
          nameDispatch({ type: "unclicked", dispatch: nameDispatch });
        }}
      >
        {nameState.render}
      </Header>
      <RegularText
        onClick={() => {
          strengthDispatch({ type: "unclicked", dispatch: strengthDispatch });
        }}
      >
        Strength:{strengthState?.render}
      </RegularText>
      <RegularText>Agility:{agility}</RegularText>
      <RegularText>Intelligence:{intelligence}</RegularText>
      <RegularText m={"0 0 60px 0"}>Class:{charClass}</RegularText>
      <Button
        w={"auto"}
        bg={"radial-gradient(50% 50% at 50% 50%, #E21D1D 0%, #821111 100%)"}
      onClick={() => deleteChar(_id)}>Delete {_id}</Button>
    </div>
  );
};

export default Character;
