import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StatMeter from "../../components/StatMeter";
import TypeBox from "../../components/TypeBox";
import api from "../../services/api";
import {
  PokemonPageContainer,
  PicContainer,
  PokemonContentContainer,
  Container,
  PokemonCharacContainer,
  TypeSection,
  EvolutionCard,
  EvolutionSection,
} from "./styles";
export default function Pokemon() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();
  const [evoTree, setEvoTree] = useState([]);
  useEffect(() => {
    api
      .get(`/pokemon/${id}`)
      .then((res) => {
        setPokemon(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    pokemon &&
      api.get(`${pokemon.species.url}`).then((res) =>
        api
          .get(res.data.evolution_chain.url)
          .then((res) => {
            setEvoTree(handleEvoChain(res.data.chain))
            console.log(evoTree)
          
          })
          .then(() => {
            console.log("tree",evoTree);
          })
      );
  }, [pokemon]);
  function handleEvoChain(chain){
    let current = chain.evolves_to[0]
    console.log("current", chain.species.name)
    if(chain.species.name === "eevee"){
      current = chain.evolves_to
      console.log(current)
      let eeveeArray = [{name: chain.species.name, url: chain.species.url}]
      current.map((evo)=> {
        eeveeArray.push({name: evo.species.name, url: evo.species.url})
         console.log("evo:", evo)
      }) 
      return eeveeArray
    }else{
    let array = [{name: chain.species.name, url: chain.species.url}]
     while(current != undefined){
      array.push({name: current.species.name, url: current.species.url})
      current = current.evolves_to[0]
     }
     return array
    }
  }
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <PokemonPageContainer>
      <Container>
        <div className="TextContainer">
          <p>{pokemon && capitalizeFirstLetter(pokemon.name)}</p> <p>Nº{id}</p>{" "}
        </div>
        <div className="row">
          <PokemonContentContainer>
            <PicContainer>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
              ></img>
            </PicContainer>
            <StatMeter stats={pokemon && pokemon.stats} />
          </PokemonContentContainer>
          <PokemonCharacContainer>
            <TypeSection>
              Type
              <div className="typeRow">
                {pokemon &&
                  pokemon.types.map((types) => {
                    console.log("aaaaa");
                    return (
                      <TypeBox key={types.type.name} Type={types.type.name} />
                    );
                  })}
              </div>
            </TypeSection>
            <EvolutionSection>
              {evoTree && evoTree.map((poke) => {
                console.log("poke:", poke)
                return poke != undefined ? <EvolutionCard>
                  <div className="imgContainer">

                  <img src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${poke.url.split("/")[6]}.png`}/>
                  </div>
                  <p>{poke.name}</p></EvolutionCard> : null;
              })}
            </EvolutionSection>
          </PokemonCharacContainer>
        </div>
      </Container>
    </PokemonPageContainer>
  );
}
