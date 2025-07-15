"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star } from "lucide-react"

interface PlanCreationLoadingProps {
  onComplete?: () => void
  onPrevious: () => void
}

export default function PlanCreationLoading({ onComplete, onPrevious }: PlanCreationLoadingProps) {
  const [progress, setProgress] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Cláudia Santos",
      image: "/images/claudia-santos-profile.webp",
      title: "Perder peso era muito difícil, agora eu estou conseguindo sem esforço",
      text: "Estou muito feliz com os resultados do Plano personalizado! Desde que comecei a seguir as orientações, notei uma grande diferença no espelho... to muito menos inchada e to com menos 5kg na balança. Mas isso nem foi o melhor, o que mais mudou foi a minha energia, antes eu já acordava cansada sabe? agora pareço ter 20 anos novamente kkkk, obrigada!!",
    },
    {
      id: 2,
      name: "Gleide Almeida",
      image: "/images/gleide-almeida-profile.webp",
      title: "Extramente satisfeita",
      text: "Fiquei muito feliz com o conteúdo. Depois de consumir todo material e começar a fazer o jejum, finalmente consegui o que eu queria... Eu sempre fui aquelas pessoas que emagreciam mas logo depois engordava dnv, e graças ao plano personalizado de vocês isso mudou. Já estou a 6 meses com o mesmo peso, nunca consegui isso na minha vida!! obrigada.",
    },
  ]

  // Simulate progress animation from 0 to 100% with whole numbers only
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          // Auto-redirect when progress reaches 100%
          setTimeout(() => {
            if (onComplete) {
              onComplete()
            }
          }, 1000) // Wait 1 second after reaching 100% before redirecting
          return 100
        }
        // Increment by 1 each time to ensure whole numbers
        return prev + 1
      })
    }, 80) // Adjust timing to make it complete in about 8 seconds

    return () => clearInterval(timer)
  }, [onComplete])

  // Auto-rotate testimonials
  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(testimonialTimer)
  }, [])

  return (
    <div className="bg-gray-50 px-4 py-6 text-black">
      <div className="max-w-md mx-auto">
        <h1 className="text-xl font-bold text-gray-900 mb-8 text-center">Criando o seu Plano Personalizado de Jejum</h1>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-green-500 h-full rounded-full transition-all duration-300 ease-out flex items-center justify-end pr-2"
              style={{ width: `${progress}%` }}
            >
              <span className="text-white text-xs font-bold">{Math.floor(progress)}%</span>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="text-center mb-6">
          <h2 className="text-gray-900 mb-2 font-extrabold text-lg">
            {progress === 100 ? "Concluído!" : "Preparando..."}
          </h2>
          <p className="text-sm mx-0 text-black">
            {progress === 100
              ? "Seu plano personalizado está pronto!"
              : "Estamos preparando o seu plano exclusivo e personalizado..."}
          </p>
        </div>

        {/* Statistics */}
        <div className="text-center mb-8">
          <div className="text-gray-900 mb-1 ml-0 mt-10 font-extrabold text-lg">+45 mil pessoas</div>
          <p className="text-sm text-black">nos escolheram, veja o que eles falaram sobre nós...</p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative min-h-[280px] flex flex-col">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-orange-100 flex-shrink-0">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 mb-2 text-lg">{testimonial.name}</div>
                        <div className="flex space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-5 h-5 fill-green-500 text-green-500" />
                          ))}
                        </div>
                      </div>
                      <div className="absolute top-6 right-6">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <Star className="w-5 h-5 fill-white text-white" />
                        </div>
                      </div>
                    </div>

                    <h3 className="font-bold text-gray-900 text-lg mb-4 leading-tight">{testimonial.title}</h3>

                    <p className="text-gray-600 text-base leading-relaxed flex-1">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentTestimonial ? "bg-green-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
