"use client"

import { Check } from "lucide-react"

interface PlanReadyProps {
  onNext: () => void
  onPrevious: () => void
}

export default function PlanReady({ onNext, onPrevious }: PlanReadyProps) {
  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto flex flex-col items-center">
        <h1 className="text-xl text-gray-900 mb-20 text-center leading-tight font-extrabold">
          O seu Plano Personalizado de Jejum está pronto!
        </h1>

        {/* Success checkmark */}
        <div className="mb-32">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
            <Check className="w-10 h-10 text-white stroke-[3]" />
          </div>
        </div>

        {/* Continue Button */}
        <button
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-2xl transition-colors duration-200"
          onClick={onNext}
        >
          Continuar
        </button>
      </div>
    </div>
  )
}
