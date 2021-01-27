import React from "react";
import { mockPokemonData } from "../mock/pokeData";
import "../styles.css";

const PokeCard = () => {
  return (
    <div className="container">
      <div className="card">
        <h2> {mockPokemonData.name} </h2>
        <div className="images-container">
          <img src={mockPokemonData.sprites.front_default} alt="Default" />
          <img src={mockPokemonData.sprites.front_shiny} alt="Shiny" />
        </div>
        <p className="link">
          To see an incredible video, click{" "}
          <a href={mockPokemonData.video}>here</a>
        </p>
      </div>
    </div>
  );
};

export default PokeCard;
