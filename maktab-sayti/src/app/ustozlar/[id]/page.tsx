import Container from '@/components/ui/Container'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Image from 'next/image'

// Mock data function
const getTeacherById = (id: string) => {
  // Bu ma'lumotlar keyinchalik API'dan keladi
  return {
    id: 1,
    name: "Karimov Bobur Akramovich",
    subject: "Matematika",
    position: "Boshliq o'qituvchi",
    experience: 15,
    education: "TDPU Magistr",
    image: "",
    email: "bobur.karimov@maktab.uz",
    phone: "+998 90 123 45 67",
    awards: ["Eng yaxshi o'qituvchi 2023", "Respublika olimpiadasi g'olibi", "Xalq ta'limi arbobi"],
    bio: "15 yillik tajribaga ega matematika o'qituvchisi. Ko'plab o'quvchilarni olimpiadalarga tayyorlagan va yuqori natijalarga erishgan. Zamonaviy ta'lim metodlarini qo'llash bo'yicha keng tajribaga ega. O'quvchilar bilan individual ishlash va ularning qobiliyatlarini rivojlantirishga alohida e'tibor beradi.",
    certificates: [
      "Cambridge Assessment Mathematics",
      "Zamonaviy matematika o'qitish metodikasi",
      "TESOL sertifikati",
      "Olimpiada tayyorlash bo'yicha sertifikat"
    ],
    grades: ["9-sinf", "10-sinf", "11-sinf"],
    schedule: "Dushanba-Juma 8:00-15:00",
    achievements: [
      "10 nafar o'quvchini respublika olimpiadasiga tayyorlagan",
      "5 nafar o'quvchi xalqaro olimpiadada qatnashgan",
      "Maktabda matematika to'garagini tashkil etgan",
      "50 dan ortiq maqola va metodik qo'llanma yaratgan"
    ],
    socialMedia: {
      telegram: "@bobur_math",
      facebook: "bobur.karimov",
      linkedin: "bobur-karimov"
    },
    officeHours: [
      { day: "Dushanba", time: "14:00-15:00" },
      { day: "Chorshanba", time: "14:00-15:00" },
      { day: "Juma", time: "13:00-14:00" }
    ],
    subjects: [
      { name: "Algebra", class: "9-11 sinf" },
      { name: "Geometriya", class: "9-11 sinf" },
      { name: "Matematik analiz", class: "11-sinf" },
      { name: "Olimpiada matematikasi", class: "Barcha sinflar" }
    ]
  }
}

export default function TeacherProfilePage({ params }: { params: { id: string } }) {
  const teacher = getTeacherById(params.id)

  return (
    <div className="min-h-screen py-20">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <Link href="/" className="hover:text-blue-600">Bosh sahifa</Link>
            <span>/</span>
            <Link href="/ustozlar" className="hover:text-blue-600">Ustozlar</Link>
            <span>/</span>
            <span className="text-gray-900">{teacher.name}</span>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Teacher Info */}
            <div className="lg:col-span-1">
              {/* Teacher Photo and Basic Info */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <div className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    {teacher.image ? (
                      <Image
                        src={teacher.image}
                        alt={teacher.name}
                        fill
                        className="object-cover rounded-full"
                      />
                    ) : (
                      <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-4xl">👨‍🏫</span>
                      </div>
                    )}
                  </div>
                  
                  <h1 className="text-2xl font-bold mb-2">{teacher.name}</h1>
                  <p className="text-blue-600 font-medium text-lg mb-1">{teacher.subject}</p>
                  <p className="text-gray-600">{teacher.position}</p>
                  
                  {teacher.awards.length > 0 && (
                    <div className="mt-4 flex justify-center">
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                        🏆 {teacher.awards.length} mukofot
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <h3 className="text-lg font-bold mb-4">Bog'lanish</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="w-8 text-gray-400">📞</span>
                    <span>{teacher.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-8 text-gray-400">📧</span>
                    <span className="truncate">{teacher.email}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-8 text-gray-400">⏰</span>
                    <span>{teacher.schedule}</span>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm font-medium mb-2">Ijtimoiy tarmoqlar:</p>
                  <div className="flex gap-2">
                    {teacher.socialMedia.telegram && (
                      <a href={`https://t.me/${teacher.socialMedia.telegram.slice(1)}`} 
                         className="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center text-sm hover:bg-blue-600">
                        T
                      </a>
                    )}
                    {teacher.socialMedia.facebook && (
                      <a href={`https://facebook.com/${teacher.socialMedia.facebook}`}
                         className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm hover:bg-blue-700">
                        F
                      </a>
                    )}
                    {teacher.socialMedia.linkedin && (
                      <a href={`https://linkedin.com/in/${teacher.socialMedia.linkedin}`}
                         className="w-8 h-8 bg-blue-700 text-white rounded-lg flex items-center justify-center text-sm hover:bg-blue-800">
                        L
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold mb-4">Qabul vaqtlari</h3>
                <div className="space-y-2">
                  {teacher.officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-600">{schedule.day}</span>
                      <span className="font-medium">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Detailed Info */}
            <div className="lg:col-span-2">
              {/* Biography */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4">Biografiya</h2>
                <p className="text-gray-700 leading-relaxed">{teacher.bio}</p>
              </div>

              {/* Education and Experience */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Ta'lim</h3>
                  <div className="flex items-center mb-2">
                    <span className="w-6 text-blue-600">🎓</span>
                    <span className="ml-2">{teacher.education}</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Tajriba</h3>
                  <div className="flex items-center mb-2">
                    <span className="w-6 text-green-600">💼</span>
                    <span className="ml-2">{teacher.experience} yil</span>
                  </div>
                </div>
              </div>

              {/* Subjects Taught */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">Dars beradigan fanlar</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {teacher.subjects.map((subject, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-3">
                      <h4 className="font-medium">{subject.name}</h4>
                      <p className="text-sm text-gray-600">{subject.class}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Awards and Certificates */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Mukofotlar</h3>
                  <div className="space-y-2">
                    {teacher.awards.map((award, index) => (
                      <div key={index} className="flex items-start">
                        <span className="w-6 text-yellow-500 mt-1">🏆</span>
                        <span className="ml-2">{award}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Sertifikatlar</h3>
                  <div className="space-y-2">
                    {teacher.certificates.map((certificate, index) => (
                      <div key={index} className="flex items-start">
                        <span className="w-6 text-blue-500 mt-1">📜</span>
                        <span className="ml-2">{certificate}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">Yutuqlar va natijalar</h3>
                <div className="space-y-3">
                  {teacher.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start">
                      <span className="w-6 text-green-500 mt-1">✅</span>
                      <span className="ml-2">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Ustoz bilan bog'lanish</h3>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Ismingiz
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="To'liq ismingizni kiriting"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Telefon raqam
                      </label>
                      <input
                        type="tel"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="+998 90 123 45 67"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Xabar mavzusi
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Mavzuni tanlang</option>
                      <option value="consultation">Konsultatsiya</option>
                      <option value="tutoring">Qo'shimcha darslar</option>
                      <option value="olympiad">Olimpiada tayyorlash</option>
                      <option value="other">Boshqa</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Xabar matni
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Xabaringizni shu yerda yozing..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Xabar yuborish
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Back to Teachers Button */}
          <div className="mt-8 text-center">
            <Link href="/ustozlar">
              <Button variant="outline" size="lg">
                ← Barcha ustozlar
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}