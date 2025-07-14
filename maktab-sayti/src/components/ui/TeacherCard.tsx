import Link from 'next/link'
import Image from 'next/image'

interface TeacherCardProps {
  id: number
  name: string
  subject: string
  position: string
  experience: number
  education: string
  image: string
  email: string
  phone: string
  awards: string[]
}

export default function TeacherCard({
  id,
  name,
  subject,
  position,
  experience,
  education,
  image,
  email,
  phone,
  awards
}: TeacherCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1">
      {/* Teacher Photo */}
      <div className="relative h-64 bg-gradient-to-br from-blue-500 to-blue-600">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="h-full flex items-center justify-center">
            <span className="text-white text-6xl">👨‍🏫</span>
          </div>
        )}
        
        {/* Awards Badge */}
        {awards.length > 0 && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-medium">
            🏆 {awards.length} mukofot
          </div>
        )}
      </div>

      {/* Teacher Info */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
          <p className="text-blue-600 font-medium">{subject}</p>
          <p className="text-gray-600 text-sm">{position}</p>
        </div>

        {/* Quick Info */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <span className="w-4 mr-2">🎓</span>
            <span>{education}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span className="w-4 mr-2">💼</span>
            <span>{experience} yillik tajriba</span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 mb-4 text-sm">
          <div className="flex items-center text-gray-600">
            <span className="w-4 mr-2">📞</span>
            <span>{phone}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <span className="w-4 mr-2">📧</span>
            <span className="truncate">{email}</span>
          </div>
        </div>

        {/* View Profile Button */}
        <Link href={`/ustozlar/${id}`}>
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Batafsil ma'lumot
          </button>
        </Link>
      </div>
    </div>
  )
}