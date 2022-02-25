import Image from "next/image";
import { loadPokemons } from "utils/getStaticFunction";

function Pokemon({ poke }) {
  const typeOne = poke.types[0]?.type?.name;
  const typeTwo = poke.types[1]?.type?.name || "";

  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-10 text-4xl shadow-lg shadow-slate-500 p-2 capitalize">
        {poke.name}
      </h1>
      <div className="flex items-center gap-3 border-2 rounded-full border-neutral-600 p-3 bg-indigo-400">
        <h3 className="shadow-md shadow-slate-300 bg-slate-300 p-2 text-stone-900 font-medium capitalize">
          {typeOne + " / " + typeTwo}
        </h3>
        <Image
          alt={poke.name}
          width="250"
          height="250"
          src={poke.sprites.other.dream_world.front_default}
        />
      </div>
      <div>
        <small className="p-2 bg-teal-300">HEIGHT: {poke.height}</small>
        {poke.stats.map((stat) => (
          <small key={stat.stat.name} className="p-2 bg-emerald-200 m-2">
            {stat.stat.name.toUpperCase()}: {stat.base_stat}
          </small>
        ))}
      </div>
    </div>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await loadPokemons();
  // Get the paths we want to pre-render based on posts
  const paths = res.map((pokemon) => ({
    params: { id: pokemon.id.toString() },
  }));

  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.id.toString()}`
  );
  const poke = await res.json();

  // Pass post data to the page via props
  return { props: { poke } };
}

export default Pokemon;
