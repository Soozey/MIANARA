import { useState, useEffect } from 'react';

const MOCK_NEWS = [
    {
        id: 1,
        type: 'info', // info, warning, alert
        message: "📢 Nouveau module sur l'IA disponible ! Découvrez comment l'utiliser pour vos études.",
    },
    {
        id: 2,
        type: 'warning',
        message: "⚠️ Maintenance prévue ce samedi de 22h à 00h. Merci de votre compréhension.",
    }
];

export default function Banner() {
    const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentNewsIndex((prev) => (prev + 1) % MOCK_NEWS.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, []);

    if (!isVisible) return null;

    const currentNews = MOCK_NEWS[currentNewsIndex];

    const getBgColor = (type) => {
        switch (type) {
            case 'alert': return 'bg-red-600';
            case 'warning': return 'bg-orange-500';
            case 'info': default: return 'bg-indigo-600';
        }
    };

    return (
        <div className={`${getBgColor(currentNews.type)} text-white px-4 py-3 relative transition-colors duration-500`}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex-1 text-center md:text-left">
                    <span className="font-bold mr-2">Info:</span>
                    <span className="text-sm md:text-base animate-fade-in">
                        {currentNews.message}
                    </span>
                </div>
                <button
                    onClick={() => setIsVisible(false)}
                    className="ml-4 text-white hover:text-gray-200 focus:outline-none"
                    aria-label="Fermer"
                >
                    ✕
                </button>
            </div>
        </div>
    );
}
