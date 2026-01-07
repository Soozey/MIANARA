import { useRef, useEffect, useMemo, useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { contentService } from "../services/contentService";
import { DEMO_CONTENTS } from "../data/demoContent";

const CATEGORY_MAP = {
  "Toutes": "ALL",
  "Espace Étudiant": "SCOLAIRE",
  "Orientation & Carrière": "ORIENTATION",
  "Entrepreneuriat": "ENTREPRENEURIAT",
  "Formations": "PRO",
  "Développement Personnel": "PERSO",
  "Citoyenneté": "CITOYEN",
  "Santé & Bien-être": "SANTE",
  "Société & Culture": "SOCIAL",
  "Divers": "AUTRE"
};

const SUBRENDERING_MAP = {
  // Maps specific codes back to human labels if needed for cards
  "LYCEE": "Lycée", "COLLEGE": "Collège", "PRIMAIRE": "Primaire",
  "CREATION": "Création d'entreprise", "GESTION": "Gestion", "MARKETING": "Marketing",
  "INFORMATIQUE": "Informatique", "COMMERCE": "Commerce", "AGRI": "Agriculture"
};

const REVERSE_CATEGORY_MAP = {
  ...Object.fromEntries(Object.entries(CATEGORY_MAP).map(([k, v]) => [v, k])),
  ...SUBRENDERING_MAP
};

const CATEGORY_GROUPS = {
  "SCOLAIRE": ["LYCEE", "COLLEGE", "PRIMAIRE"],
  "ENTREPRENEURIAT": ["CREATION", "GESTION", "MARKETING"],
  "PRO": ["INFORMATIQUE", "COMMERCE", "AGRI"],
  // Legacy/Other mappings if needed
  "CANDIDATURE": ["CV", "LETTRE"], // Example
};

// Map URL params to Category Codes
// Map URL params to Category Codes
const URL_TO_CATEGORY = {
  // Main Nav
  "etudiant": "SCOLAIRE",
  "scolaire": "SCOLAIRE",
  "orientation": "ORIENTATION",
  "entrepreneuriat": "ENTREPRENEURIAT",
  "formations": "PRO",
  "dev-perso": "PERSO",
  "citoyennete": "CITOYEN",
  "sante": "SANTE",
  "societe": "SOCIAL",
  "divers": "AUTRE",

  // Orientation Page Slugs
  "orientation-pro": "ORIENTATION",
  "metiers": "PRO",
  "recherche-emploi": "ORIENTATION",
  "employabilite": "PRO",
  "bilan": "PERSO",
  "annuaire": "PRO",

  // Entrepreneuriat Page Slugs
  "bases": "ENTREPRENEURIAT",
  "formalisation": "ENTREPRENEURIAT",
  "creation": "ENTREPRENEURIAT",
  "financement": "ENTREPRENEURIAT",
  "gestion": "ENTREPRENEURIAT",
  "production": "ENTREPRENEURIAT",

  // Subcategories
  "lycee": "SCOLAIRE",
  "college": "SCOLAIRE",
  "primaire": "SCOLAIRE",
  "informatique": "PRO",
  "business": "ENTREPRENEURIAT"
};

const FILE_TYPES = [
  { label: "Tous", value: "ALL" },
  { label: "Articles", value: "TEXT" },
  { label: "Vidéos", value: "VIDEO" },
  { label: "Audios", value: "AUDIO" },
  { label: "PDF", value: "PDF" },
];

const norm = (s) => (s || "").toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");

const ArticleCard = ({ article }) => {
  const categoryLabel = REVERSE_CATEGORY_MAP[article.category] || article.category;

  // Rating Display
  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-0.5 text-yellow-400 text-sm" title={`${rating.toFixed(1)}/5 (${article.ratingCount} avis)`}>
        {[...Array(5)].map((_, i) => (
          <span key={i}>{i < Math.round(rating) ? "★" : "☆"}</span>
        ))}
        <span className="text-gray-400 text-xs ml-1">({article.ratingCount || 0})</span>
      </div>
    );
  };

  return (
    <article className="group flex flex-col bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
      <div className="h-3 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <span className="text-xs font-bold tracking-wider text-indigo-600 uppercase bg-indigo-50 px-2 py-1 rounded-md">
            {categoryLabel}
          </span>
          <div className="flex flex-col items-end gap-1">
            {article.is_premium && (
              <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                <span>⭐</span> Premium
              </span>
            )}
            {renderStars(article.rating || 0)}
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
          {article.title}
        </h2>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
          {article.description}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <span className={`px-2 py-1 rounded-md font-medium ${article.file_type === 'VIDEO' ? 'bg-red-50 text-red-600' :
              article.file_type === 'AUDIO' ? 'bg-purple-50 text-purple-600' :
                'bg-gray-100 text-gray-600'
              }`}>
              {article.file_type === 'TEXT' ? '📖 Article' :
                article.file_type === 'VIDEO' ? '🎬 Vidéo' :
                  article.file_type === 'AUDIO' ? '🎧 Audio' : (article.file_type || 'Article')}
            </span>
            <span>• {new Date(article.created_at || Date.now()).toLocaleDateString()}</span>
          </div>
          <Link
            to={`/content/${article.id}`}
            className="text-blue-600 font-semibold hover:underline"
          >
            Lire la suite →
          </Link>
        </div>
      </div>
    </article >
  );
}

const CONTENT_NORMALIZER = {
  // Demo Content Labels -> Internal Codes
  "Formation linguistique": "PRO",
  "Éducation scolaire": "SCOLAIRE",
  "Programme scolaire": "SCOLAIRE",
  "Orientation professionnelle": "ORIENTATION",
  "Techniques de candidature": "ORIENTATION",
  "Recherche d'emploi": "ORIENTATION",
  "Entrepreneuriat": "ENTREPRENEURIAT",
  "Gestion d’entreprise": "ENTREPRENEURIAT",
  "Création d'entreprise": "ENTREPRENEURIAT",
  "Innovation locale": "ENTREPRENEURIAT",
  "Formation professionnelle": "PRO",
  "Métiers d’avenir": "PRO",
  "Métiers & Compétences": "PRO",
  "Employabilité": "PRO",
  "Formations": "PRO",
  "Santé & Hygiène": "SANTE",
  "Santé et sécurité": "SANTE",
  "Santé & Bien-être": "SANTE",
  "Développement personnel": "PERSO",
  "Bilan de compétences": "PERSO",
  "Vie Citoyenne": "CITOYEN",
  "Citoyenneté": "CITOYEN",
  "Sensibilisation Sociale": "SOCIAL",
  "Société & Culture": "SOCIAL",
  "Espace Étudiant": "SCOLAIRE",
  "Orientation & Carrière": "ORIENTATION",
  "Vie sociale et citoyenneté": "CITOYEN",
  "Société / Sécurité": "SOCIAL",
  "Éducation / Sécurité": "SOCIAL",
  "Environnement": "CITOYEN",
  "Autre": "AUTRE"
};

export default function Library() {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedType, setSelectedType] = useState("ALL");
  const [sortByRating, setSortByRating] = useState(false);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Sync URL params to State
  useEffect(() => {
    const catParam = searchParams.get('category');
    const tagParam = searchParams.get('tag');

    if (catParam) {
      const code = URL_TO_CATEGORY[catParam] || Object.values(CATEGORY_MAP).find(v => v === catParam);
      if (code) setSelectedCategory(code);
    }

    if (tagParam) {
      setQuery(tagParam);
    }
  }, [searchParams]);

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const data = await contentService.getAll();
        // Normalize Categories to Codes
        const normalized = data.map(d => ({
          ...d,
          category: CONTENT_NORMALIZER[d.category] || CATEGORY_MAP[d.category] || d.category
        }));
        setArticles(normalized);
      } catch (err) {
        console.warn("Backend unavailable, falling back to demo content");
        const normalized = DEMO_CONTENTS.map(d => ({
          ...d,
          category: CONTENT_NORMALIZER[d.category] || CATEGORY_MAP[d.category] || "AUTRE",
          description: d.summary,
          created_at: new Date().toISOString(),
          file_type: "TEXT",
          is_premium: false
        }));
        setArticles(normalized);
        setError(null);
      } finally {
        setLoading(false);
      }
    };

    fetchContents();
  }, []);

  const filtered = useMemo(() => {
    const qq = norm(query);
    return articles.filter((a) => {
      // Enhanced Search: checks title, description AND tags
      const hasTag = a.tags && a.tags.some(t => norm(t).includes(qq));

      const matchesQuery =
        !qq ||
        norm(a.title).includes(qq) ||
        norm(a.description).includes(qq) ||
        hasTag;

      const matchesCategory =
        selectedCategory === "ALL" ||
        a.category === selectedCategory ||
        (CATEGORY_GROUPS[selectedCategory] && CATEGORY_GROUPS[selectedCategory].includes(a.category));

      const matchesType = selectedType === "ALL" || a.file_type === selectedType;

      return matchesQuery && matchesCategory && matchesType;
    });

    if (sortByRating) {
      // Sort by Rating (High to Low)
      result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    return result;
  }, [articles, query, selectedCategory, selectedType, sortByRating]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">📚 Bibliothèque Mianàra</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explorez des centaines de ressources pédagogiques, articles et tutoriels validés par notre communauté.
        </p>
      </div>

      {/* Barre de recherche et Filtres */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-10">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <span className="absolute left-3 top-3.5 text-gray-400">🔍</span>
            <input
              type="text"
              placeholder="Rechercher un sujet, un titre..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {FILE_TYPES.map((type) => (
              <button
                key={type.value}
                onClick={() => setSelectedType(type.value)}
                className={`px-4 py-2 rounded-xl font-medium transition-all whitespace-nowrap ${selectedType === type.value
                  ? "bg-gray-900 text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                {type.label}
              </button>
            ))}

            {/* Rating Sort Toggle */}
            <button
              onClick={() => setSortByRating(!sortByRating)}
              className={`px-4 py-2 rounded-xl font-medium transition-all whitespace-nowrap flex items-center gap-2 ${sortByRating
                ? "bg-yellow-100 text-yellow-800 border border-yellow-200 shadow-sm"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              <span>⭐</span> Mieux notés
            </button>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {Object.keys(CATEGORY_MAP).map((label) => (
            <button
              key={label}
              onClick={() => setSelectedCategory(CATEGORY_MAP[label])}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors border ${selectedCategory === CATEGORY_MAP[label]
                ? "bg-blue-50 border-blue-200 text-blue-700"
                : "border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Liste des contenus */}
      {loading && (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      )}

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl text-center mb-8">
          {error}
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.length > 0 ? (
            filtered.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))
          ) : (
            <div className="col-span-full text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
              <div className="text-6xl mb-4">🕵️‍♀️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Aucun résultat trouvé</h3>
              <p className="text-gray-500">Essayez de modifier vos filtres ou votre recherche.</p>
              <button
                onClick={() => { setQuery(""); setSelectedCategory("ALL"); setSelectedType("ALL"); }}
                className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
