import { pokemon } from './PokemonCard'
export function PokemonCard({ pokemon }) {}
const { id, name, types, image } = pokemon;

<article className="Pokemon-card">
    <header className="card-header">
        <span className="pokemon-id">{id}</span>
        <h2 className="pokemon-name">{name}</h2>
        <figure className="pokemon-image">
            <img src={image} alt={name} />
            <ul className="pokemon-types">
                <li className="type-badge type-${type.toLowerCase()}">{types}</li>
            </ul>
        </figure>
    </header>
</article>