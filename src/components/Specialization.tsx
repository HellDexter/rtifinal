import { motion } from 'framer-motion'
import { GiRobotGrab, GiLaserWarning, GiFactory } from 'react-icons/gi'
import { MdSolarPower } from 'react-icons/md'

const specializations = [
  {
    title: 'Robotické systémy',
    description: 'Komplexní řešení pro automatizaci výroby s využitím nejmodernějších robotických technologií',
    icon: <GiRobotGrab className="w-full h-full text-[#00ff00]" />
  },
  {
    title: 'Laserové aplikace',
    description: 'Specializované laserové systémy pro průmyslové využití s důrazem na přesnost a efektivitu',
    icon: <GiLaserWarning className="w-full h-full text-[#00ff00]" />
  },
  {
    title: 'Automatizace',
    description: 'Návrh a implementace automatizovaných výrobních linek a procesů pro zvýšení produktivity',
    icon: <GiFactory className="w-full h-full text-[#00ff00]" />
  },
  {
    title: 'Solární technologie a elektromobilita',
    description: 'Nabízíme inovativní řešení pro Carporty, zvyšování efektivity solárních panelů a pokročilou elektroniku pro nabíjení elektromobilů.',
    icon: <MdSolarPower className="w-full h-full text-[#00ff00]" />
  }
]

const Specialization = () => {
  return (
    <section id="specialization" className="py-20 scroll-mt-[4.5rem]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Naše specializace
        </h2>
        <div className="w-24 h-1 bg-[#00ff00] mx-auto mb-16"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specializations.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group h-full flex flex-col cursor-default"
            >
              <div className="w-20 h-20 mx-auto mb-6">
                {spec.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-center transition-colors duration-300">
                {spec.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed flex-grow">
                {spec.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Specialization
