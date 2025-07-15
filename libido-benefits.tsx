"use client"

import Image from "next/image"

interface LibidoBenefitsProps {
  onNext: () => void
  onPrevious: () => void
}

export default function LibidoBenefits({ onNext, onPrevious }: LibidoBenefitsProps) {
  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        <h1 className="text-xl text-gray-900 mb-6 text-center font-extrabold">
          Aumente a sua libido: Sua perda de peso pode aumentar a sua energia e bem-estar!
        </h1>

        <p className="text-gray-600 text-sm mb-8 text-center leading-relaxed font-semibold">
          Perder até mesmo uma pequena quantidade de peso pode aumentar sua energia e libido. Com o nosso plano
          personalizado, você não apenas se sentirá mais saudável, mas também notará uma mudança positiva no seu desejo
          sexual.
        </p>

        {/* Chart */}
        <div className="mb-8 flex justify-center">
          <div className="w-full max-w-sm">
            <Image
              src="/images/libido-chart.webp"
              alt="Gráfico mostrando relação entre perda de gordura corporal e aumento da libido"
              width={300}
              height={200}
              className="w-full h-auto object-contain"
            />
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
