"use client"

import { useState } from "react"

interface WeightGainEventsProps {
  onNext: (data: { weightGainEvents: string[] }) => void
  onPrevious: () => void
}

export default function WeightGainEvents({ onNext, onPrevious }: WeightGainEventsProps) {
  const [selectedEvents, setSelectedEvents] = useState<string[]>([])

  const eventOptions = [
    {
      id: "marriage-relationship",
      text: "Casamento ou relacionamento",
      emoji: "👰‍♀️",
    },
    {
      id: "busy-routine",
      text: "Rotina corrida com trabalho ou família",
      emoji: "😓",
    },
    {
      id: "financial-difficulties",
      text: "Dificuldades financeiras",
      emoji: "💰",
    },
    {
      id: "injury-disability",
      text: "Lesão ou incapacidade",
      emoji: "🏥",
    },
    {
      id: "stress-mental-health",
      text: "Estresse ou problemas de saúde mental",
      emoji: "😖",
    },
    {
      id: "slower-metabolism",
      text: "Metabolismo mais lento devido à idade",
      emoji: "👵",
    },
    {
      id: "post-treatment-complications",
      text: "Complicações pós-tratamentos",
      emoji: "🩺",
    },
    {
      id: "none-above",
      text: "Nenhuma das acima",
      emoji: "❌",
    },
  ]

  const toggleEvent = (eventId: string) => {
    if (eventId === "none-above") {
      // Se selecionar "Nenhuma das acima", limpar todas as outras
      setSelectedEvents(selectedEvents.includes("none-above") ? [] : ["none-above"])
    } else {
      // Se selecionar qualquer outra, remover "Nenhuma das acima"
      const newEvents = selectedEvents.filter((id) => id !== "none-above")

      if (selectedEvents.includes(eventId)) {
        setSelectedEvents(newEvents.filter((id) => id !== eventId))
      } else {
        setSelectedEvents([...newEvents, eventId])
      }
    }
  }

  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        <h1 className="text-xl text-gray-900 mb-8 text-center font-extrabold">
          Algum desses acontecimentos fez
          <br />
          você ganhar peso nos últimos anos?
        </h1>

        {/* Event options */}
        <div className="space-y-4 mb-8">
          {eventOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => toggleEvent(option.id)}
              className="w-full bg-white rounded-2xl p-4 shadow-md border-2 border-gray-100 hover:border-gray-200 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="text-4xl">{option.emoji}</div>
                <div className="flex-1 text-center mx-4">
                  <span className="text-gray-900 font-medium text-base">{option.text}</span>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${
                    selectedEvents.includes(option.id) ? "border-green-500 bg-green-500" : "border-green-300"
                  }`}
                >
                  {selectedEvents.includes(option.id) && (
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
          onClick={() => onNext({ weightGainEvents: selectedEvents })}
        >
          Continuar
        </button>
      </div>
    </div>
  )
}
