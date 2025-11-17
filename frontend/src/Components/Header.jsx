import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">📚 Mianàra</div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/library">Bibliothèque</Link>
        <Link to="/about">À propos</Link>
        <Link to="/contribute">Contribuer</Link>

      </nav>
    </header>
  );
}
