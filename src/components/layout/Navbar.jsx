import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    {
      title: "BAĞIŞ YAP",
      submenu: [
        { name: "Bağış Yap", path: "/bagis" },
        { name: "Kurumlara Özel", path: "/kurumsal-bagis" },
        { name: "Diğer", path: "/diger-bagis" }
      ]
    },
    {
      title: "ÇALIŞMALARIMIZ",
      submenu: [
        { name: "Türkiye'de", path: "/turkiyede" },
        { name: "Dünyada", path: "/dunyada" }
      ]
    },
    {
      title: "HER ÇOCUK İÇİN",
      submenu: [
        { name: "Ne Yapıyoruz ?", path: "/ne-yapiyoruz" },
        { name: "Çocuklar İçin Bilgi", path: "/cocuklar-icin" },
        { name: "Türkiye'deki Çocukların Durumu", path: "/turkiye-cocuk" }
      ]
    }
  ]

  return (
    <header className="bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-unicef-blue">
        <div className="container mx-auto px-2 sm:px-4 h-8 flex items-center justify-end space-x-4 text-xs sm:text-sm">
          <Link to="/haberler" className="text-white/90 hover:text-white transition-colors">
            Haberler
          </Link>
          <Link to="/hakkimizda" className="text-white/90 hover:text-white transition-colors">
            Hakkımızda
          </Link>
          <Link to="/iletisim" className="text-white/90 hover:text-white transition-colors">
            Bize Ulaşın
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <span className="text-2xl font-bold text-unicef-blue group-hover:text-unicef-dark-blue transition-colors">
              UNICEF
            </span>
            <span className="ml-2 text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
              | her çocuk için
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.title} className="relative group">
                <button className="py-2 text-gray-600 hover:text-unicef-blue font-medium transition-colors">
                  {item.title}
                </button>
                {/* Dropdown */}
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.path}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-unicef-blue transition-colors"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Donate Button */}
          <button className="bg-unicef-blue text-white px-6 py-2.5 rounded-full hover:bg-unicef-dark-blue transition-all duration-300 shadow-sm hover:shadow-md">
            BAĞIŞ YAP
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            {menuItems.map((item) => (
              <div key={item.title} className="px-4">
                <div className="py-2 font-medium text-gray-700">{item.title}</div>
                <div className="pl-4 space-y-2">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.path}
                      className="block py-1.5 text-sm text-gray-500 hover:text-unicef-blue transition-colors"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar 