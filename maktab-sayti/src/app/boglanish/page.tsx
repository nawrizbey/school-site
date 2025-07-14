'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'

export default function BoglanishPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Bu yerda forma yuborish logikasi bo'ladi
    console.log('Forma yuborildi:', formData)
    alert('Xabaringiz yuborildi! Tez orada javob beramiz.')
    
    // Formani tozalash
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="min-h-screen py-20">
      <Container>
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Bog'lanish</h1>
          <p className="text-gray-600 text-lg">Biz bilan bog'laning - har doim yordam berishga tayyormiz</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-6">Aloqa ma'lumotlari</h2>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 text-xl">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Manzil</h3>
                  <p className="text-gray-600">
                    Qoraqalpoqston Respublikasi<br />
                    Chimboy tumani<br />
                    Shımbay qishloq mahallasi
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 text-xl">📞</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Telefon</h3>
                  <p className="text-gray-600">
                    <a href="tel:+998509002001" className="hover:text-blue-600">
                      +998 50 900 20 01
                    </a><br />
                    <a href="tel:+998612242001" className="hover:text-blue-600">
                      +998 61 224 20 01
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 text-xl">📧</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Elektron pochta</h3>
                  <p className="text-gray-600">
                    <a href="mailto:info@shimbay-maktab.uz" className="hover:text-blue-600">
                      info@shimbay-maktab.uz
                    </a><br />
                    <a href="mailto:director@shimbay-maktab.uz" className="hover:text-blue-600">
                      director@shimbay-maktab.uz
                    </a>
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 text-xl">⏰</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Ish vaqti</h3>
                  <p className="text-gray-600">
                    Dushanba - Shanba: 8:00 - 17:00<br />
                    Yakshanba: Dam olish kuni
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8 pt-8 border-t">
              <h3 className="font-semibold mb-4">Ijtimoiy tarmoqlar</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <span className="text-sm font-bold">F</span>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-400 text-white rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <span className="text-sm font-bold">T</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors">
                  <span className="text-sm font-bold">I</span>
                </a>
                <a href="#" className="w-10 h-10 bg-red-600 text-white rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors">
                  <span className="text-sm font-bold">Y</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Xabar yuborish</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Ismingiz *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="To'liq ismingizni kiriting"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon raqam *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+998 90 123 45 67"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Elektron pochta
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Mavzu *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Mavzuni tanlang</option>
                    <option value="qabul">Qabul bo'yicha savol</option>
                    <option value="talim">Ta'lim jarayoni</option>
                    <option value="sport">Sport to'garaklar</option>
                    <option value="tadbirlar">Tadbirlar</option>
                    <option value="shikoyat">Shikoyat</option>
                    <option value="taklif">Taklif</option>
                    <option value="boshqa">Boshqa</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Xabar matni *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Xabaringizni batafsil yozing..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
                >
                  Xabar yuborish
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Bizning joylashuvimiz</h2>
          <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <span className="text-6xl mb-4 block">🗺️</span>
              <p className="text-gray-600">
                Bu yerda Google Maps yoki boshqa xarita joylashadi<br />
                <span className="text-sm">Qoraqalpoqston R., Chimboy tumani, Shımbay</span>
              </p>
            </div>
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🏫</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Maktab haqida</h3>
            <p className="text-gray-600 text-sm">
              1500+ o'quvchi, 45 ta ustoz<br />
              25 yillik tajriba
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">⏱️</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Tez javob</h3>
            <p className="text-gray-600 text-sm">
              Xabarlaringizga 24 soat ichida<br />
              javob beramiz
            </p>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🤝</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Yordam</h3>
            <p className="text-gray-600 text-sm">
              Har qanday savol va<br />
              takliflaringizni kutamiz
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}