import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { PokemonPageContainer } from "./styles";
export default function Pokemon() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    api
      .get(`/pokemon/${id}`)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <PokemonPageContainer>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
      ></img>
      <p>{pokemon && pokemon.name}</p>
    </PokemonPageContainer>
  );
}
