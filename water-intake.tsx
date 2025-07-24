"use client"

import { useState } from "react"

interface WaterIntakeProps {
  onNext: (data: { waterIntake: string }) => void
  onPrevious: () => void
}

export default function WaterIntake({ onNext, onPrevious }: WaterIntakeProps) {
  const [selectedIntake, setSelectedIntake] = useState<string>("")

  const waterOptions = [
    {
      id: "only-coffee-tea",
      text: "Eu só tomo café ou chá",
    },
    {
      id: "about-2-glasses",
      text: "Cerca de 2 copos",
    },
    {
      id: "2-to-6-glasses",
      text: "2 a 6 copos",
    },
    {
      id: "more-than-6-glasses",
      text: "Mais de 6 copos",
    },
  ]

  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        <h1 className="text-xl text-gray-900 mb-8 text-center font-extrabold">Qual é a sua ingestão diária de água?</h1>

        {/* Water intake options */}
        <div className="space-y-4">
          {waterOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onNext({ waterIntake: option.id })}
              className={`w-full bg-white rounded-2xl p-4 shadow-md border-2 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] ${
                selectedIntake === option.id
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
