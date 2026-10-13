
export default function ConceptCard({ item, onOpen }) {
    return (
        <div
            onClick={() => {
                if (item.isInteractiveModal) {
                    onOpen(item);
                }
            }}
            className={`bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-all group ${
                item.isInteractiveModal
                    ? 'cursor-pointer hover:border-indigo-500/50'
                    : ''
            }`}
        >
            <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">
                    {item.title}
                </h3>

                {item.isInteractiveModal && (
                    <span className="text-xs text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                        Interactive ↗
                    </span>
                )}
            </div>

            {item.isAIRole ? (
                <div className="text-sm leading-relaxed">
                    <p className="font-semibold text-slate-200">
                        {item.corePurpose}
                    </p>

                    <p className="text-slate-400 mt-1">
                        <span className="font-semibold text-slate-300">
                            Typical Question:
                        </span>{' '}
                        {item.typicalQuestion}
                    </p>
                </div>
            ) : (
                <p className="text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                </p>
            )}
        </div>
    );
}
