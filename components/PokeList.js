import Image from "next/image";
import Link from "next/link";

const PokeList = ({ poke }) => {
  return (
    <ul>
      <li className="text-black font-medium">{poke.id}</li>
      <li className="text-black font-medium capitalize">{poke.name}</li>
      <Link href={`/pokemons/${poke.id}`}>
        <a>
          <Image
            alt={poke.name}
            width="120"
            height="120"
            src={poke.sprites.front_default}
            className="border-2 rounded-full border-neutral-600 p-4 bg-stone-50 shadow-sm shadow-black"
          />
        </a>
      </Link>
    </ul>
  );
};

export default PokeList;
