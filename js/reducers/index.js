import { LOAD_ALL_POKEMONS } from "../actions";

const initialState = {
  pokemon: "POKEMON DANS LE STATE INITAL"
};

export default function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ALL_POKEMONS:
      return { ...state, pokemon: "POKEMON DANS LE NOUVEAU STATE" };
    default:
      return state;
  }
}
