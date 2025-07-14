import Container from '../ui/Container'
import Link from 'next/link'
import Button from '../ui/Button'

const news = [
  {
    id: 1,
    title: "Matematika olimpiadasida 1-o'rin",
    description: "O'quvchimiz respublika olimpiadasida oltin medalni qo'lga kiritdi",
    date: "2024-03-15",
    category: "Yutuqlar"
  },
  {
    id: 2,
    title: "Yangi kompyuter sinfi ochildi",
    description: "Zamonaviy kompyuterlar bilan jihozlangan yangi sinf foydalanishga topshirildi",
    date: "2024-03-10",
    category: "Yangiliklar"
  },
  {
    id: 3,
    title: "Ustozlar malaka oshirish kursi",
    description: "Barcha fan o'qituvchilari uchun maxsus treninglar tashkil etildi",
    date: "2024-03-05",
    category: "Ta'lim"
  }
]

export default function NewsSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">So'nggi yangiliklar</h2>
          <p className="text-gray-600">Maktabimizdagi eng so'nggi voqealar va yangiliklar</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item) => (
            <article key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                <span className="text-white text-6xl">📰</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-sm text-blue-600 font-medium">{item.category}</span>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>
                <Link href={`/yangiliklar/${item.id}`} className="text-blue-600 font-medium hover:underline">
                  Batafsil →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/yangiliklar">
            <Button size="lg" variant="outline">
              Barcha yangiliklar
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}