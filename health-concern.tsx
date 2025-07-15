"use client"

import Image from "next/image"
import { AlertCircle } from "lucide-react"

interface HealthConcernProps {
  onNext: () => void
  onPrevious: () => void
}

export default function HealthConcern({ onNext, onPrevious }: HealthConcernProps) {
  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        {/* Image */}
        <div className="mb-6 rounded-2xl overflow-hidden bg-white p-4">
          <Image
            src="/images/health-concern-woman.png"
            alt="Mulher grávida em roupas de exercício"
            width={400}
            height={300}
            className="w-full h-auto object-contain"
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
        <button
          onClick={onNext}
          className="mt-4 w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Continuar
        </button>
      </div>
    </div>
  )
}
