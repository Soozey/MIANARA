import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json();
      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/");
      } else {
        alert("Email déjà utilisé");
      }
    } catch {
      alert("Erreur réseau");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          Créer un compte 📚
        </h2>

        <input
          type="text"
          placeholder="Nom complet"
          className="w-full p-3 border rounded-lg mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Adresse email"
          className="w-full p-3 border rounded-lg mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Mot de passe"
          className="w-full p-3 border rounded-lg mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition-all"
        >
          S'inscrire
        </button>

        <p className="text-center mt-4 text-sm">
          Déjà un compte ?{" "}
          <Link to="/login" className="text-green-600 hover:underline">
            Se connecter
          </Link>
        </p>
      </form>
    </div>
  );
}
