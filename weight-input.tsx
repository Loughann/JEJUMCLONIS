"use client"

import { useState } from "react"
import { ArrowRight, ChevronDown } from "lucide-react"

interface WeightInputProps {
  onNext: (data: { weight: string }) => void
  onPrevious: () => void
}

export default function WeightInput({ onNext, onPrevious }: WeightInputProps) {
  const [weight, setWeight] = useState<string>("")

  const handleSubmit = () => {
    if (weight.trim()) {
      console.log("Peso:", weight)
      onNext({ weight: weight })
      // Aqui você pode processar o peso
    }
  }

  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        <h1 className="text-gray-900 mb-8 text-center font-extrabold text-2xl">Qual é o seu peso atual?</h1>

        {/* Weight input */}
        <div className="mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <ArrowRight className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Digite aqui em Kg"
              className="w-full bg-white rounded-2xl p-4 pl-12 shadow-md border-2 border-green-300 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 text-gray-900 font-medium transition-all duration-200"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-2xl transition-colors duration-200 mb-8"
        >
          Enviar
        </button>

        {/* BMI Result Section */}
        <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">
          <div className="flex items-center mb-3">
            <ChevronDown className="w-5 h-5 text-gray-600 mr-2" />
            <h2 className="text-gray-900 font-bold text-base">O seu IMC 6, e está fora do ideal!</h2>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            É hora de cuidar do seu peso! Vamos usar suas informações para criar um plano personalizado para você, que
            acelera o metabolismo, ajuda na perda de peso, fortalece e melhora a saúde do coração.
          </p>
        </div>
      </div>
    </div>
  )
}
