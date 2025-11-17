import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ContentView() {
  const { id } = useParams();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/api/contents/${id}`)
      .then(res => res.json())
      .then(data => {
        setContent(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Chargement...</p>;
  if (!content) return <p>Contenu introuvable.</p>;

  return (
    <div style={{ maxWidth: "800px", margin: "auto", lineHeight: "1.7" }}>
      <h1>{content.title_fr || content.title_mg || content.title_en}</h1>
      <p style={{ opacity: 0.6, fontSize: "0.9rem" }}>
        Type : {content.type} — Auteur : {content.author_name || "Inconnu"}
      </p>

      <hr style={{ margin: "1.5rem 0" }} />

      <div
        dangerouslySetInnerHTML={{ __html: content.body_fr || content.body_mg || content.body_en }}
      />

      <hr style={{ margin: "1.5rem 0" }} />

      {/* Navigation entre contenus plus tard */}
      <p style={{ opacity: 0.6 }}>Fin du contenu</p>
    </div>
  );
}
