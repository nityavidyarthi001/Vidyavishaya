import { useMemo, useState } from 'react'
import { categories } from './data/categories.js'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import MainContent from './components/MainContent.jsx'
import DetailModal from './components/DetailModal.jsx'

function App() {
    const [selectedCategory, setSelectedCategory] = useState('ai-roles')
    const [searchQuery, setSearchQuery] = useState('')
    const [activeModalItem, setActiveModalItem] = useState(null)

    // Current category
    const currentCategoryData = useMemo(() => {
        return categories.find(
            (category) => category.id === selectedCategory
        )
    }, [selectedCategory])

    // Search
    const filteredCategories = useMemo(() => {
        if (!searchQuery.trim()) {
            return categories
        }

        const query = searchQuery.toLowerCase()

        return categories
            .map((category) => ({
                ...category,
                items: category.items.filter(
                    (item) =>
                        item.title.toLowerCase().includes(query) ||
                        item.desc.toLowerCase().includes(query) ||
                        (item.corePurpose || '')
                            .toLowerCase()
                            .includes(query) ||
                        (item.typicalQuestion || '')
                            .toLowerCase()
                            .includes(query)
                ),
            }))
            .filter((category) => category.items.length > 0)
    }, [searchQuery])

    return (
        <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 relative">
            <Header
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />

            {/* Main layout */}
            <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">
                <Sidebar
                    categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />

                <MainContent
                    searchQuery={searchQuery}
                    filteredCategories={filteredCategories}
                    currentCategoryData={currentCategoryData}
                    onOpen={setActiveModalItem}
                />
            </div>

            {/* Interactive detail modal */}
            {activeModalItem && (
                <DetailModal
                    item={activeModalItem}
                    onClose={() => setActiveModalItem(null)}
                />
            )}
        </div>
    )
}

export default App
