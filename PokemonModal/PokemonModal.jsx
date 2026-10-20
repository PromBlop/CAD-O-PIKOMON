import { useState } from 'react';
import './PokemonModal.css';

export function PokemonModal({ pokemon, onClose }) {
    // O interruptor de 3 posições: começa em "Sobre"
    const [activeTab, setActiveTab] = useState('about');

    const { id, name, types, image, height, weight, abilities, moves, stats } = pokemon;

    // DRY: 6 linhas de stat geradas de um array com .map() (Step 05 trabalhando de novo!)
    const barrasDeStats = [
        { rotulo: 'HP', valor: stats.hp },
        { rotulo: 'Ataque', valor: stats.attack },
        { rotulo: 'Defesa', valor: stats.defense },
        { rotulo: 'Atq. Esp.', valor: stats.specialAttack },
        { rotulo: 'Def. Esp.', valor: stats.specialDefense },
        { rotulo: 'Velocidade', valor: stats.speed }
    ];

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <button className="btn-close-modal" onClick={onClose} aria-label="Fechar ficha">✖</button>

                <header className={`modal-banner bg-type-${types[0].toLowerCase()}`}>
                    <span className="modal-pokemon-number">{`#${String(id).padStart(3, '0')}`}</span>
                    <h2 className="modal-pokemon-name">{name}</h2>
                    <figure className="modal-pokemon-image-box">
                        <img src={image} alt={`Ilustração oficial de ${name}`} />
                    </figure>
                </header>


                <nav className="modal-tabs-nav" aria-label="Seções da ficha">
                    <button
                        className={`tab-btn ${activeTab === 'about' ? 'active' : ''}`}
                        onClick={() => setActiveTab('about')}
                    >
                        Sobre
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'stats' ? 'active' : ''}`}
                        onClick={() => setActiveTab('stats')}
                    >
                        Estatísticas
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'moves' ? 'active' : ''}`}
                        onClick={() => setActiveTab('moves')}
                    >
                        Golpes
                    </button>
                </nav>


                <main className="modal-tab-content">
                    {activeTab === 'about' && (
                        <div className="tab-pane">
                            <ul className="modal-types">
                                {types.map((tipo) => (
                                    <li key={tipo} className={`type-badge type-${tipo.toLowerCase()}`}>{tipo}</li>
                                ))}
                            </ul>
                            <p><strong>Altura:</strong> {height} m</p>
                            <p><strong>Peso:</strong> {weight} kg</p>
                            <p><strong>Habilidades:</strong> {abilities.join(', ')}</p>
                        </div>
                    )}

                    {activeTab === 'stats' && (
                        <div className="tab-pane">
                            {barrasDeStats.map(({ rotulo, valor }) => (
                                <div key={rotulo} className="stat-line">
                                    <span className="stat-label">{rotulo}</span>
                                    <div className="stat-track">
                                        <div
                                            className="stat-fill"
                                            style={{ width: `${(valor / 180) * 100}%` }}
                                        ></div>
                                    </div>
                                    <span className="stat-value">{valor}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'moves' && (
                        <div className="tab-pane moves-grid">
                            {moves.map((move) => (
                                <span key={move} className="move-pill">{move}</span>
                            ))}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
