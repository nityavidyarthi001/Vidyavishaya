
export default function CategoryHeader({ category }) {
    return (
        <div className="bg-gradient-to-r from-slate-900 to-slate-900/40 border border-slate-800 rounded-2xl p-6 md:p-8 flex items-center justify-between">
            <div className="space-y-2">
                <div className="flex items-center space-x-3">
                    <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${category.color} flex items-center justify-center text-white text-xl shadow-lg`}
                    >
                        <i className={category.icon}></i>
                    </div>

                    <div>
                        <h2 className="text-2xl font-extrabold text-white">
                            {category.name}
                        </h2>

                        <p className="text-sm text-slate-400">
                            {category.items.length} core concepts & frameworks
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
