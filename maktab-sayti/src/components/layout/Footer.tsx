import Link from 'next/link'
import Container from '../ui/Container'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Maktab haqida */}
          <div>
            <h3 className="text-xl font-bold mb-4">Shımbay QM</h3>
            <p className="text-gray-400">
              Ta'lim sifatini oshirish va zamonaviy ta'lim muhitini yaratish
            </p>
          </div>

          {/* Tez havolalar */}
          <div>
            <h3 className="text-xl font-bold mb-4">Tez havolalar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/yangiliklar" className="text-gray-400 hover:text-white transition-colors">
                  Yangiliklar
                </Link>
              </li>
              <li>
                <Link href="/natijalar" className="text-gray-400 hover:text-white transition-colors">
                  Natijalar
                </Link>
              </li>
              <li>
                <Link href="/dars-jadvali" className="text-gray-400 hover:text-white transition-colors">
                  Dars jadvali
                </Link>
              </li>
            </ul>
          </div>

          {/* Bog'lanish */}
          <div>
            <h3 className="text-xl font-bold mb-4">Bog'lanish</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📍 Qoraqalpoqston R., Chimboy tumani</li>
              <li>📞 +998 50 900 20 01</li>
              <li>✉️ info@maktab.uz</li>
            </ul>
          </div>

          {/* Ijtimoiy tarmoqlar */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ijtimoiy tarmoqlar</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span>F</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span>T</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span>I</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Maktab. Barcha huquqlar himoyalangan.</p>
        </div>
      </Container>
    </footer>
  )
}