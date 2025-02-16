const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-900 text-white">
      <div className="pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">UNICEF Türkiye</h3>
              <p className="text-gray-400">
                Çocuklar için daha iyi bir dünya inşa etmek için çalışıyoruz.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Hızlı Bağlantılar</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-400 hover:text-white">Hakkımızda</a></li>
                <li><a href="/programs" className="text-gray-400 hover:text-white">Programlar</a></li>
                <li><a href="/news" className="text-gray-400 hover:text-white">Haberler</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white">İletişim</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">İletişim</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Ankara, Türkiye</li>
                <li>Email: info@unicef.org</li>
                <li>Tel: +90 XXX XXX XX XX</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Bizi Takip Edin</h3>
              <div className="flex space-x-4">
                {/* Social media icons will be here */}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 bg-gray-900">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} UNICEF Türkiye. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 