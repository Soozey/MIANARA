import { useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function Contribute() {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [message, setMessage] = useState("");

  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
    autofocus: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!editor) return;

    const body = editor.getHTML();

    try {
      const res = await fetch("/api/contents", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "article",
          title_fr: title,
          body_fr: body,
          tags: tags.split(",").map((t) => t.trim()),
          published: 1,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Contenu ajouté !");
        setTitle("");
        setTags("");
        editor.commands.setContent("");
      } else {
        setMessage("❌ Erreur : " + (data.error || "Échec de l’envoi"));
      }
    } catch (err) {
      setMessage("❌ Erreur réseau : " + err.message);
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <h2>📝 Contribuer</h2>

      <form onSubmit={handleSubmit}>
        <label>Titre :</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
          }}
        />

        <label>Contenu :</label>
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "6px",
            padding: "10px",
            minHeight: "200px",
            marginBottom: "10px",
            background: "white",
          }}
        >
          <EditorContent editor={editor} />
        </div>

        <label>Tags (séparés par des virgules) :</label>
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "20px",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            background: "#2c7be5",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Envoyer
        </button>
      </form>

      {message && (
        <p style={{ marginTop: "20px", fontWeight: "bold" }}>{message}</p>
      )}
    </div>
  );
}
