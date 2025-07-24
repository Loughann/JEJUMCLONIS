"use client"

import { useState } from "react"

interface WeekendBreakProps {
  onNext: (data: { weekendBreak: string }) => void
  onPrevious: () => void
}

export default function WeekendBreak({ onNext, onPrevious }: WeekendBreakProps) {
  const [selectedOption, setSelectedOption] = useState<string>("")

  const options = [
    {
      id: "yes-break",
      text: "Claro que sim! Final de semana é para curtir",
      icon: "👌",
    },
    {
      id: "no-break",
      text: "Não paro nem no fim de semana!",
      icon: "💪",
    },
  ]

  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        <h1 className="text-xl text-gray-900 mb-8 text-center font-extrabold">
          Você precisa de uma pausa no Jejum para o final de semana?
        </h1>

        {/* Options */}
        <div className="space-y-4">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => onNext({ weekendBreak: option.id })}
              className={`w-full bg-white rounded-2xl p-4 shadow-md border-2 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] ${
                selectedOption === option.id
                  ? "border-green-500 bg-green-50 shadow-green-200"
                  : "border-green-300 hover:border-green-400"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 text-center">
                  <span className="text-gray-900 font-medium text-base leading-relaxed">{option.text}</span>
                </div>
                <div className="ml-4 text-4xl">{option.icon}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
