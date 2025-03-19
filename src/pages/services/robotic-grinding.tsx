import { motion } from 'framer-motion';
import { GiRobotGrab } from 'react-icons/gi';
import Head from 'next/head';

const RoboticGrinding = () => {
  return (
    <>
      <Head>
        <title>Robotické brousící pracoviště | Robotech</title>
        <meta name="description" content="Specializované robotické pracoviště pro přesné broušení a leštění" />
      </Head>
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-8">
              <GiRobotGrab className="w-12 h-12 text-[#0aef0b] mr-4" />
              <h1 className="text-4xl font-bold">Robotické brousící pracoviště</h1>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Popis řešení</h2>
                  <p className="text-gray-300">
                    Naše robotická brousící pracoviště představují špičkové řešení pro automatizované broušení 
                    a leštění. Využíváme nejmodernější robotické technologie pro dosažení maximální přesnosti 
                    a efektivity při zpracování různých materiálů.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Klíčové výhody</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Vysoká přesnost a opakovatelnost procesu</li>
                    <li>Automatizované zpracování různých tvarů a materiálů</li>
                    <li>Optimalizace výrobního procesu</li>
                    <li>Snížení nákladů na výrobu</li>
                    <li>Zvýšení kvality výsledného produktu</li>
                  </ul>
                </section>
              </div>
              
              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Technické specifikace</h2>
                  <ul className="text-gray-300 space-y-2">
                    <li><strong>Přesnost:</strong> ±0.1 mm</li>
                    <li><strong>Pracovní prostor:</strong> Až 2000 x 1000 x 1000 mm</li>
                    <li><strong>Zpracovatelné materiály:</strong> Kov, plast, kompozity</li>
                    <li><strong>Řízení:</strong> Pokročilý řídicí systém s možností integrace do výrobní linky</li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Oblasti použití</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Automobilový průmysl</li>
                    <li>Letecký průmysl</li>
                    <li>Výroba nástrojů a forem</li>
                    <li>Zpracování kovů</li>
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

export default RoboticGrinding;
