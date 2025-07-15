"use client"

import Image from "next/image"
import { Star } from "lucide-react"

interface TransformationTestimonialProps {
  onNext: () => void
  onPrevious: () => void
}

export default function TransformationTestimonial({ onNext, onPrevious }: TransformationTestimonialProps) {
  return (
    <div className="bg-gray-50 px-4 py-6">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        <h1 className="text-xl font-bold text-gray-900 mb-6">Vestindo roupas antigas novamente</h1>

        {/* Before/After Images */}
        <div className="mb-6">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/images/transformation-before-after.webp"
              alt="Transformação antes e depois"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-8">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-orange-100">
              <Image
                src="/images/transformation-before-after.webp"
                alt="Carol Santana"
                width={40}
                height={40}
                className="w-full h-full object-cover object-left"
              />
            </div>
            <span className="font-semibold text-gray-900">Carol Santana</span>
          </div>

          <p className="text-gray-600 text-sm mb-3 leading-relaxed">
            "Desde que conheci o conteúdo de vcs, consegui perder aqueles quilos a mais que ganhei dps de engravidar...
            e o que achei mais incrível é que nem passei fome!! Gratidão!"
          </p>

          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
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
