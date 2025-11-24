export default function Conference() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-indigo-700 mb-4">🎤 Conférences & Événements</h1>
            <p className="text-gray-600 mb-8">
                Accédez aux replays de nos conférences et inscrivez-vous aux prochains événements.
            </p>

            <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 mb-8">
                <h2 className="text-xl font-bold text-indigo-900 mb-2">Prochain Live : L'IA en Afrique</h2>
                <p className="text-indigo-700">Date : 15 Décembre 2025 à 14h00</p>
                <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    S'inscrire
                </button>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Replays Récents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
                    Vidéo Replay 1
                </div>
                <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
                    Vidéo Replay 2
                </div>
            </div>
        </div>
    );
}
