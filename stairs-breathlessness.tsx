"use client"

import { useState } from "react"

interface StairsBreathlessnessProps {
  onNext: (data: { stairsBreathlessness: string }) => void
  onPrevious: () => void
}

export default function StairsBreathlessness({ onNext, onPrevious }: StairsBreathlessnessProps) {
  const [selectedOption, setSelectedOption] = useState<string>("")

  const breathlessOptions = [
    {
      id: "very-breathless",
      text: "Fico tão sem fôlego que não consigo falar",
      emoji: "🥵",
    },
    {
      id: "little-breathless",
      text: "Fico um pouco sem fôlego, mas consigo falar",
      emoji: "💨",
    },
    {
      id: "fine-after-stairs",
      text: "Fico bem depois de um lance de escadas",
      emoji: "🙂",
    },
    {
      id: "multiple-flights-easy",
      text: "Eu consigo subir alguns lances de escada facilmente",
      emoji: "🚀",
    },
  ]

  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        <h1 className="text-xl text-gray-900 mb-8 text-center font-extrabold">
          Você fica sem fôlego depois de subir
          <br />
          um lance de escadas?
        </h1>

        {/* Breathlessness options */}
        <div className="space-y-4">
          {breathlessOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onNext({ stairsBreathlessness: option.id })}
              className={`w-full bg-white rounded-2xl p-4 shadow-md border-2 transition-all duration-200 ${
                selectedOption === option.id
                  ? "border-orange-500 bg-orange-50"
                  : "border-gray-100 hover:border-gray-200"
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
