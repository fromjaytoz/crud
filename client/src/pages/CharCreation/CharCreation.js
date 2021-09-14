import React from "react";
import { useState } from "react";
import axios from "axios";

function CharCreation() {
  const [name, setName] = useState("");
  const [str, setStr] = useState(0);
  const [agi, setAgi] = useState(0);
  const [int, setInt] = useState(0);
  const [charClass, setCharClass] = useState("");

  const sendStatsToServer = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/", {
        name,
        str,
        agi,
        int,
        charClass,
      });
      await console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => sendStatsToServer(e)}>
        <label>Character Name</label>
        <input
          value={name || ""}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <label>Strength</label>
        <input
          value={str || ""}
          onChange={(e) => {
            setStr(e.target.value);
          }}
        ></input>
        <label>Agility</label>
        <input
          value={agi || ""}
          onChange={(e) => {
            setAgi(e.target.value);
          }}
        ></input>
        <label>Intelligence</label>
        <input
          value={int || ""}
          onChange={(e) => {
            setInt(e.target.value);
            console.log(int);
          }}
        ></input>
        <label>Class</label>
        <input
          value={charClass || ""}
          onChange={(e) => {
            setCharClass(e.target.value);
          }}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CharCreation;
