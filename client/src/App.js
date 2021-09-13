import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [str, setStr] = useState(0);
  const [agi, setAgi] = useState(0);
  const [int, setInt] = useState(0);

  return (
    <div>
      <form>
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
      </form>
    </div>
  );
}

export default App;
