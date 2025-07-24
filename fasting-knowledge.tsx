"use client"

import { useState } from "react"

interface FastingKnowledgeProps {
  onNext: (data: { fastingKnowledge: string }) => void
  onPrevious: () => void
}

export default function FastingKnowledge({ onNext, onPrevious }: FastingKnowledgeProps) {
  const [selectedKnowledge, setSelectedKnowledge] = useState<string>("")

  const knowledgeOptions = [
    {
      id: "know-nothing",
      text: "Não sei nada",
      emoji: "🤔",
    },
    {
      id: "heard-little",
      text: "Já ouvi falar um pouco",
      emoji: "💁",
    },
    {
      id: "understand-well",
      text: "Entendo bastante",
      emoji: "😎",
    },
  ]

  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        <h1 className="text-xl font-extrabold text-gray-900 mb-8 text-center">
          O que você sabe sobre o jejum intermitente?
        </h1>

        {/* Knowledge options */}
        <div className="space-y-4">
          {knowledgeOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onNext({ fastingKnowledge: option.id })}
              className={`w-full bg-white rounded-2xl p-4 shadow-md border-2 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] ${
                selectedKnowledge === option.id
                  ? "border-green-500 bg-green-50 shadow-green-200"
                  : "border-green-300 hover:border-green-400"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 text-left">
                  <span className="text-gray-900 font-medium text-base leading-relaxed">{option.text}</span>
                </div>
                <div className="ml-4 text-5xl">{option.emoji}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
