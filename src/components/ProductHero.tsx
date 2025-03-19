import Image from 'next/image';
import { motion } from 'framer-motion';
import { useCallback } from 'react';

interface ProductHeroProps {
  title: string;
  description: string;
  imagePath: string;
}

const ProductHero = ({ title, description, imagePath }: ProductHeroProps) => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
    }
  };

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.05,
      }
    }
  };

  const scrollToContent = useCallback(() => {
    // Najdeme první h1 nebo h2 element pod hero sekcí - to je pravděpodobně náš nadpis
    setTimeout(() => {
      // Odložíme vyhledávání o 100ms, aby byl DOM plně načtený
      const headings = document.querySelectorAll('h1, h2, h3');
      
      // Hledáme nadpis "Získejte od nás funkční podnikání na klíč!"
      let targetHeading: Element | null = null;
      
      // Použijeme Array.from pro převod NodeList na pole, které lze bezpečně iterovat
      Array.from(headings).some(heading => {
        if (heading.textContent?.includes('Získejte od nás funkční podnikání')) {
          targetHeading = heading;
          return true; // Ekvivalent break v cyklu
        }
        return false;
      });

      // Pokud jsme našli cílový nadpis, scrollujeme k němu
      if (targetHeading) {
        const targetElement = targetHeading as HTMLElement;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        
        // Najdeme výšku navigační lišty
        const navHeight = document.querySelector('nav')?.offsetHeight || 80;
        
        // Odečítáme výšku navigace + dalších 30px pro dostatečný odstup
        window.scrollTo({
          top: targetPosition - navHeight - 30,
          behavior: 'smooth'
        });
      } else {
        // Fallback - pokud jsme nenašli nadpis, použijeme původní metodu
        const heroSection = document.querySelector('section');
        if (heroSection) {
          window.scrollTo({
            top: heroSection.offsetHeight,
            behavior: 'smooth'
          });
        }
      }
    }, 100);
  }, []);

  return (
    <section className="relative w-full" style={{ height: 'min(100vh, 100vw)' }}>
      <Image
        src={imagePath}
        alt={title}
        fill
        className="object-cover object-center"
        priority
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
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 tracking-wider max-w-4xl mx-auto hero-text-hover [text-shadow: 1px_1px_0_rgb(0,0,0)] whitespace-normal px-4"
          >
            {description}
          </motion.p>
        </div>
        
        {/* Scroll Down Button */}
        <motion.button
          onClick={scrollToContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-8 rounded-full bg-[#0aef0b]/80 p-3 shadow-lg hover:bg-[#0aef0b] transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white text-black"
          aria-label="Posunout dolů"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Number.POSITIVE_INFINITY, 
              repeatType: 'loop',
              ease: 'easeInOut'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <title>Šipka dolů</title>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default ProductHero;
