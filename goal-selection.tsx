"use client"

import { useState } from "react"
import Image from "next/image"

interface GoalSelectionProps {
  onNext: (data: { goal: string }) => void
  onPrevious: () => void
}

export default function GoalSelection({ onNext, onPrevious }: GoalSelectionProps) {
  const [selectedGoal, setSelectedGoal] = useState<string>("")

  const goalOptions = [
    {
      id: "lose-weight",
      text: "Perder peso",
      image: "/images/goal-lose-weight.webp", // Mulher em biquíni verde (cintura/medidas)
    },
    {
      id: "get-fit",
      text: "Ficar em forma",
      image: "/images/goal-get-fit.webp", // Mulher em top marrom (abdômen definido)
    },
    {
      id: "heart-health",
      text: "Melhorar a saúde do coração",
      image: "/images/goal-heart-health.webp", // Mulher em top claro
    },
    {
      id: "stress-relief",
      text: "Aliviar o estresse",
      image: "/images/goal-stress-relief.webp", // Mulher com cabelo cacheado
    },
  ]

  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        <h1 className="text-xl font-bold text-gray-900 mb-8">Qual é o seu principal objetivo?</h1>

        {/* Goal options */}
        <div className="space-y-4">
          {goalOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onNext({ goal: option.id })}
              className={`w-full bg-white rounded-2xl p-4 shadow-md border-2 transition-all duration-200 ${
                selectedGoal === option.id ? "border-orange-500 bg-orange-50" : "border-gray-100 hover:border-gray-200"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 text-left">
                  <span className="text-gray-900 font-medium text-lg">{option.text}</span>
                </div>
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-orange-100 flex-shrink-0 ml-4">
                  <Image
                    src={option.image || "/placeholder.svg"}
                    alt={option.text}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
