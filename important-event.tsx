"use client"

import { useState } from "react"

interface ImportantEventProps {
  onNext: (data: { importantEvent: string }) => void
  onPrevious: () => void
}

export default function ImportantEvent({ onNext, onPrevious }: ImportantEventProps) {
  const [selectedEvent, setSelectedEvent] = useState<string>("")

  const eventOptions = [
    {
      id: "vacation",
      text: "Férias",
      emoji: "✈️",
    },
    {
      id: "wedding",
      text: "Casamento",
      emoji: "👰‍♀️",
    },
    {
      id: "holiday",
      text: "Feriado",
      emoji: "🏖️",
    },
    {
      id: "friends-meeting",
      text: "Encontro de amigos",
      emoji: "🎂",
    },
    {
      id: "birthday",
      text: "Aniversário",
      emoji: "🎉",
    },
    {
      id: "other",
      text: "Outro",
      emoji: "💁",
    },
    {
      id: "no-event",
      text: "Não tenho nenhum evento especial chegando",
      emoji: "🙅‍♀️",
    },
  ]

  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        <h1 className="text-xl text-gray-900 mb-4 text-center font-extrabold">
          Você tem algum evento importante chegando?
        </h1>

        <p className="text-gray-600 text-sm mb-8 text-center leading-relaxed">
          Ter algo para esperar pode ser uma grande motivação para alcançar o seu objetivo!
        </p>

        {/* Event options */}
        <div className="space-y-4">
          {eventOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onNext({ importantEvent: option.id })}
              className={`w-full bg-white rounded-2xl p-4 shadow-md border-2 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] ${
                selectedEvent === option.id
                  ? "border-green-500 bg-green-50 shadow-green-200"
                  : "border-green-300 hover:border-green-400"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 text-center">
                  <span className="text-gray-900 font-medium text-base leading-relaxed">{option.text}</span>
                </div>
                <div className="text-4xl ml-4">{option.emoji}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
