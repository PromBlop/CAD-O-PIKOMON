import './Footer.css';

export function Footer() {

  const anoAtual = new Date().getFullYear();

  return (
    <footer className="Footer-container">
      <div className="Footer-conteudo">
        <p className="Footer-texto">
          &copy; {anoAtual} Portal Educacional. Todos os direitos reservados.
        </p>

        <nav className="Footer-navegacao" aria-label="Links institucionais">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Acessar página oficial no GitHub"
            className="Footer-link"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}

<footer className="card-acoes">
  <button
    className="btn-shiny"
    onClick={() => setIsShiny(!isShiny)}
  >
    {isShiny ? '✨ Ver Normal' : '⭐ Ver Shiny'}
  </button>

  <button>
    className={`btn-favorito ${isFavorite ? 'favoritado' : ''}`}
    onClick={() => setIsFavorite(!isFavorite)}
    {isFavorite ? '❤️' : '🤍'}
    </button>
</footer>
