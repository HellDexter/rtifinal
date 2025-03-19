import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Products from '../components/Products'
import Contact from '../components/Contact'
import Specialization from '../components/Specialization'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Robotech Innovation | Automatizace a Robotizace Výroby</title>
        <meta name="description" content="Robotech Innovation - Váš partner pro automatizaci a robotizaci výroby. Specializujeme se na robotické svařování, broušení, laserové čištění a solární carporty. Nabízíme komplexní řešení pro moderní průmysl." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="robotizace, automatizace, průmyslové roboty, robotické svařování, robotické broušení, laserové čištění, solární carport, Robotech Innovation" />
        <meta name="author" content="Robotech Innovation" />
        <meta property="og:title" content="Robotech Innovation | Automatizace a Robotizace Výroby" />
        <meta property="og:description" content="Robotech Innovation - Váš partner pro automatizaci a robotizaci výroby. Specializujeme se na robotické svařování, broušení, laserové čištění a solární carporty." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://robotech.cz" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <link rel="canonical" href="https://robotech.cz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="min-h-screen">
          <Navbar />
          <Hero />
          <Products />
          <About />
          <Specialization />
          <Contact />
        </div>
      </main>
    </>
  )
}
