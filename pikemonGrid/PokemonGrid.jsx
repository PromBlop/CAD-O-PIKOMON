import { useState, useEffect } from 'react';
import { PokemonCard } from './PokemonCard';
import { PokemonFilters } from './PokemonFilters';
import { PokemonModal } from './PokemonModal';
import './PokemonGrid.css';

const tiposPT = {
    normal: 'Normal', fire: 'Fogo', water: 'Agua', electric: 'Eletrico',
    grass: 'Planta', ice: 'Gelo', fighting: 'Lutador', poison: 'Veneno',
    ground: 'Solo', flying: 'Voador', psychic: 'Psiquico', bug: 'Inseto',
    rock: 'Pedra', ghost: 'Fantasma', dragon: 'Dragao'
};

export function PokemonGrid() {
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('Todos');
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [favorites, setFavorites] = useState(() => {
        const salvos = localStorage.getItem('@pokeagenda:favoritos');
        return salvos ? JSON.parse(salvos) : [];
    });

    useEffect(() => {
        async function fetchPokemons() {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
                const data = await response.json();

                const detailedPokemons = await Promise.all(
                    data.results.map(async (item) => {
                        const pokeRes = await fetch(item.url);
                        const pokeDetails = await pokeRes.json();
                        const getStat = (nome) =>
                            pokeDetails.stats.find((s) => s.stat.name === nome)?.base_stat ?? 0;

                        return {
                            id: pokeDetails.id,
                            name: pokeDetails.name.charAt(0).toUpperCase() + pokeDetails.name.slice(1),
                            type: tiposPT[pokeDetails.types[0].type.name] ?? 'Normal',
                            types: pokeDetails.types.map((t) => tiposPT[t.type.name] ?? t.type.name),
                            image: pokeDetails.sprites.other['official-artwork'].front_default,
                            shinyImage: pokeDetails.sprites.other['official-artwork'].front_shiny,
                            height: pokeDetails.height / 10,
                            weight: pokeDetails.weight / 10,
                            abilities: pokeDetails.abilities.map((a) => a.ability.name),
                            moves: pokeDetails.moves.slice(0, 20).map((m) => m.move.name),
                            stats: {
                                hp: getStat('hp'), attack: getStat('attack'), defense: getStat('defense'),
                                specialAttack: getStat('special-attack'),
                                specialDefense: getStat('special-defense'), speed: getStat('speed')
                            }
                        };
                    })
                );
                setPokemons(detailedPokemons);
            } catch (error) {
                console.error('Erro ao buscar Pokémons:', error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPokemons();
    }, []);

    useEffect(() => {
        localStorage.setItem('@pokeagenda:favoritos', JSON.stringify(favorites));
    }, [favorites]); 
    function toggleFavorite(pokemonId) {
        setFavorites((prevFavorites) => {
            if (prevFavorites.includes(pokemonId)) {
                return prevFavorites.filter((id) => id !== pokemonId);
            }
            return [...prevFavorites, pokemonId];
        });
    }

    const pokemonsFiltrados = pokemons.filter((pokemon) => {
        const matchesSearch =
            pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            String(pokemon.id).includes(searchTerm);
        const matchesType = selectedType === 'Todos' || pokemon.type === selectedType;
        return matchesSearch && matchesType;
    });

    if (isLoading) {
        return (
            <div className="loading-container">
                <h2>🔴 Carregando Pokédex Oficial...</h2>
                <p>Buscando os 151 Pokémons na PokéAPI...</p>
            </div>
        );
    }

    return (
        <section className="pokedex-body">
            <PokemonFilters
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedType={selectedType}
                setSelectedType={setSelectedType}
            />

            {pokemonsFiltrados.length === 0 ? (
                <h3 className="no-results">❌ Nenhum Pokémon encontrado!</h3>
            ) : (
                <main className="pokemon-grid">
                    {pokemonsFiltrados.map((pokemon) => (
                        <PokemonCard
                            key={pokemon.id}
                            pokemon={pokemon}
                            onSeeDetails={() => setSelectedPokemon(pokemon)}
                            isFavorite={favorites.includes(pokemon.id)}
                            onToggleFavorite={() => toggleFavorite(pokemon.id)}
                        />
                    ))}
                </main>
            )}

            {selectedPokemon && (
                <PokemonModal
                    pokemon={selectedPokemon}
                    onClose={() => setSelectedPokemon(null)}
                />
            )}
        </section>
    );
}
