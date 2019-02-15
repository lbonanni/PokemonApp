import { LOAD_ALL_POKEMONS } from "../actions";

const initialState = {
  pokemons: []
};

export default function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ALL_POKEMONS:
      return { ...state, pokemons: action.pokemons };
    default:
      return state;
  }
}
