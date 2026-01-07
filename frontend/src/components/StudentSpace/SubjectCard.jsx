import React from 'react';
import { ChevronRight } from 'lucide-react';

const SubjectCard = ({ matiere, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-300 transition-all cursor-pointer group"
        >
            <div className="flex items-start justify-between mb-4">
                <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                    style={{ backgroundColor: `${matiere.couleur}20`, color: matiere.couleur }}
                >
                    {matiere.icone}
                </div>
                <div className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded font-medium">
                    {matiere.code}
                </div>
            </div>

            <h3 className="font-bold text-slate-800 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                {matiere.nom}
            </h3>

            <p className="text-slate-500 text-sm line-clamp-2 mb-4">
                {matiere.description || "Programme officiel, cours et exercices."}
            </p>

            <div className="flex items-center text-blue-600 text-sm font-medium">
                Voir le programme
                <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
        </div>
    );
};

export default SubjectCard;
