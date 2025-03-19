import { motion } from 'framer-motion';
import { MdSolarPower } from 'react-icons/md';
import Head from 'next/head';

const SolarCarport = () => {
  return (
    <>
      <Head>
        <title>Solární Carport | Robotech</title>
        <meta name="description" content="Moderní řešení solárního parkování s integrovanými fotovoltaickými panely" />
      </Head>
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-8">
              <MdSolarPower className="w-12 h-12 text-[#0aef0b] mr-4" />
              <h1 className="text-4xl font-bold">Solární Carport</h1>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Popis řešení</h2>
                  <p className="text-gray-300">
                    Solární Carport představuje inovativní řešení pro parkování, které kombinuje 
                    ochranu vozidel s výrobou čisté energie. Naše systémy jsou navrženy s důrazem 
                    na maximální efektivitu, moderní design a dlouhodobou udržitelnost.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Klíčové výhody</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Výroba čisté solární energie</li>
                    <li>Ochrana vozidel před povětrnostními vlivy</li>
                    <li>Možnost integrace nabíjecích stanic pro elektromobily</li>
                    <li>Modulární systém s možností rozšíření</li>
                    <li>Minimální údržba</li>
                  </ul>
                </section>
              </div>
              
              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Technické parametry</h2>
                  <ul className="text-gray-300 space-y-2">
                    <li><strong>Výkon systému:</strong> 5-50 kWp dle velikosti</li>
                    <li><strong>Typ panelů:</strong> Vysoce účinné monokrystalické</li>
                    <li><strong>Konstrukce:</strong> Odolná hliníková konstrukce</li>
                    <li><strong>Životnost:</strong> 25+ let</li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Možnosti využití</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Firemní parkoviště</li>
                    <li>Obchodní centra</li>
                    <li>Rezidenční komplexy</li>
                    <li>Veřejná parkoviště</li>
                    <li>Průmyslové areály</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Doplňkové služby</h2>
                  <ul className="text-gray-300 space-y-2">
                    <li>Návrh a projektová dokumentace</li>
                    <li>Instalace a uvedení do provozu</li>
                    <li>Monitoring výkonu a vzdálená správa</li>
                    <li>Servis a údržba</li>
                  </ul>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SolarCarport;
