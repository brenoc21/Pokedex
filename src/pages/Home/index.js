import { useEffect, useState } from "react";
import PokeCard from "../../components/Pokecard";
import api from "../../services/api";
import { Cardbox, Container } from "./styles.js";
import { Navigate, useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
function Home() {
  const navigate = useNavigate();
  const [pokemons, setPokemons] = useState([]);
  const [data, setData] = useState();
  useEffect(() => {
    api
      .get("/pokemon/?limit=100000&offset=0")
      .then((res) => {
        setPokemons([res.data.results]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Cardbox>
      <SearchBar />
      <Container>
        {pokemons.map((slices) => {
          let types;
          return slices.map((pokemons) => {
            api.get(`${pokemons.url.split("v2")[1]}`).then((res) => {
              types = res.data.types;
              console.log("types", types);
            });
            return (
              <PokeCard
                onClick={() =>
                  navigate(`/pokemon/${pokemons.url.split("/")[6]}`)
                }
                name={pokemons.name}
                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
                  pokemons.url.split("/")[6]
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
