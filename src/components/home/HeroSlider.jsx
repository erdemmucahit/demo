import { useState, useEffect } from 'react'

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "Acil İhtiyaçlar",
      description: "Acil desteğe ihtiyacı olan çocuklarımız için harekete geçin",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070",
      cta: "Destek Ol"
    },
    {
      id: 2,
      title: "Eğitim Programlarımız",
      description: "Çocukların eğitimlerine kesintisiz devam etmeleri için destek oluyoruz",
      image: "https://images.unsplash.com/photo-1497528892195-b4ee7ea4f8b4?q=80&w=2070",
      cta: "Detaylı Bilgi"
    },
    {
      id: 3,
      title: "Gönüllü Olun",
      description: "Gönüllülerimizle birlikte daha güçlüyüz",
      image: "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?q=80&w=2070",
      cta: "Gönüllü Ol"
    },
    {
      id: 4,
      title: "Çocuklar İçin El Ele",
      description: "Her çocuğun sağlıklı bir geleceği hak ettiğine inanıyoruz",
      image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=2070",
      cta: "Bağış Yap"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="w-full h-full">
      <div className="relative h-full overflow-hidden">
        {/* Slides Container */}
        <div className="relative h-full flex">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute w-full h-full transition-transform duration-700 ease-in-out transform
                ${index === currentSlide ? 'translate-x-0' : 'translate-x-full'}`}
              style={{
                transform: `translateX(${(index - currentSlide) * 100}%)`
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-10" />
              
              {/* Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              
              {/* Content */}
              <div className="absolute inset-0 z-20 container mx-auto px-4 flex flex-col items-center justify-center text-white">
                <div className="text-center max-w-3xl mx-auto px-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 drop-shadow-lg">
                    {slide.title}
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 drop-shadow-md max-w-xl mx-auto">
                    {slide.description}
                  </p>
                  <button className="bg-unicef-blue hover:bg-unicef-dark-blue text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex space-x-1.5 sm:space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-200
                  ${index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 p-1.5 sm:p-2 rounded-full bg-white/30 hover:bg-white/50 text-white"
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        >
          &#8592;
        </button>
        <button
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 p-1.5 sm:p-2 rounded-full bg-white/30 hover:bg-white/50 text-white"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        >
          &#8594;
        </button>
      </div>
    </section>
  )
}

export default HeroSlider 