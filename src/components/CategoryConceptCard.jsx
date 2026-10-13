
export default function CategoryConceptCard({ item, index, onOpen }) {
    return (
        <div
            onClick={() => {
                if (item.isInteractiveModal) {
                    onOpen(item);
                }
            }}
            className={`bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 hover:bg-slate-900 hover:border-slate-700 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md ${
                item.isInteractiveModal
                    ? 'cursor-pointer border-indigo-500/30 bg-indigo-950/10 hover:border-indigo-500'
                    : ''
            }`}
        >
            <div>
                {/* Card top row */}
                <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold font-mono px-2.5 py-1 rounded-md bg-slate-800 text-indigo-400 border border-slate-700/50">
                        #{index + 1}
                    </span>

                    {item.isInteractiveModal ? (
                        <span className="text-xs font-semibold text-indigo-300 bg-indigo-500/20 px-2.5 py-1 rounded-lg border border-indigo-500/30 flex items-center space-x-1.5">
                            <span>
                                {item.isAIRole
                                    ? 'Typical Activities'
                                    : 'Explore Details'}
                            </span>
                            <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                        </span>
                    ) : (
                        <div className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-indigo-500 transition-colors"></div>
                    )}
                </div>

                {/* Card title */}
                <h3 className="font-bold text-lg text-slate-100 mb-2 group-hover:text-indigo-300 transition-colors">
                    {item.title}
                </h3>

                {/* AI role card or standard concept card */}
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
                    <p className="text-smtext-slate-400 leading-relaxed">
                        {item.desc}
                    </p>
                )}
            </div>
        </div>
    );
}
