import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { contentService } from "../services/contentService";

export default function ContentView() {
  const { id } = useParams();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await contentService.getById(id);
        setContent(data);
      } catch (err) {
        setError("Impossible de charger le contenu.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [id]);

  if (loading) return <div className="text-center py-20"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div></div>;
  if (error) return <div className="text-center py-20 text-red-600 font-medium">{error}</div>;
  if (!content) return <div className="text-center py-20 text-gray-500">Contenu non trouvé.</div>;

  return (
    <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Header Image */}
      {content.thumbnail && (
        <div className="w-full h-64 md:h-96 overflow-hidden relative">
          <img
            src={content.thumbnail}
            alt={content.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <span className="bg-indigo-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-2 inline-block">
              {content.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">{content.title}</h1>
          </div>
        </div>
      )}

      <div className="p-8 md:p-12">
        {/* Meta Info */}
        {!content.thumbnail && (
          <div className="mb-8 border-b border-gray-100 pb-8">
            <span className="text-indigo-600 font-bold tracking-wide uppercase text-sm">{content.category}</span>
            <h1 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">{content.title}</h1>
          </div>
        )}

        <div className="flex items-center justify-between text-gray-500 text-sm mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600">
              {content.author?.username?.charAt(0).toUpperCase() || "A"}
            </div>
            <span>Par <span className="font-medium text-gray-900">{content.author?.username || "Anonyme"}</span></span>
          </div>
          <span>Publié le {new Date(content.created_at).toLocaleDateString()}</span>
        </div>

        {/* Description */}
        <p className="text-xl text-gray-600 leading-relaxed mb-8 italic border-l-4 border-indigo-200 pl-4">
          {content.description}
        </p>

        {/* Media Player */}
        {content.file_url && (
          <div className="mb-10 bg-gray-50 rounded-xl p-4 border border-gray-200">
            {content.file_type === 'VIDEO' && (
              <video controls className="w-full rounded-lg shadow-lg" src={content.file_url}>
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            )}
            {content.file_type === 'AUDIO' && (
              <audio controls className="w-full" src={content.file_url}>
                Votre navigateur ne supporte pas l'élément audio.
              </audio>
            )}
            {content.file_type === 'PDF' && (
              <div className="text-center py-8">
                <p className="mb-4 text-gray-700 font-medium">Ce contenu est un document PDF.</p>
                <a
                  href={content.file_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-md"
                >
                  📄 Ouvrir le PDF
                </a>
              </div>
            )}
          </div>
        )}

        {/* Rich Text Content */}
        <div
          className="prose prose-lg prose-indigo max-w-none text-gray-800"
          dangerouslySetInnerHTML={{ __html: content.body }}
        />

        {/* Footer Actions */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between items-center">
          <Link
            to="/library"
            className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center gap-2"
          >
            ← Retour à la bibliothèque
          </Link>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            Partager
          </button>
        </div>
      </div>
    </article>
  );
}
