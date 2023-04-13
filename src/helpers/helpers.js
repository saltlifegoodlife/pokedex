export const filterPokemonByName = (list, searchPokemon) => {
  if (searchPokemon) {
    return list.filter((pokemon) => pokemon.name == searchPokemon);
  } else return list;
};
