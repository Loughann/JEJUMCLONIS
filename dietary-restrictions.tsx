"use client"

import { useState } from "react"

interface DietaryRestrictionsProps {
  onNext: (data: { dietaryRestrictions: string[] }) => void
  onPrevious: () => void
}

export default function DietaryRestrictions({ onNext, onPrevious }: DietaryRestrictionsProps) {
  const [selectedRestrictions, setSelectedRestrictions] = useState<string[]>([])

  const restrictions = [
    {
      id: "lactose-free",
      title: "Sem lactose",
      description: "Eu não consumo alimentos com lactose",
      icon: "🥛",
    },
    {
      id: "gluten-free",
      title: "Sem glúten",
      description: "Eu evito grãos com glúten",
      icon: "🍩",
    },
    {
      id: "vegetarian",
      title: "Vegetariano",
      description: "Eu não como carne",
      icon: "🥦",
    },
    {
      id: "vegan",
      title: "Vegano",
      description: "Eu não consumo produto de origem animal",
      icon: "🌱",
    },
    {
      id: "no-fish",
      title: "Nenhum peixe",
      description: "Não como nenhum tipo de peixe",
      icon: "🐟",
    },
    {
      id: "none",
      title: "Nenhuma das acima",
      description: "Eu como quase tudo",
      icon: "❌",
    },
  ]

  const toggleRestriction = (restrictionId: string) => {
    if (restrictionId === "none") {
      // Se selecionar "Nenhuma das acima", limpar todas as outras
      setSelectedRestrictions(selectedRestrictions.includes("none") ? [] : ["none"])
    } else {
      // Se selecionar qualquer outra, remover "Nenhuma das acima"
      const newRestrictions = selectedRestrictions.filter((id) => id !== "none")

      if (selectedRestrictions.includes(restrictionId)) {
        setSelectedRestrictions(newRestrictions.filter((id) => id !== restrictionId))
      } else {
        setSelectedRestrictions([...newRestrictions, restrictionId])
      }
    }
  }

  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        <h1 className="text-xl text-gray-900 mb-8 text-center font-extrabold">Você tem alguma restrição alimentar?</h1>

        {/* Restrictions options */}
        <div className="space-y-4 mb-8">
          {restrictions.map((restriction) => (
            <button
              key={restriction.id}
              onClick={() => toggleRestriction(restriction.id)}
              className="w-full bg-white rounded-2xl p-4 shadow-md border-2 border-gray-100 hover:border-gray-200 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="text-3xl">{restriction.icon}</div>
                <div className="flex-1 text-center mx-4">
                  <div className="text-gray-900 text-base font-extrabold">{restriction.title}</div>
                  <div className="text-sm text-gray-600">{restriction.description}</div>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${
                    selectedRestrictions.includes(restriction.id) ? "border-green-500 bg-green-500" : "border-green-300"
                  }`}
                >
                  {selectedRestrictions.includes(restriction.id) && (
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
          onClick={() => onNext({ dietaryRestrictions: selectedRestrictions })}
        >
          Continuar
        </button>
      </div>
    </div>
  )
}
