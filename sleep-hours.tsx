"use client"

import { useState } from "react"

interface SleepHoursProps {
  onNext: (data: { sleepHours: string }) => void
  onPrevious: () => void
}

export default function SleepHours({ onNext, onPrevious }: SleepHoursProps) {
  const [selectedHours, setSelectedHours] = useState<string>("")

  const sleepOptions = [
    {
      id: "little-sleep",
      text: "Durmo pouco (menos de 5 horas)",
    },
    {
      id: "some-sleep",
      text: "Eu consigo dormir um pouco (5-6 horas)",
    },
    {
      id: "good-sleep",
      text: "Eu durmo muito e bem (7-8 horas)",
    },
    {
      id: "long-sleep",
      text: "Gosto de dormir até mais tarde (mais de 8 horas)",
    },
  ]

  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        <h1 className="text-xl text-gray-900 mb-8 text-center font-extrabold">Quantas horas você costuma dormir?</h1>

        {/* Sleep options */}
        <div className="space-y-4">
          {sleepOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onNext({ sleepHours: option.id })}
              className={`w-full bg-white rounded-2xl p-4 shadow-md border-2 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] ${
                selectedHours === option.id
                  ? "border-green-500 bg-green-50 shadow-green-200"
                  : "border-green-300 hover:border-green-400"
              }`}
            >
              <div className="text-center">
                <span className="text-gray-900 font-medium text-base leading-relaxed">{option.text}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
