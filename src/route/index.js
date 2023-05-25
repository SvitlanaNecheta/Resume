// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Svitlana',
    lastname: 'Necheta',
  },
  position: 'Junior Fullstack JS Developer',
  address: 'Ukraine, Kharkov city, Valentinovska street 20',
  salary: '600$ в місяць',
}
var footer = {
  social: {
    email: {
      text: 'sn_1@ukr.net',
      href: 'mailto:sn_1@ukr.net',
    },
    phone: {
      text: '+380507502905',
      href: 'tel:+380507502905',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/%D1%81%D0%B2%D0%B5%D1%82%D0%BB%D0%B0%D0%BD%D0%B0-%D0%BD%D0%B5%D1%87%D0%B5%D1%82%D0%B0-188847197/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BqJgfrqVgTyOs0LxnWrRT8g%3D%3D',
    },
  },
}

//=================================================================
// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

router.get('/summary', function (req, res) {
  res.render('summary', {
    page: { title: 'Resume/Summary' },
    header,
    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development.
      Whenever I start to work on a new project I learn the domain and try to understand the idea of the project.
      Good team player, every colleague is a friend to me.`,
      },
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics
       (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such
       events like: money line - first win / draw / second win, totals etc.`,
      },
    },
    footer,
  })
})
// ================================================================
router.get('/skills', function (req, res) {
  res.render('skills', {
    page: { title: 'Resume/Skills' },
    header,
    main: {
      skills: [
        { name: 'HTML', point: 10, isTop: true },
        { name: 'Handlebars', point: 10, isTop: true },
        { name: 'VS Code', point: 8, isTop: false },
        { name: 'Git', point: 10, isTop: true },
        { name: 'Terminal', point: 9, isTop: false },
        { name: 'NPM', point: 8 },
        { name: 'JS.React', point: 0 },
        { name: 'HTP', point: null },
      ],
      hobbies: [
        { name: 'Knitting', isMain: true },
        { name: 'Yoga', isMain: false },
        { name: 'Travelingt', isMain: true },
        { name: 'Reading', isMain: false },
      ],
    },
    footer,
  })
})

router.get('/edication', function (req, res) {
  res.render('edication', {
    page: { title: 'Resume/Edication' },
    header,
    main: {
      edication: [
        {
          name: 'National aerospace university "Kharkiv Aviation Institute"',
          isEnd: true,
        },
        {
          name: 'Course "Accounting", Institute for Training of Personnel for Management and Economics',
          isEnd: true,
        },
        {
          name: 'Course "Full stack JS", IT Brains school',
          isEnd: false,
        },
        {
          name: 'English courses, "Study LESS"',
          isEnd: false,
        },
      ],
      certificates: [
        { name: 'Спеціаліст', id: 15261370 },
        { name: 'Бухгалтер', id: 51 },
        { name: 'Full stack розробник', id: 111111 },
      ],
    },
    footer,
  })
})
router.get('/work', function (req, res) {
  res.render('work', {
    page: { title: 'Resume/Work' },
    layout: 'big',
    header,
    main: {
      works: [
        {
          position: 'junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua/',
          },
          urlOK: true,
          duration: {
            from: '10.10.2022',
            to: '05.05.2023',
          },
          projectAmount: 3,
        },
        {
          position: 'Accountant',
          company: {
            name: 'CORTES-A LTD',
            url: null,
          },
          urlOK: false,
          duration: {
            from: '01.09.2003',
            to: null,
          },
          projectAmount: 4,
          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua/',
              about:
                'Airbnb competitor, High-load application for searching apartments',
              stacks: [
                { name: 'React JS' },
                { name: 'HTML/CSS' },
                { name: 'NodeJS' },
              ],
              stackAmoGnt: 5,
              awardAmoGnt: 4,
              awards: [
                {
                  name: 'Background verification - is a feature that provides users to prove that they are rel persons',
                },
                {
                  name: 'Preparing SEO optimized pages. The automated process of getting data for the app from documents.',
                },
              ],
            },
          ],
        },
      ],
    },
    footer,
  })
})
// ================================================================

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/bootstrap', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('bootstrap', {})
  //                  ↑↑ сюди вводимо JSON дані
})
// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/task31', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('task31', {
    layout: 'basic',
    navigation: {
      links: [
        {
          text: 'Home',
          href: 'https://github.com/',
        },
        {
          text: 'Contacts',
          href: 'https://www.google.com/',
        },
        {
          text: 'Help',
          href: 'https://www.youtube.com/',
        },
      ],
      button: {
        text: 'Lets start',
        href: 'https://nodejs.org/en/',
      },
    },
    header: {
      title: 'Welcome to Our Website',
      description:
        'We offer innovative solutions to help grow your business. Our team of experts is committed to providing tailored strategies that deliver the best results.',
      button: {
        text: 'Learn More',
        link: 'https://www.youtube.com/',
      },
    },
    city: {
      title: 'City list',
      cards: [
        {
          picture: {
            src: 'https://picsum.photos/400/200',
            alt: 'New York',
          },
          title: 'New York City',
          description:
            'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park.',
          button: {
            text: 'Read',
            href: 'https://github.com/',
          },
        },
        {
          picture: {
            src: 'https://picsum.photos/400/200',
            alt: 'Paris',
          },
          title: 'Paris',
          description:
            "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy, and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture, haute couture fashion houses, and designer boutiques along the Rue du Faubourg Saint-Honoré.",
          button: {
            text: 'Read',
            href: 'https://github.com/',
          },
        },
        {
          picture: {
            src: 'https://picsum.photos/400/200',
            alt: 'Tokyo',
          },
          title: 'Tokyo',
          description:
            "Tokyo, Japan’s bustling capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The city's many museums offer exhibits ranging from classical art (in the Tokyo National Museum) to a reconstructed kabuki theater (in the Edo-Tokyo Museum).",
          button: {
            text: 'Reac',
            href: 'https://github.com/',
          },
        },
        {
          picture: {
            src: 'https://picsum.photos/400/200',
            alt: 'Sydney',
          },
          title: 'Sydney',
          description:
            "Sydney, capital of New South Wales and one of Australia's largest cities, is best known for its harborfront Opera House, with a distinctive sail-like design. Massive Darling Harbour and the smaller Circular Quay port are hubs of waterside life, with the arched Harbour Bridge and esteemed Royal Botanic Garden nearby. Sydney Tower’s outdoor platform, the Skywalk, offers 360-degree views of the city and suburbs.",
          button: {
            text: 'Reac',
            href: 'https://github.com/',
          },
        },
      ],
    },
    winner: {
      title: 'Our winners',
      table: {
        head: ['#', 'name', 'surname', 'nickname'],
        user: [
          {
            place: 1,
            name: 'Ada',
            surname: 'Lovelace',
            nickname: 'The Enchantress of Numbers',
          },
          {
            place: 2,
            name: 'Grace',
            surname: 'Hopper',
            nickname: 'Amazing Grace',
          },
          {
            place: 3,
            name: 'Katherine',
            surname: 'Johnson',
            nickname: 'The Human Computer',
          },
        ],
      },
    },
    gallery: {
      title: 'Picture history',
      cards: [
        {
          name: 'The Mona Lisa',
          items: [
            'Painting',
            'Oil on poplar panel',
            '1503-1519',
          ],
        },
        {
          name: 'The Persistence of Memory',
          items: ['Painting', 'Oil on canvas', '1931'],
        },
        {
          name: 'The Starry Night',
          items: ['Painting', 'Oil on canvas', '1889'],
        },
      ],
    },
    relaxion: {
      title: 'Relax',
      cards: [
        {
          header: 'Meditation',
          title: 'The Benefits of Meditation',
          description:
            'Meditation can help reduce stress, anxiety, and depression, and improve overall well-being. Studies have also shown that regular meditation practice can enhance cognitive function and even boost the immune system.',
        },
        {
          header: 'Hydration',
          title: 'The Importance of Hydration',
          description:
            'Drinking enough water is essential for good health. Dehydration can lead to a range of symptoms, including fatigue, headaches, and constipation. It can also increase the risk of kidney stones and other health problems.',
        },
        {
          header: 'Yoga',
          title: 'The Benefits of Yoga',
          description:
            'Yoga can improve flexibility, strength, and balance, and help reduce stress and anxiety. It has also been shown to improve heart health and promote a sense of well-being.',
        },
        {
          header: 'Sunscreen',
          title: 'The Importance of Sunscreen',
          description:
            "Protecting your skin from the sun's harmful rays is crucial for reducing the risk of skin cancer and premature aging. Experts recommend using a broad-spectrum sunscreen with an SPF of at least 30 and reapplying every two hours.",
        },
      ],
    },
    rest: {
      cards: [
        {
          header: 'Cooking',
          title: 'The Joy of Cooking',
          description:
            'Cooking is a creative outlet that can bring people together over delicious food.',
          button: 'Learn More',
          footer: 'Photo by Brooke Lark on Unsplash',
        },
        {
          header: 'Travel',
          title: 'The Benefits of Traveling',
          description:
            'Traveling broadens your perspective, provides new experiences, and creates lasting memories.',
          button: 'Explore',
          footer: 'Photo by Sime Basioli on Unsplash',
        },
      ],
    },
    proposition: {
      title: 'Proposition',
      card: [
        {
          header: 'Our Approach',
          title: 'Innovative Solutions for Your Business',
          description:
            'We create effective solutions that cater to your business needs.',
        },
        {
          header: 'Our Expertise',
          title: 'Trusted and Experienced Professionals',
          description:
            'Our team of experts delivers tailored strategies for best results.',
        },
      ],
    },
    footer: {
      title: 'Navigation',
      navigation: [
        {
          text: 'Home',
          href: 'https://github.com/',
        },
        {
          text: 'Contacts',
          href: 'https://www.google.com/',
        },
        {
          text: 'Help',
          href: 'https://www.youtube.com/',
        },
      ],
      socialMedia: [
        {
          name: 'Facebook',
          link: 'https://www.facebook.com/',
        },
        {
          name: 'Twitter',
          link: 'https://twitter.com/',
        },
        {
          name: 'Instagram',
          link: 'https://www.instagram.com/',
        },
      ],
      partners: [
        {
          name: 'Acme Inc.',
          link: 'https://www.acme.com/',
        },
        {
          name: 'Globex Corporation',
          link: 'https://www.globex.com/',
        },
        {
          name: 'Stark Industries',
          link: 'https://www.starkindustries.com/',
        },
      ],
    },
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
