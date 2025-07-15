"use client"

import { useState } from "react"
import Image from "next/image"

interface BestShapeTimelineProps {
  onNext: (data: { bestShapeTime: string }) => void
  onPrevious: () => void
}

export default function BestShapeTimeline({ onNext, onPrevious }: BestShapeTimelineProps) {
  const [selectedTime, setSelectedTime] = useState<string>("")

  const timeOptions = [
    {
      id: "0-6-months",
      text: "0 a 6 meses atrás",
    },
    {
      id: "7-12-months",
      text: "7 a 12 meses atrás",
    },
    {
      id: "1-3-years",
      text: "1 a 3 anos atrás",
    },
    {
      id: "more-3-years",
      text: "Mais de 3 anos atrás",
    },
  ]

  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        <h1 className="text-xl font-bold text-gray-900 mb-8 text-center">
          Faz quanto tempo que você se sentiu na sua melhor forma?
        </h1>

        {/* Time options */}
        <div className="space-y-4 mb-8">
          {timeOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onNext({ bestShapeTime: option.id })}
              className={`w-full bg-white rounded-2xl p-4 shadow-md border-2 transition-all duration-200 ${
                selectedTime === option.id ? "border-orange-500 bg-orange-50" : "border-gray-100 hover:border-gray-200"
              }`}
            >
              <div className="text-center">
                <span className="text-gray-900 font-medium text-base">{option.text}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Motivational image */}
        <div className="flex justify-center">
          <div className="w-48 h-96 rounded-3xl overflow-hidden">
            <Image
              src="/images/best-shape-woman.webp"
              alt="Mulher em boa forma"
              width={192}
              height={384}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
