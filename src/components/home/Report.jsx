import { useEffect, useRef } from 'react'
import { FaChild, FaHandHoldingWater, FaHospital, FaHandsHelping, FaBook } from 'react-icons/fa'

const Report = () => {
  const numberRefs = useRef([])
  
  const stats = [
    {
      id: 1,
      icon: <FaChild className="w-12 h-12 text-unicef-blue" />,
      number: 12,
      suffix: "milyon çocuğa",
      text: "sağlık taraması",
      color: "text-green-600"
    },
    {
      id: 2,
      icon: <FaHandHoldingWater className="w-12 h-12 text-unicef-blue" />,
      number: 17.4,
      suffix: "milyon kişiye",
      text: "içme ve ev ihtiyaçları için temiz suya erişim",
      color: "text-blue-600"
    },
    {
      id: 3,
      icon: <FaHospital className="w-12 h-12 text-unicef-blue" />,
      number: 26.4,
      suffix: "milyon çocuk ve kadına",
      text: "sağlık hizmetleri erişimi",
      color: "text-red-600"
    },
    {
      id: 4,
      icon: <FaHandsHelping className="w-12 h-12 text-unicef-blue" />,
      number: 12.6,
      suffix: "milyon çocuk",
      text: "ve onlara bakan yetişkinlere psiko-sosyal destek",
      color: "text-purple-600"
    },
    {
      id: 5,
      icon: <FaBook className="w-12 h-12 text-unicef-blue" />,
      number: 9.7,
      suffix: "milyon çocuğun",
      text: "erken öğrenme dahil resmi veya gayri resmi eğitim alması sağlandı",
      color: "text-orange-600"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = numberRefs.current.indexOf(entry.target)
          animateNumber(0, stats[index].number, entry.target)
        }
      })
    }, {
      threshold: 0.5
    })

    numberRefs.current.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const animateNumber = (start, end, element) => {
    let current = start
    const increment = end / 100
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        element.textContent = end.toString()
        clearInterval(timer)
      } else {
        element.textContent = current.toFixed(1)
      }
    }, 20)
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-unicef-blue">
          2024'te desteğinizle ulaştığımız
        </h2>
        <h3 className="text-xl sm:text-2xl text-center mb-12 text-gray-600">
          insani yardım sonuçları
        </h3>
        <p className="text-center text-gray-500 mb-16">(ilk 6 ay)</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={stat.id}
              className="flex flex-col items-center p-6 rounded-lg bg-white shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <div className="mb-4">
                {stat.icon}
              </div>
              <div className="text-center">
                <div className="flex items-baseline justify-center gap-2">
                  <span 
                    ref={el => numberRefs.current[index] = el}
                    className={`text-3xl sm:text-4xl font-bold ${stat.color}`}
                  >
                    0
                  </span>
                  <span className="text-lg font-medium text-gray-600">
                    {stat.suffix}
                  </span>
                </div>
                <p className="mt-2 text-gray-600">
                  {stat.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Report 