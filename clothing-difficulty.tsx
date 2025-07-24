"use client"

import { useState } from "react"
import Image from "next/image"

interface ClothingDifficultyProps {
  onNext: (data: { clothingDifficulty: string }) => void
  onPrevious: () => void
}

export default function ClothingDifficulty({ onNext, onPrevious }: ClothingDifficultyProps) {
  const [selectedOption, setSelectedOption] = useState<string>("")

  const options = [
    { id: "almost-always", text: "Quase sempre" },
    { id: "sometimes", text: "Às vezes" },
    { id: "rarely", text: "Raramente" },
    { id: "never", text: "Nunca" },
  ]

  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        <h1 className="text-xl font-extrabold text-gray-900 mb-8 text-center">
          Você tem dificuldade para escolher suas roupas com seu peso atual?
        </h1>

        {/* Options */}
        <div className="space-y-4 mb-8">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => onNext({ clothingDifficulty: option.id })}
              className="w-full bg-white rounded-2xl p-4 shadow-md border-2 border-green-300 hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-900 font-medium text-lg">{option.text}</span>
                <div
                  className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${
                    selectedOption === option.id ? "border-green-500 bg-green-500" : "border-green-300"
                  }`}
                >
                  {selectedOption === option.id && (
                    <div className="w-full h-full rounded-full bg-green-500 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Dress image */}
        <div className="flex justify-center">
          <Image
            src="/images/floral-dress-nobg.webp"
            alt="Vestido floral colorido"
            width={200}
            height={250}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}
