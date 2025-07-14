'use client'

import { useState, useEffect } from 'react'
import Container from '../ui/Container'
import Link from 'next/link'
import Button from '../ui/Button'

// Sertifikatlar kategoriyalari
const certificateCategories = [
  {
    name: "Tillar",
    count: 45,
    icon: "🌍",
    color: "from-blue-500 to-blue-600",
    types: ["IELTS", "CEFR", "Rus tili", "Qoraqalpoq tili"]
  },
  {
    name: "IT & Texnologiya", 
    count: 38,
    icon: "💻",
    color: "from-green-500 to-green-600",
    types: ["Microsoft Office", "Python", "Web Development", "Adobe"]
  },
  {
    name: "Sport",
    count: 42,
    icon: "🏆",
    color: "from-orange-500 to-orange-600", 
    types: ["Futbol", "Volleybol", "Atletika", "Shaxmat"]
  },
  {
    name: "San'at & Madaniyat",
    count: 25,
    icon: "🎨",
    color: "from-purple-500 to-purple-600",
    types: ["Musiqa", "Rasm", "Teatr", "Raqs"]
  },
  {
    name: "Akademik",
    count: 15,
    icon: "📚", 
    color: "from-red-500 to-red-600",
    types: ["Olimpiada", "Tanlov", "Konkurs", "Ilmiy ish"]
  }
]

// Eng so'nggi sertifikatlar
const recentCertificates = [
  {
    id: 1,
    studentName: "Azimov Jasur",
    certificateName: "IELTS Academic",
    score: "7.5",
    date: "2024-03-15",
    category: "Tillar",
    grade: "11-sinf",
    image: ""
  },
  {
    id: 2,
    studentName: "Karimova Nilufar",
    certificateName: "Microsoft Excel Expert",
    score: "95%",
    date: "2024-03-12",
    category: "IT",
    grade: "10-sinf", 
    image: ""
  },
  {
    id: 3,
    studentName: "Yusupov Bekzod",
    certificateName: "Regional Football Champion",
    score: "1-o'rin",
    date: "2024-03-10",
    category: "Sport",
    grade: "9-sinf",
    image: ""
  },
  {
    id: 4,
    studentName: "Normatova Dildora",
    certificateName: "Python Programming",
    score: "Certificate",
    date: "2024-03-08",
    category: "IT",
    grade: "11-sinf",
    image: ""
  }
]

export default function CertificatesSection() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O'quvchilarimizning sertifikatlari</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            O'tgan o'quv yilida o'quvchilarimiz turli sohalarda yuqori natijalar ko'rsatib, 
            165 ta xalqaro va mahalliy sertifikatga ega bo'ldilar
          </p>
        </div>

        {/* Main Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {isVisible && <CountUp end={165} duration={2000} />}
            </div>
            <div className="text-gray-600">Jami sertifikat</div>
            <div className="text-sm text-green-600 font-medium mt-1">2023-2024 yil</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-4xl font-bold text-green-600 mb-2">
              {isVisible && <CountUp end={128} duration={2000} />}
            </div>
            <div className="text-gray-600">O'quvchilar</div>
            <div className="text-sm text-blue-600 font-medium mt-1">Sertifikat egasi</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-4xl font-bold text-purple-600 mb-2">12</div>
            <div className="text-gray-600">Soha</div>
            <div className="text-sm text-purple-600 font-medium mt-1">Turli yo'nalishlar</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-4xl font-bold text-orange-600 mb-2">45</div>
            <div className="text-gray-600">Xalqaro</div>
            <div className="text-sm text-orange-600 font-medium mt-1">Tan olingan</div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Sertifikat turlari</h3>
          <div className="grid md:grid-cols-5 gap-6">
            {certificateCategories.map((category, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${category.color} rounded-xl p-6 text-white cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  activeCategory === index ? 'scale-105 shadow-xl' : ''
                }`}
                onClick={() => setActiveCategory(index)}
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h4 className="text-lg font-bold mb-2">{category.name}</h4>
                  <div className="text-2xl font-bold mb-2">{category.count}</div>
                  <div className="text-sm opacity-90">sertifikat</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Category Details */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-xl font-bold mb-6 flex items-center">
            <span className="mr-3">{certificateCategories[activeCategory].icon}</span>
            {certificateCategories[activeCategory].name} sertifikatlari
          </h3>
          
          <div className="grid md:grid-cols-4 gap-4">
            {certificateCategories[activeCategory].types.map((type, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="font-medium text-gray-800">{type}</div>
                <div className="text-sm text-gray-600 mt-1">
                  {Math.floor(certificateCategories[activeCategory].count / 4) + (index % 2)} ta
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">So'nggi yutuqlar</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentCertificates.map((cert) => (
              <div key={cert.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Certificate Badge */}
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 text-white text-center">
                  <div className="text-2xl mb-2">🏆</div>
                  <div className="font-bold text-sm">{cert.category}</div>
                </div>
                
                {/* Certificate Info */}
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 mb-1">{cert.studentName}</h4>
                  <p className="text-blue-600 text-sm font-medium mb-2">{cert.grade}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-gray-600">Sertifikat:</span>
                      <p className="font-medium">{cert.certificateName}</p>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Natija:</span>
                      <span className="font-bold text-green-600">{cert.score}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sana:</span>
                      <span className="text-gray-800">{cert.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Progress */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">2024-yil oylik natijalar</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[
              { month: 'Yan', count: 12 },
              { month: 'Fev', count: 18 },
              { month: 'Mar', count: 25 },
              { month: 'Apr', count: 22 },
              { month: 'May', count: 30 },
              { month: 'Iyun', count: 15 }
            ].map((data, index) => (
              <div key={index} className="text-center">
                <div className="mb-2">
                  <div 
                    className="bg-blue-500 rounded-t mx-auto transition-all duration-1000"
                    style={{ 
                      width: '40px',
                      height: isVisible ? `${data.count * 2}px` : '0px'
                    }}
                  ></div>
                </div>
                <div className="font-bold text-blue-600">{data.count}</div>
                <div className="text-sm text-gray-600">{data.month}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center mb-12">
          <h3 className="text-2xl font-bold mb-6">Muvaffaqiyat hikoyelari</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl mb-2">🌟</div>
              <h4 className="font-bold mb-2">IELTS Champions</h4>
              <p className="text-blue-100 text-sm">
                8 nafar o'quvchimiz IELTS imtihonida 7+ ball oldi
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">💻</div>
              <h4 className="font-bold mb-2">Tech Leaders</h4>
              <p className="text-blue-100 text-sm">
                15 nafar o'quvchi IT sertifikatlariga ega bo'ldi
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">🏅</div>
              <h4 className="font-bold mb-2">Sport Stars</h4>
              <p className="text-blue-100 text-sm">
                25 nafar o'quvchi sport musobaqalarida g'olib bo'ldi
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link href="/sertifikatlar">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Barcha sertifikatlarni ko'rish
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}

// Count animation komponenti
function CountUp({ end, duration }: { end: number; duration: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
    requestAnimationFrame(step)
  }, [end, duration])

  return <span>{count}</span>
}