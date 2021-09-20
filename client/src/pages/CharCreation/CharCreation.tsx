import React from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { CharacterInterface } from "../../components/Character/interfaces/CharacterInterfaces";
import avatar from "../../assets/avatar.png";

import Input from "../../components/Input/Input";

import {
  CharCreationContainer,
  CharacterLevelContainer,
  CharCreationForm,
  FormLabel,
  AvatarContainer,
  AvatarImage,
  LineBreak,
  ProficienciesContainer,
  SkillsContainer,
} from "./CharCreation-styled"
import {
  RegularText,
  Button
} from "../../styled/styled";

const CharCreation: React.FC = () => {
  const [name, setName] = useState("");
  const [str, setStr] = useState<string | number>(0);
  const [agi, setAgi] = useState<string | number>(0);
  const [int, setInt] = useState<string | number>(0);
  const [charClass, setCharClass] = useState("");
  const history = useHistory();
  const sendStatsToServer = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post<CharacterInterface>(
        "http://localhost:3001/",
        {
          name,
          str,
          agi,
          int,
          charClass,
        }
      );
      await console.log(res.data);
      history.push("/all-characters");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CharCreationContainer data-testid="char-creation">
      <CharacterLevelContainer>
        <RegularText>Level: 1</RegularText>
        <RegularText>Health: 44/44</RegularText>
        <RegularText>Experience: 134</RegularText>
        <RegularText>Next level at: 600</RegularText>
        <LineBreak />
      </CharacterLevelContainer>
      <CharCreationForm
      onSubmit={(e:React.FormEvent<HTMLFormElement>) => sendStatsToServer(e)}>
        <FormLabel
        >Character Name</FormLabel>
        <Input
          value={name || ""}
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
          }}
        ></Input>
        <AvatarContainer>
          <AvatarImage src={avatar} alt={"avatar"} />
        </AvatarContainer>
        <FormLabel>Strength</FormLabel>
        <Input
          d={"none"}
          value={str || ""}
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
            setStr(e.target.value);
          }}
        ></Input>
        <FormLabel>Agility</FormLabel>
        <Input
          d={"none"}
          value={agi || ""}
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
            setAgi(e.target.value);
          }}
        ></Input>
        <FormLabel>Intelligence</FormLabel>
        <Input
          d={"none"}
          value={int || ""}
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
            setInt(e.target.value);
            console.log(int);
          }}
        ></Input>
        <FormLabel>Class</FormLabel>
        <Input 
          d={"none"}
          value={charClass || ""}
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
            setCharClass(e.target.value);
          }}
        />
        <Button
        w={"auto"}
        type="submit">Submit</Button>
      </CharCreationForm>
      <ProficienciesContainer>
        <RegularText>Quisque id diam vel quam elementum pulvinar etiam. Luctus accumsan tortor Id aliquet lectus proin nibh nisl</RegularText>
      </ProficienciesContainer>
      <SkillsContainer>
        <RegularText>Bibendum ut tristique et egestas quis ipsum. Id porta nibh venenatis cras sed felis eget velit. Ut tristique et egestas quis. Nunc scelerisque viverra mauris in. Commodo elit at imperdiet dui. Volutpat est velit egestas dui</RegularText>
      </SkillsContainer>
    </CharCreationContainer>
  );
};

export default CharCreation;
