"use client"

import { useState } from "react"

interface BodyTypeSelectionProps {
  onNext: (data: { bodyType: string }) => void
  onPrevious: () => void
}

export default function BodyTypeSelection({ onNext, onPrevious }: BodyTypeSelectionProps) {
  const [selectedType, setSelectedType] = useState<string>("")

  const bodyTypes = [
    {
      id: "hard-gainer",
      text: "Tenho dificuldade em ganhar músculos",
      emoji: "🙄",
    },
    {
      id: "easy-changer",
      text: "Eu ganho e perco peso sem esforço",
      emoji: "💪",
    },
    {
      id: "easy-gainer",
      text: "Eu ganho peso facilmente, mas tenho dificuldade para perder",
      emoji: "😬",
    },
  ]

  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        <h1 className="text-xl text-gray-900 mb-8 text-center font-extrabold">O que mais te descreve?</h1>

        {/* Body type options */}
        <div className="space-y-4">
          {bodyTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => onNext({ bodyType: type.id })}
              className={`w-full bg-white rounded-2xl p-4 shadow-md border-2 transition-all duration-200 ${
                selectedType === type.id ? "border-orange-500 bg-orange-50" : "border-gray-100 hover:border-gray-200"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 text-left">
                  <span className="text-gray-900 font-medium text-base leading-relaxed">{type.text}</span>
                </div>
                <div className="ml-4 text-4xl">{type.emoji}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
