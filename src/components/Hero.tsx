import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const heroSections = [
  {
    title: 'Inovativní průmyslová řešení',
    subtitle: 'Špičkové technologie pro automatizaci a robotizaci výroby',
    image: '/images/hero/rti_herohead.png',
    buttonText: 'Prozkoumat řešení'
  },
  {
    title: 'Ekologická energetická řešení',
    subtitle: 'Solární carporty pro udržitelnou budoucnost',
    image: '/images/products/rti_carport/rti_carport.jpg',
    buttonText: 'Prozkoumat řešení'
  },
  {
    title: 'Svařovací lasery',
    subtitle: 'Špičkové laserové technologie pro přesné a efektivní svařování různých materiálů.',
    image: '/images/products/rti_welding_laser/rti_welding_laser.png',
    buttonText: 'Prozkoumat řešení'
  },
  {
    title: 'Robotická svařovací pracoviště',
    subtitle: 'Komplexní automatizovaná řešení pro svařování s využitím nejmodernějších průmyslových robotů.',
    image: '/images/products/rti_welding/rti_welding.png',
    buttonText: 'Prozkoumat řešení'
  },
  {
    title: 'Robotické brousící pracoviště',
    subtitle: 'Automatizované systémy pro přesné broušení a leštění s adaptivním řízením procesu.',
    image: '/images/products/rti_grinding/rti_grinding.png',
    buttonText: 'Prozkoumat řešení'
  },
  {
    title: 'Čisticí lasery',
    subtitle: 'Ekologické a efektivní řešení pro čištění povrchů pomocí laserové technologie.',
    image: '/images/products/rti_cleaning_laser/rti_cleaning_laser.png',
    buttonText: 'Prozkoumat řešení'
  }
]

export default function Hero() {
  const [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % heroSections.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const scrollToProducts = (e: React.MouseEvent) => {
    e.preventDefault()
    const productsSection = document.getElementById('products')
    if (productsSection) {
      const offset = productsSection.offsetTop - 72 // Navbar height
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section 
      className="relative w-full" 
      style={{ height: 'min(100vh, 100vw)' }}
    >
      {heroSections.map((section, index) => (
        <motion.div
          key={section.title}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: currentSection === index ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={section.image}
            alt={section.title}
            fill
            className="object-cover object-center"
            priority={index === 0}
            quality={100}
          />
          <div className="absolute inset-0 bg-black/30" />
          
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
            <div className="mt-20 sm:mt-0 w-full">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white tracking-wide max-w-5xl mx-auto hero-text-hover [text-shadow: 2px_2px_0_rgb(0,0,0)] break-words sm:whitespace-nowrap px-2 sm:px-0"
              >
                {heroSections[currentSection].title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 tracking-wider max-w-4xl mx-auto hero-text-hover [text-shadow: 1px_1px_0_rgb(0,0,0)] whitespace-normal px-4"
              >
                {heroSections[currentSection].subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <a 
                  href="#products"
                  onClick={scrollToProducts}
                  className="bg-[#00FF00] text-black px-8 py-3 rounded-md text-lg font-medium hover:bg-[#00CC00] transition-colors duration-300"
                >
                  {heroSections[currentSection].buttonText}
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  )
}
