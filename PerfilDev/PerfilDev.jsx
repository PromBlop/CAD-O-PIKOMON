import './PerfilDev.css';

export function PerfilDev() {
  return (
    // Tag semântica article encapsulando o cartão
    <article className="perfil-card">
      <header className="perfil-cabecalho">
        <span className="perfil-id">#DEV01</span>
        <h2 className="perfil-nome">Alex Silva</h2>
      </header>

      <figure className="perfil-foto-conteiner">
        <img 
          src="https://via.placeholder.com/120" 
          alt="Foto de perfil de Alex Silva" 
        />
      </figure>

      <ul className="perfil-skills">
        <li className="skill-badge skill-react">React</li>
        <li className="skill-badge skill-css">CSS</li>
      </ul>
    </article>
  );
}