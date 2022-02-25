import PokeList from "components/PokeList";
import { loadPokemons } from "../../utils/getStaticFunction";

const Pokemons = ({ pokemons }) => {
  return (
    <div>
      <h1 className="text-center pb-10 text-xl">Choose your first Pokemon</h1>
      <div className="grid grid-cols-3 gap-2 text-center">
        {pokemons.map((poke) => (
          <PokeList poke={poke} key={poke.id} />
        ))}
      </div>
    </div>
  );
};

export default Pokemons;

export async function getStaticProps() {
  // Instead of fetching your `/api` route you can call the same
  // function directly in `getStaticProps`
  const pokemons = await loadPokemons();

  // Props returned will be passed to the page component
  return { props: { pokemons } };
}
