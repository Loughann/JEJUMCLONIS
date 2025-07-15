"use client"

import { useState } from "react"
import Image from "next/image"

interface HealthProblemsProps {
  onNext: (data: { healthProblems: string[] }) => void
  onPrevious: () => void
}

export default function HealthProblems({ onNext, onPrevious }: HealthProblemsProps) {
  const [selectedProblems, setSelectedProblems] = useState<string[]>([])

  const healthOptions = [
    {
      id: "sensitive-knees",
      text: "Joelhos sensíveis",
      image: "/images/sensitive-knees.webp",
    },
    {
      id: "sensitive-back",
      text: "Costas sensíveis",
      image: "/images/sensitive-back.webp",
    },
    {
      id: "none-above",
      text: "Nenhuma das acima",
      image: "/images/healthy-woman.webp",
    },
  ]

  const toggleProblem = (problemId: string) => {
    if (problemId === "none-above") {
      // Se selecionar "Nenhuma das acima", limpar todas as outras
      setSelectedProblems(selectedProblems.includes("none-above") ? [] : ["none-above"])
    } else {
      // Se selecionar qualquer outra, remover "Nenhuma das acima"
      const newProblems = selectedProblems.filter((id) => id !== "none-above")

      if (selectedProblems.includes(problemId)) {
        setSelectedProblems(newProblems.filter((id) => id !== problemId))
      } else {
        setSelectedProblems([...newProblems, problemId])
      }
    }
  }

  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        <h1 className="text-xl text-gray-900 mb-8 text-center font-extrabold">Você tem algum desses problemas?</h1>

        {/* Health problems options */}
        <div className="space-y-4 mb-8">
          {healthOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => toggleProblem(option.id)}
              className="w-full bg-white rounded-2xl p-4 shadow-md border-2 border-gray-100 hover:border-gray-200 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-orange-100 flex-shrink-0">
                  <Image
                    src={option.image || "/placeholder.svg"}
                    alt={option.text}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-center mx-4">
                  <span className="text-gray-900 font-medium text-base">{option.text}</span>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${
                    selectedProblems.includes(option.id) ? "border-green-500 bg-green-500" : "border-green-300"
                  }`}
                >
                  {selectedProblems.includes(option.id) && (
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
          onClick={() => onNext({ healthProblems: selectedProblems })}
        >
          Continuar
        </button>
      </div>
    </div>
  )
}
