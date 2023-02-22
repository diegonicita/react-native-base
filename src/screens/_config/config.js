export const configTab = {
  name: {
    tab1: 'Inicio',
    tab2: 'Explorar',
    tab3: 'Mi Club',
    tab4: 'Perfil'
  },
  icon: {
    tab1: 'home',
    tab2: 'search',
    tab3: 'people-circle',
    tab4: 'person'
  }
}

export const configStack = {
  name: {
    stackTabRoutes: 'React Native Developer',
    stack2: 'Explorar',
    stack3: 'Mi Club',
    stack4: 'Perfil'
  }
}

const images = [
  require('../../assets/picture.jpg'),
  require('../../assets/batistuta.jpg'),
  require('../../assets/riverboca.jpg'),
  require('../../assets/infootball.png')
]
export const configHome = {
  webWidth: 600,
  webMaxWidth: 700,
  webAlignSelf: 'center',
  title: 'Curriculum Vitae',
  bigCard: [
    {
      title: {
        english: 'Diego Nicita',
        spanish: 'Diego Nicita'
      },
      news: {
        text: {
          english:
            'I am an independent web developer with over a decade of experience in programming as a hobbyist. Over the past two years, I have been intensively practicing web development with the goal of pursuing my passion for coding.',
          spanish:
            'Soy un desarrollador web independiente con más de una década de experiencia en programación como aficionado. En los últimos dos años, he estado practicando de manera intensiva el desarrollo web con el objetivo de perseguir mi pasión por la codificación.'
        },
        author: 'Diego',
        time: {
          english: '1 minute ago',
          spanish: 'Hace 1 minuto'
        },
        image: images[0]
      }
    },
    {
      title: {
        english: 'Infootball - A React Native App',
        spanish: 'Infootball - App desarrollada con React Native'
      },
      news: {
        text: {
          english: 'A Mobile Application to manage soccer scouting',
          spanish:
            'Una aplicacion mobil para administrar el scouting de jugadores de futbol'
        },
        author: 'Diego',
        time: {
          english: '2 minutes ago',
          spanish: 'Hace 2 minutos'
        },
        image: images[3]
      }
    },
    {
      title: {
        english:
          'Coffee App - A Single Page Application',
        spanish: 'Infootball - App desarrollada con react native'
      },
      news: {
        text: {
          english: 'A Single Page Application to help people find and rate coffee shops',
          spanish:
            'Una Single Page App para encontrar cafeterias y calificarlas'
        },
        author: 'Diego',
        time: {
          english: '3 minutes ago',
          spanish: 'Hace 3 minutos'
        },
        image: images[3]
      }
    },
    {
      title: {
        english: 'CinemaApp - A React Native App',
        spanish: 'CinemaApp - App desarrollada con React Native'
      },
      news: {
        text: {
          english: 'A Mobile Application to manage the ticket sales of a cinema',
          spanish:
            'Una aplicacion mobil para administrar la venta de entradas para un cine'
        },
        author: 'Diego',
        time: {
          english: '4 minutes ago',
          spanish: 'Hace 4 minutos'
        },
        image: images[3]
      }
    },
  ],
  list: {
    title: 'Resumen del dia',
    news: [
      {
        text: 'D. Nicita tiene un nuevo Curriculum Vitae realizado con React Native',
        image: images[2]
      },
      {
        text: 'Ahora estoy usando imagenes generadas por la IA de MidJourney',
        image: images[0]
      },
      {
        text: 'Tambien voy a agregar contenido generado por ChatGPT',
        image: images[1]
      }
    ]
  }
}
