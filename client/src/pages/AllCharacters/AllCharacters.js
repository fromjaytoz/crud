import React, { useEffect, useState } from "react";
import axios from "axios";

function AllCharacters() {
  const [charList, setCharList] = useState([]);
  const fetchCharList = async () => {
    try {
      const { data } = await axios.get("http://localhost:3001/all");
      setCharList(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchCharList();
    console.log(charList);
  }, []);
  return (
    <div>
      {charList.map(({ name, strength, agility, charClass }) => (
        <div>
          <h1>{name}</h1>
          <p>Strength:{strength}</p>
          <p>Agility:{agility}</p>
          <p>Class:{charClass}</p>
        </div>
      ))}
    </div>
  );
}

export default AllCharacters;
