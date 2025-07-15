"use client"

import { useState } from "react"
import Image from "next/image"

interface LunchTimingProps {
  onNext: (data: { lunchTiming: string }) => void
  onPrevious: () => void
}

export default function LunchTiming({ onNext, onPrevious }: LunchTimingProps) {
  const [selectedTime, setSelectedTime] = useState<string>("")

  const timeOptions = [
    {
      id: "10am-noon",
      text: "Entre 10h e meio-dia",
      image: "/images/lunch-salad.webp",
    },
    {
      id: "noon-2pm",
      text: "Entre meio-dia e 14h",
      image: "/images/lunch-chicken.webp",
    },
    {
      id: "2pm-6pm",
      text: "Entre 14h e 18h",
      image: "/images/lunch-salmon.webp",
    },
    {
      id: "skip-lunch",
      text: "Eu costumo pular o almoço",
      image: "/images/lunch-water.webp",
    },
  ]

  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        <h1 className="text-xl font-bold text-gray-900 mb-8 text-center">Quando você costuma almoçar?</h1>

        {/* Time options */}
        <div className="space-y-4">
          {timeOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onNext({ lunchTiming: option.id })}
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
