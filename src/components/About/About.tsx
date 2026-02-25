import { useState } from 'react'
import { FaPalette, FaStar } from 'react-icons/fa'
import { ImTruck } from 'react-icons/im'
import type { Feature } from '../../types'

const features: Feature[] = [
  {
    id: 1,
    title: 'Yuqori sifat',
    icon: <FaStar/>,
    style: 'text-yellow-400'
  },
  {
    id: 2,
    title: 'Individual dizayn',
    icon: <FaPalette/>,
    style: 'text-green-500'
  },
  {
    id: 3,
    title: 'Tez yetkazib berish',
    icon: <ImTruck/>,
    style: 'text-blue-500'
  },
]

export default function About() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  return (
    <section className="py-12 bg-white/40 pb-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div data-aos="fade-right" className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <p className="text-amber-600 font-semibold text-sm tracking-widest uppercase">
                Biz haqimizda
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-serif text-gray-900 leading-tight text-balance">
                Har bir uy uchun nafis yechim
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                Biz mijozlarımızda sifatli, zamonaviy va uzunasiga xizmat qiladigan mebelllarni taklif qilamiz. Har bir buyurtma interyer uslubingizga mos rang, o'lcham va kompozitsiya bilan tayyorlandi.
              </p>
            </div>
            <div className="space-y-4 pt-4">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onMouseEnter={() => setHoveredFeature(feature.id)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  className="group w-full md:w-auto inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-gray-200 bg-white text-gray-900 font-medium transition-all duration-300 ease-out hover:border-amber-600 hover:bg-amber-50 hover:shadow-lg hover:-translate-y-1 active:scale-95"
                >
                  <span className={`text-xl group-hover:scale-125 transition-transform duration-300 ${feature.style}`}>
                    {feature.icon}
                  </span>
                  <span className="text-sm md:text-base">{feature.title}</span>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-main">
              <div className="space-y-2 group cursor-pointer text-center">
                <p className="text-3xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                  1 yil
                </p>
                <p className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                  Kafolat
                </p>
              </div>
              <div className="space-y-2 group cursor-pointer text-center">
                <p className="text-3xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                  5K+
                </p>
                <p className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                  Xursand mijozlar
                </p>
              </div>
              <div className="space-y-2 group cursor-pointer text-center">
                <p className="text-3xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                  100%
                </p>
                <p className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                  Orginal mahsulot
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="relative h-96 lg:h-full min-h-96 animate-fade-in-right">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-200 rounded-3xl opacity-20 blur-xl" />
            <div className="relative h-full rounded-3xl overflow-hidden bg-gray-200 shadow-2xl group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1691036562015-56ebf6648f8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Minimalist yatak xonasi"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center space-y-2">
                  <p className="text-lg font-semibold">Yangi Koleksiya</p>
                  <p className="text-sm">2026 Dizayner to'plami</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 max-w-xs transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
              <p className="text-sm text-gray-600 mb-2">Eksklyuziv Tavsif</p>
              <p className="text-2xl font-bold text-gray-900">30%</p>
              <p className="text-xs text-amber-600 font-semibold mt-1">Birinchi buyurtmada</p>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out;
        }
      `}</style>
    </section>
  )
}
