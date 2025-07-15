"use client"

import { useState } from "react"

interface CookingPreferenceProps {
  onNext: (data: { cookingPreference: string }) => void
  onPrevious: () => void
}

export default function CookingPreference({ onNext, onPrevious }: CookingPreferenceProps) {
  const [selectedPreference, setSelectedPreference] = useState<string>("")

  const preferences = [
    {
      id: "cook-home",
      text: "Cozinhar em casa",
      icon: "🍲",
    },
    {
      id: "restaurant",
      text: "Eu prefiro ir a um restaurante",
      icon: "🍴",
    },
    {
      id: "delivery",
      text: "Gosto de pedir comida",
      icon: "🥡",
    },
    {
      id: "mix",
      text: "Eu fa����o um pouco de tudo",
      icon: "😊",
    },
  ]

  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        <h1 className="text-xl text-gray-900 mb-8 text-center font-extrabold">
          Você prefere cozinhar, comer fora ou pedir comida?
        </h1>

        {/* Preference options */}
        <div className="space-y-4">
          {preferences.map((preference) => (
            <button
              key={preference.id}
              onClick={() => onNext({ cookingPreference: preference.id })}
              className={`w-full bg-white rounded-2xl p-4 shadow-md border-2 transition-all duration-200 ${
                selectedPreference === preference.id
                  ? "border-orange-500 bg-orange-50"
                  : "border-gray-100 hover:border-gray-200"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 text-center">
                  <span className="text-gray-900 font-medium text-base leading-relaxed">{preference.text}</span>
                </div>
                <div className="ml-4 text-4xl">{preference.icon}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
