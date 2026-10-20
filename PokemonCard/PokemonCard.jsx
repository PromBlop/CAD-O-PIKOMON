import { useState } from 'react';
import './PokemonCard.css';

export function PokemonCard({ pokemon, onSeeDetails, isFavorite, onToggleFavorite }) {
    const { id, name, type, image, shinyImage } = pokemon;
    const [isShiny, setIsShiny] = useState(false);

    return (
        <article
            className={`pokemon-card ${isShiny ? 'shiny' : ''} ${isFavorite ? 'favoritado' : ''}`}
            onClick={onSeeDetails}
        >
            <header className="card-header">
                <span className="pokemon-id">{`#${String(id).padStart(3, '0')}`}</span>
                <h2 className="pokemon-name">{name}</h2>
            </header>

            <figure className="pokemon-image-container">
                <img
                    src={isShiny ? shinyImage : image}
                    alt={`Ilustração ${isShiny ? 'shiny' : 'normal'} de ${name}`}
                />
            </figure>

            <ul className="pokemon-types">
                <li className={`type-badge type-${type.toLowerCase()}`}>{type}</li>
            </ul>

            <footer className="card-acoes" onClick={(e) => e.stopPropagation()}>
                <button className="btn-shiny" onClick={() => setIsShiny(!isShiny)}>
                    {isShiny ? '✨ Ver Normal' : '⭐ Ver Shiny'}
                </button>

                <button
                    className="btn-favorito"
                    aria-label={isFavorite ? `Remover ${name} dos favoritos` : `Favoritar ${name}`}
                    onClick={onToggleFavorite}
                >
                    {isFavorite ? '🧐' : '🔥'}
                </button>
            </footer>
        </article>
    );
}
