"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

interface DesiredWeightInputProps {
  onNext: (data: { desiredWeight: string }) => void
  onPrevious: () => void
}

export default function DesiredWeightInput({ onNext, onPrevious }: DesiredWeightInputProps) {
  const [desiredWeight, setDesiredWeight] = useState<string>("")

  const handleSubmit = () => {
    if (desiredWeight.trim()) {
      onNext({ desiredWeight: desiredWeight })
    }
  }

  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        <h1 className="text-gray-900 mb-8 text-center font-extrabold text-2xl">Qual é o seu peso desejado?</h1>

        {/* Desired weight input */}
        <div className="mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <ArrowRight className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              value={desiredWeight}
              onChange={(e) => setDesiredWeight(e.target.value)}
              placeholder="Digite aqui em Kg"
              className="w-full bg-white rounded-2xl p-4 pl-12 shadow-md border-2 border-gray-100 focus:border-orange-500 focus:outline-none text-gray-900 font-medium"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-2xl transition-colors duration-200"
        >
          Enviar
        </button>
      </div>
    </div>
  )
}
