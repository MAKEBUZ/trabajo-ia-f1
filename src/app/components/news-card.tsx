import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

interface NewsCardProps {
  date: string
  title: string
  time: string
  content: string
  imageUrl: string
}

export default function NewsCard({ date, title, time, content, imageUrl }: NewsCardProps) {
  return (
    <div className="overflow-hidden rounded bg-gray-900">
      <div className="relative h-48 w-full">
        <div className="absolute left-0 top-0 z-10 bg-red-600 px-2 py-1 text-sm font-bold">{date}</div>
        <Image src={imageUrl || "/placeholder.svg?height=200&width=400"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-lg font-bold">{title}</h3>
        <p className="mb-2 text-xs text-red-500">{time}</p>
        <p className="mb-4 text-sm text-gray-300">{content}</p>
        <Link href="#" className="flex items-center text-xs text-gray-400 hover:text-white">
          Show More <ChevronRight className="ml-1 h-3 w-3" />
        </Link>
      </div>
    </div>
  )
}
