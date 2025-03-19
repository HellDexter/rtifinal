import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Head from 'next/head'
import ProductHero from '@/components/ProductHero'
import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import { formatNumber } from '@/utils/formatters'

const features = [
  {
    title: 'Vlastní elektrárna',
    description: 'Výroba vlastní elektřiny pro nabíjení elektromobilů a snížení energetické náročnosti budov.'
  },
  {
    title: 'Komerční potenciál',
    description: 'Návratnost investice již po 3-5 letech s následným ziskem po dobu dalších 25 let.'
  },
  {
    title: 'Komplexní řešení',
    description: 'Samoobslužný systém s integrovanými platebními terminály a automatickým řízením.'
  },
  {
    title: 'Ochrana vozidel',
    description: 'Efektivní ochrana před povětrnostními vlivy s odolností konstrukce vůči větru až 160 km/h.'
  }
]

const specifications = {
  'Standardní rozměry modulu': '12 parkovacích míst',
  'Výška konstrukce': '2,2 - 2,8m',
  'Výkon solárních panelů': 'Konfigurovatelný podle potřeb',
  'Nosnost střechy': '150 kg/m²',
  'Odolnost větru': 'až 160 km/h',
  'Životnost systému': '30 let',
  'Záruka': '20 let na konstrukci',
  'Certifikace': 'CE'
}

const additionalFeatures = {
  'Technologické vybavení': [
    'AC/DC nabíjecí stanice',
    'Integrované platební terminály',
    'Monitoring systému',
    'Bateriové úložiště (volitelné)'
  ],
  'Pokročilé funkce': [
    'Vyhřívání solárních panelů',
    'Vyhřívané okapy',
    'LED osvětlení',
    'Automatické řízení energie'
  ],
  'Podpora provozu': [
    'Registrace do mapy nabíječek',
    'Asistence s povoleními',
    'Vzdálený monitoring',
    'Servisní podpora'
  ]
}

const applications = [
  {
    title: 'Komerční využití',
    description: 'Ideální pro obchodní domy, firmy a hotely s možností rychlonabíjecích DC stanic.'
  },
  {
    title: 'Rezidenční využití',
    description: 'Vhodné pro rodinné domy s AC nabíječkou pro elektromobily.'
  },
  {
    title: 'Parkoviště',
    description: 'Řešení pro zastřešení celých parkovišť s integrovaným solárním systémem.'
  }
]

const ROICalculator = () => {
  const [carportType, setCarportType] = useState(1);
  const [parkingSpots, setParkingSpots] = useState(12);
  const [dailyCharges, setDailyCharges] = useState(8);
  const [electricityPrice, setElectricityPrice] = useState(5);
  const [selectedCharger, setSelectedCharger] = useState('ac');
  const [seasonalWeight, setSeasonalWeight] = useState(0.75);

  // Konfigurace CARPORT modelů
  const carportConfig = {
    1: {
      name: "CARPORT 1",
      parkingSpots: 12, 
      price: 3500000,
      power: 30, // kWp
      dailyProduction: 200, // kWh/den
      yearlyIncome: 1000000, // Kč/rok (přibližná hodnota z prezentace)
    },
    2: {
      name: "CARPORT 2",
      parkingSpots: 24,
      price: 5290000,
      power: 60, // kWp
      dailyProduction: 400, // kWh/den
      yearlyIncome: 1500000, // Kč/rok (přibližná hodnota z prezentace)
    },
    3: {
      name: "CARPORT 3",
      parkingSpots: 36,
      price: 6590000,
      power: 90, // kWp
      dailyProduction: 600, // kWh/den
      yearlyIncome: 2000000, // Kč/rok (přibližná hodnota z prezentace)
    }
  };

  // Ceny nabíjení
  const acChargePrice = 10; // Kč za 1kWh
  const dcChargePrice = 16; // Kč za 1kWh
  
  // Průměrná kapacita nabíjení
  const avgChargeCapacity = 100; // kWh pro 160kW DC nabíječku
  
  // Aktuální konfigurace podle zvoleného typu
  const currentConfig = carportConfig[carportType];
  
  // Výpočet denního příjmu
  const calculateDailyIncome = () => {
    const chargerPrice = selectedCharger === 'ac' ? acChargePrice : dcChargePrice;
    const totalChargingEnergy = avgChargeCapacity * dailyCharges;
    
    // Kolik energie pochází ze solární výroby (maximálně tolik, kolik vyrobíme)
    const solarEnergy = Math.min(totalChargingEnergy, currentConfig.dailyProduction * seasonalWeight);
    
    // Kolik energie musíme dodat ze sítě
    const gridEnergy = totalChargingEnergy - solarEnergy;
    
    // Příjem ze solární energie
    const solarIncome = solarEnergy * chargerPrice;
    
    // Příjem ze síťové energie (odečítáme náklady na elektřinu)
    const gridIncome = gridEnergy * (chargerPrice - electricityPrice);
    
    return solarIncome + gridIncome;
  };
  
  // Výpočet ročního příjmu
  const yearlyIncome = calculateDailyIncome() * 365;
  
  // Pořizovací cena
  const installationCost = currentConfig.price;
  
  // Výpočet návratnosti v letech
  const roi = installationCost / yearlyIncome;
  
  // Celkový výnos po 30 letech (životnost)
  const totalProfit = (yearlyIncome * 30) - installationCost;

  // Synchronizace počtu parkovacích míst s vybraným typem CARPORT
  useEffect(() => {
    setParkingSpots(currentConfig.parkingSpots);
  }, [currentConfig.parkingSpots]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-center text-[#0aef0b]">Kalkulačka návratnosti investice (ROI)</h3>
      
      <div className="mb-8">
        <p className="text-sm text-gray-500 italic mb-4">
          Tento kalkulátor je pouze orientační a slouží k základnímu odhadu návratnosti investice. 
          Pro přesnou kalkulaci kontaktujte naše obchodní oddělení.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block mb-2 font-medium" htmlFor="carportType">Typ CARPORT:</label>
            <div className="grid grid-cols-3 gap-4">
              {Object.keys(carportConfig).map(key => (
                <label
                  key={key}
                  className={`p-4 rounded-lg border-2 transition-colors cursor-pointer text-center ${
                    carportType === Number(key)
                      ? 'border-[#0aef0b] bg-[#0aef0b]/10'
                      : 'border-gray-200 hover:border-[#0aef0b]/50'
                  }`}
                >
                  <input
                    type="radio"
                    name="carportType"
                    id={`carportType${key}`}
                    value={key}
                    checked={carportType === Number(key)}
                    onChange={() => setCarportType(Number(key))}
                    className="sr-only"
                  />
                  <div className="font-semibold">{carportConfig[Number(key)].name}</div>
                  <div className="text-sm text-gray-600">{carportConfig[Number(key)].parkingSpots} parkovacích míst</div>
                  <div className="text-sm text-gray-600">{carportConfig[Number(key)].power} kWp</div>
                </label>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block mb-2 font-medium" htmlFor="chargerType">Typ nabíječky:</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-[#0aef0b]"
                  checked={selectedCharger === 'ac'}
                  onChange={() => setSelectedCharger('ac')}
                  name="chargerType"
                  id="chargerTypeAC"
                />
                <span className="ml-2">AC 22kW (Pomalé nabíjení)</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-[#0aef0b]"
                  checked={selectedCharger === 'dc'}
                  onChange={() => setSelectedCharger('dc')}
                  name="chargerType"
                  id="chargerTypeDC"
                />
                <span className="ml-2">DC 160kW (Rychlé nabíjení)</span>
              </label>
            </div>
          </div>
                    
          <div>
            <label htmlFor="dailyCharges" className="block mb-2 font-medium">
              Počet nabíjení denně: {dailyCharges}
            </label>
            <input
              type="range"
              min="1"
              max="20"
              value={dailyCharges}
              onChange={(e) => setDailyCharges(Number.parseInt(e.target.value, 10))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-200"
              id="dailyCharges"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1</span>
              <span>5</span>
              <span>10</span>
              <span>15</span>
              <span>20</span>
            </div>
          </div>
          
          <div>
            <label htmlFor="electricityPrice" className="block mb-2 font-medium">
              Cena elektřiny ze sítě: {electricityPrice} Kč/kWh
            </label>
            <input
              type="range"
              min="3"
              max="8"
              step="0.5"
              value={electricityPrice}
              onChange={(e) => setElectricityPrice(Number.parseFloat(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-200"
              id="electricityPrice"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>3 Kč</span>
              <span>5 Kč</span>
              <span>8 Kč</span>
            </div>
          </div>
          
          <div>
            <label htmlFor="seasonalWeight" className="block mb-2 font-medium">
              Sezónní vytížení: {Math.round(seasonalWeight * 100)}%
            </label>
            <input
              type="range"
              min="0.25"
              max="1"
              step="0.05"
              value={seasonalWeight}
              onChange={(e) => setSeasonalWeight(Number.parseFloat(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-200"
              id="seasonalWeight"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>25%</span>
              <span>50%</span>
              <span>75%</span>
              <span>100%</span>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-lg font-semibold mb-3">Parametry zvoleného modelu</h4>
            <ul className="space-y-2">
              <li><span className="font-medium">Pořizovací cena:</span> {formatNumber(currentConfig.price)} Kč bez DPH</li>
              <li><span className="font-medium">Výkon instalace:</span> {currentConfig.power} kWp</li>
              <li><span className="font-medium">Denní produkce:</span> {currentConfig.dailyProduction} kWh/den</li>
              <li><span className="font-medium">Roční produkce:</span> {formatNumber(currentConfig.dailyProduction * 365)} kWh/rok</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-6 text-center">Výsledky</h4>
          
          <div className="space-y-6">
            <div>
              <p className="font-medium">Denní příjem:</p>
              <p className="text-2xl font-bold text-[#0aef0b]">{formatNumber(Math.round(calculateDailyIncome()))} Kč</p>
            </div>
            
            <div>
              <p className="font-medium">Roční příjem:</p>
              <p className="text-2xl font-bold text-[#0aef0b]">{formatNumber(Math.round(yearlyIncome))} Kč</p>
            </div>
            
            <div>
              <p className="font-medium">Návratnost investice:</p>
              <p className="text-2xl font-bold text-[#0aef0b]">{roi.toFixed(1)} let</p>
              <p className="text-sm text-gray-500 mt-1">
                {roi <= 4 
                  ? 'Skvělá investice s rychlou návratností!' 
                  : roi <= 6 
                    ? 'Dobrá investice s přiměřenou návratností.' 
                    : 'Konzultujte s naším obchodním oddělením možnosti optimalizace.'}
              </p>
            </div>
            
            <div>
              <p className="font-medium">Celkový výnos po 30 letech:</p>
              <p className="text-2xl font-bold text-[#0aef0b]">{formatNumber(Math.round(totalProfit))} Kč</p>
            </div>
            
            <div className="mt-8">
              <Link 
                href="/#contact" 
                className="w-full block text-center py-3 bg-[#0aef0b] text-white rounded-lg font-semibold hover:bg-[#09cc0a] transition-colors duration-300"
              >
                Získat přesnou kalkulaci
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function SolarCarport() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setSelectedImage('');
  };

  const [activeCarportTab, setActiveCarportTab] = useState(1);

  return (
    <>
      <Head>
        <title>Solární Carport s nabíjecí stanicí | Robotech Innovation</title>
        <meta name="description" content="Inovativní řešení pro parkování s integrovanými solárními panely. Výroba vlastní elektřiny a dobíjení elektromobilů." />
        <meta name="keywords" content="solární carport, fotovoltaika, nabíjecí stanice, elektromobilita" />
        <meta property="og:locale" content="cs_CZ" />
        <link rel="canonical" href="https://robotech.cz/produkty/solarni-carport" />
      </Head>
      
      <div className="bg-white" ref={ref}>
        <ProductHero
          title="Solární Carport"
          description="Provozujte vlastní elektrárnu s nabíjecí stanicí!"
          imagePath="/images/products/rti_carport/rti_carport.jpg"
        />

        <div className="container mx-auto px-4 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto mb-24"
          >
            <h1 className="text-4xl font-bold text-center mb-12">Získejte od nás funkční podnikání na klíč!</h1>
            <div className="w-24 h-1 bg-[#0aef0b] mx-auto mb-12" />

            <div className="space-y-8 text-lg">
              <p className="font-semibold text-xl text-center mb-12">
                Dodací lhůta pouze 3-4 měsíce | Návratnost investice 3-5 let | Životnost 30 let
              </p>

              <div className="text-center mb-8">
                <a 
                  href="/documents/prezentace-carport.pdf" 
                  download="Prezentace Robotech Innovation Carport.pdf"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#0aef0b] text-black font-medium rounded-lg shadow-md hover:bg-[#09cc0a] transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" role="img">
                    <title>Ikona stažení</title>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Stáhnout prezentaci podnikatelské příležitosti
                </a>
              </div>

              <p>
                Přemýšlíte o vlastním podnikání, ale obáváte se, jestli v dnešní nejisté době bude podnikání dlouhodobě fungovat?
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#0aef0b]">
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">Pro koho je systém vhodný?</h3>
                  <p className="mb-4">Vlastníte parkovací plochu, bytový dům s parkovištěm, pozemek, firemní parkoviště, nebo nevyužitý areál?</p>
                  <p>Máte nejméně 6 nebo 12 a více parkovacích míst?</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#0aef0b]">
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">Jak CARPORT vydělává?</h3>
                  <p className="mb-4">
                    CARPORT je nástroj, jak za cenu „garsoniéry" v Praze vydělávat každý rok cca. 25% investice, podle lokace, frekventovanosti nabíjení, instalované technologie, výkonu elektrárny, druhu nabíječek a příkonu proudu v místě.
                  </p>
                  <p>
                    Po dobu 30 let vyděláváte bez nutnosti mít na místě zaměstnance a být fyzicky na místě.
                  </p>
                </div>
              </div>

              <p className="mt-8">
                CARPORT je samoobslužná dobíjecí stanice s elektrárnou a platebními terminály, která sama vyrábí elektřinu do nabíječek a co nevyrobí si vezme automaticky ze sítě.
              </p>
              
              <p>
                Místo si zaregistrujete do mapy nabíječek, zřídíte si lokální reklamu a už jenom sledujete, jak Vám na účet přichází peníze.
              </p>

              <div className="flex justify-center mt-12">
                <Link 
                  href="/#contact" 
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-[#0aef0b] rounded-lg shadow-lg hover:bg-[#09d40a] transition-colors duration-300"
                  title="Kontaktujte nás"
                >
                  Pomůžeme Vám vyřídit potřebná povolení
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <title>Šipka vpravo</title>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <h2 className="text-4xl font-bold text-center mb-12">CARPORT - Solární technologie a inovace v oblasti elektromobility</h2>

              {/* Video prezentace */}
              <div className="max-w-4xl mx-auto mt-12">
                <div className="video-container">
                  {/* Použijeme useInView pro detekci, kdy je video viditelné */}
                  {(() => {
                    const [videoRef, videoInView] = useInView({
                      triggerOnce: false,
                      threshold: 0.5, // Video se spustí, když je alespoň 50% viditelné
                    });
                    
                    useEffect(() => {
                      // Když je video viditelné, spustíme ho
                      const videoElement = document.getElementById('autoplay-video') as HTMLVideoElement | null;
                      if (videoInView && videoElement) {
                        videoElement.play().catch(error => console.log('Automatic playback failed:', error));
                      } else if (!videoInView && videoElement) {
                        videoElement.pause();
                      }
                    }, [videoInView]);
                    
                    return (
                      <video 
                        id="autoplay-video"
                        ref={videoRef}
                        className="w-full rounded-xl shadow-lg"
                        controls
                        preload="metadata"
                        muted
                        playsInline
                        loop
                        onPlay={(e) => {
                          const video = e.target as HTMLVideoElement;
                          video.muted = true;
                          video.volume = 0;
                        }}
                        onVolumeChange={(e) => {
                          const video = e.target as HTMLVideoElement;
                          if (!video.muted || video.volume > 0) {
                            video.muted = true;
                            video.volume = 0;
                          }
                        }}
                      >
                        <source src="/videos/videoprezentace.mp4" type="video/mp4" />
                        <track
                          kind="captions"
                          src="/videos/videoprezentace.vtt"
                          srcLang="cs"
                          label="Čeština"
                          default
                        />
                        Váš prohlížeč nepodporuje přehrávání videa.
                      </video>
                    );
                  })()}
                </div>
              </div>

              <h2 className="text-4xl font-bold text-center mt-24 mb-8">Ekonomické vysvětlení provozu</h2>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto mb-24"
          >
            <div className="w-24 h-1 bg-[#0aef0b] mx-auto mb-12" />

            <div className="bg-white rounded-xl shadow-md p-8 mb-12">
              <h3 className="text-2xl font-semibold mb-6">Jak to funguje? Údaje jsou prezentovány jako příklad na vysvětlení:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-[#0aef0b] mb-4">Základní ceny nabíjení</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#0aef0b] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <title>Checkmark ikona</title>
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Cena elektřiny ze sítě: <strong>5 Kč/kWh</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#0aef0b] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <title>Checkmark ikona</title>
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>AC nabíjení (22kW): <strong>10 Kč/kWh</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#0aef0b] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <title>Checkmark ikona</title>
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>DC nabíjení (160kW): <strong>16 Kč/kWh</strong></span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-[#0aef0b] mb-4">Průměrné výnosy</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#0aef0b] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <title>Checkmark ikona</title>
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Marže AC nabíjení: <strong>5 Kč/kWh</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#0aef0b] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <title>Checkmark ikona</title>
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Marže DC nabíjení: <strong>11 Kč/kWh</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#0aef0b] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <title>Checkmark ikona</title>
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Navýšení o vyrobenou el. z FVE: <strong>5 Kč/kWh</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-8 text-center">Modely CARPORT - Detailní ekonomická analýza</h3>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <button 
                  type="button"
                  onClick={() => setActiveCarportTab(1)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeCarportTab === 1 
                      ? 'bg-[#0aef0b] text-white shadow-lg' 
                      : 'bg-[#0aef0b]/10 hover:bg-[#0aef0b]/20 text-gray-800'
                  }`}
                >
                  Ekonomické vysvětlení CARPORT 1
                </button>
                <button 
                  type="button"
                  onClick={() => setActiveCarportTab(2)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeCarportTab === 2
                      ? 'bg-[#0aef0b] text-white shadow-lg' 
                      : 'bg-[#0aef0b]/10 hover:bg-[#0aef0b]/20 text-gray-800'
                  }`}
                >
                  Ekonomické vysvětlení CARPORT 2
                </button>
                <button 
                  type="button"
                  onClick={() => setActiveCarportTab(3)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeCarportTab === 3
                      ? 'bg-[#0aef0b] text-white shadow-lg'
                      : 'bg-[#0aef0b]/10 hover:bg-[#0aef0b]/20 text-gray-800'
                  }`}
                >
                  Ekonomické vysvětlení CARPORT 3
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500">
                {activeCarportTab === 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-8"
                  >
                    <h3 className="text-2xl font-bold text-[#0aef0b] mb-6">Ekonomické vysvětlení CARPORT 1</h3>
                    <h4 className="text-xl mb-6">Modelový příklad jednoho modulu „CARPORT 1" s 12 parkovacími místy:</h4>
                    
                    <ul className="space-y-4 text-lg">
                      <li className="flex items-start gap-4">
                        <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                        <span>Pořizovací cena dle vybavení cca. 3,500,000,- Kč bez DPH v závislosti na uložišti a dalších detailech.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                        <span>Výkon modulu CARPORT 1 je 30kWp, tedy cca 200kWh/den s naší inovativní technologií.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                        <span>Roční průměrná výrobní kapacita 200kWh x 365dní = 73MWh. Životnost zařízení elektrárny 30 let.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                        <span>Počet nabíječek: 1 x rychlonabíječka DC 160kW – (cca. 20-40 min. nabíjení dle baterie a modelu vozu), 5 x nabíječka 22kW (5 hodin nabíjení).</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                        <span>Kapacita uložiště 150kWh.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                        <span>V případě připojení CARPORTU na síť je výnos vyšší přes rychlonabíječku.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                        <span>Návratnost investice za 3-4 roky. Dle připojení na síť a frekventovanosti nabíjení.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                        <span>Soběstačná rychlonabíječka 160kW bez připojení na síť je od modelu CARPORT 6, který má instalovaný výkon 180kWp.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                        <span>Průměrný výnos cca. 1 000 000 Kč /rok.</span>
                      </li>
                    </ul>
                  </motion.div>
                )}
                
                {activeCarportTab === 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-8"
                  >
                    <h3 className="text-2xl font-bold text-[#0aef0b] mb-6">Ekonomické vysvětlení CARPORT 2</h3>
                    <h4 className="text-xl mb-6">Modelový příklad 2x modul „CARPORT 2" s 24 parkovacími místy:</h4>
                    
                    <ul className="space-y-4 text-lg">
                      <li className="flex items-start gap-4">
                        <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                        <span>Pořizovací cena dle vybavení cca. 5,290,000,- Kč bez DPH v závislosti na uložišti a dalších detailech.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                        <span>Výkon modulu CARPORT 1 je 60kWp x 8 hodin svitu denně, tedy 400kWh/den s naší inovativní technologií.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                        <span>Roční průměrná výrobní kapacita 400kWh x 365dní = 146MWh.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                        <span>Životnost zařízení elektrárny 30 let.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                        <span>Počet nabíječek: 1 x rychlonabíječka DC 160kW – (cca. 20-40 min. nabíjení dle baterie a modelu vozu), 5 x nabíječka 22 kW (5 hodin nabíjení).</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                        <span>Kapacita uložiště 150kWh.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                        <span>V případě připojení CARPORTU na síť je výnos vyšší přes rychlonabíječku.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                        <span>Návratnost investice za 3-4 roky. Dle připojení na síť a frekventovanosti nabíjení.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                        <span>Soběstačná rychlonabíječka 160kW bez připojení na síť je od modelu CARPORT 6, který má instalovaný výkon 180kWp.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                        <span>Průměrný výnos cca. 1,500,000 Kč /rok.</span>
                      </li>
                    </ul>
                  </motion.div>
                )}
                
                {activeCarportTab === 3 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-8"
                  >
                    <h3 className="text-2xl font-bold text-[#0aef0b] mb-6">Ekonomické vysvětlení CARPORT 3</h3>
                    <h4 className="text-xl mb-6">Modelový příklad 3x modul „CARPORT 3" s 36 parkovacími místy:</h4>
                    
                    <ul className="space-y-4 text-lg">
                      <li className="flex items-start gap-4">
                        <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                        <span>Pořizovací cena dle vybavení cca. 6,590,000,- Kč bez DPH v závislosti na uložišti a dalších detailech.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                        <span>Výkon modulu CARPORT 1 je 90kWp x tedy 600 kWh/den s naší inovativní technologií.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                        <span>Roční průměrná výrobní kapacita 600kWh x 365dní = 219MWh.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                        <span>Životnost zařízení elektrárny 30 let.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                        <span>Počet nabíječek: 1 x rychlonabíječka DC 160kW – (cca. 20-40 min. nabíjení dle baterie a modelu vozu), 5 x nabíječka 22 kW (5 hodin nabíjení).</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                        <span>Kapacita uložiště 150kWh.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                        <span>V případě připojení CARPORTU na síť je výnos vyšší přes rychlonabíječku.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                        <span>Návratnost investice za 3-4 roky. Dle připojení na síť a frekventovanosti nabíjení.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                        <span>Soběstačná rychlonabíječka 160kW bez připojení na síť je od modelu CARPORT 6, který má instalovaný výkon 180kWp.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                        <span>Průměrný výnos cca. 2,000,000 Kč /rok.</span>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </div>
            </div>
            
            <div className="mt-10">
              <ROICalculator />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto mb-24"
          >
            <h2 className="text-4xl font-bold text-center mb-12">
              Popis elektrárny
            </h2>
            <div className="w-24 h-1 bg-[#0aef0b] mx-auto mb-12" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
              <div className="relative aspect-square w-full">
                <Image
                  src="/images/products/rti_carport/elektrarny-schema.gif"
                  alt="Schéma hybridní elektrárny"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="space-y-6">
                <p>
                  Hlavní součástí hybridních elektráren je Hybridní měnič, který má vstup z baterií pro ostrovní režim a vstup z distribuční sítě pro přepnutí na tuto zálohu.
                </p>
                <p>
                  Jedná se o měnič napětí a nabíječku v jednom. Zahrnuje čistě sinusový měnič, adaptivní nabíjení, hybridní technologii PowerAssist a další funkce pro integraci do různých typů systémů.
                </p>
                <p>
                  Vybaven je jedním AC vstupem pro připojení distribuční sítě nebo např. generátoru. Výstup AC1 zajistí dodávky energie bez přerušení např. v režimu UPS MultiPlus převezme napájení připojených spotřebičů za méně než 20 milisekund v případě výpadku distribuční sítě nebo generátoru.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-center mb-8">Galerie hybridních elektráren</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <button 
                  className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 p-0 border-0 focus:outline-none focus:ring-2 focus:ring-[#0aef0b]"
                  onClick={() => openImageModal('/images/products/rti_carport/elektrarny/elektrarny-2.jpg')}
                  aria-label="Zobrazit velký obrázek hybridní elektrárny 2"
                  type="button"
                >
                  <Image
                    src="/images/products/rti_carport/elektrarny/elektrarny-2.jpg"
                    alt="Hybridní elektrárna - detail 2"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </button>
                <button 
                  className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 p-0 border-0 focus:outline-none focus:ring-2 focus:ring-[#0aef0b]"
                  onClick={() => openImageModal('/images/products/rti_carport/elektrarny/elektrarny-3.jpg')}
                  aria-label="Zobrazit velký obrázek hybridní elektrárny 3"
                  type="button"
                >
                  <Image
                    src="/images/products/rti_carport/elektrarny/elektrarny-3.jpg"
                    alt="Hybridní elektrárna - detail 3"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </button>
                <button 
                  className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 p-0 border-0 focus:outline-none focus:ring-2 focus:ring-[#0aef0b]"
                  onClick={() => openImageModal('/images/products/rti_carport/elektrarny/elektrarny-4.jpg')}
                  aria-label="Zobrazit velký obrázek hybridní elektrárny 4"
                  type="button"
                >
                  <Image
                    src="/images/products/rti_carport/elektrarny/elektrarny-4.jpg"
                    alt="Hybridní elektrárna - detail 4"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </button>
              </div>
            </div>

            {/* Video simulace výstavby konstrukce */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8">Simulace výstavby konstrukce</h3>
              <div className="max-w-4xl mx-auto">
                <div className="video-container">
                  {(() => {
                    const [videoRef, videoInView] = useInView({
                      triggerOnce: false,
                      threshold: 0.5, // Video se spustí, když je alespoň 50% viditelné
                    });
                    
                    useEffect(() => {
                      // Když je video viditelné, spustíme ho
                      const videoElement = document.getElementById('construction-video') as HTMLVideoElement | null;
                      if (videoInView && videoElement) {
                        videoElement.play().catch(error => console.log('Automatic playback failed:', error));
                      } else if (!videoInView && videoElement) {
                        videoElement.pause();
                      }
                    }, [videoInView]);
                    
                    return (
                      <video 
                        id="construction-video"
                        ref={videoRef}
                        className="w-full rounded-xl shadow-lg"
                        controls
                        preload="metadata"
                        muted
                        playsInline
                        loop
                      >
                        <source src="/videos/konstrukce.mp4" type="video/mp4" />
                        Váš prohlížeč nepodporuje přehrávání videa.
                      </video>
                    );
                  })()}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto mb-24"
          >
            <div className="w-24 h-1 bg-[#0aef0b] mx-auto mb-12" />

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-semibold mb-8">Hybridní fotovoltaické elektrárny s nabíječkami</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <button 
                      className="relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 p-0 border-0 focus:outline-none focus:ring-2 focus:ring-[#0aef0b] rounded-xl w-full"
                      onClick={() => openImageModal('/images/products/rti_carport/elektrarny/elektrarny-1.jpg')}
                      aria-label="Zobrazit velký obrázek hybridní elektrárny"
                      type="button"
                    >
                      <Image
                        src="/images/products/rti_carport/elektrarny/elektrarny-1.jpg"
                        alt="Hybridní elektrárna - detail 1"
                        width={300}
                        height={225}
                        className="hover:scale-105 transition-transform duration-500 w-full"
                      />
                    </button>
                  </div>
                  <div className="flex flex-col justify-center">
                    <ul className="space-y-6">
                      <li className="flex items-start gap-4">
                        <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                        <span className="text-lg">Do nabíječky je energie distribuována přímo z elektrárny, případně doplněna odběrem z bateriového úložiště a pokud by dodávka z elektrárny nestačila může systém doplnit odběr z vnější distribuční sítě.</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                    <span className="text-lg">Aby nebyl odběr ze sítě příliš nárazový a nedocházelo k velkým výkyvům v odběru, lze systém nastavit tak, že se baterie budou částečně dobíjet ze sítě v období, kdy elektrárna nevyrábí.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                    <span className="text-lg">Celý systém lze ovládat a pokud by se připojilo více odběratelů na rychlonabíjení elektromobilů, systém kapacitu pro jednotlivé nabíječky rozdělí.</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-2xl font-semibold mb-8">Systém ukládání dešťové vody na užitkovou</h3>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                      <span className="text-lg">K již popsaným systémům je možno doplnit nádrž na zachytávání dešťové vody, která může být využívána jako užitková. Přepad z nádrže je napojen na dešťovou kanalizaci.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-2xl font-semibold mb-8">Monitoring a řízení</h3>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                      <span className="text-lg">Vzdálený monitoring a řízení celého systému přes webové rozhraní.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                      <span className="text-lg">Automatické generování reportů o výrobě a spotřebě energie.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                      <span className="text-lg">Notifikace o stavu systému a případných poruchách.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto mb-24"
          >
            <div className="w-24 h-1 bg-[#0aef0b] mx-auto mb-12" />

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-semibold mb-8">CARPORTY pro firmy</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                    <span className="text-lg">Naším cílem je dodávat CARPORTY pro velké výrobní firmy, autosalony, hotely, provozovatele skladů, obchodních center, obchodních řetězců, provozovatelů parkovišť, města, letiště, čerpací stanice, fast foody, ski areály a podobně.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                    <span className="text-lg">Naše technologie je modulární a proto není rozdíl vyrobit CARPORT 1, nebo CARPORT 100.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#0aef0b] text-2xl mt-1 flex-shrink-0">•</span>
                    <span className="text-lg">Vyrobená elektřina z velkých nevyužitých parkovacích ploch pomáhá rapidně snižovat energetickou náročnost velkých budov, výrob a provozoven.</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <button 
                  className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 p-0 border-0 focus:outline-none focus:ring-2 focus:ring-[#0aef0b]"
                  onClick={() => openImageModal('/images/products/rti_carport/business/carport-business-1.jpg')}
                  aria-label="Zobrazit velký obrázek carportu pro firemní klienty"
                  type="button"
                >
                  <Image
                    src="/images/products/rti_carport/business/carport-business-1.jpg"
                    alt="Carport pro firemní klienty - velké parkoviště"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </button>
                <button 
                  className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 p-0 border-0 focus:outline-none focus:ring-2 focus:ring-[#0aef0b]"
                  onClick={() => openImageModal('/images/products/rti_carport/business/carport-business-2.jpg')}
                  aria-label="Zobrazit velký obrázek instalace carportu"
                  type="button"
                >
                  <Image
                    src="/images/products/rti_carport/business/carport-business-2.jpg"
                    alt="Carport pro firemní klienty - instalace"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </button>
              </div>

              <div className="mt-10 text-center">
                <Link 
                  href="/#contact" 
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-[#0aef0b] rounded-lg shadow-lg hover:bg-[#09d40a] transition-colors duration-300"
                >
                  Kontaktujte nás pro firemní řešení
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <title>Šipka vpravo</title>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>

          {isImageModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
              <div className="relative max-w-4xl w-full">
                <button
                  onClick={closeImageModal}
                  className="absolute -top-10 right-0 text-white hover:text-gray-300"
                  aria-label="Zavřít"
                  type="button"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <title>Zavřít modální okno</title>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <Image
                  src={selectedImage}
                  alt="Zvětšený obrázek"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
