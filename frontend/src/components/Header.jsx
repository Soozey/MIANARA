import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Header.css";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <div className="logo">📚 Mianàra</div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/library">Bibliothèque</Link>
        <Link to="/about">À propos</Link>
        <Link to="/contribute">Contribuer</Link>

        {user ? (
          <>
            <span style={{ marginLeft: '1rem', fontWeight: 'bold' }}>{user.username}</span>
            <button onClick={logout} className="auth-btn logout">Déconnexion</button>
          </>
        ) : (
          <Link to="/login" className="auth-btn login">Connexion</Link>
        )}
      </nav>
    </header>
  );
}
