"use client"

import { useState } from "react"
import Image from "next/image"

interface BreakfastTimingProps {
  onNext: (data: { breakfastTiming: string }) => void
  onPrevious: () => void
}

export default function BreakfastTiming({ onNext, onPrevious }: BreakfastTimingProps) {
  const [selectedTime, setSelectedTime] = useState<string>("")

  const timeOptions = [
    {
      id: "6-8am",
      text: "Entre 6 e 8 da manhã",
      image: "/images/breakfast-acai-bowl.webp",
    },
    {
      id: "8-10am",
      text: "Entre 8 e 10 da manhã",
      image: "/images/breakfast-salad.webp",
    },
    {
      id: "10am-noon",
      text: "Entre 10h e meio-dia",
      image: "/images/breakfast-eggs.webp",
    },
    {
      id: "skip-breakfast",
      text: "Eu costumo pular o café da manhã",
      image: "/images/breakfast-coffee.webp",
    },
  ]

  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        <h1 className="text-xl font-bold text-gray-900 mb-8 text-center">
          Quando você costuma tomar seu café da manhã?
        </h1>

        {/* Time options */}
        <div className="space-y-4">
          {timeOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onNext({ breakfastTiming: option.id })}
              className={`w-full bg-white rounded-2xl p-4 shadow-md border-2 transition-all duration-200 ${
                selectedTime === option.id ? "border-orange-500 bg-orange-50" : "border-gray-100 hover:border-gray-200"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 text-center">
                  <span className="text-gray-900 font-medium text-base leading-relaxed">{option.text}</span>
                </div>
                <div className="ml-4 w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden">
                  <Image
                    src={option.image || "/placeholder.svg"}
                    alt={option.text}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
