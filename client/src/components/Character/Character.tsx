import React, { useReducer, useEffect } from "react";
import CharacterInterface from "../../interfaces/CharacterInterface";
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
                dispatch({ type: "clicked", payload: state.value });
              }}
              onKeyUp={(e) => {
                e.keyCode === 13 && e.target.addEventListener("blur", () => {});
              }}
            ></input>
          ),
        };
      case "clicked":
        return { ...state, render: <span>{action.payload}</span> };
    }
  };
  const [strengthState, dispatch] = useReducer(reducer, initialState(strength));

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
      <h1>{name}</h1>
      <p
        onClick={() => {
          dispatch({ type: "unclicked" });
        }}
      >
        Strength:{strengthState?.render}
      </p>
      <p>Agility:{agility}</p>
      <p>Intelligence:{intelligence}</p>
      <p>Class:{charClass}</p>
      <button onClick={() => deleteChar(_id)}>Delete {_id}</button>
    </div>
  );
};

export default Character;
