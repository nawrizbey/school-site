'use client'

import { useState, useMemo } from 'react'
import Container from '@/components/ui/Container'
import NewsCard from '@/components/ui/NewsCard'
import CategoryFilter from '@/components/ui/CategoryFilter'

// Mock data - keyinchalik API'dan keladi
const allNews = [
  {
    id: 1,
    title: "Respublika matematika olimpiadasida g'alaba",
    description: "Maktabimiz o'quvchisi Azimov Jasur respublika matematika olimpiadasida 1-o'rinni egalladi. Bu bizning maktabimiz uchun katta yutuq.",
    category: "Yutuqlar",
    date: "2024-03-20",
    views: 1234
  },
  {
    id: 2,
    title: "Yangi kompyuter sinfi ochildi",
    description: "Zamonaviy kompyuterlar bilan jihozlangan yangi sinf foydalanishga topshirildi. Sinfda 30 ta yangi kompyuter o'rnatildi.",
    category: "Yangiliklar",
    date: "2024-03-18",
    views: 856
  },
  {
    id: 3,
    title: "Sport musobaqasida g'alaba",
    description: "Maktabimiz futbol jamoasi tuman bosqichida 1-o'rinni egalladi va shahar bosqichiga yo'llanma oldi.",
    category: "Sport",
    date: "2024-03-15",
    views: 623
  },
  {
    id: 4,
    title: "Ustozlar malaka oshirish kursi",
    description: "Barcha fan o'qituvchilari uchun 'Zamonaviy ta'lim metodikasi' mavzusida maxsus treninglar tashkil etildi.",
    category: "Ta'lim",
    date: "2024-03-12",
    views: 445
  },
  {
    id: 5,
    title: "Novruz bayrami tantanalari",
    description: "Maktabimizda Novruz bayrami munosabati bilan katta konsert dasturi va milliy o'yinlar tashkil etildi.",
    category: "Madaniyat",
    date: "2024-03-10",
    views: 1567
  },
  {
    id: 6,
    title: "Ingliz tili olimpiadasi g'oliblari",
    description: "Uchta o'quvchimiz viloyat ingliz tili olimpiadasida yuqori o'rinlarni egallashdi.",
    category: "Yutuqlar",
    date: "2024-03-08",
    views: 789
  }
]

const categories = ["Yutuqlar", "Yangiliklar", "Sport", "Ta'lim", "Madaniyat"]

export default function YangiliklarPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  // Filter news based on category and search
  const filteredNews = useMemo(() => {
    return allNews.filter(news => {
      const matchesCategory = activeCategory === 'all' || news.category === activeCategory
      const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           news.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  return (
    <div className="min-h-screen py-20">
      <Container>
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Yangiliklar</h1>
          <p className="text-gray-600 text-lg">Maktabimizdan eng so'nggi xabarlar</p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Yangiliklar ichidan qidirish..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              🔍
            </span>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex justify-center">
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* News Grid */}
        {filteredNews.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((news) => (
              <NewsCard key={news.id} {...news} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">Hech qanday yangilik topilmadi</p>
          </div>
        )}

        {/* Load More Button */}
        {filteredNews.length > 6 && (
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Ko'proq yuklash
            </button>
          </div>
        )}
      </Container>
    </div>
  )
}