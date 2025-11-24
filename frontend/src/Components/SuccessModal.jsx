import { Check } from "lucide-react";
import { useEffect } from "react";

export default function SuccessModal({ isOpen, onClose, title, message, actions }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 transform transition-all animate-scaleIn relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-green-400 to-emerald-600 opacity-10 rounded-t-2xl -z-10"></div>

                <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow">
                            <Check size={40} className="text-white" strokeWidth={3} />
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">{message}</p>

                    <div className="flex flex-col w-full gap-3">
                        {actions}
                    </div>
                </div>
            </div>
        </div>
    );
}
