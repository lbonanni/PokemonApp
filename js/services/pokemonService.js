const ALL_POKEMON_URL = "https://pokeapi.co/api/v2/pokemon";

export const getAllPokemon = async () => {
	const response = await fetch(ALL_POKEMON_URL);
	const allPokemon = await response.json();

	return allPokemon.results;
}

export const fetchUrl = async (url) => {
	const response = await fetch(url);
	const data = await response.json();

	return data;
}