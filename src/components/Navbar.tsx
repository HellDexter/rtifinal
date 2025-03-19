import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

const navigation = [
  { name: 'O nás', href: '#about' },
  { name: 'Produkty', href: '#products' },
  { name: 'Služby', href: '#specialization' },
  { name: 'Kontakt', href: '#contact' }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()
  const isHomePage = router.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault()
    if (!isHomePage) {
      router.push('/' + href)
      return
    }
    const section = document.querySelector(href)
    if (section) {
      const navbarHeight = 76 // Height of the fixed navbar
      const offset = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#00ff00] shadow-lg' : 'bg-[#00ff00]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[76px]">
          <div className="flex items-center justify-center h-full">
            <Link href="/" className="transform hover:scale-105 transition-transform duration-300 h-full flex items-center">
              <Image 
                src="/images/logo/rti_logo.png"
                alt="RTI Logo"
                width={400}
                height={160}
                quality={100}
                priority
                style={{ height: '56px', width: 'auto', display: 'block' }}
                unoptimized
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8 pr-16">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={(e) => scrollToSection(e, item.href)}
                className="relative text-black font-bold tracking-widest hover:text-white transition-colors duration-300 group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={(e) => scrollToSection(e, item.href)}
              className="block w-full text-left px-3 py-2 text-black font-bold tracking-widest hover:text-white transition-colors duration-300 hover:bg-black/10 rounded-md"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
