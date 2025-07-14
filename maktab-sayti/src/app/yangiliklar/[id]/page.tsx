import Container from '@/components/ui/Container'
import Link from 'next/link'
import Button from '@/components/ui/Button'

// Mock data - keyinchalik API'dan keladi
const getNewsById = (id: string) => {
  return {
    id: 1,
    title: "Respublika matematika olimpiadasida g'alaba",
    content: `
      <p>Maktabimiz o'quvchisi Azimov Jasur respublika matematika olimpiadasida 1-o'rinni egalladi. Bu bizning maktabimiz uchun katta yutuq.</p>
      
      <p>Olimpiada 3 bosqichda o'tkazildi. Birinchi bosqichda 500 nafar o'quvchi qatnashdi, ikkinchi bosqichga 100 nafar o'quvchi o'tdi. Final bosqichda eng kuchli 20 nafar o'quvchi bellashdi.</p>
      
      <h3>Tayyorgarlik jarayoni</h3>
      <p>Jasur bu natijaga erishish uchun 6 oy davomida qunt bilan tayyorlandi. Uning ustozi, matematika fani o'qituvchisi Karimov Bobur har kuni qo'shimcha darslar o'tkazdi.</p>
      
      <h3>Kelgusi rejalar</h3>
      <p>Endi Jasur xalqaro matematika olimpiadasiga tayyorgarlik ko'rmoqda. Biz unga omad tilaymiz!</p>
    `,
    category: "Yutuqlar",
    date: "2024-03-20",
    author: "Admin",
    views: 1234,
    image: "/images/news-1.jpg"
  }
}

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const news = getNewsById(params.id)

  return (
    <div className="min-h-screen py-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <Link href="/" className="hover:text-blue-600">Bosh sahifa</Link>
            <span>/</span>
            <Link href="/yangiliklar" className="hover:text-blue-600">Yangiliklar</Link>
            <span>/</span>
            <span className="text-gray-900">{news.title}</span>
          </div>

          {/* News Header */}
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                {news.category}
              </span>
              <span className="text-gray-500">📅 {news.date}</span>
              <span className="text-gray-500">👁️ {news.views}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{news.title}</h1>
            <p className="text-gray-600">Muallif: {news.author}</p>
          </header>

          {/* Featured Image */}
          <div className="h-96 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl mb-8 flex items-center justify-center">
            <span className="text-white text-8xl">📰</span>
          </div>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: news.content }}
          />

          {/* Share Buttons */}
          <div className="border-t border-b py-6 mb-8">
            <p className="font-medium mb-4">Ulashish:</p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Facebook
              </button>
              <button className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500">
                Telegram
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                WhatsApp
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <Link href="/yangiliklar">
              <Button variant="outline">
                ← Barcha yangiliklar
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}