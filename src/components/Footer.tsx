import Image from 'next/image'
import Link from 'next/link'
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo a popis */}
          <div className="col-span-1">
            <Link 
              href="/" 
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="flex items-center mb-4 hover:opacity-90 transition-opacity duration-200"
            >
              <span className="text-xl font-bold hover:text-[#0aef0b] transition-all duration-300">Robotech Innovation</span>
            </Link>
            <p className="text-gray-400 text-sm hover:text-[#0aef0b] hover:glow transition-all duration-300">
              Inovativní robotická a laserová řešení pro moderní průmysl. Špičkové technologie pro automatizaci a robotizaci výroby.
            </p>
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 mt-4">
              <a
                href="https://www.facebook.com/share/1AVSb37sdA/?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0aef0b] transition-colors duration-300"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/robotech_innovation1?igsh=OWp5NDR0czN2YzV6&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0aef0b] transition-colors duration-300"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Rychlé odkazy */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 hover:text-[#0aef0b] transition-all duration-300">Rychlé odkazy</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-[#0aef0b] hover:glow transition-all duration-300">
                  O nás
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-gray-400 hover:text-[#0aef0b] hover:glow transition-all duration-300">
                  Produkty
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-[#0aef0b] hover:glow transition-all duration-300">
                  Služby
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-[#0aef0b] hover:glow transition-all duration-300">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontaktní informace */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 hover:text-[#0aef0b] transition-all duration-300">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPinIcon className="w-5 h-5 text-[#0aef0b] mr-2 flex-shrink-0 mt-1" />
                <a 
                  href="https://maps.google.com/?q=Chudenická+1059/30,+Praha+Hostivař,+102+00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#0aef0b] hover:glow transition-all duration-300"
                >
                  Chudenická 1059/30<br />
                  Praha Hostivař<br />
                  102 00, Česká republika
                </a>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="w-5 h-5 text-[#0aef0b] mr-2 flex-shrink-0" />
                <a href="tel:+420775265819" className="text-gray-400 hover:text-[#0aef0b] hover:glow transition-all duration-300">
                  +420 775 265 819
                </a>
              </li>
              <li className="flex items-center">
                <EnvelopeIcon className="w-5 h-5 text-[#0aef0b] mr-2 flex-shrink-0" />
                <a href="mailto:info@robotech-innovation.cz" className="text-gray-400 hover:text-[#0aef0b] hover:glow transition-all duration-300">
                  info@robotech-innovation.cz
                </a>
              </li>
            </ul>
          </div>

          {/* Otevírací doba */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 hover:text-[#0aef0b] transition-all duration-300">Otevírací doba</h3>
            <ul className="space-y-2">
              <li className="flex justify-between text-gray-400 hover:text-[#0aef0b] hover:glow transition-all duration-300">
                <span>Pondělí - Pátek</span>
                <span>8:00 - 16:00</span>
              </li>
              <li className="flex justify-between text-gray-400 hover:text-[#0aef0b] hover:glow transition-all duration-300">
                <span>Sobota - Neděle</span>
                <span>Zavřeno</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Spodní lišta */}
        <div className="mt-12 pt-8 border-t border-[#0aef0b]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm hover:text-[#0aef0b] hover:glow transition-all duration-300">
              &copy; {currentYear} Robotech Innovation s.r.o. | IČ: 22244018
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
