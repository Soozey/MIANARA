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
    <div className="space-y-12 pb-12 animate-fade-in">

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-primary-800 to-purple-900 text-white rounded-3xl overflow-hidden shadow-2xl mx-4 md:mx-0 mt-4 md:mt-0 transition-transform hover:shadow-primary-900/20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        <div className="relative p-6 md:p-10 max-w-4xl mx-auto text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Plateforme Éducative Citoyenne
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold mb-4 leading-tight tracking-tight drop-shadow-sm">
            Apprendre, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Partager</span>, <br />
            Réussir ensemble.
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto md:mx-0 font-light">
            Mianàra est votre espace pour accéder à des ressources éducatives de qualité, développer des compétences concrètes et comprendre le monde qui vous entoure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/library"
              className="px-8 py-4 bg-white text-primary-900 rounded-xl font-bold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              📚 Explorer la bibliothèque
            </Link>
            <Link
              to="/contribute"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-xl font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              ✍️ Contribuer
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
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                <span className="p-2 bg-orange-100 text-orange-600 rounded-lg">🔥</span>
                À ne pas manquer
              </h2>
              <Link to="/library" className="group flex items-center gap-1 text-primary-600 font-semibold hover:text-primary-700 text-sm transition-colors">
                Voir tout <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {contents.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {getRecentContents().map(content => (
                  <ArticleCard key={content.id} content={content} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-200 text-gray-500 shadow-sm">
                Aucun contenu pour le moment. Soyez le premier à contribuer !
              </div>
            )}
          </section>

          {/* SECTION 2: ÉTUDIANT (Category Focus) */}
          <section className="px-4 md:px-0">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                <span className="p-2 bg-blue-100 text-blue-600 rounded-lg">🎓</span>
                Conseils pour les Étudiants
              </h2>
              <Link to="/student" className="group flex items-center gap-1 text-primary-600 font-semibold hover:text-primary-700 text-sm transition-colors">
                Espace Étudiant <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {getContentsByCategory('SCOLAIRE').length > 0 ? (
                getContentsByCategory('SCOLAIRE').map(content => (
                  <ArticleCard key={content.id} content={content} />
                ))
              ) : (
                <div className="col-span-full text-center py-8 text-gray-400 italic bg-white rounded-xl border border-gray-100">
                  Pas encore de contenus dans cette catégorie.
                </div>
              )}
            </div>
          </section>

          {/* SECTION 3: CITOYENNETÉ (Category Focus) */}
          <section className="px-4 md:px-0">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                <span className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">🏛️</span>
                Leçons de Citoyenneté
              </h2>
              <Link to="/citoyennete" className="group flex items-center gap-1 text-emerald-600 font-semibold hover:text-emerald-700 text-sm transition-colors">
                Voir tout <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {getContentsByCategory('CITOYEN').length > 0 ? (
                getContentsByCategory('CITOYEN').map(content => (
                  <ArticleCard key={content.id} content={content} />
                ))
              ) : (
                <div className="col-span-full text-center py-8 text-gray-400 italic bg-white rounded-xl border border-gray-100">
                  Pas encore de contenus dans cette catégorie.
                </div>
              )}
            </div>
          </section>

          {/* SECTION 4: LIVE / CONFÉRENCES (Static MVP) */}
          <section className="px-4 md:px-0">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <span className="p-2 bg-red-100 text-red-600 rounded-lg">🎤</span>
              Prochaines Conférences
            </h2>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl flex flex-col md:flex-row items-center gap-12 border border-slate-700/50">
              <div className="w-full md:w-5/12 aspect-video bg-gradient-to-tr from-slate-800 to-slate-700 rounded-2xl flex items-center justify-center relative overflow-hidden group cursor-pointer border border-slate-600 shadow-inner">
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                  <span className="text-3xl ml-1">▶️</span>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/20 text-red-300 border border-red-500/30 text-xs font-bold rounded-full mb-6 animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  LIVE À VENIR
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">L'Intelligence Artificielle dans l'Éducation</h3>
                <p className="text-slate-300 mb-8 text-lg leading-relaxed">Rejoignez-nous pour une discussion passionnante sur l'avenir de l'apprentissage avec des experts du domaine.</p>
                <div className="flex flex-wrap gap-6 justify-center md:justify-start mb-8">
                  <div className="flex items-center gap-2 text-slate-300 bg-slate-800/50 px-4 py-2 rounded-lg">
                    <span>🗓️ 25 Nov. 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 bg-slate-800/50 px-4 py-2 rounded-lg">
                    <span>🕒 14:00 GMT+3</span>
                  </div>
                </div>
                <button className="px-8 py-3 bg-white text-slate-900 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg shadow-white/10 w-full md:w-auto">
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
