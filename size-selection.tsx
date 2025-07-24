"use client"

import { useState } from "react"
import Image from "next/image"

interface SizeSelectionProps {
  onNext: (data: { size: string }) => void
  onPrevious: () => void
}

export default function SizeSelection({ onNext, onPrevious }: SizeSelectionProps) {
  const [selectedSize, setSelectedSize] = useState<string>("")

  const sizeOptions = [
    {
      id: "pp",
      text: "PP",
      image: "/images/size-pp.webp", // Mulher em biquíni cinza
    },
    {
      id: "p",
      text: "P",
      image: "/images/size-p.webp", // Mulher em biquíni coral/rosa
    },
    {
      id: "m",
      text: "M",
      image: "/images/size-m.webp", // Mulher em biquíni marrom/tan
    },
    {
      id: "g",
      text: "G",
      image: "/images/size-g.webp", // Mulher em biquíni azul claro
    },
    {
      id: "gg",
      text: "GG",
      image: "/images/size-gg.webp", // Mulher em biquíni branco/bege
    },
    {
      id: "xgg",
      text: "XGG",
      image: "/images/size-xgg.webp", // Mulher em lingerie nude/bege
    },
  ]

  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        <h1 className="text-xl font-extrabold text-gray-900 mb-8 text-center">Escolha o tamanho que você quer usar?</h1>

        {/* Size options - Grid layout */}
        <div className="grid grid-cols-2 gap-4">
          {sizeOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onNext({ size: option.id })}
              className={`bg-white rounded-2xl p-4 shadow-md border-2 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] ${
                selectedSize === option.id
                  ? "border-green-500 bg-green-50 shadow-green-200"
                  : "border-green-300 hover:border-green-400"
              }`}
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="w-20 h-24 rounded-xl overflow-hidden bg-orange-100">
                  <Image
                    src={option.image || "/placeholder.svg"}
                    alt={`Tamanho ${option.text}`}
                    width={80}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-gray-900 font-medium text-lg">{option.text}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
