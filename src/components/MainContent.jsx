
import SearchResults from './SearchResults.jsx'
import CategoryHeader from './CategoryHeader.jsx'
import CategoryConceptCard from './CategoryConceptCard.jsx'

export default function MainContent({
    searchQuery,
    filteredCategories,
    currentCategoryData,
    onOpen,
}) {
    return (
        <main className="flex-1 min-w-0">
            {searchQuery ? (
                <SearchResults
                    searchQuery={searchQuery}
                    filteredCategories={filteredCategories}
                    onOpen={onOpen}
                />
            ) : currentCategoryData && (
                <div className="space-y-6">
                    {/* MODULE HEADER */}
                    <CategoryHeader category={currentCategoryData} />

                    {/* CARDS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {currentCategoryData.items.map((item, idx) => (
                            <CategoryConceptCard
                                key={idx}
                                item={item}
                                index={idx}
                                onOpen={onOpen}
                            />
                        ))}
                    </div>
                </div>
            )}
        </main>
    )
}
