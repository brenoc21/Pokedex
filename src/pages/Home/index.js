import { useEffect, useState } from "react";
import PokeCard from "../../components/Pokecard";
import api from "../../services/api";
import { Cardbox, Container, ShinyButton } from "./styles.js";
import { Navigate, useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import {AiOutlineStar, AiFillStar} from 'react-icons/ai'
import {FaRegHourglass, FaHourglass} from 'react-icons/fa'
function Home() {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState([]);
  const [renderData, setRenderData] = useState([]);
  const [search, setSearch] = useState("");
  const [shiny, setShiny] = useState(false)
  const [old, setOld] = useState(false)
  const [types, setTypes] = useState([])
  useEffect(() => {
    if (search != "") {
      console.log("renderData:", renderData);
      setRenderData(pokemon && pokemon.map(item=> item.filter((poke) => poke.name.includes(search))));
      //console.log(pokemon.map(item=> item.filter((poke) => poke.name.includes(search))));
    } else {
      setRenderData(pokemon && pokemon);
    }
  }, [search, pokemon]);
  useEffect(() => {
    api
      .get("/pokemon/?limit=150&offset=0") //100000
      .then((res) => {
        setPokemon([res.data.results]);
      })
      .catch((err) => console.log(err));
  }, []);
  
  function SearchPokemon() {
    api
      .get(`/pokemon/${search}`)
      .then((res) => {
        setPokemon([res.data]);
      })
      .catch((err) => {
        if (err.response.status == 404) {
          alert("Pokemon não encontrado");
        }
      });
  }
  return (
    <Cardbox>
      <SearchBar setSearch={setSearch} />
      <ShinyButton onClick={()=> setShiny(!shiny)}> {shiny ? <AiFillStar className="svg"/> : <AiOutlineStar className="svg"/>} </ShinyButton>
      <ShinyButton onClick={()=> setOld(!old)}> {old ? <FaHourglass className="svg"/> : <FaRegHourglass className="svg"/>} </ShinyButton>
      <Container>
        {renderData.map((slices) => {
          let types;
          return slices.map((pokemon) => {
            api.get(`${pokemon.url.split("v2")[1]}`).then((res) => {
              setTypes(res.data.types)
              
            }).catch((err)=> {console.log(err)});
            return (
              <PokeCard
                onClick={() =>
                  navigate(`/pokemon/${pokemon.url.split("/")[6]}`)
                }
                name={pokemon.name}
                image={shiny ? 
                  old ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.url.split("/")[6]}.png` : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${pokemon.url.split("/")[6]}.png`
                  : old ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/")[6]}.png` : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.url.split("/")[6]}.png` }
                types={[types]}
              >
                
              </PokeCard>
            );
          });
        })}
      </Container>
    </Cardbox>
  );
}

export default Home;
//"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${pokemon.url.split("/")[6]}.png"
//"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.url.split("/")[6]}.png"