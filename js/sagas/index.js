import { call, put, takeEvery } from "redux-saga/effects";
import { loadAllPokemons, FETCH_ALL_POKEMONS } from "../actions";

export function* fetchPokemons() {
  const data = yield call(fetch, "https://pokeapi.co/api/v2/pokemon");
  const result = yield data.json();

  yield put(loadAllPokemons(result.results));
}

export function* watchFetchPokemon() {
  yield takeEvery(FETCH_ALL_POKEMONS, fetchPokemons);
}
