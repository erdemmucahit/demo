const Achievements = () => {
  const achievements = [
    {
      id: 1,
      text: "5 yaş altı çocuk ölümleri %53 azaldı"
    },
    {
      id: 2,
      text: "Yetersiz beslenen çocukların oranı neredeyse yarı yarıya azaldı"
    },
    {
      id: 3,
      text: "125 ülkenin 122'sinde çocuk felci yok edildi"
    },
    {
      id: 4,
      text: "İlköğretime katılmayan çocuk sayısı %44 azaldı"
    },
    {
      id: 5,
      text: "2.6 milyar insanın daha iyi su kaynaklarına ulaşması sağlandı"
    }
  ]

  return (
    <section className="relative w-full h-full">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.7) blur(2px)'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-4xl w-full mx-auto backdrop-blur-sm bg-black/10 p-4 sm:p-6 md:p-8 rounded-lg">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-8 text-yellow-300">
            Hedefimiz çocuklar için kalıcı sonuçlara ulaşmak.
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-12 text-white">
            1990 yılından bu yana;
          </h3>

          <div className="space-y-4 sm:space-y-6">
            {achievements.map((item) => (
              <div 
                key={item.id}
                className="flex items-start space-x-3 sm:space-x-4"
              >
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 mt-2.5 rounded-full bg-yellow-300 shrink-0" />
                <p className="text-base sm:text-lg md:text-xl text-white font-light">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <button className="w-full sm:w-auto bg-yellow-300 text-blue-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-bold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
              AYLIK DÜZENLİ BAĞIŞ YAP
            </button>
            <a 
              href="/turkiyede-unicef" 
              className="text-yellow-300 hover:text-yellow-400 transition-colors flex items-center gap-2 font-medium text-sm sm:text-base"
            >
              Daha fazla bilgi: Türkiye'de UNICEF
              <span className="text-lg sm:text-xl">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements 