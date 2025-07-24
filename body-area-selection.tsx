"use client"

import { useState } from "react"
import Image from "next/image"

interface BodyAreaSelectionProps {
  onNext: (data: { bodyArea: string }) => void
  onPrevious: () => void
}

export default function BodyAreaSelection({ onNext, onPrevious }: BodyAreaSelectionProps) {
  const [selectedArea, setSelectedArea] = useState<string>("")

  const bodyAreas = [
    {
      id: "barriga",
      text: "Barriga",
      image: "/images/barriga.webp",
    },
    {
      id: "bunda",
      text: "Bunda",
      image: "/images/bunda.webp",
    },
    {
      id: "peito",
      text: "Peito",
      image: "/images/peito.webp",
    },
    {
      id: "pernas",
      text: "Pernas",
      image: "/images/pernas.webp",
    },
  ]

  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        <h1 className="text-xl font-extrabold text-gray-900 mb-8 text-center">Quais áreas do corpo você quer focar?</h1>

        {/* Body area options */}
        <div className="space-y-4 mb-8">
          {bodyAreas.map((area) => (
            <button
              key={area.id}
              onClick={() => onNext({ bodyArea: area.id })}
              className="w-full bg-white rounded-2xl p-4 shadow-md border-2 border-green-300 hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-orange-100 flex-shrink-0">
                  <Image
                    src={area.image || "/placeholder.svg"}
                    alt={area.text}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-left">
                  <span className="text-gray-900 font-medium text-lg">{area.text}</span>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${
                    selectedArea === area.id ? "border-green-500 bg-green-500" : "border-green-300"
                  }`}
                >
                  {selectedArea === area.id && (
                    <div className="w-full h-full rounded-full bg-green-500 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Continue Button */}
        <button
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-2xl transition-colors duration-200"
          style={{ animation: "gentlePulse 1.5s ease-in-out infinite" }}
          onClick={() => onNext({ bodyArea: selectedArea })}
        >
          Continuar
        </button>
      </div>

      <style jsx>{`
        @keyframes gentlePulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }
      `}</style>
    </div>
  )
}
