import { createEpicMiddleware } from "redux-observable";
import { createStore, applyMiddleware } from "redux";
import pokemonReducer from "./reducers";
import { fetchAllPokemonsEpic } from "./epics";

const epicMiddleware = createEpicMiddleware();

export const store = createStore(
  pokemonReducer,
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(fetchAllPokemonsEpic);
