import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const features = [
  {
    title: 'Inovace a vývoj',
    description: 'Neustále posouváme hranice možností v oblasti robotiky a laserových technologií.'
  },
  {
    title: 'Zakázková řešení',
    description: 'Každý projekt přizpůsobujeme na míru konkrétním potřebám zákazníků a dodáváme technologie, které překračují jejich očekávání.'
  },
  {
    title: 'Partnerství na míru',
    description: 'Jsme s vámi na každém kroku – od prvotního návrhu až po finální instalaci a následný servis. Nabízíme osobní přístup, na který se můžete spolehnout.'
  }
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="about" ref={ref} className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center group"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            O společnosti <span className="transition-colors duration-300 group-hover:text-[#00ff00]">Robotech Innovation</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-16">
            Naše technologická společnost staví na více než 20 letech zkušeností týmu profesionálů v oblasti výroby a dodávek průmyslových robotických technologií. Přestože jsme na trhu novým hráčem, těžíme z bohatých znalostí a inovativních přístupů, které jsme získali při realizaci desítek projektů napříč různými odvětvími. Díky těmto zkušenostem, spolupráci s předními odborníky a přístupu k nejmodernějším technologiím přinášíme na trh řešení splňující nejvyšší standardy kvality.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                className="relative p-8 bg-white dark:bg-gray-700 rounded-lg shadow-lg group hover:shadow-xl transition-all duration-300"
              >
                <h3 className="mt-8 text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
