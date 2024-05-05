import useCounter from "../hooks/useCounter";
import useFetch from "../hooks/useFetch";
import LoadingMessage from "./LoadingMessage";
import PokemonCard from "./PokemonCard";
import useTranslate from "../hooks/useTranslate";
import "../styles/MultipleCustomHooks.css";

export default function MultipleCustomHooks() {
  const upperLimit = 40;
  const lowerLimit = 1;
  const step = 1;

  const { counter, increment, decrement, reset } = useCounter(1);

  const { data, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  const { data: description } = useFetch(
    `https://pokeapi.co/api/v2/pokemon-species/${counter}`
  );

  const textTranslated = useTranslate(
    description?.flavor_text_entries[0].flavor_text
  );

  return (
    <>
      <span className="author">Made by Yeison Tobo</span>
      <div className="main-container">
        <h1 className="title">DEMO Pokemon</h1>

        {isLoading ? (
          <LoadingMessage />
        ) : (
          <PokemonCard
            name={data.name}
            description={textTranslated}
            sprites={data.sprites}
            id={data.id}
          />
        )}

        <div className="buttons-container">
          <button
            className="btn"
            onClick={
              counter <= upperLimit ? () => increment(step) : reset(lowerLimit)
            }
          >
            Siguiente
          </button>
          <button
            className="btn"
            onClick={counter > 0 ? () => decrement(step) : reset(upperLimit)}
          >
            Anterior
          </button>
        </div>
      </div>
    </>
  );
}
