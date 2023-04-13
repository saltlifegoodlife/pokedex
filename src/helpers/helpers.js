export const filterPokemon = (list, searchPokemon, type, weakness) => {
  if (searchPokemon) {
    return list.filter((pokemon) => pokemon.name == searchPokemon);
  } else if (type && weakness) {
    return list.filter(
      (pokemon) =>
        pokemon.type.includes(type) && pokemon.weaknesses.includes(weakness)
    );
  } else if (type || weakness) {
    if (type) {
      return list.filter((pokemon) => pokemon.type.includes(type));
    } else {
      return list.filter((pokemon) => pokemon.weaknesses.includes(weakness));
    }
  } else return list;
};

export const pokemonDetails = (list, num) => {
  let result = list.find((poke) => {
    return poke.num == num;
  });
  return result;
};
