import { PokemonCard } from './PokemonCard';
import { pokemonsIniciais } from './pokemons';
import './PokemonGrid.css';

export function PokemonGrid() {
    return (
        <main className="pokemon-grid">
            {pokemonsIniciais.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </main>
    );
}
