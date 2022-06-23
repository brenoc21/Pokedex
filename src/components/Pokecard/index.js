import React from "react";
import { CardContainer } from "./styles";

export default function PokeCard({ name, image, types, onClick }) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <CardContainer onClick={() => onClick()}>
      <img src={image} />
      <label>{capitalizeFirstLetter(name)}</label>
      <div>
        {types.map((type) => {
          return <label key={type}>{type}</label>;
        })}
      </div>
    </CardContainer>
  );
}
