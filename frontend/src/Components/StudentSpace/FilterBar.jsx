import React from 'react';
import { Filter, X } from 'lucide-react';

const FilterBar = ({ filters, onFilterChange, onReset }) => {
    return (
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-slate-700 flex items-center gap-2">
                    <Filter size={18} />
                    Filtres
                </h3>
                <button
                    onClick={onReset}
                    className="text-sm text-slate-500 hover:text-red-500 flex items-center gap-1"
                >
                    <X size={14} />
                    Réinitialiser
                </button>
            </div>

            <div className="flex flex-wrap gap-4">
                {/* Filtre Trimestre */}
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-slate-500">Trimestre</label>
                    <select
                        value={filters.trimestre || ''}
                        onChange={(e) => onFilterChange('trimestre', e.target.value)}
                        className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Tous</option>
                        <option value="1">1er Trimestre</option>
                        <option value="2">2ème Trimestre</option>
                        <option value="3">3ème Trimestre</option>
                    </select>
                </div>

                {/* Filtre Type de contenu */}
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-slate-500">Type de contenu</label>
                    <select
                        value={filters.type || ''}
                        onChange={(e) => onFilterChange('type', e.target.value)}
                        className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Tous</option>
                        <option value="PDF">Fiches PDF</option>
                        <option value="VIDEO">Vidéos</option>
                        <option value="QUIZ">Quiz</option>
                        <option value="TEXTE">Cours texte</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default FilterBar;
