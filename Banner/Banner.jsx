// Importação de módulos e estilos (JS ES6)
import './Banner.css';

// Componente Funcional com Exportação Nomeada
export function Banner() {
  return (
    // HTML5 Semântico com atributos JSX (className)
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