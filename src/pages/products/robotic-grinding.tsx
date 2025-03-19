import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import ProductHero from '@/components/ProductHero';

export default function RoboticGrinding() {
  return (
    <>
      <Head>
        <title>Robotické broušení a leštění | Robotech Innovation</title>
        <meta name="description" content="Automatizované robotické brousicí systémy pro dokonalou povrchovou úpravu. Nabízíme přesné a efektivní řešení pro průmyslové broušení, leštění a finální úpravu materiálů s využitím adaptivního řízení a pokročilých senzorů." />
        <meta name="keywords" content="robotické broušení, automatizované broušení, průmyslové leštění, povrchová úprava, brousicí robot, adaptivní řízení, Robotech Innovation" />
        <meta name="author" content="Robotech Innovation" />
        <meta property="og:title" content="Robotické broušení a leštění | Robotech Innovation" />
        <meta property="og:description" content="Automatizované robotické brousicí systémy pro dokonalou povrchovou úpravu. Nabízíme přesné a efektivní řešení pro průmyslové broušení a leštění materiálů." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://robotech.cz/products/robotic-grinding" />
        <meta property="og:image" content="/images/products/rti_grinding/rti_grinding.png" />
        <link rel="canonical" href="https://robotech.cz/products/robotic-grinding" />
      </Head>

      <div className="min-h-screen">
        <ProductHero
          title="Robotické broušení"
          description="Automatizované brousicí systémy pro dokonalou povrchovou úpravu. Přesné a efektivní řešení pro průmyslové broušení a leštění materiálů."
          imagePath="/images/products/rti_grinding/rti_grinding.png"
        />

        <div className="relative bg-white">
          {/* Šedý gradient na pozadí */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0aef0b]/5 to-transparent" />
          
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
                      Robotické brousící pracoviště představují moderní řešení pro automatizaci brousicích a leštících procesů. Využívají pokročilé robotické systémy v kombinaci s adaptivním řízením pro dosažení nejvyšší kvality povrchové úpravy.
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
                  <p className="text-xl text-gray-800 leading-relaxed m-0">
                    Systém je vybaven pokročilými senzory, které v reálném čase monitorují proces broušení 
                    a námi vyvinutý post-processing automaticky upravuje parametry dráhy robota podle 
                    aktuálního stavu povrchu a požadovaného výsledku.
                  </p>
                </motion.div>
              </motion.div>

              {/* Klíčové vlastnosti */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-24"
              >
                <h2 className="text-3xl font-bold mb-4 text-center">
                  Klíčové vlastnosti
                </h2>
                <div className="w-24 h-1 bg-[#0aef0b] mx-auto mb-12"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      title: 'Vysoká přesnost',
                      description: 'Robotické brousící zajišťuje konzistentní kvalitu povrchu a přesné dodržení geometrie.'
                    },
                    {
                      title: 'Flexibilita',
                      description: 'Možnost zpracování různých materiálů a tvarově složitých dílů.'
                    },
                    {
                      title: 'Produktivita',
                      description: 'Automatizovaný proces zvyšuje efektivitu a snižuje výrobní náklady.'
                    },
                    {
                      title: 'Adaptivní řízení',
                      description: 'Systém automaticky přizpůsobuje parametry broušení podle aktuálního stavu povrchu.'
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white p-8 rounded-xl border-2 border-[#0aef0b]"
                    >
                      <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Hlavní komponenty */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-24"
              >
                <h2 className="text-3xl font-bold mb-4 text-center">
                  Hlavní komponenty
                </h2>
                <div className="w-24 h-1 bg-[#0aef0b] mx-auto mb-12"></div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {[
                    'Průmyslový robot s vysokou přesností',
                    'Specializované brusné a leštící nástroje',
                    'Systém pro výměnu nástrojů',
                    'Senzory pro měření síly a polohy',
                    'Post-processor',
                    'Speciální senzorika pro měření výšky povrchu',
                    'Odsávací systém',
                    'Bezpečnostní prvky'
                  ].map((component, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <span className="text-[#0aef0b] text-xl mt-1">•</span>
                      <span className="text-gray-800">{component}</span>
                    </motion.li>
                  ))}
                </ul>
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
                      title: 'Strojírenství',
                      items: [
                        'Broušení odlitků',
                        'Opracování svařenců',
                        'Finální úprava dílů',
                        'Leštění forem'
                      ]
                    },
                    {
                      title: 'Automobilový průmysl',
                      items: [
                        'Broušení karoserií',
                        'Úprava výfukových systémů',
                        'Leštění nárazníků',
                        'Opracování litých kol'
                      ]
                    },
                    {
                      title: 'Speciální aplikace',
                      items: [
                        'Broušení nástrojů',
                        'Leštění chirurgických nástrojů',
                        'Úprava turbínových lopatek',
                        'Opracování titanových implantátů'
                      ]
                    }
                  ].map((area, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-xl p-10 border-2 border-[#0aef0b]"
                    >
                      <h3 className="text-2xl font-bold mb-6">{area.title}</h3>
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
