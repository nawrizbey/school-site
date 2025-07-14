'use client'

import { useEffect, useState } from 'react'
import Container from '../ui/Container'

const stats = [
  { number: 1500, label: "O'quvchilar", suffix: "+" },
  { number: 75, label: "Ustozlar", suffix: "" },
  { number: 95, label: "Natijalar", suffix: "%" },
  { number: 25, label: "Yillik tajriba", suffix: " yil" }
]

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {isVisible && (
                  <CountUp end={stat.number} duration={2000} />
                )}
                {stat.suffix}
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
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