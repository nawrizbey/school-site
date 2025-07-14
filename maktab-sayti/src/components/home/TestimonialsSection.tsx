'use client'

import { useState } from 'react'
import Container from '../ui/Container'

const testimonials = [
  {
    id: 1,
    name: "Aziza Karimova",
    role: "O'quvchi onasi",
    content: "Farzandim bu maktabda o'qiy boshlaganidan beri juda yaxshi o'zgarishlar bo'ldi. O'qituvchilar juda e'tiborli va professional.",
    avatar: "👩"
  },
  {
    id: 2,
    name: "Jahongir Alimov",
    role: "Bitiruvchi",
    content: "Maktabda olgan bilimlarim tufayli universitet imtihonlarini oson topshirdim. Ustozlarimga minnatdorman!",
    avatar: "👨‍🎓"
  },
  {
    id: 3,
    name: "Nodira Rashidova",
    role: "O'quvchi onasi",
    content: "Zamonaviy ta'lim usullari va qo'shimcha darslar farzandimning rivojlanishiga katta yordam bermoqda.",
    avatar: "👩"
  }
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-20 bg-blue-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Fikrlar</h2>
          <p className="text-gray-600">O'quvchilar va ota-onalar fikrlari</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{testimonials[activeIndex].avatar}</div>
              <h3 className="text-xl font-bold">{testimonials[activeIndex].name}</h3>
              <p className="text-gray-600">{testimonials[activeIndex].role}</p>
            </div>
            
            <p className="text-lg text-gray-700 text-center italic">
              "{testimonials[activeIndex].content}"
            </p>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}