import { loadAllPokemons, FETCH_ALL_POKEMONS } from "../actions";
import { ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import { map, mergeMap } from "rxjs/operators";

export const fetchAllPokemonsEpic = action$ =>
  action$.pipe(
    ofType(FETCH_ALL_POKEMONS),
    mergeMap(() =>
      ajax
        .getJSON(`https://pokeapi.co/api/v2/pokemon`)
        .pipe(map(response => loadAllPokemons(response.results)))
    )
  );
