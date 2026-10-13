
export default function DetailModal({ item, onClose }) {
    if (!item) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
                {/* Modal header */}
                <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                            <i className="fa-solid fa-layer-group"></i>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-white">
                                {item.title}
                            </h2>

                            <p className="text-xs text-slate-400">
                                {item.modalTitle || 'Comprehensive Breakdown'}
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                    >
                        <i className="fa-solid fa-xmark text-lg"></i>
                    </button>
                </div>

                {/* Modal body */}
                <div className="p-6 overflow-y-auto space-y-4 custom-scrollbar">
                    {item.modalType === 'activities' ? (
                        <ul className="space-y-3">
                            {item.activities.map((activity, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed"
                                >
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0"></span>
                                    <span>{activity}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        item.details.map((detail, index) => (
                            <div
                                key={index}
                                className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-5 hover:border-indigo-500/40 transition-all"
                            >
                                <div className="flex items-center space-x-2 text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider mb-1">
                                    <span>Point 0{index + 1}:</span>
                                    <span className="text-slate-300">
                                        {detail.level}
                                    </span>
                                </div>

                                <h4 className="font-bold text-base text-white mb-2">
                                    {detail.subtitle}
                                </h4>

                                <p className="text-sm text-slate-400 leading-relaxed bg-slate-900/50 p-3.5 rounded-xl border border-slate-800/60">
                                    {detail.desc}
                                </p>
                            </div>
                        ))
                    )}
                </div>

                {/* Modal footer */}
                <div className="p-4 border-t border-slate-800 bg-slate-900/90 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm rounded-xl transition-all shadow-lg shadow-indigo-600/20"
                    >
                        Close View
                    </button>
                </div>
            </div>
        </div>
    );
}
