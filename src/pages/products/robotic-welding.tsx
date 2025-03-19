import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import ProductHero from '@/components/ProductHero';
import ImageModal from '@/components/ImageModal';

const technologies = [
  { name: 'MIG/MAG', sectionId: 'migmag-specs' },
  { name: 'TIG', sectionId: 'tig-specs' },
  { name: 'LASER', sectionId: 'laser-specs' }
];

const migmagSpecs = [
  { name: 'Svařovací proud', value: '30-400 A' },
  { name: 'Zatěžovatel 60%', value: '400 A' },
  { name: 'Zatěžovatel 100%', value: '310 A' },
  { name: 'Napájecí napětí', value: '3x400 V' },
  { name: 'Jištění', value: '32 A' },
  { name: 'Krytí', value: 'IP 23' },
  { name: 'Rychlost podávání drátu', value: '0,5-25 m/min' },
  { name: 'Průměr drátu', value: '0,6-1,6 mm' },
  { name: 'Chlazení hořáku', value: 'vodní' }
];

const tigSpecs = [
  { name: 'Svařovací proud', value: '3-350 A' },
  { name: 'Zatěžovatel 60%', value: '350 A' },
  { name: 'Zatěžovatel 100%', value: '300 A' },
  { name: 'Napájecí napětí', value: '3x400 V' },
  { name: 'Jištění', value: '25 A' },
  { name: 'Krytí', value: 'IP 23' },
  { name: 'Průměr elektrody', value: '1,0-4,0 mm' },
  { name: 'Průměr drátu', value: '0,6-1,6 mm' },
  { name: 'Chlazení hořáku', value: 'vodní' }
];

const laserSpecs = [
  { name: 'Výkon laseru', value: '2000 W' },
  { name: 'Vlnová délka', value: '1080 nm' },
  { name: 'Průměr vlákna', value: '50 μm' },
  { name: 'Napájecí napětí', value: '3x400 V' },
  { name: 'Jištění', value: '32 A' },
  { name: 'Krytí', value: 'IP 54' },
  { name: 'Průměr drátu', value: '0,8-1,2 mm' },
  { name: 'Chlazení', value: 'vodní' },
  { name: 'Spotřeba chladící vody', value: '15 l/min' }
];

const hSeriesSpecs = [
  'Průmyslový robot FANUC ARC MATE 100iD 8L s dosahem 2032 mm',
  '2x jednoosé polohovadlo s protiložiskem FANUC nosnost 1000 kg',
  'Bezpečnostní optické závory REER',
  'Bezpečnostní ocelové oplocení',
  'Dotykové vyhledávání dílů',
  'Automatická korekce dráhy'
];

export default function RoboticWelding() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Přibližná výška navigačního baru
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Head>
        <title>Robotické svařování | Robotech</title>
        <meta name="description" content="Automatizované svařovací systémy pro maximální efektivitu a přesnost. Komplexní řešení robotického svařování pro moderní průmyslovou výrobu." />
      </Head>

      <div className="min-h-screen">
        <ProductHero
          title="Robotické svařování"
          description="Automatizované svařovací systémy pro maximální efektivitu a přesnost."
          imagePath="/images/products/rti_welding/rti_welding.png"
        />

        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            {/* Dostupné technologie */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-24"
            >
              <h2 className="text-4xl font-bold text-center mb-12">Dostupné technologie svařování</h2>
              <div className="w-24 h-1 bg-[#0aef0b] mx-auto mb-12" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {technologies.map((tech) => (
                  <motion.div
                    key={tech.name}
                    className="text-center p-8 rounded-xl border-2 border-[#0aef0b] group hover:bg-[#0aef0b]/5 transition-all duration-300 cursor-pointer"
                    onClick={() => scrollToSection(tech.sectionId)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <h3 className="text-2xl font-bold">{tech.name}</h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Technické parametry */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-24"
            >
              <h2 className="text-4xl font-bold text-center mb-12">Technické parametry svařovacích technologií</h2>
              <div className="w-24 h-1 bg-[#0aef0b] mx-auto mb-12" />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* MIG/MAG */}
                <div id="migmag-specs" className="rounded-xl border-2 border-[#0aef0b] p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">MIG/MAG</h3>
                  <div className="space-y-4">
                    {migmagSpecs.map((spec) => (
                      <div key={spec.name} className="flex justify-between items-center">
                        <span className="text-gray-600">{spec.name}</span>
                        <span className="text-gray-800">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* TIG */}
                <div id="tig-specs" className="rounded-xl border-2 border-[#0aef0b] p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">TIG</h3>
                  <div className="space-y-4">
                    {tigSpecs.map((spec) => (
                      <div key={spec.name} className="flex justify-between items-center">
                        <span className="text-gray-600">{spec.name}</span>
                        <span className="text-gray-800">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* LASER */}
                <div id="laser-specs" className="rounded-xl border-2 border-[#0aef0b] p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">LASER</h3>
                  <div className="space-y-4">
                    {laserSpecs.map((spec) => (
                      <div key={spec.name} className="flex justify-between items-center">
                        <span className="text-gray-600">{spec.name}</span>
                        <span className="text-gray-800">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Modelové řady - hlavní nadpis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-24"
            >
              <h2 className="text-4xl font-bold mb-6">Modelové řady</h2>
              <div className="w-24 h-1 bg-[#0aef0b] mx-auto mb-12" />
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nabízíme tři specializované modelové řady svařovacích pracovišť, každá navržená pro specifické potřeby výroby
              </p>

              {/* Navigační dlaždice */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
                <motion.button
                  onClick={() => {
                    const element = document.getElementById('modelova-rada-h');
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="group relative p-8 rounded-xl border-2 border-[#0aef0b] hover:bg-[#0aef0b]/5 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="absolute -top-6 left-4 text-6xl font-bold text-[#0aef0b]/20 group-hover:text-[#0aef0b]/30 transition-colors duration-300">H</span>
                  <h3 className="text-2xl font-bold mb-4">Modelová řada H</h3>
                  <p className="text-gray-600">Robotické svařovací pracoviště na ocelové konstrukci ve tvaru písmene H</p>
                </motion.button>

                <motion.button
                  onClick={() => {
                    const element = document.getElementById('modelova-rada-e');
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="group relative p-8 rounded-xl border-2 border-[#0aef0b] hover:bg-[#0aef0b]/5 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="absolute -top-6 left-4 text-6xl font-bold text-[#0aef0b]/20 group-hover:text-[#0aef0b]/30 transition-colors duration-300">E</span>
                  <h3 className="text-2xl font-bold mb-4">Modelová řada E</h3>
                  <p className="text-gray-600">Robotické svařovací pracoviště na ocelové konstrukci ve tvaru písmene E</p>
                </motion.button>

                <motion.button
                  onClick={() => {
                    const element = document.getElementById('modelova-rada-t');
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="group relative p-8 rounded-xl border-2 border-[#0aef0b] hover:bg-[#0aef0b]/5 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="absolute -top-6 left-4 text-6xl font-bold text-[#0aef0b]/20 group-hover:text-[#0aef0b]/30 transition-colors duration-300">T</span>
                  <h3 className="text-2xl font-bold mb-4">Modelová řada T</h3>
                  <p className="text-gray-600">Robotické svařovací pracoviště na ocelovém svařovacím stole</p>
                </motion.button>
              </div>
            </motion.div>

            {/* Modelová řada H */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative mb-32 pt-24 pb-32"
            >
              {/* Dekorativní pozadí */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0aef0b]/5 to-transparent" />
              
              <div className="relative">
                <div id="modelova-rada-h" className="space-y-16">
                  <div className="mb-12">
                    <div className="text-center">
                      <h2 className="text-3xl font-bold mb-4">
                        Modelová řada H
                      </h2>
                      <div className="w-24 h-1 bg-[#0aef0b] mx-auto" />
                    </div>
                  </div>
                  
                  {/* První sekce s fotkou a textem */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
                    <motion.div 
                      className="relative aspect-[4/3] cursor-zoom-in rounded-xl overflow-hidden border-2 border-[#0aef0b] hover:border-4 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setSelectedImage("/images/modelova-rada-h/h-ram-1.jpg")}
                    >
                      <Image
                        src="/images/modelova-rada-h/h-ram-1.jpg"
                        alt="H-rám pohled 1"
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        quality={75}
                        loading="lazy"
                        priority={false}
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="flex items-center"
                    >
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Robotické svařovací pracoviště na ocelové konstrukci ve tvaru písmene H. Robot je umístěn ve středu a obsluhuje dvě pracovní stanice. V jedné stanici robot svařuje, v druhé stanici obsluha vyndává hotový svařenec a připravuje další.
                      </p>
                    </motion.div>
                  </div>

                  {/* Druhá sekce s fotkou a textem */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center lg:order-2"
                    >
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Robotické svařovací pracoviště H se skládá ze dvou oddělených pracovišť. Každé pracoviště má vlastní ovládací prvky start a stop pracovního cyklu a vlastní bezpečnostní prvky. Přídavný svařovací drát možné podávat z cívky, nebo ze sudu. Délka svařovací stanice 3000 mm, průměr protočení 1200 mm.
                      </p>
                    </motion.div>

                    <motion.div 
                      className="relative aspect-[4/3] cursor-zoom-in rounded-xl overflow-hidden border-2 border-[#0aef0b] hover:border-4 transition-all duration-300 lg:order-1"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setSelectedImage("/images/modelova-rada-h/h-ram-2.jpg")}
                    >
                      <Image
                        src="/images/modelova-rada-h/h-ram-2.jpg"
                        alt="H-rám pohled 2"
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        quality={75}
                        loading="lazy"
                        priority={false}
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Technické parametry */}
                <div className="bg-gradient-to-br from-[#0aef0b]/5 to-transparent p-12 rounded-2xl border border-[#0aef0b]/20">
                  <h3 className="text-3xl font-bold text-center mb-12">Technické parametry řady H</h3>
                  <div className="w-24 h-1 bg-[#0aef0b] mx-auto mb-12" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl mx-auto">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-bold mb-4 text-gray-800">Robotický systém</h4>
                        <ul className="space-y-4">
                          <li className="flex items-start space-x-3">
                            <span className="text-gray-200 text-xl mt-1">•</span>
                            <span className="text-gray-800">Průmyslový robot FANUC ARC MATE 100iD 8L s dosahem 2032 mm</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <span className="text-gray-200 text-xl mt-1">•</span>
                            <span className="text-gray-800">Dotykové vyhledávání dílů</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <span className="text-gray-200 text-xl mt-1">•</span>
                            <span className="text-gray-800">Automatická korekce dráhy</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-bold mb-4 text-gray-800">Polohovací systém</h4>
                        <ul className="space-y-4">
                          <li className="flex items-start space-x-3">
                            <span className="text-gray-200 text-xl mt-1">•</span>
                            <span className="text-gray-800">2x jednoosé polohovadlo s protiložiskem FANUC nosnost 1000 kg</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold mb-4 text-gray-800">Bezpečnostní prvky</h4>
                        <ul className="space-y-4">
                          <li className="flex items-start space-x-3">
                            <span className="text-gray-200 text-xl mt-1">•</span>
                            <span className="text-gray-800">Bezpečnostní optické závory REER</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <span className="text-gray-200 text-xl mt-1">•</span>
                            <span className="text-gray-800">Bezpečnostní ocelové oplocení</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Poslední obrázek */}
                <motion.div 
                  className="relative aspect-[16/9] cursor-zoom-in rounded-xl overflow-hidden border-2 border-[#0aef0b] hover:border-4 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setSelectedImage("/images/modelova-rada-h/2023_21_HS1_H-ram.jpg")}
                >
                  <Image
                    src="/images/modelova-rada-h/2023_21_HS1_H-ram.jpg"
                    alt="H-rám hlavní pohled"
                    fill
                    className="object-contain"
                    sizes="100vw"
                    quality={75}
                    loading="lazy"
                    priority={false}
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Modelová řada E */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative mb-32 pt-24 pb-32"
            >
              {/* Dekorativní pozadí */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0aef0b]/5 to-transparent" />
              
              <div className="relative">
                <div id="modelova-rada-e" className="space-y-16">
                  <div className="mb-12">
                    <div className="text-center">
                      <h2 className="text-3xl font-bold mb-4">
                        Modelová řada E
                      </h2>
                      <div className="w-24 h-1 bg-[#0aef0b] mx-auto" />
                    </div>
                  </div>
                  
                  {/* První sekce s fotkou a textem */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
                    <motion.div 
                      className="relative aspect-[4/3] cursor-zoom-in rounded-xl overflow-hidden border-2 border-[#0aef0b] hover:border-4 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setSelectedImage("/images/modelova-rada-e/e-ram-1.jpg")}
                    >
                      <Image
                        src="/images/modelova-rada-e/e-ram-1.jpg"
                        alt="E-rám pohled 1"
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        quality={75}
                        loading="lazy"
                        priority={false}
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="flex items-center"
                    >
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Robotické svařovací pracoviště na ocelové konstrukci ve tvaru písmene E. Robot je umístěn na dráze, zavěšen na věži a obsluhuje dvě pracovní stanice. V jedné stanici robot svařuje, v druhé stanici obsluha vyndává hotový svařenec a připravuje další. Délka stanice je 2850 mm, průměr protočení 1200 mm.
                      </p>
                    </motion.div>
                  </div>

                  {/* Druhá sekce s fotkou a textem */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center lg:order-2"
                    >
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Snadnou demontáží středové přepážky je možné spojit pracovní stanice v jednu dlouhou 6200 mm. Robotické svařovací pracoviště E se skládá ze dvou oddělených pracovišť. Každé pracoviště má vlastní ovládací prvky start a stop pracovního cyklu a vlastní bezpečnostní prvky. Přídavný svařovací drát možné podávat z cívky, nebo ze sudu.
                      </p>
                    </motion.div>

                    <motion.div 
                      className="relative aspect-[4/3] cursor-zoom-in rounded-xl overflow-hidden border-2 border-[#0aef0b] hover:border-4 transition-all duration-300 lg:order-1"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setSelectedImage("/images/modelova-rada-e/e-ram-2.jpg")}
                    >
                      <Image
                        src="/images/modelova-rada-e/e-ram-2.jpg"
                        alt="E-rám pohled 2"
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        quality={75}
                        loading="lazy"
                        priority={false}
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Technické parametry */}
                <div className="bg-gradient-to-br from-[#0aef0b]/5 to-transparent p-12 rounded-2xl border border-[#0aef0b]/20">
                  <h3 className="text-3xl font-bold text-center mb-12">Technické parametry řady E</h3>
                  <div className="w-24 h-1 bg-[#0aef0b] mx-auto mb-12" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl mx-auto">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-bold mb-4 text-gray-800">Robotický systém</h4>
                        <ul className="space-y-4">
                          <li className="flex items-start space-x-3">
                            <span className="text-gray-200 text-xl mt-1">•</span>
                            <span className="text-gray-800">Průmyslový robot FANUC ARC MATE 100iD 8L s dosahem 2032 mm</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <span className="text-gray-200 text-xl mt-1">•</span>
                            <span className="text-gray-800">Dotykové vyhledávání dílů</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <span className="text-gray-200 text-xl mt-1">•</span>
                            <span className="text-gray-800">Automatická korekce dráhy</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-bold mb-4 text-gray-800">Polohovací systém</h4>
                        <ul className="space-y-4">
                          <li className="flex items-start space-x-3">
                            <span className="text-gray-200 text-xl mt-1">•</span>
                            <span className="text-gray-800">2x jednoosé polohovadlo s protiložiskem FANUC nosnost 1000 kg</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold mb-4 text-gray-800">Bezpečnostní prvky</h4>
                        <ul className="space-y-4">
                          <li className="flex items-start space-x-3">
                            <span className="text-gray-200 text-xl mt-1">•</span>
                            <span className="text-gray-800">Bezpečnostní optické závory REER</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <span className="text-gray-200 text-xl mt-1">•</span>
                            <span className="text-gray-800">Bezpečnostní ocelové oplocení</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Poslední obrázek */}
                <motion.div 
                  className="relative aspect-[16/9] cursor-zoom-in rounded-xl overflow-hidden border-2 border-[#0aef0b] hover:border-4 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setSelectedImage("/images/modelova-rada-e/2023_10b_HS_E-ram.jpg")}
                >
                  <Image
                    src="/images/modelova-rada-e/2023_10b_HS_E-ram.jpg"
                    alt="E-rám hlavní pohled"
                    fill
                    className="object-contain"
                    sizes="100vw"
                    quality={75}
                    loading="lazy"
                    priority={false}
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Modelová řada T */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pt-24 pb-32"
            >
              {/* Dekorativní pozadí */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0aef0b]/5 to-transparent" />
              
              <div className="relative">
                <div id="modelova-rada-t" className="space-y-16">
                  <div className="mb-12">
                    <div className="text-center">
                      <h2 className="text-3xl font-bold mb-4">
                        Modelová řada T
                      </h2>
                      <div className="w-24 h-1 bg-[#0aef0b] mx-auto" />
                    </div>
                  </div>
                  
                  {/* První sekce s fotkou a textem */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
                    <motion.div 
                      className="relative aspect-[4/3] cursor-zoom-in rounded-xl overflow-hidden border-2 border-[#0aef0b] hover:border-4 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setSelectedImage("/images/modelova-rada-t/stul-1.jpg")}
                    >
                      <Image
                        src="/images/modelova-rada-t/stul-1.jpg"
                        alt="Stůl pohled 1"
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        quality={75}
                        loading="lazy"
                        priority={false}
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="flex items-center"
                    >
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Robotické svařovací pracoviště T je na ocelovém svařovacím stole. Robot je umístěn na stole. Stůl je o rozměru 1500 x 1000 mm s otvory 22 mm pro použití standartních upínek pro svařování.
                      </p>
                    </motion.div>
                  </div>

                  {/* Druhá sekce s textem */}
                  <div className="mb-12">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Robotické svařovací pracoviště T má vlastní ovládací prvky start a stop pracovního cyklu a vlastní bezpečnostní prvky. Přídavný svařovací drát možné podávat z cívky, nebo ze sudu.
                    </p>
                  </div>

                  {/* Technické parametry */}
                  <div className="bg-gradient-to-br from-[#0aef0b]/5 to-transparent p-12 rounded-2xl border border-[#0aef0b]/20 mb-12">
                    <h3 className="text-3xl font-bold text-center mb-12">Technické parametry řady T</h3>
                    <div className="w-24 h-1 bg-[#0aef0b] mx-auto mb-12" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl mx-auto">
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xl font-bold mb-4 text-gray-800">Robotický systém</h4>
                          <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                              <span className="text-gray-200 text-xl mt-1">•</span>
                              <span className="text-gray-800">Průmyslový robot FANUC ARC MATE 100iD 8L s dosahem 2032 mm</span>
                            </li>
                            <li className="flex items-start space-x-3">
                              <span className="text-gray-200 text-xl mt-1">•</span>
                              <span className="text-gray-800">Dotykové vyhledávání dílů</span>
                            </li>
                            <li className="flex items-start space-x-3">
                              <span className="text-gray-200 text-xl mt-1">•</span>
                              <span className="text-gray-800">Automatická korekce dráhy</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xl font-bold mb-4 text-gray-800">Polohovací systém</h4>
                          <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                              <span className="text-gray-200 text-xl mt-1">•</span>
                              <span className="text-gray-800">2x jednoosé polohovadlo s protiložiskem FANUC nosnost 1000 kg</span>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xl font-bold mb-4 text-gray-800">Bezpečnostní prvky</h4>
                          <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                              <span className="text-gray-200 text-xl mt-1">•</span>
                              <span className="text-gray-800">Bezpečnostní optické závory REER</span>
                            </li>
                            <li className="flex items-start space-x-3">
                              <span className="text-gray-200 text-xl mt-1">•</span>
                              <span className="text-gray-800">Bezpečnostní ocelové oplocení</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Poslední obrázek */}
                  <motion.div 
                    className="relative aspect-[16/9] cursor-zoom-in rounded-xl overflow-hidden border-2 border-[#0aef0b] hover:border-4 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setSelectedImage("/images/modelova-rada-t/2023_XX_HS_Stul-2.jpg")}
                  >
                    <Image
                      src="/images/modelova-rada-t/2023_XX_HS_Stul-2.jpg"
                      alt="Stůl hlavní pohled"
                      fill
                      className="object-contain"
                      sizes="100vw"
                      quality={75}
                      loading="lazy"
                      priority={false}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modální okno pro zvětšený obrázek */}
      {selectedImage && (
        <dialog
          open
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 m-0 w-full h-full"
          onClick={() => setSelectedImage(null)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setSelectedImage(null);
            }
          }}
          aria-modal="true"
        >
          <div className="relative w-full max-w-6xl h-[80vh]">
            <Image
              src={selectedImage}
              alt="Zvětšený obrázek"
              fill
              className="object-contain"
              sizes="100vw"
              quality={75}
              loading="lazy"
              priority={false}
            />
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
              aria-label="Zavřít obrázek"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <title>Zavřít</title>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </dialog>
      )}
    </>
  );
}
