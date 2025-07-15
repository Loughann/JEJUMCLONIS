"use client"

import { useState } from "react"

interface DailyActivityProps {
  onNext: (data: { dailyActivity: string }) => void
  onPrevious: () => void
}

export default function DailyActivity({ onNext, onPrevious }: DailyActivityProps) {
  const [selectedActivity, setSelectedActivity] = useState<string>("")

  const activityOptions = [
    {
      id: "mostly-sitting",
      text: "Eu passo a maior parte do dia sentado",
      emoji: "💻",
    },
    {
      id: "mixed",
      text: "Um pouco sentado e um pouco caminhando",
      emoji: "🧘‍♀️",
    },
    {
      id: "standing-all-day",
      text: "Fico em pé o dia todo",
      emoji: "🏃‍♀️",
    },
  ]

  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        <h1 className="text-xl text-gray-900 mb-8 text-center font-extrabold">Como você descreve o seu dia a dia?</h1>

        {/* Activity options */}
        <div className="space-y-4">
          {activityOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onNext({ dailyActivity: option.id })}
              className={`w-full bg-white rounded-2xl p-4 shadow-md border-2 transition-all duration-200 ${
                selectedActivity === option.id
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
