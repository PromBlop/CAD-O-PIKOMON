import { pokemon } from './PokemonCard';
import { useState } from 'react';
import './PokemonCard.css';
export function PokemonCard({ pokemon }) {}
const { id, name, types, image } = pokemon;
const [isShiny, setIsShiny] = useState(false);
const [isFavorite, setIsFavorite] = useState(False);

<article className="Pokemon-card">
    <header className="card-header">
        <span className="pokemon-id">{`#${String(id).padStart(3, '0')}`}</span>
        <h2 className="pokemon-name">{name}</h2>
        <figure className="pokemon-image">
            <img src={image} alt={name} />
            <img
            src={isShiny && pokemon.shinyImage ? pokemon.shinyImage : pokemon.image}
            alt={pokemon.name}
            />
            <ul className="pokemon-types">
                <li className="type-badge type-${type.toLowerCase()}">{types}</li>
            </ul>
        </figure>
    </header>
</article>

