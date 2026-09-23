import './RodapeInstitucional.css';

export function RodapeInstitucional() {
  // Captura dinâmica do ano atual
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="rodape-container">
      <div className="rodape-conteudo">
        <p className="rodape-texto">
          &copy; {anoAtual} Portal Educacional. Todos os direitos reservados.
        </p>

        <nav className="rodape-navegacao" aria-label="Links institucionais">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Acessar página oficial no GitHub"
            className="rodape-link"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}
