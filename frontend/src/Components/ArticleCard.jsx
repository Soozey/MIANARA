import { Link } from 'react-router-dom';

export default function ArticleCard({ content, showThumbnail = true }) {
    // Handle potential differences between API and Demo data
    const title = content.title;
    const description = content.description || content.summary;
    const category = content.category;
    const type = content.file_type || 'ARTICLE';
    const author = content.author?.username || 'Mianàra';
    const date = content.created_at ? new Date(content.created_at).toLocaleDateString() : 'Récemment';
    const thumbnail = content.thumbnail;

    // Category Colors
    const getCategoryColor = (cat) => {
        switch (cat) {
            case 'SCOLAIRE': return 'bg-blue-100 text-blue-800';
            case 'CITOYEN': return 'bg-green-100 text-green-800';
            case 'SANTE': return 'bg-red-100 text-red-800';
            case 'ENTREPRENEURIAT': return 'bg-purple-100 text-purple-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="group border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white flex flex-col h-full hover:-translate-y-1">
            {/* Thumbnail */}
            {showThumbnail && (
                <div className="relative h-48 overflow-hidden bg-gray-100">
                    {thumbnail ? (
                        <img
                            src={thumbnail}
                            alt={title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50">
                            <span className="text-4xl opacity-20">📚</span>
                        </div>
                    )}
                    <div className="absolute top-3 right-3">
                        <span className={`text-xs font-bold px-3 py-1.5 rounded-full shadow-sm ${getCategoryColor(category)}`}>
                            {category}
                        </span>
                    </div>
                </div>
            )}

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3 text-xs font-medium text-gray-500">
                    <span className="uppercase tracking-wider">{type}</span>
                    <span>•</span>
                    <span>{date}</span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-tight group-hover:text-primary-600 transition-colors">
                    {title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                    {description}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 text-xs font-bold">
                            {author.charAt(0).toUpperCase()}
                        </div>
                        <span className="text-xs font-medium text-gray-600">{author}</span>
                    </div>
                    <Link
                        to={`/content/${content.id}`}
                        className="text-primary-600 text-sm font-bold hover:text-primary-700 flex items-center gap-1"
                    >
                        Lire <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
