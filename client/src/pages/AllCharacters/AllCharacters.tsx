import React, { useEffect, useState } from "react";
import axios from "axios";
import Character from "../../components/Character/Character";
import CharacterInterface from "../../interfaces/CharacterInterface";

const AllCharacters: React.FC = () => {
  const [charList, setCharList] = useState<CharacterInterface[]>([]);
  const fetchCharList = async () => {
    try {
      const { data } = await axios.get<CharacterInterface[]>(
        "http://localhost:3001/all"
      );
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
      {charList.map((props) => (
        <Character {...props} />
      ))}
    </div>
  );
};

export default AllCharacters;
