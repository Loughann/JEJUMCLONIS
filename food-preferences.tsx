"use client"

import { useState } from "react"

interface FoodPreferencesProps {
  onNext: (data: { foodPreferences: string[] }) => void
  onPrevious: () => void
}

export default function FoodPreferences({ onNext, onPrevious }: FoodPreferencesProps) {
  const [selectedFoods, setSelectedFoods] = useState<string[]>([])

  const foodCategories = [
    {
      id: "vegetables",
      title: "Vegetais",
      icon: "🥦",
      foods: ["Tomate", "Pepino", "Cebola", "Pimentão", "Cenoura", "Alface"],
    },
    {
      id: "grains",
      title: "Grãos e Pães",
      icon: "🍞",
      foods: ["Arroz", "Espaguete", "Pão integral", "Cuscuz"],
    },
    {
      id: "meats",
      title: "Carnes e ovos",
      icon: "🥩",
      foods: ["Ovo", "Frango", "Carne de boi", "Carne de porco"],
    },
    {
      id: "fish",
      title: "Peixe",
      icon: "🐟",
      foods: ["Salmão", "Atum", "Tilápia", "Camarão"],
    },
    {
      id: "dairy",
      title: "Laticínio",
      icon: "🥛",
      foods: ["Leite", "Queijo", "Iogurte", "Requeijão"],
    },
    {
      id: "fruits",
      title: "Frutas",
      icon: "🍓",
      foods: ["Maçã", "Banana", "Laranja", "Morango", "Manga", "Abacate"],
    },
  ]

  const toggleFood = (food: string) => {
    if (selectedFoods.includes(food)) {
      setSelectedFoods(selectedFoods.filter((f) => f !== food))
    } else {
      setSelectedFoods([...selectedFoods, food])
    }
  }

  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        <h1 className="text-xl font-extrabold text-gray-900 mb-8 text-center">Escolha as comidas que você gosta</h1>

        {/* Food categories */}
        <div className="space-y-6 mb-8">
          {foodCategories.map((category) => (
            <div key={category.id}>
              {/* Category header */}
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-lg">{category.icon}</span>
                <span className="font-bold text-gray-900 text-base">{category.title}</span>
              </div>

              {/* Food grid */}
              <div className="grid grid-cols-2 gap-3">
                {category.foods.map((food) => (
                  <button
                    key={food}
                    onClick={() => toggleFood(food)}
                    className={`bg-white rounded-2xl p-4 shadow-md border-2 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] ${
                      selectedFoods.includes(food)
                        ? "border-green-500 bg-green-50 shadow-green-200"
                        : "border-green-300 hover:border-green-400"
                    }`}
                  >
                    <span className="text-gray-900 font-medium text-base">{food}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Continue Button */}
        <button
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-2xl transition-colors duration-200"
          onClick={() => onNext({ foodPreferences: selectedFoods })}
        >
          Continuar
        </button>
      </div>
    </div>
  )
}
