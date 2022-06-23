import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StatMeter from "../../components/StatMeter";
import api from "../../services/api";
import { PokemonPageContainer, PicContainer,PokemonContentContainer, Container } from "./styles";
export default function Pokemon() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    api
      .get(`/pokemon/${id}`)
      .then((res) => {
        setPokemon(res.data);
        console.log(res.data.types)
      })
      .catch((err) => console.log(err));
  }, []);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <PokemonPageContainer>
      <Container>
      <PokemonContentContainer>
        <div className="TextContainer"> <p>{pokemon && capitalizeFirstLetter(pokemon.name)}</p> <p>Nº{id}</p> </div>
      <PicContainer>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
      ></img>
      <p>{pokemon && pokemon.types[0].type.name}</p>
      </PicContainer>
      <StatMeter stats={pokemon && pokemon.stats}/>
      
      </PokemonContentContainer>
      
      </Container>
    </PokemonPageContainer>
  );
}
