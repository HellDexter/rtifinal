import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import ProductHero from '@/components/ProductHero';

const features = [
  {
    title: 'Ekologické čištění',
    description: 'Bez použití chemikálií a abrazivních materiálů, šetrné k životnímu prostředí.'
  },
  {
    title: 'Vysoká přesnost',
    description: 'Selektivní odstranění nečistot bez poškození základního materiálu.'
  },
  {
    title: 'Široké využití',
    description: 'Vhodné pro různé materiály a typy znečištění.'
  },
  {
    title: 'Nízké provozní náklady',
    description: 'Minimální spotřeba materiálu a energie, dlouhá životnost.'
  }
]

const specifications = {
  'Provedení': 'Mobilní nebo stacionární',
  'Výkon laseru': '1kW až 8kW',
  'Laserové zdroje': 'Různé typy',
  'Odsávání': 'Integrované',
  'Bezpečnost': 'Komplexní bezpečnostní prvky',
  'Automatizace': 'Možnost plné automatizace'
}

const applications = [
  {
    title: 'Průmyslové čištění',
    items: [
      'Odstranění oxidů',
      'Čištění forem',
      'Příprava povrchů',
      'Odmaštění'
    ]
  },
  {
    title: 'Restaurování',
    items: [
      'Čištění památek',
      'Obnova povrchů',
      'Odstraňování nátěrů',
      'Konzervace'
    ]
  },
  {
    title: 'Speciální aplikace',
    items: [
      'Čištění elektroniky',
      'Příprava pro svařování',
      'Dekontaminace',
      'Značení a gravírování'
    ]
  }
]

export default function CleaningLasers() {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.3 })

  return (
    <>
      <Head>
        <title>Čisticí lasery pro průmysl | Robotech Innovation</title>
        <meta 
          name="description" 
          content="Ekologické a efektivní laserové čištění povrchů pro průmyslové využití. Nabízíme špičkové technologie pro čištění forem, odstraňování oxidů, přípravu povrchů a restaurování s výkonem až 8kW." 
        />
        <meta name="keywords" content="čisticí laser, laserové čištění, průmyslové čištění, čištění forem, odstraňování oxidů, ekologické čištění, Robotech Innovation" />
        <meta name="author" content="Robotech Innovation" />
        <meta property="og:title" content="Čisticí lasery pro průmysl | Robotech Innovation" />
        <meta property="og:description" content="Ekologické a efektivní laserové čištění povrchů pro průmyslové využití. Špičkové technologie pro čištění forem a odstraňování oxidů." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://robotech.cz/products/cleaning-lasers" />
        <meta property="og:image" content="/images/products/rti_cleaning_laser/rti_cleaning_laser.png" />
        <link rel="canonical" href="https://robotech.cz/products/cleaning-lasers" />
      </Head>
      <div className="min-h-screen">
        <ProductHero
          title="Čisticí lasery"
          description="Ekologické a efektivní řešení pro čištění povrchů pomocí laserové technologie."
          imagePath="/images/products/rti_cleaning_laser/rti_cleaning_laser.png"
        />

        <div className="bg-white">
          {/* Hlavní obsah */}
          <div id="content" className="container mx-auto px-4 py-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto mb-24 space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="p-8 rounded-2xl bg-gradient-to-r from-[#0aef0b]/5 to-transparent border-l-4 border-[#0aef0b] hover:from-[#0aef0b]/10 transition-all duration-300"
              >
                <p className="text-lg text-gray-800 leading-relaxed m-0">
                  Laserové čištění je moderní a ekologická metoda čištění povrchů, která využívá přesně kontrolovaný laserový paprsek k odstranění nečistot, oxidů, barev a dalších povrchových vrstev bez poškození základního materiálu.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="p-8 rounded-2xl bg-gradient-to-l from-[#0aef0b]/5 to-transparent border-r-4 border-[#0aef0b] hover:from-[#0aef0b]/10 transition-all duration-300"
              >
                <p className="text-lg text-gray-800 leading-relaxed m-0">
                  Technologie je založena na principu ablace, kdy laserový paprsek odpařuje nežádoucí materiál z povrchu. Proces je velmi přesný, šetrný k životnímu prostředí a nevyžaduje použití chemikálií ani abrazivních materiálů.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="p-8 rounded-2xl bg-gradient-to-r from-[#0aef0b]/5 to-transparent border-l-4 border-[#0aef0b] hover:from-[#0aef0b]/10 transition-all duration-300"
              >
                <p className="text-lg text-gray-800 leading-relaxed m-0">
                  Při integraci na robotu je možné dosahovat čištění, které zanechává sjednocený povrch díky konstantní rychlosti a vzdálenosti laseru od povrchu.
                </p>
              </motion.div>
            </motion.div>

            {/* Výhody */}
            <div className="mb-32">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4 text-center">
                  Výhody laserového čištění
                </h2>
                <div className="w-24 h-1 bg-[#0aef0b] mx-auto mb-12"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="bg-white p-6 rounded-lg border-2 border-[#0aef0b]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technické parametry */}
            <div className="mb-32">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4 text-center">
                  Technické parametry
                </h2>
                <div className="w-24 h-1 bg-[#0aef0b] mx-auto mb-12"></div>
              </div>
              <motion.div 
                className="bg-white rounded-xl p-12 border-2 border-[#0aef0b] hover:bg-[#0aef0b]/5 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {Object.entries(specifications).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      className="flex flex-col text-center p-4 hover:bg-gray-50 rounded-lg transition-colors duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <span className="text-gray-600 text-lg mb-2">{key}</span>
                      <span className="text-2xl text-gray-800">{value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Oblasti použití */}
            <div>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4 text-center">
                  Oblasti použití
                </h2>
                <div className="w-24 h-1 bg-[#0aef0b] mx-auto mb-12"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {applications.map((application, index) => (
                  <motion.div
                    key={application.title}
                    className="bg-white rounded-xl p-10 border-2 border-[#0aef0b]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h3 className="text-2xl font-bold mb-6">{application.title}</h3>
                    <ul className="space-y-6">
                      {application.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center">
                          <span className="text-[#0aef0b] mr-4 text-xl">✓</span>
                          <span className="text-gray-600 text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
