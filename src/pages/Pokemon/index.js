import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  const navigate = useNavigate();
  useEffect(() => {
    api
      .get(`/pokemon/${id}`)
      .then((res) => {
        setPokemon(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  useEffect(() => {
    pokemon &&
      api.get(`${pokemon.species.url}`).then((res) =>
        api
          .get(res.data.evolution_chain.url)
          .then((res) => {
            setEvoTree(handleEvoChain(res.data.chain));
          })
          .then(() => {})
      );
  }, [pokemon]);
  function handleEvoChain(chain) {
    let array = [{ name: chain.species.name, url: chain.species.url }];
    chain.evolves_to.map((evo) => {
      array = array.concat(handleEvoChain(evo));
    });
    return array;
  }
  //}
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
                    return (
                      <TypeBox key={types.type.name} Type={types.type.name} />
                    );
                  })}
              </div>
            </TypeSection>
            <EvolutionSection>
              {evoTree &&
                evoTree.map((poke) => {
                  return poke != undefined ? (
                    <EvolutionCard>
                      <div
                        onClick={() =>
                          navigate(`/pokemon/${poke.url.split("/")[6]}`, {
                            replace: true,
                          })
                        }
                        className="imgContainer"
                      >
                        <img
                          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
                            poke.url.split("/")[6]
                          }.png`}
                        />
                      </div>
                      <p>{capitalizeFirstLetter(poke.name)}</p>
                    </EvolutionCard>
                  ) : null;
                })}
            </EvolutionSection>
          </PokemonCharacContainer>
        </div>
      </Container>
    </PokemonPageContainer>
  );
}
