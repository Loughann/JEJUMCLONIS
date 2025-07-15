"use client"

import { useState } from "react"

interface WeightLossMotivationProps {
  onNext: (data: { weightLossMotivation: string }) => void
  onPrevious: () => void
}

export default function WeightLossMotivation({ onNext, onPrevious }: WeightLossMotivationProps) {
  const [selectedMotivation, setSelectedMotivation] = useState<string>("")

  const motivationOptions = [
    {
      id: "just-curious",
      text: "Estou tentando fazer o jejum apenas por curiosidade",
      emoji: "🤔",
    },
    {
      id: "determined-sizes",
      text: "Estou determinado a diminuir um ou dois tamanhos",
      emoji: "🤘",
    },
    {
      id: "ideal-weight",
      text: "Eu não vou parar até atingir meu peso ideal",
      emoji: "🔥",
    },
  ]

  return (
    <div className="bg-gray-50 px-4 py-6">
      <div className="max-w-md mx-auto">
        <h1 className="text-gray-900 mb-8 text-center font-extrabold text-2xl">
          Quão motivado você está para
          <br />
          perder peso?
        </h1>

        {/* Motivation options */}
        <div className="space-y-4">
          {motivationOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onNext({ weightLossMotivation: option.id })}
              className={`w-full bg-white rounded-2xl p-4 shadow-md border-2 transition-all duration-200 ${
                selectedMotivation === option.id
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
