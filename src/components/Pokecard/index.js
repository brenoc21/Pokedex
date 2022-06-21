import React from "react";
import { CardContainer } from "./styles";

export default function PokeCard({ name, image, types, onClick }) {
  return (
    <CardContainer onClick={() => onClick()}>
      <img src={image} />
      <label>{name}</label>
      <div>
        {types.map((type) => {
          return <label>{type}</label>;
        })}
      </div>
    </CardContainer>
  );
}
