"use client"

import { useState } from "react"

interface FeelingDesiredProps {
  onNext: (data: { feelingDesired: string }) => void
  onPrevious: () => void
}

export default function FeelingDesired({ onNext, onPrevious }: FeelingDesiredProps) {
  const [selectedFeeling, setSelectedFeeling] = useState<string>("")

  const feelingOptions = [
    {
      id: "always",
      text: "Eu me sinto desejada o tempo todo",
    },
    {
      id: "sometimes",
      text: "De vez em quando, eu me sinto desejada",
    },
    {
      id: "years-ago",
      text: "Já faz alguns anos, quando eu era mais magra",
    },
    {
      id: "dont-remember",
      text: "Não me lembro da última vez que me senti assim",
    },
  ]

  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        <h1 className="text-xl text-gray-900 mb-8 text-center font-extrabold">
          Quando foi a última vez que você se sentiu desejada?
        </h1>

        {/* Feeling options */}
        <div className="space-y-4">
          {feelingOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onNext({ feelingDesired: option.id })}
              className={`w-full bg-white rounded-2xl p-4 shadow-md border-2 transition-all duration-200 ${
                selectedFeeling === option.id
                  ? "border-orange-500 bg-orange-50"
                  : "border-gray-100 hover:border-gray-200"
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
