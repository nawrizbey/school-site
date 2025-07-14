'use client'

import { useState, useMemo } from 'react'
import Container from '@/components/ui/Container'

// Barcha sertifikatlar ma'lumotlari
const allCertificates = [
  {
    id: 1,
    studentName: "Azimov Jasur",
    certificateName: "IELTS Academic",
    category: "Tillar",
    level: "Xalqaro",
    score: "7.5",
    maxScore: "9.0",
    date: "2024-03-15",
    grade: "11-sinf",
    organization: "British Council",
    validUntil: "2026-03-15",
    certificateNumber: "BC2024/03/1287"
  },
  {
    id: 2,
    studentName: "Karimova Nilufar",
    certificateName: "Microsoft Excel Expert",
    category: "IT",
    level: "Xalqaro",
    score: "95%",
    maxScore: "100%",
    date: "2024-03-12",
    grade: "10-sinf",
    organization: "Microsoft",
    validUntil: "2027-03-12",
    certificateNumber: "MS2024/EX/4567"
  },
  {
    id: 3,
    studentName: "Yusupov Bekzod",
    certificateName: "Regional Football Championship",
    category: "Sport",
    level: "Viloyat",
    score: "1-o'rin",
    maxScore: "",
    date: "2024-03-10",
    grade: "9-sinf",
    organization: "Qoraqalpoqston Sport Federatsiyasi",
    validUntil: "",
    certificateNumber: "QSF2024/FB/089"
  },
  {
    id: 4,
    studentName: "Normatova Dildora",
    certificateName: "Python Programming Fundamentals",
    category: "IT",
    level: "Xalqaro",
    score: "Certificate",
    maxScore: "",
    date: "2024-03-08",
    grade: "11-sinf",
    organization: "Codecademy",
    validUntil: "",
    certificateNumber: "CC2024/PY/3456"
  },
  {
    id: 5,
    studentName: "Rahimov Sardor",
    certificateName: "CEFR B2 English",
    category: "Tillar",
    level: "Xalqaro",
    score: "B2",
    maxScore: "C2",
    date: "2024-03-05",
    grade: "10-sinf",
    organization: "Cambridge Assessment",
    validUntil: "2026-03-05",
    certificateNumber: "CA2024/B2/7890"
  },
  {
    id: 6,
    studentName: "Toshmatova Feruza",
    certificateName: "Adobe Photoshop Certified",
    category: "IT",
    level: "Xalqaro",
    score: "88%",
    maxScore: "100%",
    date: "2024-03-03",
    grade: "11-sinf",
    organization: "Adobe",
    validUntil: "2026-03-03",
    certificateNumber: "AD2024/PS/2345"
  },
  // Qo'shimcha sertifikatlar...
  {
    id: 7,
    studentName: "Ergashev Rustam",
    certificateName: "Piano Performance Level 3",
    category: "San'at",
    level: "Respublika",
    score: "Excellent",
    maxScore: "",
    date: "2024-02-28",
    grade: "8-sinf",
    organization: "O'zbekiston Musiqa Akademiyasi",
    validUntil: "",
    certificateNumber: "UMA2024/PN/1122"
  },
  {
    id: 8,
    studentName: "Abdullayeva Madina",
    certificateName: "Chess Tournament Winner",
    category: "Sport",
    level: "Respublika",
    score: "1-o'rin",
    maxScore: "",
    date: "2024-02-25",
    grade: "9-sinf",
    organization: "O'zbekiston Shaxmat Federatsiyasi",
    validUntil: "",
    certificateNumber: "USF2024/CH/6789"
  }
]

const categories = ["Barchasi", "Tillar", "IT", "Sport", "San'at", "Akademik"]
const levels = ["Barchasi", "Xalqaro", "Respublika", "Viloyat", "Tuman"]
const grades = ["Barchasi", "8-sinf", "9-sinf", "10-sinf", "11-sinf"]

export default function SertifikatlarPage() {
  const [selectedCategory, setSelectedCategory] = useState("Barchasi")
  const [selectedLevel, setSelectedLevel] = useState("Barchasi")
  const [selectedGrade, setSelectedGrade] = useState("Barchasi")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("date") // date, name, score

  const filteredCertificates = useMemo(() => {
    return allCertificates.filter(cert => {
      const matchesCategory = selectedCategory === "Barchasi" || cert.category === selectedCategory
      const matchesLevel = selectedLevel === "Barchasi" || cert.level === selectedLevel
      const matchesGrade = selectedGrade === "Barchasi" || cert.grade === selectedGrade
      const matchesSearch = cert.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           cert.certificateName.toLowerCase().includes(searchQuery.toLowerCase())
      
      return matchesCategory && matchesLevel && matchesGrade && matchesSearch
    }).sort((a, b) => {
      if (sortBy === "date") return new Date(b.date).getTime() - new Date(a.date).getTime()
      if (sortBy === "name") return a.studentName.localeCompare(b.studentName)
      return 0
    })
  }, [selectedCategory, selectedLevel, selectedGrade, searchQuery, sortBy])

  const stats = useMemo(() => {
    const total = allCertificates.length
    const international = allCertificates.filter(cert => cert.level === "Xalqaro").length
    const thisMonth = allCertificates.filter(cert => 
      new Date(cert.date).getMonth() === new Date().getMonth()
    ).length
    const students = new Set(allCertificates.map(cert => cert.studentName)).size

    return { total, international, thisMonth, students }
  }, [])

  return (
    <div className="min-h-screen py-20">
      <Container>
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">O'quvchilar sertifikatlari</h1>
          <p className="text-gray-600 text-lg">Maktabimiz o'quvchilarining barcha sertifikatlari va yutuqlari</p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">{stats.total}</div>
            <div className="text-blue-100">Jami sertifikat</div>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">{stats.students}</div>
            <div className="text-green-100">O'quvchilar</div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">{stats.international}</div>
            <div className="text-purple-100">Xalqaro</div>
          </div>
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">{stats.thisMonth}</div>
            <div className="text-orange-100">Bu oy</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Qidirish</label>
              <input
                type="text"
                placeholder="O'quvchi yoki sertifikat nomi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Kategoriya</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Level Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Daraja</label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>

            {/* Grade Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sinf</label>
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {grades.map(grade => (
                  <option key={grade} value={grade}>{grade}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Saralash</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="date">Sana bo'yicha</option>
                <option value="name">Ism bo'yicha</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Jami <span className="font-bold text-blue-600">{filteredCertificates.length}</span> ta sertifikat topildi
          </p>
        </div>

        {/* Certificates Grid */}
        {filteredCertificates.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.map((cert) => (
              <div key={cert.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                {/* Certificate Header */}
                <div className={`p-4 rounded-t-xl ${
                  cert.level === 'Xalqaro' ? 'bg-gradient-to-r from-yellow-400 to-orange-500' :
                  cert.level === 'Respublika' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                  cert.level === 'Viloyat' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                  'bg-gradient-to-r from-gray-500 to-gray-600'
                } text-white`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl mb-1">
                        {cert.category === 'Tillar' ? '🌍' :
                         cert.category === 'IT' ? '💻' :
                         cert.category === 'Sport' ? '🏆' :
                         cert.category === 'San\'at' ? '🎨' : '📚'}
                      </div>
                      <div className="text-sm opacity-90">{cert.level}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">{cert.score}</div>
                      {cert.maxScore && (
                        <div className="text-sm opacity-90">/{cert.maxScore}</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Certificate Body */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.studentName}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-3">{cert.grade}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-gray-600">Sertifikat:</span>
                      <p className="font-medium text-gray-900">{cert.certificateName}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <span className="text-gray-600">Tashkilot:</span>
                        <p className="font-medium text-xs">{cert.organization}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Sana:</span>
                        <p className="font-medium">{cert.date}</p>
                      </div>
                    </div>
                    
                    {cert.validUntil && (
                      <div>
                        <span className="text-gray-600">Amal qilish muddati:</span>
                        <p className="font-medium text-green-600">{cert.validUntil}</p>
                      </div>
                    )}
                    
                    <div>
                      <span className="text-gray-600">Raqam:</span>
                      <p className="font-mono text-xs text-gray-800">{cert.certificateNumber}</p>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      cert.category === 'Tillar' ? 'bg-blue-100 text-blue-800' :
                      cert.category === 'IT' ? 'bg-green-100 text-green-800' :
                      cert.category === 'Sport' ? 'bg-orange-100 text-orange-800' :
                      cert.category === 'San\'at' ? 'bg-purple-100 text-purple-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {cert.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-600 mb-2">Hech narsa topilmadi</h3>
            <p className="text-gray-500 mb-6">Qidiruv shartlaringizga mos sertifikat mavjud emas</p>
            <button 
              onClick={() => {
                setSelectedCategory("Barchasi")
                setSelectedLevel("Barchasi")
                setSelectedGrade("Barchasi")
                setSearchQuery("")
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Filtrlarni tozalash
            </button>
          </div>
        )}

        {/* Load More Button */}
        {filteredCertificates.length >= 9 && (
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Ko'proq yuklash
            </button>
          </div>
        )}

        {/* Achievement Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">2024-yil yutuqlari</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">45</div>
              <div className="text-blue-100">Til sertifikatlari</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">38</div>
              <div className="text-blue-100">IT sertifikatlari</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">42</div>
              <div className="text-blue-100">Sport yutuqlari</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">40</div>
              <div className="text-blue-100">Boshqa sohalarda</div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-blue-100 text-lg">
              "Har bir sertifikat - bu o'quvchimizning mehnat va sa'y-harakatining natijasidir"
            </p>
          </div>
        </div>

        {/* Top Achievers */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Eng ko'p sertifikatga ega o'quvchilar</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Azimov Jasur", count: 8, grade: "11-sinf", latest: "IELTS 7.5" },
              { name: "Karimova Nilufar", count: 6, grade: "10-sinf", latest: "Microsoft Excel Expert" },
              { name: "Yusupov Bekzod", count: 5, grade: "9-sinf", latest: "Football Champion" }
            ].map((student, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">{index + 1}</span>
                </div>
                <h4 className="text-lg font-bold mb-1">{student.name}</h4>
                <p className="text-blue-600 text-sm mb-3">{student.grade}</p>
                <div className="text-2xl font-bold text-green-600 mb-1">{student.count}</div>
                <div className="text-sm text-gray-600 mb-3">sertifikat</div>
                <div className="text-xs text-gray-500">So'nggi: {student.latest}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}