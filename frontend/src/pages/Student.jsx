export default function Student() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-indigo-700 mb-4">🎓 Espace Étudiant</h1>
            <p className="text-gray-600 mb-8">
                Retrouvez ici toutes les ressources pour votre orientation, vos bourses et votre réussite scolaire.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-semibold mb-2">Orientation & Carrières</h2>
                    <p className="text-gray-500">Découvrez les métiers d'avenir et les filières adaptées à votre profil.</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-semibold mb-2">Bourses & Aides</h2>
                    <p className="text-gray-500">Informations sur les financements disponibles pour vos études.</p>
                </div>
            </div>
        </div>
    );
}
