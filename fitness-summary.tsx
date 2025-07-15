"use client"

import Image from "next/image"
import { AlertCircle } from "lucide-react"

interface FitnessSummaryProps {
  onNext: () => void
  onPrevious: () => void
}

export default function FitnessSummary({ onNext, onPrevious }: FitnessSummaryProps) {
  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        <h1 className="text-gray-900 mb-8 text-center font-extrabold text-2xl">
          Resumo do seu nível de condicionamento físico
        </h1>

        {/* BMI Card */}
        <div className="bg-green-600 rounded-2xl p-6 text-white mb-6">
          <h2 className="font-bold mt-0 mb-11 text-sm">Índice de massa corporal (IMC)</h2>

          {/* BMI Scale */}
          <div className="relative mb-0">
            {/* Scale line with pointer */}
            <div className="relative h-2 bg-green-500 rounded-full">
              {/* Pointer circle positioned between Normal and Obeso */}
              <div className="absolute top-[-4px] left-[65%] transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-2 border-green-600"></div>

              {/* "Você está aqui" callout positioned above the circle */}
              <div className="absolute bottom-6 left-[65%] transform -translate-x-1/2">
                <div className="bg-white text-sm font-medium relative whitespace-nowrap my-0 mx-0 py-px px-2 border-0 rounded-md text-zinc-800">
                  Você está aqui
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-white"></div>
                </div>
              </div>
            </div>

            {/* Scale labels - moved below the bar */}
            <div className="flex justify-between text-sm mt-2">
              <span className="font-medium">Anormal</span>
              <span className="font-medium">Normal</span>
              <span className="font-medium">Obeso</span>
            </div>
          </div>
        </div>

        {/* Summary Items */}
        <div className="space-y-4 mb-8">
          {/* Lifestyle */}
          <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">
            <div className="flex items-center space-x-3">
              <span className="text-xl">🏠</span>
              <div>
                <div className="text-sm text-gray-600">Estilo de vida:</div>
                <div className="font-semibold text-gray-900">Busca mudanças</div>
              </div>
            </div>
          </div>

          {/* Exercise Level */}
          <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">
            <div className="flex items-center space-x-3">
              <span className="text-xl">🏃</span>
              <div>
                <div className="text-sm text-gray-600">Nível de Exercício:</div>
                <div className="font-semibold text-gray-900">Exercício leve</div>
              </div>
            </div>
          </div>

          {/* Activity Level */}
          <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">
            <div className="flex items-center space-x-3">
              <span className="text-xl">⚡</span>
              <div>
                <div className="text-sm text-gray-600">Nível de atividade:</div>
                <div className="font-semibold text-gray-900">Intermediário</div>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <button
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-2xl transition-colors duration-200"
          onClick={onNext}
        >
          Continuar
        </button>

        {/* Health Concern Section */}
        <div className="mt-8">
          {/* Image */}
          <div className="mb-6 rounded-2xl overflow-hidden bg-white p-4 flex justify-center">
            <Image
              src="/images/health-concern-woman.webp"
              alt="Mulher em roupas de exercício"
              width={200}
              height={160}
              className="w-40 h-auto object-contain"
            />
          </div>

          {/* Warning Message */}
          <div className="bg-gray-100 rounded-2xl p-4 shadow-sm border border-gray-200">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-3">Sua situação é preocupante!</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Parabéns por dar o primeiro passo. Vamos criar um plano personalizado para acelerar seu metabolismo,
                  aumentar sua força e melhorar sua saúde.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
