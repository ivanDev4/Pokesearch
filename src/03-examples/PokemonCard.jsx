import React from "react";

export default function PokemonCard({ name, description, sprites, id }) {
  return (
    <>
      <section className="pokemon-card">
        <h2 className="pokemon-name">{name}:</h2>
        {/* imagenes */}
        <div>
          <img
            src={sprites.other.dream_world.front_default}
            className="pokemon-image"
            alt={name}
          />
          <aside className="pokemon-id">{id}</aside>
        </div>
      </section>
      {description && (
        <span className="pokemon-description">{description}</span>
      )}
    </>
  );
}
