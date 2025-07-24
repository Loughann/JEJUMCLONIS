"use client"

import { useState } from "react"

interface WalkingFrequencyProps {
  onNext: (data: { walkingFrequency: string }) => void
  onPrevious: () => void
}

export default function WalkingFrequency({ onNext, onPrevious }: WalkingFrequencyProps) {
  const [selectedFrequency, setSelectedFrequency] = useState<string>("")

  const walkingOptions = [
    {
      id: "almost-daily",
      text: "Quase todos os dias",
      emoji: "😎",
    },
    {
      id: "3-4-times-week",
      text: "3 a 4 vezes por semana",
      emoji: "💪",
    },
    {
      id: "1-2-times-week",
      text: "1 a 2 vezes por semana",
      emoji: "🙂",
    },
    {
      id: "more-than-once-month",
      text: "Mais de uma vez por mês",
      emoji: "👍",
    },
  ]

  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        <h1 className="text-xl text-gray-900 mb-8 text-center font-extrabold">
          Com que frequência você sai para
          <br />
          caminhar?
        </h1>

        {/* Walking frequency options */}
        <div className="space-y-4">
          {walkingOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onNext({ walkingFrequency: option.id })}
              className={`w-full bg-white rounded-2xl p-4 shadow-md border-2 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] ${
                selectedFrequency === option.id
                  ? "border-green-500 bg-green-50 shadow-green-200"
                  : "border-green-300 hover:border-green-400"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 text-center">
                  <span className="text-gray-900 font-medium text-base leading-relaxed">{option.text}</span>
                </div>
                <div className="text-4xl">{option.emoji}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
