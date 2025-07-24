"use client"

import { useState } from "react"

interface WorkRoutineProps {
  onNext: (data: { workRoutine: string }) => void
  onPrevious: () => void
}

export default function WorkRoutine({ onNext, onPrevious }: WorkRoutineProps) {
  const [selectedRoutine, setSelectedRoutine] = useState<string>("")

  const routineOptions = [
    {
      id: "9-to-6",
      text: "das 09:00 às 18:00",
    },
    {
      id: "night-shifts",
      text: "Turnos noturnos",
    },
    {
      id: "flexible",
      text: "Meu horário é flexível",
    },
    {
      id: "retired",
      text: "Estou aposentada",
    },
  ]

  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        <h1 className="text-xl text-gray-900 mb-8 text-center font-extrabold">Como é a sua rotina de trabalho?</h1>

        {/* Routine options */}
        <div className="space-y-4">
          {routineOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onNext({ workRoutine: option.id })}
              className={`w-full bg-white rounded-2xl p-4 shadow-md border-2 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] ${
                selectedRoutine === option.id
                  ? "border-green-500 bg-green-50 shadow-green-200"
                  : "border-green-300 hover:border-green-400"
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
