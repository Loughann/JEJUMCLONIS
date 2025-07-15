"use client"

import { useState } from "react"

interface PlanSelectionProps {
  onNext: (data: { selectedPlan: string }) => void
  onPrevious: () => void
}

export default function PlanSelection({ onNext, onPrevious }: PlanSelectionProps) {
  const [selectedPlan, setSelectedPlan] = useState<string>("28-days")

  const planOptions = [
    {
      id: "7-days",
      days: "7 DIAS",
      title: "Início do Plano",
      progress: 30,
    },
    {
      id: "15-days",
      days: "15 DIAS",
      title: "Meio do Plano",
      progress: 60,
    },
    {
      id: "28-days",
      days: "28 DIAS",
      title: "Fim do Plano",
      progress: 90,
    },
  ]

  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        <h1 className="text-xl text-gray-900 mb-4 text-center font-extrabold">
          O único plano que você precisa para entrar em forma
        </h1>

        <p className="text-gray-600 text-sm mb-2 text-center leading-relaxed">
          De acordo com as informações que você nos forneceu, você pode atingir o seu peso ideal:
        </p>

        <p className="text-gray-900 font-bold text-lg mb-8 text-center">5.151 kg em 4 semanas</p>

        {/* Plan options */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {planOptions.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`bg-white rounded-2xl p-4 shadow-md border-2 transition-all duration-200 ${
                selectedPlan === plan.id ? "border-green-500" : "border-gray-100"
              }`}
            >
              <div className="flex flex-col items-center space-y-3">
                {/* Progress indicator */}
                <div className="w-full">
                  <div className="text-xs text-gray-600 mb-1">Você</div>
                  <div className="w-8 h-24 bg-gray-200 rounded-lg relative overflow-hidden mx-auto">
                    <div
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-800 to-green-400 rounded-lg transition-all duration-300 flex items-center justify-center"
                      style={{ height: `${plan.progress}%` }}
                    >
                      <span className="text-white text-xs font-bold">
                        {plan.id === "7-days" ? "7D" : plan.id === "15-days" ? "15D" : "28D"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Plan details */}
                <div className="text-center">
                  <div className="font-bold text-gray-900 text-sm mb-1">{plan.days}</div>
                  <div className="text-xs text-blue-500">{plan.title}</div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Continue Button */}
        <button
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-2xl transition-colors duration-200"
          onClick={() => onNext({ selectedPlan: selectedPlan })}
        >
          Continuar
        </button>
      </div>
    </div>
  )
}
