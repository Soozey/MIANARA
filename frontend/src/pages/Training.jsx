export default function Training() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-indigo-700 mb-4">🛠️ Formation & Compétences</h1>
            <p className="text-gray-600 mb-8">
                Développez vos compétences techniques et transversales avec nos modules de formation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-semibold mb-2">Bureautique</h2>
                    <p className="text-gray-500">Maîtrisez Word, Excel et PowerPoint.</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-semibold mb-2">Soft Skills</h2>
                    <p className="text-gray-500">Communication, leadership et gestion du temps.</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-semibold mb-2">Entrepreneuriat</h2>
                    <p className="text-gray-500">Lancez votre projet avec les bons outils.</p>
                </div>
            </div>
        </div>
    );
}
