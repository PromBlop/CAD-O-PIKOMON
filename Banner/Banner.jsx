import './Banner.css';
export function Banner() {
  
  return (
    <header className="banner-conteiner">
      <figure className="banner-logo">
        <img 
          src="https://via.placeholder.com/150" 
          alt="Logotipo da Aplicação" 
        />
      </figure>
      <p className="banner-subtitulo">Sua plataforma modular</p>
    </header>
  );
}
