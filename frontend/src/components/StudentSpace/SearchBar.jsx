import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import studentApi from '../../services/studentApi';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const navigate = useNavigate();

    const handleSearch = async (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.length > 2) {
            try {
                const data = await studentApi.searchProgrammes(value);
                setResults(data.results || []);
                setShowResults(true);
            } catch (error) {
                console.error("Erreur recherche:", error);
            }
        } else {
            setResults([]);
            setShowResults(false);
        }

        if (onSearch) onSearch(value);
    };

    const handleResultClick = (result) => {
        // Naviguer vers le programme spécifique
        // Structure: /etudiants/programmes/:classeId/:matiereId
        // Note: Il faudrait idéalement avoir les IDs dans le résultat de recherche
        // Pour l'instant on navigue vers la page de la classe
        navigate(`/etudiants/programmes/${result.classe_id}`);
        setShowResults(false);
        setQuery('');
    };

    return (
        <div className="relative w-full max-w-xl mx-auto mb-8">
            <div className="relative">
                <input
                    type="text"
                    value={query}
                    onChange={handleSearch}
                    placeholder="Rechercher une classe, une matière, un chapitre..."
                    className="w-full px-4 py-3 pl-12 bg-white border border-slate-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
            </div>

            {showResults && results.length > 0 && (
                <div className="absolute w-full mt-2 bg-white rounded-xl shadow-lg border border-slate-100 z-50 max-h-96 overflow-y-auto">
                    {results.map((result, index) => (
                        <div
                            key={index}
                            onClick={() => handleResultClick(result)}
                            className="p-3 hover:bg-slate-50 cursor-pointer border-b border-slate-50 last:border-0"
                        >
                            <div className="font-medium text-slate-800">{result.titre_chapitre}</div>
                            <div className="text-sm text-slate-500 flex gap-2">
                                <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-xs">
                                    {result.classe_nom}
                                </span>
                                <span className="bg-green-50 text-green-600 px-2 py-0.5 rounded text-xs">
                                    {result.matiere_nom}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
