import { createStore } from "redux";
import pokemonReducer from "./reducers";

export const store = createStore(pokemonReducer);
