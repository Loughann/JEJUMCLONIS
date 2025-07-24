"use client"

import { useState } from "react"

interface ExerciseFrequencyProps {
  onNext: (data: { exerciseFrequency: string }) => void
  onPrevious: () => void
}

export default function ExerciseFrequency({ onNext, onPrevious }: ExerciseFrequencyProps) {
  const [selectedFrequency, setSelectedFrequency] = useState<string>("")

  const frequencies = [
    {
      id: "almost-daily",
      text: "Quase todos os dias",
    },
    {
      id: "several-times-week",
      text: "Várias vezes por semana",
    },
    {
      id: "several-times-month",
      text: "Várias vezes por mês",
    },
    {
      id: "never",
      text: "Nunca",
    },
  ]

  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        <h1 className="text-gray-900 mb-8 text-center font-extrabold text-2xl">
          Com que frequência você se
          <br />
          exercita?
        </h1>

        {/* Frequency options */}
        <div className="space-y-4">
          {frequencies.map((frequency) => (
            <button
              key={frequency.id}
              onClick={() => onNext({ exerciseFrequency: frequency.id })}
              className={`w-full bg-white rounded-2xl p-4 shadow-md border-2 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] ${
                selectedFrequency === frequency.id
                  ? "border-green-500 bg-green-50 shadow-green-200"
                  : "border-green-300 hover:border-green-400"
              }`}
            >
              <div className="text-center">
                <span className="text-gray-900 font-medium text-base leading-relaxed">{frequency.text}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
