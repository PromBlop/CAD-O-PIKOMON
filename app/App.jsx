import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Banner } from '../Banner/Banner'
import { PerfilDev } from '../PerfilDev/PerfilDev'
import { Header } from '../Header/Header'
import { PokemonCard } from '../PokemonCard/PokemonCard'
import { PokemonGrid } from '../PokemonGrid/PokemonGrid'
import { Pikamon } from '../pokemon'


function App() {
  const [count, setCount] = useState(0)
}

function App() {

  const charmander = {
    id: 4,
    name: "Charmander",
    types: ["Fire"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
  };

  const squirtle = {
    id: 7,
    name: "Squirtle",
    types: ["Water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
  };

  const bulbasaur = {
    id: 1,
    name: "Bulbasaur",
    types: ["Grass"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
  };

  const vaporeon = {
    id: 134,
    name: "vaporeon",
    types: ["Water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png"
  };

  const flareon = {
    id: 136,
    name: "flareon",
    types: ["Fire"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png"
  };

  <div className="cards-grid">
    <PokemonCard pokemon={charmander} />
    <PokemonCard pokemon={squirtle} />
    <PokemonCard pokemon={bulbasaur} />
  </div>

  return (
    <div className="pokedex-app">
      <h1>PokéAgenda</h1>
      <p>Carregando dados dos Pokémon...</p>
    </div>
  );
}

export default App;
