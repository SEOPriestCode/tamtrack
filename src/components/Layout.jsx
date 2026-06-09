import { Outlet, Link } from 'react-router-dom'
import { Menu, X, Truck, Phone, Mail } from 'lucide-react'
import { useState } from 'react'

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3 sm:py-4">
            <Link to="/" className="flex items-center space-x-2">
              <Truck className="h-6 w-6 sm:h-8 sm:w-8 text-primary-600" />
              <span className="text-xl sm:text-2xl font-bold text-gray-900">Tamtrack</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-6 sm:space-x-8">
              <Link to="/" className="text-gray-700 hover:text-primary-600 transition-colors font-medium text-sm sm:text-base">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-primary-600 transition-colors font-medium text-sm sm:text-base">About</Link>
              <Link to="/services" className="text-gray-700 hover:text-primary-600 transition-colors font-medium text-sm sm:text-base">Services</Link>
              <Link to="/fleet-solutions" className="text-gray-700 hover:text-primary-600 transition-colors font-medium text-sm sm:text-base">Fleet Solutions</Link>
              <Link to="/contact" className="bg-primary-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium text-sm sm:text-base">Contact Us</Link>
            </nav>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-3 sm:space-y-4">
                <Link to="/" className="text-gray-700 hover:text-primary-600 transition-colors font-medium text-sm sm:text-base py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to="/about" className="text-gray-700 hover:text-primary-600 transition-colors font-medium text-sm sm:text-base py-2" onClick={() => setIsMenuOpen(false)}>About</Link>
                <Link to="/services" className="text-gray-700 hover:text-primary-600 transition-colors font-medium text-sm sm:text-base py-2" onClick={() => setIsMenuOpen(false)}>Services</Link>
                <Link to="/fleet-solutions" className="text-gray-700 hover:text-primary-600 transition-colors font-medium text-sm sm:text-base py-2" onClick={() => setIsMenuOpen(false)}>Fleet Solutions</Link>
                <Link to="/contact" className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium text-center text-sm sm:text-base py-2" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                <Truck className="h-6 w-6 sm:h-8 sm:w-8 text-primary-400" />
                <span className="text-xl sm:text-2xl font-bold">Tamtrack</span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">Leading fleet management solutions in Nigeria for over 20 years.</p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">About Us</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Services</Link></li>
                <li><Link to="/fleet-solutions" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Fleet Solutions</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Services</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                <li className="text-gray-400 text-sm sm:text-base">Fleet Tracking</li>
                <li className="text-gray-400 text-sm sm:text-base">Vehicle Maintenance</li>
                <li className="text-gray-400 text-sm sm:text-base">Fuel Management</li>
                <li className="text-gray-400 text-sm sm:text-base">Driver Management</li>
                <li className="text-gray-400 text-sm sm:text-base">Analytics & Reporting</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Us</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-center space-x-2 text-gray-400">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm">+234 800 123 4567</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-400">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm">info@tamtrack.ng</span>
                </li>
                <li className="text-gray-400 text-xs sm:text-sm">
                  Lagos, Nigeria
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
            <p className="text-xs sm:text-sm">&copy; 2024 Tamtrack. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
