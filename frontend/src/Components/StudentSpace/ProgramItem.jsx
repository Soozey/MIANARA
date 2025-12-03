import React, { useState } from 'react';
import { ChevronDown, ChevronUp, FileText, Video, HelpCircle, Download } from 'lucide-react';

const ProgramItem = ({ programme }) => {
    const [isOpen, setIsOpen] = useState(false);

    const getIconForType = (type) => {
        switch (type) {
            case 'VIDEO': return <Video size={16} />;
            case 'QUIZ': return <HelpCircle size={16} />;
            default: return <FileText size={16} />;
        }
    };

    return (
        <div className="bg-white border border-slate-200 rounded-lg mb-4 overflow-hidden">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="p-4 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors"
            >
                <div className="flex items-center gap-4">
                    <div className="bg-blue-50 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                        {programme.ordre}
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-800">{programme.titre_chapitre}</h4>
                        <div className="text-xs text-slate-500 flex gap-2 mt-1">
                            <span>Trimestre {programme.trimestre}</span>
                            <span>•</span>
                            <span>{programme.nombre_ressources || 0} ressource(s)</span>
                        </div>
                    </div>
                </div>
                {isOpen ? <ChevronUp size={20} className="text-slate-400" /> : <ChevronDown size={20} className="text-slate-400" />}
            </div>

            {isOpen && (
                <div className="bg-slate-50 p-4 border-t border-slate-100">
                    <div className="mb-4">
                        <h5 className="text-xs font-bold text-slate-500 uppercase mb-2">Objectifs</h5>
                        <p className="text-sm text-slate-700">{programme.objectifs}</p>
                    </div>

                    <div className="mb-4">
                        <h5 className="text-xs font-bold text-slate-500 uppercase mb-2">Compétences</h5>
                        <p className="text-sm text-slate-700">{programme.competences}</p>
                    </div>

                    {programme.ressources && programme.ressources.length > 0 && (
                        <div>
                            <h5 className="text-xs font-bold text-slate-500 uppercase mb-2">Ressources</h5>
                            <div className="space-y-2">
                                {programme.ressources.map((ressource) => (
                                    <div key={ressource.id} className="flex items-center justify-between bg-white p-3 rounded border border-slate-200">
                                        <div className="flex items-center gap-3">
                                            <div className={`p-2 rounded ${ressource.type_contenu === 'VIDEO' ? 'bg-red-50 text-red-500' :
                                                    ressource.type_contenu === 'QUIZ' ? 'bg-green-50 text-green-500' :
                                                        'bg-blue-50 text-blue-500'
                                                }`}>
                                                {getIconForType(ressource.type_contenu)}
                                            </div>
                                            <div>
                                                <div className="font-medium text-sm text-slate-800">{ressource.titre}</div>
                                                <div className="text-xs text-slate-500">{ressource.type_contenu}</div>
                                            </div>
                                        </div>
                                        {ressource.url_fichier && (
                                            <a
                                                href={ressource.url_fichier}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-800"
                                            >
                                                <Download size={18} />
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProgramItem;
