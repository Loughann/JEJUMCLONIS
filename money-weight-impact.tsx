"use client"

import Image from "next/image"

export default function MoneyWeightImpact({ onNext, onPrevious }: { onNext: () => void; onPrevious: () => void }) {
  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        {/* Image */}
        <div className="mb-6 rounded-2xl overflow-hidden">
          <Image
            src="/images/woman-kitchen-phone.webp"
            alt="Mulher sorridente na cozinha usando celular"
            width={400}
            height={250}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Title */}
        <h1 className="text-xl font-bold text-gray-900 mb-6 text-center">
          Dinheiro e peso: um impacto inesperado na sua carreira
        </h1>

        {/* Content */}
        <p className="text-gray-600 text-sm mb-8 leading-relaxed text-center">
          Você sabia que o peso pode influenciar em quanto você ganha? Mulheres com sobrepeso frequentemente ganham
          menos, enquanto aquelas com um peso mais saudável tendem a ganhar mais. Esse preconceito pode afetar promoções
          e o crescimento profissional. Nosso plano personalizado pode te ajudar a atingir um peso mais saudável,
          aumentando sua energia, autoestima e confiança, tanto na vida pessoal quanto na profissional.
        </p>

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
