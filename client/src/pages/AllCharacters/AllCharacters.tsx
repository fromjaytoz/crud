import React, { useEffect, useState } from "react";
import axios from "axios";
import Character from "../../components/Character/Character";
import { CharacterInterface } from "../../components/Character/interfaces/CharacterInterfaces";
import endpoint from "../../endpoints.config";

const AllCharacters: React.FC = () => {
  const [charList, setCharList] = useState<CharacterInterface[]>([]);
  const fetchCharList = async () => {
    try {
      const { data } = await axios.get(endpoint.allChars);
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
    <div data-testid="all-chars">
      {charList.map((props) => (
        <Character {...props} key={props._id} />
      ))}
    </div>
  );
};

export default AllCharacters;
