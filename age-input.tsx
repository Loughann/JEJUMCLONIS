"use client"

import { useState } from "react"
import { ArrowRight, ChevronDown } from "lucide-react"

interface AgeInputProps {
  onNext: (data: { ageInput: string }) => void
  onPrevious: () => void
}

export default function AgeInput({ onNext, onPrevious }: AgeInputProps) {
  const [age, setAge] = useState<string>("")

  const handleSubmit = () => {
    if (age.trim()) {
      console.log("Idade:", age)
      onNext({ ageInput: age })
      // Aqui você pode processar a idade
    }
  }

  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        <h1 className="text-gray-900 mb-8 text-center font-extrabold text-2xl">Qual é a sua idade?</h1>

        {/* Age input */}
        <div className="mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <ArrowRight className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Digite sua idade aqui"
              className="w-full bg-white rounded-2xl p-4 pl-12 shadow-md border-2 border-gray-100 focus:border-orange-500 focus:outline-none text-gray-900 font-medium"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={() => onNext({ ageInput: age })}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-2xl transition-colors duration-200 mb-8"
        >
          Enviar
        </button>

        {/* Personalization Info Section */}
        <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">
          <div className="flex items-center mb-3">
            <ChevronDown className="w-5 h-5 text-gray-600 mr-2" />
            <h2 className="text-gray-900 font-bold text-base">
              Vamos usar essas informações para criar seu plano personalizado!
            </h2>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Pessoas mais velhas tendem a ter mais gordura corporal do que pessoas mais jovens com o mesmo IMC, por isso
            vamos personalizar para você.
          </p>
        </div>
      </div>
    </div>
  )
}
