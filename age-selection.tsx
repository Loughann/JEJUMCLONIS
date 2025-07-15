"use client"

import { useState } from "react"
import Image from "next/image"

interface AgeSelectionProps {
  onNext: (data: { age: string }) => void
  onPrevious: () => void
}

export default function AgeSelection({ onNext, onPrevious }: AgeSelectionProps) {
  const [selectedAge, setSelectedAge] = useState<string>("")

  const ageOptions = [
    {
      id: "18-25",
      range: "18 a 25 anos",
      image: "/images/woman-18-25.webp", // Mulher em top coral/laranja
    },
    {
      id: "26-35",
      range: "26 a 35 anos",
      image: "/images/woman-26-35.webp", // Mulher em top branco
    },
    {
      id: "36-45",
      range: "36 a 45 anos",
      image: "/images/woman-36-45.webp", // Mulher em biquíni azul com cabelo cacheado
    },
    {
      id: "46+",
      range: "+46 anos",
      image: "/images/woman-46-plus.webp", // Mulher loira em top rosa
    },
  ]

  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        <h1 className="text-xl font-bold text-gray-900 text-center mb-2">
          Descubra seu tipo de Jejum intermitente ideal
        </h1>

        <p className="text-gray-600 text-center mb-8">De acordo com a sua idade</p>

        {/* Age options */}
        <div className="space-y-4">
          {ageOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onNext({ age: option.id })}
              className={`w-full bg-white rounded-2xl p-4 shadow-md border-2 transition-all duration-200 ${
                selectedAge === option.id ? "border-orange-500 bg-orange-50" : "border-gray-100 hover:border-gray-200"
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-orange-100 flex-shrink-0">
                  <Image
                    src={option.image || "/placeholder.svg"}
                    alt={`Pessoa ${option.range}`}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-left">
                  <span className="text-gray-900 font-medium text-lg">{option.range}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
