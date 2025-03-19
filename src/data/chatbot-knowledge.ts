export const chatbotKnowledge = {
  company: {
    name: 'Robotech Innovation',
    specialization: [
      'Robotické svařování',
      'Laserové svařování',
      'Laserové čištění',
      'Robotické broušení',
      'Solární carporty'
    ],
  },

  products: {
    roboticWelding: {
      title: 'Robotické svařování',
      description: 'Automatizované svařovací systémy pro maximální efektivitu a přesnost.',
      technologies: ['MIG/MAG', 'TIG', 'LASER'],
      features: {
        migmag: {
          current: '30-400 A',
          duty60: '400 A',
          duty100: '310 A',
          voltage: '3x400 V',
          protection: '32 A',
          ipRating: 'IP 23',
          wireSpeed: '0,5-25 m/min',
          wireDiameter: '0,6-1,6 mm',
          cooling: 'vodní'
        },
        tig: {
          current: '3-350 A',
          duty60: '350 A',
          duty100: '300 A',
          voltage: '3x400 V',
          protection: '25 A',
          ipRating: 'IP 23',
          electrodeDiameter: '1,0-4,0 mm',
          wireDiameter: '0,6-1,6 mm',
          cooling: 'vodní'
        },
        laser: {
          power: '2000 W',
          wavelength: '1080 nm',
          fiberDiameter: '50 μm',
          voltage: '3x400 V',
          protection: '32 A',
          ipRating: 'IP 54',
          wireDiameter: '0,8-1,2 mm',
          cooling: 'vodní',
          waterConsumption: '15 l/min'
        }
      },
      workstations: {
        hSeries: {
          features: [
            'Průmyslový robot FANUC ARC MATE 100iD 8L s dosahem 2032 mm',
            '2x jednoosé polohovadlo s protiložiskem FANUC nosnost 1000 kg',
            'Bezpečnostní optické závory REER',
            'Bezpečnostní ocelové oplocení',
            'Dotykové vyhledávání dílů',
            'Automatická korekce dráhy'
          ]
        }
      }
    },

    laserWelding: {
      title: 'Svařovací lasery',
      description: 'Špičkové laserové technologie pro přesné a efektivní svařování různých materiálů.',
      advantages: [
        'Vysoká přesnost a kvalita svarů',
        'Minimální tepelné ovlivnění materiálu',
        'Nejnovější generace vláknových a diodových laserů',
        'Vysoká účinnost a spolehlivost',
        'Nízké provozní náklady',
        'Uzavřené bezpečnostní buňky dle norem'
      ]
    },

    roboticGrinding: {
      title: 'Robotické broušení',
      description: 'Automatizované brousicí systémy pro dokonalou povrchovou úpravu.',
      features: [
        'Vysoká přesnost',
        'Flexibilita pro různé materiály',
        'Zvýšená produktivita',
        'Adaptivní řízení',
        'Pokročilé senzory',
        'Real-time monitoring',
        'Automatická úprava parametrů'
      ]
    },

    cleaningLasers: {
      title: 'Čisticí lasery',
      description: 'Ekologické a efektivní řešení pro čištění povrchů pomocí laserové technologie.',
      applications: [
        {
          area: 'Průmyslové čištění',
          uses: ['Odstranění oxidů', 'Čištění forem', 'Příprava povrchů', 'Odmaštění']
        },
        {
          area: 'Restaurování',
          uses: ['Čištění památek', 'Obnova povrchů', 'Odstraňování nátěrů', 'Konzervace']
        },
        {
          area: 'Speciální aplikace',
          uses: ['Čištění elektroniky', 'Příprava pro svařování', 'Dekontaminace', 'Značení a gravírování']
        }
      ],
      specifications: {
        type: 'Mobilní nebo stacionární',
        power: '1kW až 8kW',
        sources: 'Různé typy',
        extraction: 'Integrované',
        safety: 'Komplexní bezpečnostní prvky',
        automation: 'Možnost plné automatizace'
      }
    },

    solarCarport: {
      title: 'Solární Carport',
      description: 'Moderní řešení pro parkování s integrovanými solárními panely.',
      features: {
        solarSystem: [
          'Vysoce účinné solární panely',
          'Inteligentní měnič napětí',
          'Monitoring výroby energie',
          'Možnost ukládání energie'
        ],
        construction: [
          'Robustní ocelová konstrukce',
          'Střešní krytina ze solárních panelů',
          'LED osvětlení',
          'Odolnost proti větru a sněhu'
        ],
        accessories: [
          'Nabíjecí stanice pro elektromobily',
          'Dešťové okapy a svody',
          'Integrované osvětlení'
        ]
      },
      specifications: {
        dimensions: '3x5m, 3x6m, systém je modulární',
        height: '2,2 - 2,8m',
        solarPower: 'u modulu 3x5m až 3,2kWp',
        roofLoad: '150 kg/m²',
        warranty: '20 let na konstrukci',
        certification: 'CE'
      },
      applications: [
        {
          type: 'Komerční využití',
          description: 'Ideální pro obchodní domy, firmy a hotely s možností rychlonabíjecích DC stanic.'
        },
        {
          type: 'Rezidenční využití',
          description: 'Vhodné pro rodinné domy s AC nabíječkou pro elektromobily.'
        },
        {
          type: 'Parkoviště',
          description: 'Řešení pro zastřešení celých parkovišť s integrovaným solárním systémem.'
        }
      ]
    }
  },

  chatbotBehavior: {
    primaryGoals: [
      'Poskytovat odborné informace o produktech a službách',
      'Pomáhat zákazníkům s výběrem vhodného řešení',
      'Odpovídat na technické dotazy',
      'Získávat kontaktní informace pro obchodní tým'
    ],
    contactCollection: {
      approach: 'Citlivě získávat kontaktní údaje po poskytnutí hodnoty zákazníkovi',
      questions: [
        'Mohu vám poslat detailní informace na email?',
        'Rádi bychom vám připravili konkrétní nabídku, můžete mi prosím sdělit váš kontakt?',
        'Pro lepší představu o vašich potřebách, můžeme si domluvit krátkou konzultaci?'
      ]
    },
    responses: {
      greeting: 'Dobrý den, jsem AI asistent společnosti Robotech Innovation. Jak vám mohu pomoci s našimi produkty a službami?',
      noKnowledge: 'Omlouvám se, ale tuto informaci nemám k dispozici. Mohu vás spojit s našimi specialisty?',
      contactRequest: 'Abychom vám mohli lépe poradit s vaším projektem, bylo by možné získat na vás kontakt?',
      farewell: 'Děkuji za váš zájem. Pokud budete mít další dotazy, jsem vám k dispozici.'
    }
  }
};
