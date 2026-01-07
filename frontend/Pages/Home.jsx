export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Section Héro */}
      <section className="min-h-[85vh] flex flex-col justify-center items-center text-center bg-gradient-to-b from-sky-100 via-white to-white px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-sky-700 mb-4">
          Bienvenue sur <span className="text-sky-500">MIANÀRA</span>
        </h1>
        <p className="max-w-2xl text-slate-700 text-lg mb-8">
          Une bibliothèque participative et collaborative, ouverte à tous les citoyens, élèves et enseignants.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/library"
            className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-full font-medium shadow-md transition"
          >
            Découvrir les ressources
          </a>
          <a
            href="/contribute"
            className="border border-sky-500 text-sky-700 hover:bg-sky-100 px-6 py-3 rounded-full font-medium transition"
          >
            Contribuer
          </a>
        </div>
      </section>

      {/* Section fonctionnalités */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-sky-700 mb-12">📚 Fonctionnalités clés</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Catalogue enrichi",
                desc: "Recherche intuitive, filtres, suggestions personnalisées et contenus audio/vidéo.",
                icon: "🔍",
              },
              {
                title: "Participation",
                desc: "Commenter, proposer, partager des listes et co-créer de nouveaux contenus.",
                icon: "🤝",
              },
              {
                title: "Accessibilité universelle",
                desc: "Responsive, clair/sombre, navigation simplifiée pour tous les utilisateurs.",
                icon: "💡",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transition text-left"
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-semibold text-sky-700 mb-2">{f.title}</h3>
                <p className="text-slate-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Communauté */}
      <section className="bg-sky-50 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-sky-700 mb-6">🌍 Une communauté qui partage le savoir</h2>
          <p className="text-slate-700 max-w-2xl mx-auto mb-8">
            Rejoignez un réseau d’apprenants et de formateurs qui enrichissent chaque jour la bibliothèque par leurs contributions.
          </p>
          <a
            href="/login"
            className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-full font-medium shadow-md transition"
          >
            Rejoindre la communauté
          </a>
        </div>
      </section>
    </div>
  );
}
