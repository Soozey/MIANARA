// src/pages/Read.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function Read() {
  // Récupère l'ID depuis l'URL, ex : /read/3 → id = "3"
  const { id } = useParams();

  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`/api/contents/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement du contenu");
        }
        return response.json();
      })
      .then((data) => {
        setContent(data);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  // États intermédiaires
  if (loading) {
    return (
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "1rem" }}>
        <p>
          <Link to="/library">← Retour à la bibliothèque</Link>
        </p>
        <p>Chargement...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "1rem" }}>
        <p>
          <Link to="/library">← Retour à la bibliothèque</Link>
        </p>
        <p style={{ color: "red" }}>Erreur : {error}</p>
      </section>
    );
  }

  if (!content) {
    return (
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "1rem" }}>
        <p>
          <Link to="/library">← Retour à la bibliothèque</Link>
        </p>
        <p>Contenu introuvable.</p>
      </section>
    );
  }

  // Affichage normal
  return (
    <section style={{ maxWidth: "900px", margin: "0 auto", padding: "1rem" }}>
      <p>
        <Link to="/library">← Retour à la bibliothèque</Link>
      </p>

      <h1 style={{ marginBottom: "1rem" }}>
        {content.title_fr || "Sans titre"}
      </h1>

      <p style={{ lineHeight: 1.6, whiteSpace: "pre-line" }}>
        {content.body_fr || "Pas de texte disponible."}
      </p>
    </section>
  );
}
