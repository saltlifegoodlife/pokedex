import React, { useState, useEffect } from "react";
import pokedex from "../../helpers/pokedex.json";
import { filterPokemon } from "../../helpers/helpers";
import "./homePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  const [list, setList] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState("");
  const [type, setType] = useState("");
  const [weakness, setWeakness] = useState("");

  let pokemonBySearch = filterPokemon(list, searchPokemon, type, weakness);

  function getPokemon() {
    return pokedex.pokemon;
  }

  useEffect(() => {
    let order = getPokemon();
    order.sort((a, b) => (a.name > b.name ? 1 : -1));
    setList(order);
  }, []);

  //
  //
  //get all types
  let types = [];
  list.map((p) => {
    p.type.map((t) => types.push(t));
  });
  types = [...new Set(types)];

  let weak = [];
  list.map((p) => {
    p.weaknesses.map((t) => weak.push(t));
  });
  weak = [...new Set(weak)];

  return (
    <div className="homePage">
      <h1>Pokedex</h1>
      <form action="">
        <div className="form-group">
          <label htmlFor="pokemon">Pokemon</label>
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
          <label htmlFor="Type">Type</label>
          <select
            name="type"
            id=""
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option value="" key="All">
              All
            </option>
            {types.map((poke, idx) => {
              return (
                <option key={poke + idx} value={poke}>
                  {poke}
                </option>
              );
            })}
          </select>
          <label htmlFor="weakness">Weakness</label>
          <select
            name="weakness"
            id="weakness"
            value={weakness}
            onChange={(e) => {
              setWeakness(e.target.value);
            }}
          >
            <option value="" key="All">
              All
            </option>
            {weak.map((poke, idx) => {
              return (
                <option key={poke + idx} value={poke}>
                  {poke}
                </option>
              );
            })}
          </select>
        </div>
      </form>
      <ul className="pokemon-list">
        {pokemonBySearch.map((poke) => {
          return (
            <Link to={`/details/${poke.num}`}>
              <div className="card">
                <div className="pokemon-div" key={poke.id}>
                  <img src={poke.img} alt="" />
                  <h4>{poke.num}:</h4>
                  <h4>{poke.name}</h4>
                  <div className="type-weak">
                    <h4>
                      Type:
                      {poke.type.map((type) => (
                        <p>{type}</p>
                      ))}
                    </h4>
                    <h4>
                      Weakness:
                      {poke.weaknesses.map((weak) => (
                        <p>{weak}</p>
                      ))}
                    </h4>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default HomePage;
