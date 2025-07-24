"use client"

import { useState } from "react"
import { User, ChevronDown } from "lucide-react"

interface HeightInputProps {
  onNext: (data: { height: string }) => void
  onPrevious: () => void
}

export default function HeightInput({ onNext, onPrevious }: HeightInputProps) {
  const [height, setHeight] = useState<string>("")

  const handleSubmit = () => {
    if (height.trim()) {
      console.log("Altura:", height)
      onNext({ height: height })
      // Aqui você pode processar a altura
    }
  }

  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        <h1 className="text-gray-900 mb-8 text-center font-extrabold text-2xl">Qual é a sua altura?</h1>

        {/* Height input */}
        <div className="mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Digite a aqui em cm"
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

        {/* BMI Info Section */}
        <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">
          <div className="flex items-center mb-3">
            <ChevronDown className="w-5 h-5 text-gray-600 mr-2" />
            <h2 className="text-gray-900 font-bold text-base">Calculando seu índice de massa corporal</h2>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            O IMC é amplamente utilizado como um indicador de risco para o desenvolvimento ou prevalência de vários
            problemas de saúde.
          </p>
        </div>
      </div>
    </div>
  )
}
