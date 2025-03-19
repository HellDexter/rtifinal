import { motion, useInView } from 'framer-motion'
import { FaRobot, FaIndustry } from 'react-icons/fa'
import { HiOutlineLightBulb } from 'react-icons/hi'
import { useRef } from 'react'

const services = [
  {
    title: 'Robotické systémy',
    description: 'Komplexní řešení pro automatizaci výroby s využitím nejmodernějších robotických technologií.',
    icon: <FaRobot className="w-full h-full text-[#0aef0b]" />,
    delay: 0.1
  },
  {
    title: 'Laserové aplikace',
    description: 'Specializované laserové systémy pro průmyslové využití s důrazem na přesnost a efektivitu.',
    icon: <HiOutlineLightBulb className="w-full h-full text-[#0aef0b]" />,
    delay: 0.2
  },
  {
    title: 'Automatizace',
    description: 'Návrh a implementace automatizovaných výrobních linek a procesů pro zvýšení produktivity.',
    icon: <FaIndustry className="w-full h-full text-[#0aef0b]" />,
    delay: 0.3
  }
]

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5 });

  return (
    <section id="services" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Naše služby
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: service.delay }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg border-2 border-transparent hover:border-[#0aef0b] transition-all duration-300 group cursor-default"
            >
              <div className="w-20 h-20 mx-auto mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
