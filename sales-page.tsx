"use client"

import Image from "next/image"
import { Check } from "lucide-react"

interface SalesPageProps {
  onPrevious: () => void
}

export default function SalesPage({ onPrevious }: SalesPageProps) {
  const planBenefits = [
    {
      title: "Como Parecer outra Pessoa na Frente do Espelho em 7 Dias:",
      description: "Aprenda o jeito mais fácil de desinchar e ver grandes resultados no espelho em menos de 7 dias.",
    },
    {
      title: "Protocolo Anti-Efeito Sanfona:",
      description:
        "Descubra como manter o peso perdido e nunca mais voltar a engordar, mesmo depois de atingir seu objetivo.",
    },
    {
      title: "Descubra como acelerar o seu metabolismo e perder peso sem fazer nada:",
      description:
        "Aprenda as principais estratégias para acelerar o seu metabolismo e queimar gordura mesmo que você não faça nada.",
    },
    {
      title: "Definição de metas diárias:",
      description: "para você se manter no caminho certo",
    },
    {
      title: "Protocolo Anti-procrastinação:",
      description: "Descubra o segredo dos maiores líderes para se manter sempre motivado",
    },
    {
      title: "Planilha de acompanhamento:",
      description: "Saiba exatamente quanto você está evoluindo",
    },
  ]

  const handleCheckout = () => {
    window.location.href = "https://pay.cakto.com.br/7yhk9sm_478616"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main intro text */}
      <div className="bg-gray-50 px-4 py-6 my-0">
        <div className="max-w-md mx-auto mb-8">
          <h1 className="font-bold text-gray-900 text-center leading-tight mb-6 text-xl">
            Baseado em suas respostas, montamos um protocolo personalizado para você atingir o seu peso ideal em até 4
            semanas.
          </h1>

          {/* Transformation comparison using real image */}
          <div className="mb-6 rounded-2xl overflow-hidden">
            <Image
              src="/images/transformation-comparison.webp"
              alt="Comparação Agora vs Seu objetivo"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Energy levels */}
          <div className="bg-white rounded-2xl p-4 mb-6">
            <div className="flex justify-between">
              <div className="text-center">
                <div className="text-sm mb-2 font-extrabold text-slate-800">Nível de energia:</div>
                <div className="w-12 h-32 bg-gray-200 rounded-lg mx-auto relative">
                  <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-green-800 to-green-500 rounded-b-lg"></div>
                </div>
                <div className="text-xs mt-1 font-extrabold text-slate-900">Agora</div>
              </div>
              <div className="text-center">
                <div className="text-sm mb-2 font-extrabold text-slate-800">Nível de energia:</div>
                <div className="w-12 h-32 bg-gray-200 rounded-lg mx-auto relative">
                  <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-green-800 to-green-400 rounded-lg"></div>
                </div>
                <div className="text-xs mt-1 font-extrabold text-slate-900">Seu objetivo</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendation section */}
      <div className="bg-white px-4 py-8">
        <div className="max-w-md mx-auto">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-6">
            {"O seu Plano Personalizado de Jejum está pronto!"}
          </h2>

          {/* Payment section using exact image */}
          <div className="mb-4">
            <Image
              src="/images/payment-section.webp"
              alt="Pagamento único - Por apenas 4x de R$ 5,77"
              width={400}
              height={80}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* CTA Button with pulse animation */}
          <button
            onClick={handleCheckout}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-2xl transition-colors duration-200 mb-6 animate-pulse-custom"
            style={{
              animation: "pulse-custom 1.5s ease-in-out infinite",
            }}
          >
            RECEBER O MEU PLANO
          </button>

          {/* Security badges using exact image */}
          <div className="flex justify-center mb-6">
            <Image
              src="/images/security-badges.webp"
              alt="Compra Segura, Satisfação Garantida, Privacidade Protegida"
              width={400}
              height={40}
              className="h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="bg-white px-4 py-8">
        <div className="max-w-md mx-auto">
          <h2 className="text-gray-900 mb-4 font-extrabold text-xl">Como funciona o Plano?</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Com base nas suas informações pessoais e objetivos, criamos um plano de jejum 100% personalizado para você.
            Nossa abordagem estratégica foi feita para que você consiga potencializar sua perda de peso em 4 semanas,
            respeitando seu estilo de vida e aquilo que você gosta de comer.
          </p>

          <div className="space-y-4">
            <div className="bg-gray-50 rounded-2xl p-4">
              <h3 className="text-gray-900 text-sm mb-2 font-extrabold">Como fazer o Jejum do Jeito Certo:</h3>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-600 text-sm leading-relaxed">
                  Baseado nas pesquisas mais recentes de universidades famosas como Harvard, desenvolvemos o Protocolo
                  Seca Jejum, a forma mais eficaz e segura de fazer o Jejum intermitente para perder peso sem que você
                  perca músculos ou sinta muita fome.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4">
              <h3 className="text-gray-900 text-sm mb-2 font-extrabold">
                Como Parecer outra Pessoa na Frente do Espelho em 7 Dias:
              </h3>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-600 text-sm leading-relaxed">
                  Aprenda o jeito mais fácil de desinchar e ver grandes resultados no espelho em menos de 7 dias.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4">
              <h3 className="text-gray-900 text-sm mb-2 font-extrabold">Protocolo Anti-Efeito Sanfona:</h3>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-600 text-sm leading-relaxed">
                  Descubra como manter o peso perdido e nunca mais voltar a engordar, mesmo depois de atingir seu
                  objetivo.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4">
              <h3 className="text-gray-900 text-sm mb-2 font-extrabold">
                Descubra como acelerar o seu metabolismo e perder peso sem fazer nada:
              </h3>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-600 text-sm leading-relaxed">
                  Aprenda as principais estratégias para acelerar o seu metabolismo e queimar gordura mesmo que você não
                  faça nada.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4">
              <h3 className="text-gray-900 text-sm mb-2 font-extrabold">Definição de metas diárias:</h3>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-600 text-sm leading-relaxed">para você se manter no caminho certo</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4">
              <h3 className="text-gray-900 text-sm mb-2 font-extrabold">Protocolo Anti-procrastinação:</h3>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-600 text-sm leading-relaxed">
                  Descubra o segredo dos maiores líderes para se manter sempre motivado
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4">
              <h3 className="text-gray-900 text-sm mb-2 font-extrabold">Potencialize a Queima de Gordura:</h3>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-600 text-sm leading-relaxed">
                  Saiba exatamente o que comer quando acabar de fazer o jejum, para acelerar a queima de gordura e te
                  manter com saciedade por mais tempo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success stories using exact testimonial images */}
      <div className="bg-gray-50 px-4 py-8">
        <div className="max-w-md mx-auto">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-8">
            Veja as histórias de sucesso dos nossos alunos
          </h2>

          <div className="space-y-6">
            {/* Rogéria Cardoso */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <Image
                src="/images/rogeria-cardoso-testimonial.webp"
                alt="Depoimento Rogéria Cardoso"
                width={400}
                height={200}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Sérgio Augusto */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <Image
                src="/images/sergio-augusto-testimonial.webp"
                alt="Depoimento Sérgio Augusto"
                width={400}
                height={200}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Cláudia Santos */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <Image
                src="/images/claudia-santos-testimonial.webp"
                alt="Depoimento Cláudia Santos"
                width={400}
                height={200}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Gleide Almeida */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <Image
                src="/images/gleide-almeida-testimonial.webp"
                alt="Depoimento Gleide Almeida"
                width={400}
                height={200}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Recommendation section */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 text-center mb-6">Quem conhece, recomenda!</h2>

            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <Image
                src="/images/transformation-before-after-recommendation.webp"
                alt="Transformação antes e depois - Quem conhece, recomenda"
                width={400}
                height={300}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section before guarantee */}
      <div className="bg-white px-4 py-8">
        <div className="max-w-md mx-auto text-center">
          {/* Payment section */}
          <div className="mb-4">
            <Image
              src="/images/payment-section.webp"
              alt="Pagamento único - Por apenas 4x de R$ 5,77"
              width={400}
              height={80}
              className="w-full h-auto object-contain"
            />
          </div>

          <button
            onClick={handleCheckout}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-2xl transition-colors duration-200 mb-6"
            style={{
              animation: "pulse-custom 1.5s ease-in-out infinite",
            }}
          >
            RECEBER O MEU PLANO
          </button>

          {/* Security badges */}
          <div className="flex justify-center">
            <Image
              src="/images/security-badges.webp"
              alt="Compra Segura, Satisfação Garantida, Privacidade Protegida"
              width={400}
              height={40}
              className="h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Final guarantee section - moved to the very bottom */}
      <div className="bg-gray-100 px-4 py-12">
        <div className="max-w-md mx-auto text-center">
          <div className="mb-4">
            <Image
              src="/images/guarantee-30-days.webp"
              alt="Garantia 30 dias"
              width={160}
              height={160}
              className="mx-auto h-auto object-contain"
            />
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-4">Garantia de reembolso</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {"A compra deste material é totalmente sem risco para você. Se ele não atender às suas expectativas nos primeiros 30 dias após a compra, nós reembolsaremos todo o valor que você pagou, sem fazer perguntas. Basta enviar um e-mail para o suporte em \ncontato@jejumsecatudo.com"}
          </p>
        </div>
      </div>

      {/* Custom CSS for pulse animation */}
      <style jsx>{`
      @keyframes pulse-custom {
        0%, 100% {
          transform: scale(1);
          opacity: 1;
        }
        50% {
          transform: scale(1.05);
          opacity: 0.9;
        }
      }
    `}</style>
    </div>
  )
}
