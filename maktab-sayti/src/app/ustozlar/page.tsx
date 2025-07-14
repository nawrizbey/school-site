'use client'

import { useState, useMemo } from 'react'
import Container from '@/components/ui/Container'
import TeacherCard from '@/components/ui/TeacherCard'

// Mock data - 45 ta ustoz
const allTeachers = [
  {
    id: 1,
    name: "Karimov Bobur Akramovich",
    subject: "Matematika",
    position: "Boshliq o'qituvchi",
    experience: 15,
    education: "TDPU Magistr",
    image: "",
    email: "bobur.karimov@maktab.uz",
    phone: "+998 90 123 45 67",
    awards: ["Eng yaxshi o'qituvchi 2023", "Respublika olimpiadasi g'olibi"],
    bio: "15 yillik tajribaga ega matematika o'qituvchisi. Ko'plab o'quvchilarni olimpiadalarga tayyorlagan.",
    certificates: ["Cambridge Assessment", "TESOL sertifikati"],
    grades: ["9-sinf", "10-sinf", "11-sinf"],
    schedule: "Dushanba-Juma 8:00-15:00"
  },
  {
    id: 2,
    name: "Normatova Dildora Rustamovna",
    subject: "Ona tili va adabiyot",
    position: "Katta o'qituvchi",
    experience: 12,
    education: "NUUz Filologiya",
    image: "",
    email: "dildora.normatova@maktab.uz",
    phone: "+998 91 234 56 78",
    awards: ["Ma'rifatchi o'qituvchi"],
    bio: "O'zbek tili va adabiyotini sevish ruhida o'qitaman. Bolalar ijodini rivojlantirishga alohida e'tibor beraman.",
    certificates: ["Adabiyot o'qitish metodikasi"],
    grades: ["5-sinf", "6-sinf", "7-sinf"],
    schedule: "Dushanba-Juma 8:00-14:00"
  },
  {
    id: 3,
    name: "Yusupov Azamat Shavkatovich",
    subject: "Fizika",
    position: "O'qituvchi",
    experience: 8,
    education: "TDTU Bakalavr",
    image: "",
    email: "azamat.yusupov@maktab.uz",
    phone: "+998 93 345 67 89",
    awards: [],
    bio: "Fizikani amaliy tajribalar orqali o'rgatishni yaxshi ko'raman. Eksperimentlar va laboratoriya ishlarini tashkil etaman.",
    certificates: ["Zamonaviy fizika o'qitish"],
    grades: ["8-sinf", "9-sinf", "10-sinf"],
    schedule: "Dushanba-Shanba 8:30-15:30"
  },
  {
    id: 4,
    name: "Rahimova Nilufar Davronovna",
    subject: "Kimyo",
    position: "Katta o'qituvchi",
    experience: 18,
    education: "TDPU Magistr",
    image: "",
    email: "nilufar.rahimova@maktab.uz",
    phone: "+998 94 456 78 90",
    awards: ["Xalq ta'limi arbobi", "Eng yaxshi kimyo o'qituvchisi"],
    bio: "Kimyoni hayotiy misollar bilan bog'lab o'rgataman. Laboratoriya ishlarini professional darajada olib boraman.",
    certificates: ["Kimyo laboratoriyasi", "Xavfsizlik texnikasi"],
    grades: ["8-sinf", "9-sinf", "10-sinf", "11-sinf"],
    schedule: "Dushanba-Juma 8:00-15:00"
  },
  {
    id: 5,
    name: "Toshmatov Sardor Umarovich",
    subject: "Ingliz tili",
    position: "O'qituvchi",
    experience: 6,
    education: "UzSWLU Bakalavr",
    image: "",
    email: "sardor.toshmatov@maktab.uz",
    phone: "+998 95 567 89 01",
    awards: ["IELTS Certified Teacher"],
    bio: "Zamonaviy metodlar yordamida ingliz tilini o'rgataman. Kommunikativ yondashuvni qo'llayman.",
    certificates: ["IELTS Teaching", "Cambridge TKT"],
    grades: ["1-sinf", "2-sinf", "3-sinf", "4-sinf"],
    schedule: "Dushanba-Shanba 8:00-16:00"
  },
  // Qo'shimcha 40 ta ustoz...
  {
    id: 6,
    name: "Abdullayeva Feruza Karimovna",
    subject: "Biologiya",
    position: "Boshliq o'qituvchi",
    experience: 20,
    education: "TDPU Magistr",
    image: "",
    email: "feruza.abdullayeva@maktab.uz",
    phone: "+998 97 678 90 12",
    awards: ["Biolog-o'qituvchi", "Ekologiya bo'yicha mutaxassis"],
    bio: "Biologiyani tabiat bilan bog'lab o'rgataman. Ekskursiyalar va amaliy ishlarni tashkil etaman.",
    certificates: ["Botanika", "Zoologiya", "Ekologiya"],
    grades: ["6-sinf", "7-sinf", "8-sinf", "9-sinf"],
    schedule: "Dushanba-Juma 8:30-15:30"
  },
  {
    id: 7,
    name: "Mirzayev Jahongir Bakhtiyor o'g'li",
    subject: "Tarix",
    position: "Katta o'qituvchi",
    experience: 14,
    education: "NUUz Tarix",
    image: "",
    email: "jahongir.mirzayev@maktab.uz",
    phone: "+998 98 789 01 23",
    awards: ["Tarixchi-tadqiqotchi"],
    bio: "O'zbekiston va jahon tarixini qiziqarli hikoyalar orqali o'rgataman.",
    certificates: ["Tarix metodikasi", "Arxeologiya asoslari"],
    grades: ["5-sinf", "6-sinf", "7-sinf", "8-sinf"],
    schedule: "Dushanba-Shanba 8:00-14:30"
  },
  {
    id: 8,
    name: "Ergasheva Madina Rustamovna",
    subject: "Geografiya",
    position: "O'qituvchi",
    experience: 9,
    education: "TDPU Bakalavr",
    image: "",
    email: "madina.ergasheva@maktab.uz",
    phone: "+998 99 890 12 34",
    awards: [],
    bio: "Geografiyani xaritalar va virtual sayohatlar orqali o'rgataman.",
    certificates: ["GIS dasturlari", "Kartografiya"],
    grades: ["6-sinf", "7-sinf", "8-sinf"],
    schedule: "Dushanba-Juma 8:30-15:00"
  }
  // ... va hokazo 45 tagacha
]

const subjects = [
  "Matematika", "Ona tili va adabiyot", "Fizika", "Kimyo", 
  "Ingliz tili", "Biologiya", "Tarix", "Geografiya", 
  "Jismoniy tarbiya", "Musiqa", "Tasviriy san'at", "Informatika"
]

const positions = ["O'qituvchi", "Katta o'qituvchi", "Boshliq o'qituvchi"]

export default function UstozlarPage() {
  const [selectedSubject, setSelectedSubject] = useState('all')
  const [selectedPosition, setSelectedPosition] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredTeachers = useMemo(() => {
    return allTeachers.filter(teacher => {
      const matchesSubject = selectedSubject === 'all' || teacher.subject === selectedSubject
      const matchesPosition = selectedPosition === 'all' || teacher.position === selectedPosition
      const matchesSearch = teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           teacher.subject.toLowerCase().includes(searchQuery.toLowerCase())
      
      return matchesSubject && matchesPosition && matchesSearch
    })
  }, [selectedSubject, selectedPosition, searchQuery])

  return (
    <div className="min-h-screen py-20">
      <Container>
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ustozlarimiz</h1>
          <p className="text-gray-600 text-lg">Tajribali va malakali o'qituvchilar jamoasi</p>
          <div className="mt-6 text-2xl font-bold text-blue-600">
            Jami: {filteredTeachers.length} nafar ustoz
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Ustoz ismini yoki fanini qidiring..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                🔍
              </span>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 justify-center">
            {/* Subject Filter */}
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Barcha fanlar</option>
              {subjects.map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>

            {/* Position Filter */}
            <select
              value={selectedPosition}
              onChange={(e) => setSelectedPosition(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Barcha lavozimlar</option>
              {positions.map(position => (
                <option key={position} value={position}>{position}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-600">
              {allTeachers.filter(t => t.position === "Boshliq o'qituvchi").length}
            </div>
            <div className="text-sm text-gray-600">Boshliq o'qituvchi</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600">
              {allTeachers.filter(t => t.position === "Katta o'qituvchi").length}
            </div>
            <div className="text-sm text-gray-600">Katta o'qituvchi</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-purple-600">
              {Math.round(allTeachers.reduce((sum, t) => sum + t.experience, 0) / allTeachers.length)}
            </div>
            <div className="text-sm text-gray-600">O'rtacha tajriba</div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-orange-600">
              {allTeachers.filter(t => t.awards.length > 0).length}
            </div>
            <div className="text-sm text-gray-600">Mukofotli ustozlar</div>
          </div>
        </div>

        {/* Teachers Grid */}
        {filteredTeachers.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredTeachers.map((teacher) => (
              <TeacherCard key={teacher.id} {...teacher} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">Hech qanday ustoz topilmadi</p>
            <button 
              onClick={() => {
                setSelectedSubject('all')
                setSelectedPosition('all')
                setSearchQuery('')
              }}
              className="mt-4 text-blue-600 hover:underline"
            >
              Filtrlarni tozalash
            </button>
          </div>
        )}
      </Container>
    </div>
  )
}