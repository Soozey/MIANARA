import { useEffect, useState } from 'react';
import { contentService } from '../services/contentService';
import { Link } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';

export default function Home() {
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const data = await contentService.getAll();
        setContents(data);
      } catch (err) {
        setError("Impossible de charger les contenus.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchContents();
  }, []);

  // Filter helpers
  const getRecentContents = () => contents.slice(0, 4);
  const getContentsByCategory = (cat) => contents.filter(c => c.category === cat).slice(0, 4);

  return (
    <div className="space-y-12 pb-12">

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white rounded-3xl overflow-hidden shadow-2xl mx-4 md:mx-0 mt-4 md:mt-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative p-6 md:p-10 max-w-3xl">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-700/50 backdrop-blur-sm border border-primary-500 text-primary-100 text-sm font-bold mb-6">
            🚀 Plateforme Éducative Citoyenne
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Apprenez, Partagez, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-pink-300">Grandissez.</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-100 mb-8 leading-relaxed max-w-2xl">
            Mianàra est votre espace pour accéder à des ressources éducatives de qualité et partager votre savoir avec la communauté.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contribute"
              className="px-8 py-4 bg-white text-primary-900 rounded-xl font-bold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-center"
            >
              ✍️ Contribuer
            </Link>
            <Link
              to="/library"
              className="px-8 py-4 bg-primary-700/50 backdrop-blur-md border border-primary-500 text-white rounded-xl font-bold hover:bg-primary-700/70 transition-all text-center"
            >
              📚 Explorer la bibliothèque
            </Link>
          </div>
        </div>
      </section>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        </div>
      ) : error ? (
        <div className="text-center py-20 text-red-500 font-medium bg-red-50 rounded-xl mx-4">{error}</div>
      ) : (
        <>
          {/* SECTION 1: À NE PAS MANQUER (Recent) */}
          <section className="px-4 md:px-0">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                🔥 À ne pas manquer
              </h2>
              <Link to="/library" className="text-primary-600 font-semibold hover:text-primary-700 text-sm">Voir tout</Link>
            </div>

            {contents.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {getRecentContents().map(content => (
                  <ArticleCard key={content.id} content={content} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-2xl border border-dashed border-gray-200 text-gray-500">
                Aucun contenu pour le moment. Soyez le premier à contribuer !
              </div>
            )}
          </section>

          {/* SECTION 2: ÉTUDIANT (Category Focus) */}
          <section className="px-4 md:px-0">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                🎓 Conseils pour les Étudiants
              </h2>
              <Link to="/student" className="text-primary-600 font-semibold hover:text-primary-700 text-sm">Espace Étudiant</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {getContentsByCategory('SCOLAIRE').length > 0 ? (
                getContentsByCategory('SCOLAIRE').map(content => (
                  <ArticleCard key={content.id} content={content} />
                ))
              ) : (
                <div className="col-span-full text-center py-8 text-gray-400 italic bg-gray-50 rounded-xl">
                  Pas encore de contenus dans cette catégorie.
                </div>
              )}
            </div>
          </section>

          {/* SECTION 3: CITOYENNETÉ (Category Focus) */}
          <section className="px-4 md:px-0">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                🏛️ Leçons de Citoyenneté
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {getContentsByCategory('CITOYEN').length > 0 ? (
                getContentsByCategory('CITOYEN').map(content => (
                  <ArticleCard key={content.id} content={content} />
                ))
              ) : (
                <div className="col-span-full text-center py-8 text-gray-400 italic bg-gray-50 rounded-xl">
                  Pas encore de contenus dans cette catégorie.
                </div>
              )}
            </div>
          </section>

          {/* SECTION 4: LIVE / CONFÉRENCES (Static MVP) */}
          <section className="px-4 md:px-0">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              🎤 Prochaines Conférences
            </h2>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white shadow-xl flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3 aspect-video bg-gray-700 rounded-xl flex items-center justify-center relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">▶️</span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="inline-block px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full mb-4 animate-pulse">
                  LIVE À VENIR
                </div>
                <h3 className="text-2xl font-bold mb-2">L'Intelligence Artificielle dans l'Éducation</h3>
                <p className="text-gray-300 mb-6">Rejoignez-nous pour une discussion passionnante sur l'avenir de l'apprentissage avec des experts du domaine.</p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <span>🗓️ 25 Nov. 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <span>🕒 14:00 GMT+3</span>
                  </div>
                </div>
                <button className="mt-6 px-6 py-3 bg-white text-gray-900 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                  M'inscrire à l'événement
                </button>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
