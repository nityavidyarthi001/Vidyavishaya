
import ConceptCard from './ConceptCard.jsx';

export default function SearchResults({
    searchQuery,
    filteredCategories,
    onOpen,
}) {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <h2 className="text-xl font-bold text-white flex items-center space-x-2">
                    <span>Search Results for</span>
                    <span className="text-indigo-400">
                        "{searchQuery}"
                    </span>
                </h2>

                <span className="text-xs text-slate-400">
                    Found across {filteredCategories.length} modules
                </span>
            </div>

            {filteredCategories.length === 0 ? (
                <div className="text-center py-20 bg-slate-900/20 border border-slate-800/60 rounded-2xl">
                    <i className="fa-regular fa-folder-open text-4xl text-slate-600 mb-3"></i>

                    <p className="text-slate-400 font-medium">
                        No concepts matched your query.
                    </p>
                </div>
            ) : (
                filteredCategories.map((cat) => (
                    <div key={cat.id} className="space-y-3">
                        <div className="flex items-center space-x-2 text-slate-400 font-semibold text-xs tracking-wider uppercase">
                            <i className={`${cat.icon} text-indigo-400`}></i>

                            <span>{cat.name}</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {cat.items.map((item, idx) => (
                                <ConceptCard
                                    key={idx}
                                    item={item}
                                    onOpen={onOpen}
                                />
                            ))}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
