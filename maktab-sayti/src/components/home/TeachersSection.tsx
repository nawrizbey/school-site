import Container from '../ui/Container'
import Link from 'next/link'
import Button from '../ui/Button'
import Image from 'next/image'

// Eng yaxshi 3-4 ta ustozni ko'rsatish uchun
const featuredTeachers = [
  {
    id: 1,
    name: "Karimov Bobur",
    subject: "Matematika",
    position: "Boshliq o'qituvchi",
    experience: 15,
    image: "",
    awards: ["Eng yaxshi o'qituvchi 2023", "Respublika olimpiadasi g'olibi"]
  },
  {
    id: 4,
    name: "Rahimova Nilufar",
    subject: "Kimyo",
    position: "Katta o'qituvchi",
    experience: 18,
    image: "",
    awards: ["Xalq ta'limi arbobi", "Eng yaxshi kimyo o'qituvchisi"]
  },
  {
    id: 6,
    name: "Abdullayeva Feruza",
    subject: "Biologiya",
    position: "Boshliq o'qituvchi",
    experience: 20,
    image: "",
    awards: ["Biolog-o'qituvchi", "Ekologiya bo'yicha mutaxassis"]
  },
  {
    id: 5,
    name: "Toshmatov Sardor",
    subject: "Ingliz tili",
    position: "O'qituvchi",
    experience: 6,
    image: "",
    awards: ["IELTS Certified Teacher"]
  }
]

export default function TeachersSection() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bizning ustozlarimiz</h2>
          <p className="text-gray-600 text-lg">Tajribali va malakali o'qituvchilar jamoasi</p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">45</div>
            <div className="text-gray-600">Ustozlar</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-green-600 mb-2">15</div>
            <div className="text-gray-600">Oliy toifa</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-purple-600 mb-2">25</div>
            <div className="text-gray-600">1-Kategoriya</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-orange-600 mb-2">5</div>
            <div className="text-gray-600">2-Kategoriya</div>
          </div>
        </div>

        {/* Featured Teachers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredTeachers.map((teacher) => (
            <div key={teacher.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              {/* Teacher Photo */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-700 transition-colors">
                {teacher.image ? (
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="h-full flex items-center justify-center">
                    <span className="text-white text-5xl">👨‍🏫</span>
                  </div>
                )}
                
                {/* Awards Badge */}
                {teacher.awards.length > 0 && (
                  <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-medium">
                    🏆 {teacher.awards.length}
                  </div>
                )}
              </div>

              {/* Teacher Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{teacher.name}</h3>
                <p className="text-blue-600 font-medium mb-1">{teacher.subject}</p>
                <p className="text-gray-600 text-sm mb-3">{teacher.position}</p>
                
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <span className="mr-2">💼</span>
                  <span>{teacher.experience} yillik tajriba</span>
                </div>

                <Link href={`/ustozlar/${teacher.id}`}>
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    Batafsil
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link href="/ustozlar">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Barcha ustozlar bilan tanishing
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}