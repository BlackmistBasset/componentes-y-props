import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <a href="" className="navbar__link">
            Item1 Modificado
          </a>
        </li>
        <li className="navbar__item">
          <a href="" className="navbar__link">
            Item2
          </a>
        </li>
        <li className="navbar__item">
          <a href="" className="navbar__link">
            Item3
          </a>
        </li>
      </ul>
    </nav>
  );
};
