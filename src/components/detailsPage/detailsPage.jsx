import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pokemonDetails } from "../../helpers/helpers";
import pokedex from "../../helpers/pokedex.json";
import { Link } from "react-router-dom";
import "./detailsPage.css";

function DetailsPage() {
  const { num } = useParams();
  const list = pokedex.pokemon;
  let details = pokemonDetails(list, num);
  console.log(list);
  let imgHandler = (e) => {
    console.log(e);
    let url = pokemonDetails(list, e);
    return url.img;
  };

  return (
    <div className="details">
      <h1>{details.name}</h1>
      <Link to={`/`}>
        <button>Home</button>
      </Link>
      <img src={details.img} alt="" />
      <p>Num: {details.num}</p>
      <p>Height: {details.height}</p>
      <p>Weight: {details.weight}</p>
      <p>Types:</p>
      <ul>
        {details.type.map((t) => {
          return <li>{t}</li>;
        })}
      </ul>
      <p>Weakness:</p>
      <ul>
        {details.weaknesses.map((w) => {
          return <li>{w}</li>;
        })}
      </ul>
      <p>Previous</p>
      {details.prev_evolution ? (
        details.prev_evolution.map((e) => {
          return (
            <Link to={`/details/${e.num}`}>
              <div>
                <img src={imgHandler(e.num)} alt="" />
                <p>{e.name}</p>
              </div>
            </Link>
          );
        })
      ) : (
        <p>NONE</p>
      )}
      <p>Evolution</p>
      {details.next_evolution ? (
        details.next_evolution.map((e) => {
          return (
            <Link to={`/details/${e.num}`}>
              <div>
                <img src={imgHandler(e.num)} alt="" />
                <p>{e.name}</p>
              </div>
            </Link>
          );
        })
      ) : (
        <p>NONE</p>
      )}
    </div>
  );
}

export default DetailsPage;
