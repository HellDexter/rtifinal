import { motion } from 'framer-motion';
import { GiLaserWarning } from 'react-icons/gi';
import Head from 'next/head';

const WeldingLasers = () => {
  return (
    <>
      <Head>
        <title>Svařovací lasery | Robotech</title>
        <meta name="description" content="Průmyslové svařovací lasery pro přesné a efektivní svařování" />
      </Head>
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-8">
              <GiLaserWarning className="w-12 h-12 text-[#0aef0b] mr-4" />
              <h1 className="text-4xl font-bold">Svařovací lasery</h1>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Popis technologie</h2>
                  <p className="text-gray-300">
                    Naše svařovací lasery představují špičkovou technologii pro přesné a efektivní 
                    svařování různých materiálů. Využíváme nejmodernější laserové systémy, které 
                    umožňují vysokorychlostní svařování s minimální tepelně ovlivněnou oblastí.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Výhody laserového svařování</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Vysoká přesnost a kvalita svaru</li>
                    <li>Minimální tepelně ovlivněná oblast</li>
                    <li>Možnost svařování různých materiálů</li>
                    <li>Vysoká rychlost svařování</li>
                    <li>Automatizovaný proces</li>
                  </ul>
                </section>
              </div>
              
              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Technické parametry</h2>
                  <ul className="text-gray-300 space-y-2">
                    <li><strong>Výkon laseru:</strong> 500W - 6kW</li>
                    <li><strong>Přesnost:</strong> ±0.05 mm</li>
                    <li><strong>Rychlost svařování:</strong> až 10 m/min</li>
                    <li><strong>Tloušťka materiálu:</strong> 0.5 - 20 mm</li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Aplikace</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Automobilový průmysl</li>
                    <li>Výroba přesných součástí</li>
                    <li>Zpracování tenkých plechů</li>
                    <li>Svařování různorodých materiálů</li>
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

export default WeldingLasers;
