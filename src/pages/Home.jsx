import { useEffect, useRef } from 'react'
import HeroSlider from '../components/home/HeroSlider'
import Achievements from '../components/home/Achievements'
import Report from '../components/home/Report'

const Home = () => {
  const sectionsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slideIn')
          entry.target.classList.remove('opacity-0', 'translate-y-20')
        }
      })
    }, {
      threshold: 0.2,
      rootMargin: '-50px'
    })

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main className="w-screen min-h-screen overflow-x-hidden snap-y snap-mandatory">
      {/* Hero Section */}
      <section 
        ref={el => sectionsRef.current[0] = el}
        className="w-full h-screen snap-start"
      >
        <HeroSlider />
      </section>

      {/* Achievements Section */}
      <section 
        ref={el => sectionsRef.current[1] = el}
        className="w-full h-screen snap-start opacity-0 translate-y-20 transition-all duration-1000"
      >
        <Achievements />
      </section>

      {/* Welcome Section */}
      <section 
        ref={el => sectionsRef.current[2] = el}
        className="w-full h-screen snap-start opacity-0 translate-y-20 transition-all duration-1000 bg-gradient-to-b from-gray-50 to-white flex items-center"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-8 text-gray-800">
            UNICEF Türkiye'ye Hoş Geldiniz
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-center text-gray-600 max-w-3xl mx-auto">
            Çocuklar için daha iyi bir dünya inşa etmek için çalışıyoruz.
          </p>
        </div>
      </section>

      {/* Report Section */}
      <section 
        ref={el => sectionsRef.current[3] = el}
        className="w-full h-screen snap-start opacity-0 translate-y-20 transition-all duration-1000"
      >
        <Report />
      </section>
    </main>
  )
}

export default Home 