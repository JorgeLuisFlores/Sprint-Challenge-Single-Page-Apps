import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";
import SearchForm from "./SearchForm";

export const Card = styled.div`
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  background-color: blue;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  const handleChange = e => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearch({ value: "" });
  };

  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/character/").then(res => {
      setCharacters(res.data.results);
    });

    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <SearchForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        search={search}
        value={characters.id}
      />
      {characters.map(character => {
        return (
          <Card>
            <CharacterCard
              key={character.key}
              id={character.id}
              name={character.name}
              image={character.image}
              location={character.location}
              origin={character.origin.name}
            />
          </Card>
        );
      })}
    </section>
  );
}
