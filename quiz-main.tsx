"use client"

import { useState, useCallback, useEffect } from "react" // Importar useEffect
import { ArrowLeft } from "lucide-react"

// Import all quiz components
import AgeSelection from "./age-selection"
import GoalSelection from "./goal-selection"
import SizeSelection from "./size-selection"
import ClothingDifficulty from "./clothing-difficulty"
import TransformationTestimonial from "./transformation-testimonial"
import BodyAreaSelection from "./body-area-selection"
import BodyTypeSelection from "./body-type-selection"
import BestShapeTimeline from "./best-shape-timeline"
import FastingKnowledge from "./fasting-knowledge"
import FeelingDesired from "./feeling-desired"
import LibidoBenefits from "./libido-benefits"
import BreakfastTiming from "./breakfast-timing"
import LunchTiming from "./lunch-timing"
import DinnerTiming from "./dinner-timing"
import DietaryRestrictions from "./dietary-restrictions"
import FoodPreferences from "./food-preferences"
import CookingPreference from "./cooking-preference"
import WeekendBreak from "./weekend-break"
import ExerciseFrequency from "./exercise-frequency"
import FamilySupport from "./family-support"
import WorkRoutine from "./work-routine"
import DailyActivity from "./daily-activity"
import MoneyWeightImpact from "./money-weight-impact"
import StairsBreathlessness from "./stairs-breathlessness"
import WalkingFrequency from "./walking-frequency"
import SleepHours from "./sleep-hours"
import WaterIntake from "./water-intake"
import HealthProblems from "./health-problems"
import BadHabits from "./bad-habits"
import WeightGainEvents from "./weight-gain-events"
import WeightLossMotivation from "./weight-loss-motivation"
import HeightInput from "./height-input"
import WeightInput from "./weight-input"
import DesiredWeightInput from "./desired-weight-input"
import FitnessSummary from "./fitness-summary"
import PlanCreationLoading from "./plan-creation-loading"
import SalesPage from "./sales-page"
import ImportantEvent from "./important-event"
import PlanSelection from "./plan-selection"
import PlanReady from "./plan-ready"

export default function QuizMain() {
  const [currentStep, setCurrentStep] = useState(0)
  const [quizData, setQuizData] = useState({}) // To store answers
  const [visualProgressPercentage, setVisualProgressPercentage] = useState(0) // Novo estado para o progresso visual

  const quizComponents = [
    AgeSelection,
    GoalSelection,
    SizeSelection,
    ClothingDifficulty,
    TransformationTestimonial,
    BodyAreaSelection,
    BodyTypeSelection,
    BestShapeTimeline,
    FastingKnowledge,
    FeelingDesired,
    LibidoBenefits,
    BreakfastTiming,
    LunchTiming,
    DinnerTiming,
    DietaryRestrictions,
    FoodPreferences,
    CookingPreference,
    WeekendBreak,
    ExerciseFrequency,
    FamilySupport,
    WorkRoutine,
    DailyActivity,
    MoneyWeightImpact,
    StairsBreathlessness,
    WalkingFrequency,
    SleepHours,
    WaterIntake,
    HealthProblems,
    BadHabits,
    WeightGainEvents,
    WeightLossMotivation,
    HeightInput,
    WeightInput,
    DesiredWeightInput,
    FitnessSummary,
    ImportantEvent,
    PlanSelection, // Este é o último componente do quiz antes da sequência final
  ]

  const totalQuizSteps = quizComponents.length

  // Efeito para atualizar o progresso visual com uma animação não linear
  useEffect(() => {
    // Calcula o progresso real (de 0 a 1)
    const actualProgress = totalQuizSteps > 0 ? (currentStep + 1) / totalQuizSteps : 0

    // Aplica uma função de potência para criar a sensação de aceleração inicial e desaceleração final
    // O expoente 0.6 faz com que o progresso visual aumente mais rápido no início
    const calculatedVisualProgress = Math.pow(actualProgress, 0.6) * 100

    setVisualProgressPercentage(calculatedVisualProgress)
  }, [currentStep, totalQuizSteps])

  const handleNext = useCallback(
    (data?: any) => {
      console.log("handleNext called. Current step:", currentStep, "Data:", data)
      if (data) {
        setQuizData((prevData) => ({ ...prevData, ...data }))
      }
      setCurrentStep((prev) => prev + 1) // Sempre incrementa o passo
    },
    [currentStep],
  )

  const handlePrevious = useCallback(() => {
    console.log("handlePrevious called. Current step:", currentStep)
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }, [currentStep])

  // Handler para quando PlanCreationLoading completa
  const handleLoadingComplete = useCallback(() => {
    console.log("PlanCreationLoading complete. Transitioning to PlanReady.")
    setCurrentStep(totalQuizSteps + 1) // Move para o passo que renderiza PlanReady
  }, [totalQuizSteps])

  // Handler para quando PlanReady completa
  const handlePlanReadyComplete = useCallback(() => {
    console.log("PlanReady complete. Transitioning to SalesPage.")
    setCurrentStep(totalQuizSteps + 2) // Move para o passo que renderiza SalesPage
  }, [totalQuizSteps])

  // Lógica de renderização para a sequência final
  if (currentStep === totalQuizSteps) {
    console.log("Rendering PlanCreationLoading.")
    return <PlanCreationLoading onComplete={handleLoadingComplete} onPrevious={handlePrevious} />
  }

  if (currentStep === totalQuizSteps + 1) {
    console.log("Rendering PlanReady.")
    return <PlanReady onNext={handlePlanReadyComplete} onPrevious={handlePrevious} />
  }

  if (currentStep === totalQuizSteps + 2) {
    console.log("Rendering SalesPage.")
    return <SalesPage onPrevious={handlePrevious} />
  }

  const CurrentComponent = quizComponents[currentStep]
  console.log("Rendering component for step:", currentStep, "Component:", CurrentComponent?.name)

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      {/* Global Header */}
      <div className="flex items-center justify-between mb-8">
        <button className="p-2" onClick={handlePrevious} disabled={currentStep === 0}>
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>
        <div className="text-lg font-bold text-black">🔥 JEJUM SECA TUDO</div>
        <div className="w-10"></div> {/* Spacer for centering */}
      </div>

      {/* Global Progress indicator */}
      <div className="flex items-center mb-8">
        <div
          className="w-full h-2 bg-green-500 rounded-full transition-width duration-700 ease-out" // Adicionado transition para suavizar a animação
          style={{ width: `${visualProgressPercentage}%` }} // Usar o progresso visual
        ></div>
      </div>

      {/* Render current quiz component with animation */}
      {CurrentComponent && (
        <div key={currentStep} className="animate-fade-in">
          <CurrentComponent
            onNext={handleNext}
            onPrevious={handlePrevious}
            // Pass quizData if needed by sub-components, or specific parts of it
            // For now, just passing onNext/onPrevious
          />
        </div>
      )}
    </div>
  )
}
