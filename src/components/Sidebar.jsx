
export default function Sidebar({
    categories,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
}) {
    return (
        <aside className="w-full md:w-80 shrink-0">
            <div className="sticky top-28 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-4 backdrop-blur-sm">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-3">
                    Blueprint Modules
                </h2>

                <nav className="space-y-1">
                    {categories.map((cat) => {
                        const isActive =
                            selectedCategory === cat.id &&
                            !searchQuery;

                        return (
                            <button
                                key={cat.id}
                                onClick={() => {
                                    setSelectedCategory(cat.id);
                                    setSearchQuery('');
                                }}
                                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                                    isActive
                                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                                        : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                                }`}
                            >
                                <div className="flex items-center space-x-3">
                                    <div
                                        className={`w-7 h-7 rounded-lg bg-gradient-to-tr ${cat.color} flex items-center justify-center text-xs text-white shadow-sm`}
                                    >
                                        <i className={cat.icon}></i>
                                    </div>

                                    <span className="truncate text-left">
                                        {cat.name}
                                    </span>
                                </div>

                                <span
                                    className={`text-xs px-2 py-0.5 rounded-full ${
                                        isActive
                                            ? 'bg-indigo-700 text-indigo-100'
                                            : 'bg-slate-800 text-slate-400'
                                    }`}
                                >
                                    {cat.items.length}
                                </span>
                            </button>
                        );
                    })}
                </nav>
            </div>
        </aside>
    );
}
