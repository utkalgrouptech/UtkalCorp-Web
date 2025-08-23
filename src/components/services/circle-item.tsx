"use client"

import { useState } from "react"
import Image from "next/image"

interface CircleItemProps {
  title: string
  subtitle: string
  imageUrl: string
  highlighted?: boolean
}

export function CircleItem({ title, subtitle, imageUrl, highlighted = false }: CircleItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="flex flex-col items-center text-center">
      <div
        className={`relative overflow-hidden transition-all duration-300 ease-in-out ${isHovered ? "scale-105" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`
            w-48 h-48 mx-auto rounded-full overflow-hidden border-4 
            ${highlighted ? "border-yellow-500" : "border-gray-300"}
            ${isHovered ? "rounded-full shadow-lg" : ""}
            transition-all duration-300
          `}
        >
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <h3 className={`mt-4 font-bold text-lg ${highlighted ? "text-yellow-500" : ""}`}>{title}</h3>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  )
}