import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import ProductHero from '@/components/ProductHero';

export default function WeldingLasers() {
  return (
    <>
      <Head>
        <title>Svařovací lasery | Robotech</title>
        <meta name="description" content="Špičkové laserové technologie pro přesné a efektivní svařování různých materiálů. Nabízíme řešení pro průmyslové aplikace s důrazem na kvalitu a přesnost." />
      </Head>

      <div className="min-h-screen">
        <ProductHero
          title="Svařovací lasery"
          description="Špičkové laserové technologie pro přesné a efektivní svařování různých materiálů. Nabízíme řešení pro průmyslové aplikace s důrazem na kvalitu a přesnost."
          imagePath="/images/products/rti_welding_laser/rti_welding_laser.png"
        />

        <div className="relative bg-white">
          {/* Zelený gradient na pozadí */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ff00]/5 to-transparent" />
          
          <div className="relative container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Hlavní popis */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="prose prose-lg max-w-none mb-16 space-y-12"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="p-8 rounded-2xl bg-gradient-to-r from-[#0aef0b]/5 to-transparent border-l-4 border-[#0aef0b]"
                >
                  <div className="text-gray-700">
                    <p className="text-xl text-gray-800 leading-relaxed m-0">
                      Laserové svařování představuje moderní a vysoce efektivní metodu spojování materiálů. Využívá koncentrovaný laserový paprsek, který vytváří přesné a kvalitní svary s minimálním tepelným ovlivněním okolního materiálu.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="p-8 rounded-2xl bg-gradient-to-l from-[#0aef0b]/5 to-transparent border-r-4 border-[#0aef0b]"
                >
                  <div className="text-gray-700">
                    <p className="text-xl text-gray-800 leading-relaxed m-0">
                      Naše systémy využívají nejnovější generaci vláknových a diodových laserů, které vynikají vysokou účinností, spolehlivostí a nízkými provozními náklady.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="p-8 rounded-2xl bg-gradient-to-r from-[#0aef0b]/5 to-transparent border-l-4 border-[#0aef0b]"
                >
                  <div className="text-gray-700">
                    <p className="text-xl text-gray-800 leading-relaxed m-0">
                      Naše robotická laserová pracoviště dodáváme v uzavřených bezpečnostních buňkách, které splňují platné bezpečnostní normy.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Výhody laserového svařování */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-24"
              >
                <h2 className="text-3xl font-bold mb-4 text-center">
                  Výhody laserového svařování
                </h2>
                <div className="w-24 h-1 bg-[#0aef0b] mx-auto mb-12"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      title: 'Vysoká kvalita',
                      description: 'Precizní a čistý svar s minimální tepelně ovlivněnou oblastí.'
                    },
                    {
                      title: 'Rychlost',
                      description: 'Několikrát vyšší rychlost svařování než u konvenčních metod.'
                    },
                    {
                      title: 'Flexibilita',
                      description: 'Možnost svařování různých materiálů včetně kombinovaných spojů.'
                    },
                    {
                      title: 'Automatizace',
                      description: 'Snadná integrace do automatizovaných výrobních linek.'
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white p-6 rounded-lg border-2 border-[#0aef0b]"
                    >
                      <h3 className="text-xl font-bold mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Oblasti použití */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-24"
              >
                <h2 className="text-3xl font-bold mb-4 text-center">
                  Oblasti použití
                </h2>
                <div className="w-24 h-1 bg-[#0aef0b] mx-auto mb-12"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      title: 'Automobilový průmysl',
                      items: [
                        'Svařování karoserií',
                        'Výfukové systémy',
                        'Převodovky',
                        'Palivové systémy'
                      ]
                    },
                    {
                      title: 'Strojírenství',
                      items: [
                        'Přesné strojní díly',
                        'Hydraulické komponenty',
                        'Převodové skříně',
                        'Ložiskové domky'
                      ]
                    },
                    {
                      title: 'Elektronika',
                      items: [
                        'Bateriové systémy',
                        'Konektory',
                        'Senzorové systémy',
                        'Elektronické pouzdra'
                      ]
                    }
                  ].map((area, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white p-8 rounded-xl border-2 border-[#0aef0b]"
                    >
                      <h3 className="text-2xl font-bold mb-6">
                        {area.title}
                      </h3>
                      <ul className="space-y-4">
                        {area.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-3">
                            <span className="text-[#0aef0b] text-xl mt-1">•</span>
                            <span className="text-gray-800">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
