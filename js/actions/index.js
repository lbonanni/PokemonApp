export const LOAD_ALL_POKEMONS = "LOAD_ALL_POKEMONS";
export const FETCH_ALL_POKEMONS = "FETCH_ALL_POKEMONS";

export const loadAllPokemons = pokemons => {
  return {
    type: LOAD_ALL_POKEMONS,
    pokemons
  };
};

export const fetchAllPokemons = () => {
  return {
    type: FETCH_ALL_POKEMONS
  };
};
