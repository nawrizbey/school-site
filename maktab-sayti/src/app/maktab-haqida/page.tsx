'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'
import Image from 'next/image'

const milestones = [
  {
    year: "1999",
    title: "Maktab tashkil etildi",
    description: "Shımbay qishlog'ida yangi maktab binosi qurildi va birinchi o'quvchilar qabul qilindi."
  },
  {
    year: "2005",
    title: "Kompyuter sinfi ochildi",
    description: "Zamonaviy kompyuter texnologiyalari bilan jihozlangan birinchi IT sinf ishga tushirildi."
  },
  {
    year: "2010",
    title: "Sport majmuasi qurildi",
    description: "Keng ko'lamli sport zali va futbol maydoni o'quvchilar foydalanishiga berildi."
  },
  {
    year: "2015",
    title: "Olimpiada yutuqlari",
    description: "Birinchi marta respublika olimpiadasida 1-o'rin egallandi."
  },
  {
    year: "2020",
    title: "Raqamli ta'lim",
    description: "Pandemiya davrida masofaviy ta'lim tizimi joriy etildi."
  },
  {
    year: "2025",
    title: "Bugungi kun",
    description: "1500+ o'quvchi, 45 ta ustoz, zamonaviy ta'lim dasturlari."
  }
]

const achievements = [
  { icon: "🏆", title: "Respublika olimpiadasi", count: "15 ta", description: "1-o'rin g'olibleri" },
  { icon: "🎓", title: "Oliy ta'lim", count: "95%", description: "Bitiruvchilar OTMga kiradi" },
  { icon: "📚", title: "To'garaklar", count: "25 ta", description: "Turli yo'nalishlarda" },
  { icon: "🌟", title: "Mukofotli ustozlar", count: "20 ta", description: "Davlat mukofotlari sohibi" }
]

const leadership = [
  {
    name: "Karimov Azamat Rustamovich",
    position: "Direktor",
    experience: "12 yil",
    education: "TDPU Magistr",
    description: "Ta'lim sohasida 20 yillik tajriba. Maktabni rivojlantirish bo'yicha ko'plab loyihalar amalga oshirgan."
  },
  {
    name: "Normatova Gulnora Akramovna", 
    position: "Direktor o'rinbosari (ta'lim)",
    experience: "15 yil",
    education: "NUUz Pedagogika",
    description: "Ta'lim sifatini oshirish va zamonaviy metodlarni joriy etish bo'yicha mutaxassis."
  },
  {
    name: "Yusupov Bekzod Shavkatovich",
    position: "Direktor o'rinbosari (tarbiya)",
    experience: "10 yil", 
    education: "TDPU Psixologiya",
    description: "O'quvchilar tarbiyasi va ijtimoiy ishlar bo'yicha keng tajribaga ega."
  }
]

export default function MaktabHaqidaPage() {
  const [activeTab, setActiveTab] = useState('about')

  return (
    <div className="min-h-screen py-20">
      <Container>
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Shımbay qánigelestirilgen mektebi</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            25 yildan ortiq vaqt davomida sifatli ta'lim berish va yosh avlodni tarbiyalash yo'lida xizmat qilmoqdamiz
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center mb-12 bg-gray-100 rounded-xl p-2">
          {[
            { id: 'about', label: 'Umumiy ma\'lumot' },
            { id: 'history', label: 'Tarix' },
            { id: 'leadership', label: 'Rahbariyat' },
            { id: 'achievements', label: 'Yutuqlar' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === tab.id 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'about' && (
          <div className="space-y-16">
            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-blue-50 rounded-xl p-8">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h2 className="text-2xl font-bold text-center mb-4">Bizning maqsadimiz</h2>
                <p className="text-gray-700 text-center leading-relaxed">
                  Har bir o'quvchiga sifatli ta'lim berish, ularning shaxsiy qobiliyatlarini rivojlantirish 
                  va jamiyatga foydali fuqarolar sifatida shakllantirishdir.
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-8">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">🌟</span>
                </div>
                <h2 className="text-2xl font-bold text-center mb-4">Bizning ko'zimiz</h2>
                <p className="text-gray-700 text-center leading-relaxed">
                  Qoraqalpoqstondagi eng yaxshi ta'lim muassasalaridan biri bo'lish va 
                  o'quvchilarimizni global raqobatbardoshlikka tayyorlashdir.
                </p>
              </div>
            </div>

            {/* Values */}
            <div>
              <h2 className="text-3xl font-bold text-center mb-8">Bizning qadriyatlarimiz</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { icon: "📚", title: "Bilim", desc: "Uzluksiz o'rganish va rivojlanish" },
                  { icon: "🤝", title: "Hamkorlik", desc: "Jamoaviy ish va o'zaro yordam" },
                  { icon: "💡", title: "Innovatsiya", desc: "Zamonaviy metodlar va texnologiyalar" },
                  { icon: "❤️", title: "G'amxo'rlik", desc: "Har bir o'quvchiga individual yondashuv" }
                ].map((value, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Statistics */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold text-center mb-12">Raqamlarda maktabimiz</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { number: "1500+", label: "O'quvchilar", icon: "👥" },
                  { number: "45", label: "Ustozlar", icon: "👨‍🏫" },
                  { number: "25", label: "Yillik tajriba", icon: "📅" },
                  { number: "12", label: "Fanlar", icon: "📖" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold mb-1">{stat.number}</div>
                    <div className="text-blue-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div>
            <h2 className="text-3xl font-bold text-center mb-12">Maktab tarixi</h2>
            
            {/* Introduction */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
              <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
                1999-yilda tashkil etilgan Shımbay qishloq mahalla maktabi Qoraqalpoqston Respublikasi 
                Chimboy tumanidagi eng nufuzli ta'lim muassasalaridan biri hisoblanadi. 25 yil davomida 
                minglab o'quvchilarni o'qitib, ularni hayotga tayyorlab kelmoqdamiz.
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6 flex-1">
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'leadership' && (
          <div>
            <h2 className="text-3xl font-bold text-center mb-12">Maktab rahbariyati</h2>
            
            <div className="space-y-8">
              {leadership.map((leader, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/4 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center p-8">
                      <div className="text-white text-6xl">👨‍💼</div>
                    </div>
                    <div className="md:w-3/4 p-8">
                      <h3 className="text-2xl font-bold mb-2">{leader.name}</h3>
                      <p className="text-blue-600 font-semibold text-lg mb-4">{leader.position}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <span className="text-sm text-gray-500">Tajriba:</span>
                          <p className="font-semibold">{leader.experience}</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Ta'lim:</span>
                          <p className="font-semibold">{leader.education}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed">{leader.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <div>
            <h2 className="text-3xl font-bold text-center mb-12">Maktab yutuqlari</h2>
            
            {/* Main Achievements */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{achievement.count}</div>
                  <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>

            {/* Detailed Achievements */}
            <div className="space-y-6">
              <div className="bg-yellow-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="mr-3">🏆</span>
                  Olimpiada yutuqlari
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    "2023: Matematika respublika olimpiadasi - 1-o'rin",
                    "2022: Ingliz tili viloyat olimpiadasi - 3 ta 1-o'rin",
                    "2024: Kimyo respublika olimpiadasi - 2-o'rin",
                    "2023: Biologiya viloyat olimpiadasi - 2 ta 1-o'rin",
                    "2022: Fizika respublika olimpiadasi - 3-o'rin",
                    "2024: Tarix viloyat olimpiadasi - 1-o'rin"
                  ].map((achievement, index) => (
                    <div key={index} className="bg-white rounded-lg p-4">
                      <p className="text-sm">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="mr-3">🎓</span>
                  Ta'lim natijalari
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Oliy ta'limga kirish</h4>
                    <p className="text-gray-600">So'nggi 5 yilda bitiruvchilarimizning 95%i taniqli OTMlarga kirganlar</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Grant g'oliblari</h4>
                    <p className="text-gray-600">Har yili 20-25 nafar o'quvchi davlat grantini qo'lga kiritmoqda</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="mr-3">🌟</span>
                  Mukofotlar va tan olinishlar
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>2023-yil "Eng yaxshi qishloq maktabi" nominatsiyasi g'olibi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Ta'lim vazirligi tomonidan "Sifatli ta'lim" sertifikati berilgan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Viloyat hokimligi tomonidan "Namuna maktab" deb tan olingan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>UNESCO bilan hamkorlikda ekologik ta'lim loyihasi amalga oshirilmoqda</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  )
}