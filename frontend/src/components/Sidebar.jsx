import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
    Home, Library, GraduationCap, Compass, Briefcase,
    Hammer, Sprout, Landmark, Heart, Globe, Mic, PenTool
} from 'lucide-react';

export default function Sidebar({ isOpen, setIsOpen }) {
    const location = useLocation();
    const { user, logout } = useAuth();

    const menuItems = [
        // { name: "Accueil", path: "/", icon: <Home size={20} /> }, // Removed
        { name: "Bibliothèque", path: "/library", icon: <Library size={20} /> },
        { name: "Espace Étudiant", path: "/student", icon: <GraduationCap size={20} /> },
        { name: "Orientation & Carrière", path: "/orientation", icon: <Compass size={20} /> },
        { name: "Entrepreneuriat", path: "/entrepreneuriat", icon: <Briefcase size={20} /> },
        { name: "Formations", path: "/training", icon: <Hammer size={20} /> },
        { name: "Développement Personnel", path: "/developpement-personnel", icon: <Sprout size={20} /> },
        { name: "Citoyenneté", path: "/citoyennete", icon: <Landmark size={20} /> },
        { name: "Santé & Bien-être", path: "/sante", icon: <Heart size={20} /> },
        { name: "Société & Culture", path: "/societe-culture", icon: <Globe size={20} /> },
        { name: "Conférence", path: "/conference", icon: <Mic size={20} /> },
        { name: "Contribuer", path: "/contribute", icon: <PenTool size={20} /> },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <>
            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40 md:hidden transition-opacity animate-fadeIn"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* Sidebar Container */}
            <aside
                className={`fixed md:static inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out flex flex-col h-full
                    ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 shadow-2xl md:shadow-none`}
            >
                {/* Logo Area */}
                <div className="h-16 md:h-20 flex items-center justify-between px-6 border-b border-gray-100 flex-shrink-0">
                    <Link to="/" className="text-2xl md:text-3xl font-extrabold text-primary-600 tracking-tight flex items-center gap-2">
                        Mianàra<span className="text-secondary-500 text-3xl md:text-4xl">.</span>
                    </Link>
                    {/* Close button for mobile */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg"
                    >
                        ✕
                    </button>
                </div>

                {/* Navigation Menu - Scrollable inside Sidebar */}
                <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2 custom-scrollbar">
                    {menuItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center px-4 py-3.5 rounded-xl transition-all duration-200 group ${isActive(item.path)
                                ? "bg-primary-50 text-primary-700 font-semibold shadow-sm"
                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:translate-x-1"
                                }`}
                        >
                            <span className={`mr-4 text-xl transition-transform duration-200 ${isActive(item.path) ? "scale-110" : "group-hover:scale-110"}`}>{item.icon}</span>
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* User Profile / Footer - Fixed at bottom of Sidebar */}
                <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex-shrink-0">
                    {user ? (
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-lg shadow-sm border border-primary-200">
                                    {user.username.charAt(0).toUpperCase()}
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-sm font-bold text-gray-900 truncate">{user.username}</p>
                                    <p className="text-xs text-gray-500 truncate">{user.email}</p>
                                </div>
                            </div>
                            <button
                                onClick={logout}
                                className="w-full px-4 py-2.5 text-sm font-medium text-red-600 bg-white border border-red-100 rounded-lg hover:bg-red-50 hover:border-red-200 transition-all shadow-sm"
                            >
                                Déconnexion
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 gap-3">
                            <Link
                                to="/login"
                                className="px-4 py-2.5 text-sm font-semibold text-center text-primary-600 bg-white border border-primary-200 rounded-lg hover:bg-primary-50 transition-all shadow-sm"
                            >
                                Connexion
                            </Link>
                            <Link
                                to="/register"
                                className="px-4 py-2.5 text-sm font-semibold text-center text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-all shadow-md hover:shadow-lg"
                            >
                                Inscription
                            </Link>
                        </div>
                    )}
                </div>
            </aside>
        </>
    );
}
