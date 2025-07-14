import Link from 'next/link'
import Image from 'next/image'

interface NewsCardProps {
  id: number
  title: string
  description: string
  category: string
  date: string
  image?: string
  views: number
}

export default function NewsCard({ id, title, description, category, date, image, views }: NewsCardProps) {
  return (
    <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <Link href={`/yangiliklar/${id}`}>
        <div className="relative h-56 overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600">
          {image ? (
            <Image 
              src={image} 
              alt={title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <span className="text-white text-6xl">📰</span>
            </div>
          )}
          <div className="absolute top-4 left-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {category}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <span>📅 {date}</span>
            <span>👁️ {views}</span>
          </div>
          
          <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-600 line-clamp-3 mb-4">
            {description}
          </p>
          
          <span className="text-blue-600 font-medium group-hover:underline">
            Batafsil o'qish →
          </span>
        </div>
      </Link>
    </article>
  )
}