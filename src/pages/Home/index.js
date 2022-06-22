import { useEffect, useState } from "react";
import PokeCard from "../../components/Pokecard";
import api from "../../services/api";
import { Cardbox, Container } from "./styles.js";
import { Navigate, useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
function Home() {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState([]);
  const [renderData, setRenderData] = useState([])
  const [search, setSearch] = useState("")
  useEffect(() => {
    api
      .get("/pokemon/?limit=100000&offset=0") //100000
      .then((res) => {
        
        setPokemon([res.data.results]);
      })
      .catch((err) => console.log(err));
  }, []);
  function SearchPokemon(){
    api.get(`/pokemon/${search}`).then((res)=> {
      setPokemon([res.data]);
      
    }).catch((err)=> {
      if(err.response.status == 404){
        alert("Pokemon não encontrado")
      }
    })}
  return (
    <Cardbox>
      <SearchBar setSearch={setSearch} />
      <button onClick={()=> SearchPokemon()} >Search</button>
      <Container>
        
        {
         pokemon.map((slices) => {
          let types;
          return slices.map((pokemon) => {
            api.get(`${pokemon.url.split("v2")[1]}`).then((res) => {
              types = res.data.types;
              console.log("types", types);
            });
            return (
              <PokeCard
                onClick={() =>

                  navigate(`/pokemon/${pokemon.url.split("/")[6]}`)
                }
                name={pokemon.name}
                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
                  pokemon.url.split("/")[6]
                }.png`}
                types={[types]}
              ></PokeCard>
            );
          });
        })}
              
        
      </Container>
    </Cardbox>
  );
}

export default Home;
