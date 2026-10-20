import './PokemonFilters.css';

export function PokemonFilters({ searchTerm, setSearchTerm, selectedType, setSelectedType }) {
    const tipos = ['Todos', 'Planta', 'Fogo', 'Agua', 'Eletrico', 'Normal', 'Veneno', 'Psiquico'];

    return (
        <section className="filters-container">
            <div className="search-box">
                <input
                    type="text"
                    placeholder="🔍 Buscar Pokémon por nome ou ID..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="type-buttons">
                {tipos.map((tipo) => (
                    <button
                        key={tipo}
                        className={`btn-type btn-${tipo.toLowerCase()} ${selectedType === tipo ? 'ativo' : ''}`}
                        onClick={() => setSelectedType(tipo)}
                    >
                        {tipo}
                    </button>
                ))}
            </div>
        </section>
    );
}