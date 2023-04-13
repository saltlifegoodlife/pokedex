import React, { useState, useEffect } from "react";
import pokedex from "../../helpers/pokedex.json";
import { filterPokemonByName } from "../../helpers/helpers";
import "./homePage.module.css";

function HomePage() {
  const [list, setList] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState("");

  let pokemonByName = filterPokemonByName(list, searchPokemon);

  //   let pokemonStats = getPokemonStats(list);

  function getPokemon() {
    return pokedex.pokemon;
  }

  useEffect(() => {
    let order = getPokemon();
    order.sort((a, b) => (a.name > b.name ? 1 : -1));
    setList(order);
  }, []);

  return (
    <div className="homePage">
      <h1>Pokedex</h1>
      <form action="">
        <div className="form-group">
          <label htmlFor="pokemon"></label>
          <select
            name="pokemon"
            id=""
            value={searchPokemon}
            onChange={(e) => {
              setSearchPokemon(e.target.value);
            }}
          >
            <option value="" key="All">
              All
            </option>
            {list.map((poke, idx) => {
              return (
                <option key={poke.name + idx} value={poke.name}>
                  {poke.name}
                </option>
              );
            })}
          </select>
        </div>
      </form>
      <ul></ul>
    </div>
  );
}

export default HomePage;
