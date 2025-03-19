import { motion } from 'framer-motion';
import { GiLaserWarning } from 'react-icons/gi';
import Head from 'next/head';

const CleaningLasers = () => {
  return (
    <>
      <Head>
        <title>Čisticí lasery | Robotech</title>
        <meta name="description" content="Průmyslové čisticí lasery pro efektivní a ekologické čištění povrchů" />
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
              <h1 className="text-4xl font-bold">Čisticí lasery</h1>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Popis technologie</h2>
                  <p className="text-gray-300">
                    Čisticí lasery představují moderní a ekologickou metodu čištění povrchů. 
                    Technologie využívá přesně kontrolované laserové pulzy k odstranění nečistot, 
                    oxidace a dalších povrchových vrstev bez poškození základního materiálu.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Hlavní výhody</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Bezkontaktní čištění</li>
                    <li>Ekologický proces bez chemikálií</li>
                    <li>Vysoká přesnost a selektivita čištění</li>
                    <li>Žádné poškození základního materiálu</li>
                    <li>Minimální provozní náklady</li>
                  </ul>
                </section>
              </div>
              
              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Technické specifikace</h2>
                  <ul className="text-gray-300 space-y-2">
                    <li><strong>Výkon laseru:</strong> 20W - 1000W</li>
                    <li><strong>Frekvence pulzů:</strong> až 200 kHz</li>
                    <li><strong>Rychlost čištění:</strong> až 8 m²/h</li>
                    <li><strong>Šířka paprsku:</strong> 10-100 mm</li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Oblasti použití</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Odstranění koroze a oxidace</li>
                    <li>Čištění forem a nástrojů</li>
                    <li>Příprava povrchů před svařováním</li>
                    <li>Restaurování památek a uměleckých děl</li>
                    <li>Čištění průmyslových zařízení</li>
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

export default CleaningLasers;
