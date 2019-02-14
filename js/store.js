import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import pokemonReducer from "./reducers";
import { watchFetchPokemon } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  pokemonReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchFetchPokemon);
