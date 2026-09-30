import { PokemonCard } from './PokemonCard';
import './PokemonGrid.css';
import { useState, useEffect } from 'react';
import '.PokemonGrid.css';

// Dicionário de tradução dos tipos (PokéAPI em inglês ➜ nossas classes CSS)
const tiposPT = {
    normal: 'Normal', fire: 'Fogo', water: 'Agua', electric: 'Eletrico',
    grass: 'Planta', ice: 'Gelo', fighting: 'Lutador', poison: 'Veneno',
    ground: 'Solo', flying: 'Voador', psychic: 'Psiquico', bug: 'Inseto',
    rock: 'Pedra', ghost: 'Fantasma', dragon: 'Dragao'
};

export function PokemonGrid() {
    // 1. O estado dos dados (agora a "esteira" não puxa de pokemons.js, e sim da API)
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // 2. O efeito que roda UMA vez quando o componente nasce
    useEffect(() => {
        async function fetchPokemons() {
            try {
                // 2.1 Busca o índice dos 151 Pokémons da 1ª geração
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
                const data = await response.json();

                // 2.2 Para CADA item do índice, busca os detalhes (foto e tipo)
                const detailedPokemons = await Promise.all(
                    data.results.map(async (item) => {
                        const pokeRes = await fetch(item.url);
                        const pokeDetails = await pokeRes.json();

                        return {
                            id: pokeDetails.id,
                            // Capitaliza o nome: 'pikachu' ➜ 'Pikachu'
                            name: pokeDetails.name.charAt(0).toUpperCase() + pokeDetails.name.slice(1),
                            // Tipo principal TRADUZIDO para bater com as classes CSS do Step 03
                            type: tiposPT[pokeDetails.types[0].type.name] ?? 'Normal',
                            types: pokeDetails.types.map(t => tiposPT[t.type.name] ?? t.type.name),
                            image: pokeDetails.sprites.other['official-artwork'].front_default,
                            shinyImage: pokeDetails.sprites.other['official-artwork'].front_shiny
                        };
                    })
                );

                // 2.3 Salva a lista no estado
                setPokemons(detailedPokemons);
            } catch (error) {
                console.error('Erro ao buscar Pokémons:', error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchPokemons();
    }, []); // o freio do loop infinito

    // 3. Tela de carregamento enquanto a "esteira" enche
    if (isLoading) {
        return (
            <div className="loading-container">
                <h2>🔴 Carregando Pokédex Oficial...</h2>
                <p>Buscando os 151 Pokémons na PokéAPI...</p>
            </div>
        );
    }

    // 4. A grade (idêntica à do Step 05, agora alimentada pela API)
    return (
        <main className="pokemon-grid">
            {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </main>
    );
}

export function PokemonGrid() {
    return (
        <main className="pokemon-grid">
            {pokemonsIniciais.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </main>
    );
}
