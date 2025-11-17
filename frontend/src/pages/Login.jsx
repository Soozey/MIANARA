import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [identifier, setIdentifier] = useState(""); // email OU nom
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const API = import.meta.env.VITE_API_URL || "http://localhost:3000";

  const handleLogin = async () => {
    setError("");
    try {
      const res = await fetch(`${API}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier, password })
      });
      const data = await res.json();
      if (!res.ok) return setError(data.error || "Erreur de connexion");

      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/admin/moderation");
    } catch (e) {
      setError("Impossible de joindre le serveur");
    }
  };

  return (
    <div style={{maxWidth: 420, margin: "60px auto", padding: 20, border: "1px solid #ddd", borderRadius: 12}}>
      <h2 style={{marginBottom: 16}}>Connexion</h2>

      <label>Identifiant (email ou nom)</label>
      <input
        style={{width: "100%", margin: "8px 0", padding: 10}}
        placeholder="admin@karibo.local"
        value={identifier}
        onChange={e => setIdentifier(e.target.value)}
      />

      <label>Mot de passe</label>
      <input
        style={{width: "100%", margin: "8px 0", padding: 10}}
        type="password"
        placeholder="********"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={handleLogin} style={{width: "100%", padding: 12, marginTop: 8}}>
        Se connecter
      </button>

      {error && <p style={{ color: "red", marginTop: 12 }}>{error}</p>}
      <p style={{fontSize: 12, color: "#666", marginTop: 12}}>
        API : {API}
      </p>
    </div>
  );
}
