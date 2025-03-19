import { motion } from 'framer-motion'
import { MdArrowForward, MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import { BsBuilding } from 'react-icons/bs'
import { FaUserTie } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Kontaktujte nás
          </h2>
          <div className="w-24 h-1 bg-[#00ff00] mx-auto mb-8" />
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-900 leading-relaxed">
              Zjistěte, jak vám naše technologie mohou pomoci optimalizovat výrobní procesy a zvýšit efektivitu vašeho provozu.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Kontaktní informace - přímý odkaz na obchodní oddělení */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-6">Kontaktujte naše obchodní oddělení</h3>
            
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#00ff00] mb-6">
              <div className="flex items-start">
                <BsBuilding className="text-[#00ff00] text-2xl flex-shrink-0 mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold text-xl text-gray-900 mb-2">Tomáš Nádvorník</h4>
                  <div className="space-y-2 text-lg">
                    <div className="flex items-center">
                      <MdPhone className="text-[#00ff00] text-xl mr-3" />
                      <a 
                        href="tel:+420775265819" 
                        className="text-gray-700 hover:text-[#00ff00] transition-colors duration-300"
                      >
                        +420 775 265 819
                      </a>
                    </div>
                    <div className="flex items-center">
                      <MdEmail className="text-[#00ff00] text-xl mr-3" />
                      <a 
                        href="mailto:tomas.nadvornik@robotech-innovation.cz" 
                        className="text-gray-700 hover:text-[#00ff00] transition-colors duration-300"
                      >
                        tomas.nadvornik@robotech-innovation.cz
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">
              Máte zájem o naše produkty nebo služby? Neváhejte kontaktovat naše obchodní oddělení.
              Tomáš Nádvorník vám rád poskytne veškeré informace a odpovědi na vaše dotazy.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="tel:+420775265819"
                className="flex items-center justify-center bg-[#0aef0b] hover:bg-[#09d60a] text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300 flex-1"
              >
                <MdPhone className="mr-2" /> Zavolat
              </a>
              <a 
                href="mailto:tomas.nadvornik@robotech-innovation.cz"
                className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-md transition-colors duration-300 flex-1"
              >
                <MdEmail className="mr-2" /> E-mail
              </a>
            </div>
          </motion.div>

          {/* Kontaktní informace */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-md space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Kde nás najdete</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MdLocationOn className="text-[#00ff00] text-xl flex-shrink-0 mt-1 mr-2" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Adresa</h4>
                    <a 
                      href="https://maps.google.com/?q=Chudenická+1059/30,+Praha+Hostivař,+102+00"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 block hover:text-[#00ff00] transition-colors duration-300"
                    >
                      Chudenická 1059/30<br />
                      Praha Hostivař<br />
                      102 00, Česká republika
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MdEmail className="text-[#00ff00] text-xl flex-shrink-0 mt-1 mr-2" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Obecný kontakt</h4>
                    <a 
                      href="mailto:info@robotech-innovation.cz"
                      className="text-gray-600 block hover:text-[#00ff00] transition-colors duration-300"
                    >
                      info@robotech-innovation.cz
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaUserTie className="text-[#00ff00] text-xl flex-shrink-0 mt-1 mr-2" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Jednatelka</h4>
                    <div className="text-gray-600">
                      <p>Monika Kerešťanová</p>
                      <div className="flex items-center mt-1">
                        <MdPhone className="text-[#00ff00] mr-2" />
                        <span>+420 776 803 155</span>
                      </div>
                      <div className="flex items-center mt-1">
                        <MdEmail className="text-[#00ff00] mr-2" />
                        <a 
                          href="mailto:monika.kerestanova@robotech-innovation.cz"
                          className="hover:text-[#00ff00] transition-colors duration-300"
                        >
                          monika.kerestanova@robotech-innovation.cz
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <BsBuilding className="text-[#00ff00] text-xl flex-shrink-0 mt-1 mr-2" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Obchodní oddělení</h4>
                    <div className="text-gray-600">
                      <p>Tomáš Nádvorník</p>
                      <div className="flex items-center mt-1">
                        <MdPhone className="text-[#00ff00] mr-2" />
                        <span>+420 775 265 819</span>
                      </div>
                      <div className="flex items-center mt-1">
                        <MdEmail className="text-[#00ff00] mr-2" />
                        <a 
                          href="mailto:tomas.nadvornik@robotech-innovation.cz"
                          className="hover:text-[#00ff00] transition-colors duration-300"
                        >
                          tomas.nadvornik@robotech-innovation.cz
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <BsBuilding className="text-[#00ff00] text-xl flex-shrink-0 mt-1 mr-2" />
                  <div>
                    <h4 className="font-semibold text-gray-900">IČ</h4>
                    <span className="text-gray-600">22244018</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
