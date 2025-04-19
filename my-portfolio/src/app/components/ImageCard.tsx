'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

type ImageCardProps = {
  src: string
  alt: string
  index?: number
}

export default function ImageCard({ src, alt, index = 0 }: ImageCardProps) {
  const [hovered, setHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), index * 300)
    return () => clearTimeout(timeout)
  }, [index])

  return (
    <div
      className={`relative break-inside-avoid overflow-hidden rounded-lg cursor-pointer transition-opacity duration-500 ${
        isVisible ? 'opacity-100 animate-fadeIn' : 'opacity-0'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        className={`rounded-lg w-full h-auto transition-transform duration-500 ${
          hovered ? 'scale-105' : 'scale-100'
        }`}
      />
    </div>
  )
}