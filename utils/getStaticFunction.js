export async function loadPokemons() {
  // Call an external API endpoint to get pokemons
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=50"
  );
  const data = await res.json();
  const pokemons = data.results.map(async (pokemon) => {
    return await getPokemonsData(pokemon.url);
  });
  return Promise.all(pokemons);
}

export async function getPokemonsData(url) {
  // Call an external API endpoint to get pokemons
  const res = await fetch(url);
  const data = await res.json();

  return data;
}
