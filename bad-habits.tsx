"use client"

import { useState } from "react"

interface BadHabitsProps {
  onNext: (data: { badHabits: string[] }) => void
  onPrevious: () => void
}

export default function BadHabits({ onNext, onPrevious }: BadHabitsProps) {
  const [selectedHabits, setSelectedHabits] = useState<string[]>([])

  const habitOptions = [
    {
      id: "late-night-eating",
      text: "Eu como tarde da noite",
      emoji: "💤",
    },
    {
      id: "cant-stop-sweets",
      text: "Não consigo parar de comer doces",
      emoji: "😊",
    },
    {
      id: "love-sodas",
      text: "Eu amo refrigerantes",
      emoji: "🥤",
    },
    {
      id: "love-fatty-salty",
      text: "Eu adoro alimentos gordurosos ou salgados",
      emoji: "🧂",
    },
    {
      id: "none-above",
      text: "Nenhuma das acima",
      emoji: "❌",
    },
  ]

  const toggleHabit = (habitId: string) => {
    if (habitId === "none-above") {
      // Se selecionar "Nenhuma das acima", limpar todas as outras
      setSelectedHabits(selectedHabits.includes("none-above") ? [] : ["none-above"])
    } else {
      // Se selecionar qualquer outra, remover "Nenhuma das acima"
      const newHabits = selectedHabits.filter((id) => id !== "none-above")

      if (selectedHabits.includes(habitId)) {
        setSelectedHabits(newHabits.filter((id) => id !== habitId))
      } else {
        setSelectedHabits([...newHabits, habitId])
      }
    }
  }

  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        <h1 className="text-xl text-gray-900 mb-8 text-center font-extrabold">
          Você tem algum desses hábitos que
          <br />
          podem estar atrapalhando sua vida?
        </h1>

        {/* Bad habits options */}
        <div className="space-y-4 mb-8">
          {habitOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => toggleHabit(option.id)}
              className="w-full bg-white rounded-2xl p-4 shadow-md border-2 border-gray-100 hover:border-gray-200 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="text-4xl">{option.emoji}</div>
                <div className="flex-1 text-center mx-4">
                  <span className="text-gray-900 font-medium text-base">{option.text}</span>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${
                    selectedHabits.includes(option.id) ? "border-green-500 bg-green-500" : "border-green-300"
                  }`}
                >
                  {selectedHabits.includes(option.id) && (
                    <div className="w-full h-full rounded-full bg-green-500 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Continue Button */}
        <button
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-2xl transition-colors duration-200"
          onClick={() => onNext({ badHabits: selectedHabits })}
        >
          Continuar
        </button>
      </div>
    </div>
  )
}
