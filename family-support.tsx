"use client"

import { useState } from "react"

interface FamilySupportProps {
  onNext: (data: { familySupport: string }) => void
  onPrevious: () => void
}

export default function FamilySupport({ onNext, onPrevious }: FamilySupportProps) {
  const [selectedSupport, setSelectedSupport] = useState<string>("")

  const supportOptions = [
    {
      id: "always-supported",
      text: "Eu sempre me sinto apoiado pela minha família e amigos",
      emoji: "🥰",
    },
    {
      id: "sometimes-supported",
      text: "Às vezes me sinto apoiado, mas nem sempre",
      emoji: "😔",
    },
    {
      id: "not-much-support",
      text: "Não sinto muito apoio deles",
      emoji: "💔",
    },
  ]

  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        <h1 className="text-xl text-gray-900 mb-8 text-center font-extrabold">
          Sua família e amigos apoiam você
          <br />
          para manter a forma?
        </h1>

        {/* Support options */}
        <div className="space-y-4">
          {supportOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onNext({ familySupport: option.id })}
              className={`w-full bg-white rounded-2xl p-4 shadow-md border-2 transition-all duration-200 ${
                selectedSupport === option.id
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
