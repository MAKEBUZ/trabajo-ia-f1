import Image from "next/image"
import { Play } from "lucide-react"

interface PromotionCardProps {
  title: string
  subtitle: string
  imageUrl: string
}

export default function PromotionCard({ title, subtitle, imageUrl }: PromotionCardProps) {
  return (
    <div className="relative h-[200px] overflow-hidden rounded">
      <Image src={imageUrl || "/placeholder.svg?height=200&width=600"} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 flex flex-col justify-center p-6">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-2 text-sm">{subtitle}</p>
      </div>
      <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full border border-white">
        <Play className="h-4 w-4" />
      </div>
    </div>
  )
}
