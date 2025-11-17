import { useEffect, useState } from "react";

export default function Moderation() {
  const [contents, setContents] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetch("http://localhost:3000/api/contents")
      .then((res) => res.json())
      .then((data) => setContents(data));
  }, []);

  const approveContent = async (id) => {
    await fetch(`http://localhost:3000/api/contents/${id}/approve`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${user.token || ""}`,
      },
    });
    alert("Contenu approuvé !");
    setContents(contents.filter((c) => c.id !== id));
  };

  if (!user || user.role !== "admin") {
    return <p>⛔ Accès refusé</p>;
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h2>🛠️ Modération</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {contents
          .filter((c) => !c.published)
          .map((c) => (
            <li
              key={c.id}
              style={{
                border: "1px solid #ccc",
                marginBottom: "1rem",
                borderRadius: "8px",
                padding: "1rem",
              }}
            >
              <h3>{c.title_fr}</h3>
              <p>{c.body_fr?.slice(0, 100)}...</p>
              <button onClick={() => approveContent(c.id)}>✅ Approuver</button>
            </li>
          ))}
      </ul>
    </div>
  );
}
