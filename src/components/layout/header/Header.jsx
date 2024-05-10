import "./header.css";

import { Navbar } from "../../navbar/Navbar";

export const Header = ({ isLoggedIn, userName }) => {
  return (
    <header className="header">
      {isLoggedIn ? (
        <p className="texto__bienvenida">Bienvenido {userName}</p>
      ) : (
        <a href="#" className="navbar__item">
          Iniciar Sesión
        </a>
      )}

      <Navbar />
    </header>
  );
};
