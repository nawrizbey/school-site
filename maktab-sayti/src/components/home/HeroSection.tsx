'use client'

import { useState, useEffect } from 'react'
import Container from '../ui/Container'
import Button from '../ui/Button'

const slides = [
  {
    title: "Zamonaviy ta'lim markazi",
    description: "Farzandlaringiz kelajagi uchun eng yaxshi ta'lim",
    image: "/images/hero-1.jpg"
  },
  {
    title: "Tajribali ustozlar",
    description: "30 yillik tajribaga ega professional jamoamiz",
    image: "/images/hero-2.jpg"
  },
  {
    title: "Yuqori natijalar",
    description: "Har yili 95% o'quvchilarimiz oliy o'quv yurtlariga kiradi",
    image: "/images/hero-3.jpg"
  }
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[600px] bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <Container className="relative h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl text-blue-100">
              {slides[currentSlide].description}
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Ro'yxatdan o'tish
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Batafsil
              </Button>
            </div>
          </div>

          {/* Image/Animation */}
          <div className="hidden md:block">
            <div className="relative w-full h-96">
              <div className="absolute inset-0 bg-white/20 rounded-lg backdrop-blur-sm" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">🎓</div>
                  <p className="text-2xl font-semibold">Ta'lim kelajakdir</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}