'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'
import { useEffect, useRef } from 'react'

// Mock data for charts
const examResults = [
  { year: '2022', percentage: 100, students: 142 },
  { year: '2023', percentage: 100, students: 156 },
  { year: '2024', percentage: 100, students: 168 },
  { year: '2025', percentage: 100, students: 168 }
]

const dtmResults = [
  { year: '2022', grants: 22, total: 85, percentage: 25.9 },
  { year: '2023', grants: 28, total: 92, percentage: 30.4 },
  { year: '2024', grants: 34, total: 98, percentage: 34.7 }
]

const subjectResults = [
  { subject: 'Matematika', average: 4.6, color: '#3B82F6' },
  { subject: 'Fizika', average: 4.4, color: '#10B981' },
  { subject: 'Kimyo', average: 4.5, color: '#F59E0B' },
  { subject: 'Biologiya', average: 4.7, color: '#8B5CF6' },
  { subject: 'Ingliz tili', average: 4.3, color: '#EF4444' },
  { subject: 'Ona tili', average: 4.8, color: '#06B6D4' }
]

const olympiadWinners = [
  {
    id: 1,
    name: "Azimov Jasur",
    subject: "Matematika",
    level: "Respublika",
    place: "1-o'rin",
    year: "2024",
    grade: "11-sinf",
    photo: "",
    achievement: "Xalqaro olimpiadaga yo'llanma oldi"
  },
  {
    id: 2,
    name: "Karimova Nilufar", 
    subject: "Kimyo",
    level: "Respublika",
    place: "2-o'rin",
    year: "2024",
    grade: "10-sinf",
    photo: "",
    achievement: "TATU da grant yutdi"
  },
  {
    id: 3,
    name: "Yusupov Bekzod",
    subject: "Fizika", 
    level: "Viloyat",
    place: "1-o'rin",
    year: "2024",
    grade: "11-sinf",
    photo: "",
    achievement: "NUUz da grant oldi"
  },
  {
    id: 4,
    name: "Normatova Dildora",
    subject: "Ingliz tili",
    level: "Viloyat", 
    place: "1-o'rin",
    year: "2024",
    grade: "9-sinf",
    photo: "",
    achievement: "IELTS 7.5 ball"
  },
  {
    id: 5,
    name: "Rahimov Sardor",
    subject: "Biologiya",
    level: "Respublika",
    place: "3-o'rin", 
    year: "2023",
    grade: "11-sinf",
    photo: "",
    achievement: "ToshTIB da grant"
  },
  {
    id: 6,
    name: "Toshmatova Feruza",
    subject: "Tarix",
    level: "Viloyat",
    place: "1-o'rin",
    year: "2024", 
    grade: "10-sinf",
    photo: "",
    achievement: "NUUz tarix fakulteti granti"
  }
]

const universityData = [
  { name: 'TATU', students: 15, color: '#3B82F6' },
  { name: 'NUUz', students: 18, color: '#10B981' },
  { name: 'TDPU', students: 12, color: '#F59E0B' },
  { name: 'ToshTIB', students: 8, color: '#8B5CF6' },
  { name: 'Boshqalar', students: 25, color: '#6B7280' }
]

export default function NatijalarPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedYear, setSelectedYear] = useState('2024')

  return (
    <div className="min-h-screen py-20">
      <Container>
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Ta'lim natijalari</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Maktabimizning yuqori ta'lim sifati va o'quvchilar yutuqlarini raqamlar bilan taqdim etamiz
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="text-blue-100">OTMga kirish</div>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">34</div>
            <div className="text-green-100">Grant g'olibi</div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">15</div>
            <div className="text-purple-100">Olimpiada g'olibi</div>
          </div>
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">4.6</div>
            <div className="text-orange-100">O'rtacha baho</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-12 bg-gray-100 rounded-xl p-2">
          {[
            { id: 'overview', label: 'Umumiy ko\'rsatkichlar', icon: '📊' },
            { id: 'olympiad', label: 'Olimpiada g\'oliblari', icon: '🏆' },
            { id: 'university', label: 'OTM natijalari', icon: '🎓' },
            { id: 'subjects', label: 'Fanlar bo\'yicha', icon: '📚' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === tab.id 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-12">
            {/* Exam Success Rate Chart */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="mr-3">📈</span>
                OTMga kirish ko'rsatkichlari (5 yillik dinamika)
              </h2>
              
              {/* Custom Line Chart */}
              <div className="relative h-80 bg-gray-50 rounded-lg p-6">
                <div className="h-full relative">
                  {/* Y-axis */}
                  <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-sm text-gray-600">
                    <span>100%</span>
                    <span>95%</span>
                    <span>90%</span>
                    <span>85%</span>
                    <span>80%</span>
                  </div>
                  
                  {/* Chart area */}
                  <div className="ml-8 h-full relative">
                    {/* Grid lines */}
                    <div className="absolute inset-0 flex flex-col justify-between">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="border-t border-gray-200"></div>
                      ))}
                    </div>
                    
                    {/* Data points */}
                    <div className="h-full flex items-end justify-between relative">
                      {examResults.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                          {/* Bar */}
                          <div 
                            className="bg-blue-500 w-12 rounded-t transition-all hover:bg-blue-600"
                            style={{ height: `${(item.percentage - 80) * 4}%` }}
                          ></div>
                          {/* Label */}
                          <div className="mt-2 text-center">
                            <div className="font-bold text-blue-600">{item.percentage}%</div>
                            <div className="text-sm text-gray-600">{item.year}</div>
                            <div className="text-xs text-gray-500">{item.students} nafar</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* DTM Grant Results */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="mr-3">🎯</span>
                DTM grant natijalari
              </h2>
              
              {/* Custom Bar Chart */}
              <div className="relative h-80 bg-gray-50 rounded-lg p-6">
                <div className="h-full flex items-end justify-around">
                  {dtmResults.map((result, index) => (
                    <div key={index} className="flex flex-col items-center space-y-2">
                      {/* Bars */}
                      <div className="flex items-end space-x-2">
                        <div className="relative group">
                          <div 
                            className="bg-green-500 w-8 rounded-t hover:bg-green-600 transition-colors"
                            style={{ height: `${result.grants * 4}px` }}
                          ></div>
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100">
                            {result.grants} grant
                          </div>
                        </div>
                        <div className="relative group">
                          <div 
                            className="bg-gray-400 w-8 rounded-t hover:bg-gray-500 transition-colors"
                            style={{ height: `${result.total * 2}px` }}
                          ></div>
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100">
                            {result.total} jami
                          </div>
                        </div>
                      </div>
                      {/* Year Label */}
                      <div className="text-center">
                        <div className="font-bold">{result.year}</div>
                        <div className="text-sm text-green-600 font-semibold">{result.percentage}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {dtmResults.map((result, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">{result.grants}</div>
                    <div className="text-sm text-gray-600">{result.year}-yil grant g'oliblari</div>
                    <div className="text-lg font-semibold text-blue-600">{result.percentage}%</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly Progress */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="mr-3">📅</span>
                2024-yil oylik natijalar
              </h2>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { month: 'Yanvar', tests: 15, average: 4.2 },
                  { month: 'Fevral', tests: 18, average: 4.4 },
                  { month: 'Mart', tests: 22, average: 4.3 },
                  { month: 'Aprel', tests: 25, average: 4.6 },
                  { month: 'May', tests: 30, average: 4.5 },
                  { month: 'Iyun', tests: 12, average: 4.7 },
                  { month: 'Sentyabr', tests: 20, average: 4.4 },
                  { month: 'Oktyabr', tests: 28, average: 4.6 }
                ].map((data, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800">{data.month}</h3>
                    <div className="text-2xl font-bold text-blue-600">{data.tests}</div>
                    <div className="text-sm text-blue-700">Test ishlari</div>
                    <div className="text-lg font-semibold text-green-600">{data.average}</div>
                    <div className="text-xs text-green-700">O'rtacha baho</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'olympiad' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="mr-3">🏆</span>
                Olimpiada g'oliblari
              </h2>
              
              {/* Year Filter */}
              <div className="mb-6">
                <select 
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="2024">2024-yil</option>
                  <option value="2023">2023-yil</option>
                  <option value="2022">2022-yil</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {olympiadWinners
                  .filter(winner => winner.year === selectedYear)
                  .map((winner) => (
                  <div key={winner.id} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                        {winner.place === "1-o'rin" ? "🥇" : winner.place === "2-o'rin" ? "🥈" : "🥉"}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{winner.name}</h3>
                        <p className="text-gray-600">{winner.grade}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Fan:</span>
                        <span className="font-semibold">{winner.subject}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Daraja:</span>
                        <span className="font-semibold">{winner.level}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">O'rin:</span>
                        <span className="font-semibold text-yellow-600">{winner.place}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-yellow-200">
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">Yutuq:</span> {winner.achievement}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Olympiad Statistics */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl p-6 text-white">
                <div className="text-3xl mb-2">🥇</div>
                <div className="text-2xl font-bold">8</div>
                <div className="text-yellow-100">1-o'rin g'oliblari</div>
              </div>
              <div className="bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl p-6 text-white">
                <div className="text-3xl mb-2">🥈</div>
                <div className="text-2xl font-bold">5</div>
                <div className="text-gray-100">2-o'rin g'oliblari</div>
              </div>
              <div className="bg-gradient-to-br from-orange-600 to-red-500 rounded-xl p-6 text-white">
                <div className="text-3xl mb-2">🥉</div>
                <div className="text-2xl font-bold">7</div>
                <div className="text-orange-100">3-o'rin g'oliblari</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'university' && (
          <div className="space-y-8">
            {/* University Distribution */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="mr-3">🎓</span>
                OTMlarga taqsimlanish (2024-yil)
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Custom Pie Chart */}
                <div className="flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    {/* Simple Donut Chart with CSS */}
                    <div className="absolute inset-0 rounded-full border-8 border-blue-500" style={{ 
                      background: `conic-gradient(
                        #3B82F6 0deg ${(universityData[0].students/78)*360}deg,
                        #10B981 ${(universityData[0].students/78)*360}deg ${((universityData[0].students + universityData[1].students)/78)*360}deg,
                        #F59E0B ${((universityData[0].students + universityData[1].students)/78)*360}deg ${((universityData[0].students + universityData[1].students + universityData[2].students)/78)*360}deg,
                        #8B5CF6 ${((universityData[0].students + universityData[1].students + universityData[2].students)/78)*360}deg ${((universityData[0].students + universityData[1].students + universityData[2].students + universityData[3].students)/78)*360}deg,
                        #6B7280 ${((universityData[0].students + universityData[1].students + universityData[2].students + universityData[3].students)/78)*360}deg 360deg
                      )`,
                      borderRadius: '50%'
                    }}>
                      <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-2xl font-bold">78</div>
                          <div className="text-sm text-gray-600">Jami</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold mb-4">Batafsil ma'lumot:</h3>
                  {universityData.map((uni, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div 
                          className="w-4 h-4 rounded-full mr-3"
                          style={{ backgroundColor: uni.color }}
                        ></div>
                        <span className="font-medium">{uni.name}</span>
                      </div>
                      <span className="text-lg font-bold text-blue-600">{uni.students} nafar</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Top Universities Detail */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Eng ko'p o'quvchi kirgan OTMlar</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: 'NUUz', students: 18, grants: 12, total: 18, logo: '🏛️' },
                  { name: 'TATU', students: 15, grants: 11, total: 15, logo: '💻' },
                  { name: 'TDPU', students: 12, grants: 8, total: 12, logo: '📚' },
                  { name: 'ToshTIB', students: 8, grants: 6, total: 8, logo: '🏥' }
                ].map((uni, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                    <div className="text-center">
                      <div className="text-4xl mb-2">{uni.logo}</div>
                      <h3 className="text-xl font-bold text-blue-800">{uni.name}</h3>
                      <div className="mt-4 space-y-2">
                        <div>
                          <div className="text-2xl font-bold text-blue-600">{uni.students}</div>
                          <div className="text-sm text-blue-700">Jami o'quvchi</div>
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-green-600">{uni.grants}</div>
                          <div className="text-xs text-green-700">Grant bilan</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'subjects' && (
          <div className="space-y-8">
            {/* Subject Performance */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="mr-3">📚</span>
                Fanlar bo'yicha o'rtacha natijalar
              </h2>
              
              {/* Custom Bar Chart */}
              <div className="space-y-4">
                {subjectResults.map((subject, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-32 text-sm font-medium">{subject.subject}</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-8 relative">
                      <div 
                        className="h-8 rounded-full flex items-center justify-end pr-3 text-white font-bold text-sm transition-all duration-1000"
                        style={{ 
                          width: `${(subject.average / 5) * 100}%`,
                          backgroundColor: subject.color 
                        }}
                      >
                        {subject.average}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subject Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjectResults.map((subject, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">{subject.subject}</h3>
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                      style={{ backgroundColor: subject.color }}
                    >
                      {subject.average}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>5-baho:</span>
                      <span className="font-semibold">68%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>4-baho:</span>
                      <span className="font-semibold">25%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>3-baho:</span>
                      <span className="font-semibold">7%</span>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t">
                      <div className="text-xs text-gray-600">O'quvchilar soni: 156</div>
                      <div className="text-xs text-gray-600">O'qituvchilar: 3 nafar</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  )
}