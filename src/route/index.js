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

router.get('/car', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('car', {
    layout: 'basic',
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    color: 'silver',
    features: {
      interior: {
        seats: {
          material: 'leather',
          color: 'black',
          heated: true,
          ventilated: true,
        },
        dashboard: {
          material: 'plastic',
          color: 'black',
          display: {
            type: 'LCD',
            size: 10.1,
            resolution: '1280x720',
            touchscreen: true,
          },
        },
        audio: {
          system: 'JBL',
          speakers: 8,
          subwoofer: true,
          bluetooth: true,
          USB: true,
        },
      },
      exterior: {
        wheels: {
          size: 18,
          type: 'alloy',
          color: 'silver',
        },
        headlights: {
          type: 'LED',
          brightness: 'high',
          automatic: true,
        },
        sunroof: {
          type: 'panoramic',
          size: 'large',
          automatic: true,
        },
      },
      safety: {
        airbags: {
          front: 2,
          side: 2,
          knee: 2,
          rear: 2,
        },
        assistance: {
          blind_spot_monitoring: true,
          rear_cross_traffic_alert: true,
          lane_departure_warning: true,
          adaptive_cruise_control: true,
          collision_warning: true,
        },
      },
    },
    engine: {
      type: 'gasoline',
      displacement: 2.5,
      horsepower: 206,
      torque: 186,
      transmission: {
        type: 'automatic',
        gears: 8,
      },
    },
    fuel_economy: {
      city: 28,
      highway: 39,
      combined: 32,
    },
    price: {
      base: 25900,
      destination: 995,
      options: {
        navigation: 1200,
        moonroof: 800,
        premium_paint: 595,
      },
      total: 28990,
    },
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// =========


router.get('/mac', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('mac', {
    layout: 'basic',
    name: 'Apple MacBook Pro',
    description: 'The ultimate notebook for power users',
    price: 1999.99,
    category: 'Computers & Tablets',
    features: {
      processor: {
        brand: 'Intel',
        model: 'Core i9',
        speed: '2.3 GHz',
        cores: 8,
        cache: '16 MB',
      },
      memory: {
        type: 'DDR4',
        size: '32 GB',
        speed: '2666 MHz',
      },
      storage: {
        type: 'SSD',
        size: '1 TB',
      },
      display: {
        size: '16 inches',
        resolution: '3072x1920',
        technology: 'Retina',
        color_space: 'P3',
        brightness: '500 nits',
        refresh_rate: '60 Hz',
      },
      graphics: {
        brand: 'AMD',
        model: 'Radeon Pro 5500M',
        memory: '4 GB GDDR6',
      },
      ports: [
        {
          type: 'Thunderbolt 3',
          count: 4,
          features: [
            'Charging',
            'DisplayPort',
            'Thunderbolt (up to 40 Gbps)',
            'USB 3.1 Gen 2 (up to 10 Gbps)',
          ],
        },
        {
          type: 'HDMI',
          count: 1,
        },
      ],
      battery: {
        type: 'Lithium Polymer',
        capacity: '100 Wh',
        life: 'Up to 11 hours',
      },
      weight: '4.3 pounds',
      dimensions: {
        height: '0.64 inch',
        width: '14.09 inches',
        depth: '9.68 inches',
      },
      operating_system: 'macOS',
      accessories: [
        {
          name: 'Apple Magic Keyboard',
          price: 99.99,
        },
        {
          name: 'Apple Magic Mouse 2',
          price: 79.99,
        },
        {
          name: 'USB-C to USB Adapter',
          price: 19.99,
        },
      ],
    },

router.get('/facebook', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('facebook', {
    layout: 'basic',
    name: 'Facebook',
    users: [
      {
        id: 1,
        name: 'John Doe',
        gender: 'Male',
        age: 30,
        friends: [
          {
            id: 2,
            name: 'Jane Smith',
            gender: 'Female',
            age: 27,
            mutual_friends: [
              {
                id: 4,
                name: 'Samantha Lee',
                gender: 'Female',
                age: 25,
              },
            ],
          },
          {
            id: 5,
            name: 'Mike Williams',
            gender: 'Male',
            age: 28,
            mutual_friends: [
              {
                id: 7,
                name: 'David Kim',
                gender: 'Male',
                age: 29,
              },
            ],
          },
        ],
        groups: [
          {
            id: 1,
            name: 'Hiking Enthusiasts',
            description:
              'A group for people who love hiking and the great outdoors',
            members: [
              {
                id: 8,
                name: 'Sarah Johnson',
                gender: 'Female',
                age: 25,
              },
            ],
          },
          {
            id: 2,
            name: 'Foodies United',
            description:
              'A group for food lovers to share recipes and restaurant recommendations',
            members: [
              {
                id: 5,
                name: 'Mike Williams',
                gender: 'Male',
                age: 28,
              },
              {
                id: 8,
                name: 'Sarah Johnson',
                gender: 'Female',
                age: 25,
              },
            ],
          },
        ],
      },
      {
        id: 16,
        name: 'Amy Lee',
        gender: 'Female',
        age: 30,
        friends: [
          {
            id: 15,
            name: 'Peter Kim',
            gender: 'Male',
            age: 32,
            mutual_friends: [
              {
                id: 17,
                name: 'David Chen',
                gender: 'Male',
                age: 33,
              },
              {
                id: 19,
                name: 'Erica Wong',
                gender: 'Female',
                age: 29,
                mutual_friends: [
                  {
                    id: 20,
                    name: 'Alex Lee',
                    gender: 'Male',
                    age: 31,
                  },
                ],
              },
            ],
            groups: [
              {
                id: 3,
                name: 'Travel Addicts',
                description:
                  'A group for people who love to travel and explore new places',
                members: [
                  {
                    id: 22,
                    name: 'Jackie Chen',
                    gender: 'Female',
                    age: 26,
                  },
                ],
              },
              {
                id: 4,
                name: 'Pet Lovers',
                description:
                  'A group for people who love their furry friends',
                members: [
                  {
                    id: 16,
                    name: 'Amy Lee',
                    gender: 'Female',
                    age: 30,
                  },
                  {
                    id: 25,
                    name: 'John Smith',
                    gender: 'Male',
                    age: 33,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})
// ================================================================

router.get('/js', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('js', {
    layout: 'basic',
    name: 'JavaScript',
    description:
      'JavaScript is a popular high-level, dynamic, and interpreted programming language.',
    history: {
      year: 1995,
      founder: 'Brendan Eich',
    },
    types: [
      'Number',
      'String',
      'Boolean',
      'Null',
      'Undefined',
      'Symbol',
      'Object',
    ],
    syntax: {
      variables: ['var', 'let', 'const'],
      functions: ['function'],
      conditionals: ['if', 'else', 'switch'],
      loops: ['for', 'while', 'do-while'],
      classes: ['class'],
    },
    features: [
      'First-class functions',
      'Closures',
      'Dynamic typing',
      'Prototype-based inheritance',
      'Asynchronous programming with Promises and async/await',
      'Modules with import/export statements',
    ],
    libraries: [
      'jQuery',
      'React',
      'Angular',
      'Vue',
      'Node.js',
      'Express.js',
      'Lodash',
      'Moment.js',
    ],
    tools: [
      'Babel',
      'Webpack',
      'ESLint',
      'Jest',
      'Mocha',
      'Chai',
      'Selenium',
      'Cypress',
    ],
    community: [
      {
        name: 'Stack Overflow',
        type: 'forum',
      },
      {
        name: 'JavaScript Weekly',
        type: 'newsletter',
      },
      {
        name: 'The Changelog',
        type: 'podcast',
      },
      {
        name: 'CSS-Tricks',
        type: 'blog',
      },



router.get('/program', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('program', {
    layout: '',
    program: {
      excursion: {
        name: 'Cultural Tour',
        location: {
          city: 'Paris',
          country: 'France',
        },
        date: '2023-06-15',
        program: [
          {
            name: 'Museum Visit',
            type: 'Art',
            duration: 3,
            details: {
              museum: {
                name: 'The Louvre',
                location: {
                  address: 'Rue de Rivoli',
                  city: 'Paris',
                  country: 'France',
                },
                exhibits: [
                  {
                    name: 'Mona Lisa',
                    artist: 'Leonardo da Vinci',
                    description: 'Iconic portrait painting',
                    audio_guide: true,
                  },
                  {
                    name: 'Winged Victory of Samothrace',
                    artist: null,
                    description:
                      'Ancient Greek statue of Nike, the goddess of victory',
                    audio_guide: true,
                  },
                ],
              },
              guide: {
                name: 'Francois',
                language: 'French',
                rating: 4.8,
              },
            },
          },
          {
            name: 'Cultural Show',
            type: 'Music and Dance',
            duration: 2,
            details: {
              venue: {
                name: 'Moulin Rouge',
                location: {
                  address: '82 Boulevard de Clichy',
                  city: 'Paris',
                  country: 'France',
                },
              },
              performers: [
                {
                  name: 'Mireille Mathieu',
                  type: 'Chanson singer',
                },
                {
                  name: "Ballet de l'Opéra National de Paris",
                  type: 'Classical ballet company',
                },
              ],
              guide: {
                name: 'Sophie',
                language: 'English',
                rating: 4.6,
              },
            },
          },
        ],
      },
    },
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

router.get('/shoporder', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('shoporder', {

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки

router.get('/shopcard', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('shopcard', {
=======
router.get('/shopprofile', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('shopprofile', {

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

        {
          text: 'Exit',
          href: null,
        },
      ],
    },

    header: 'Оформлення замовлення',
    contacts_data: {
      title: 'Контактні дані',

      buttons: [
        {
          text: 'Я новий покупець',
          isPrimary: true,
        },
        {
          text: 'Я постійний покупець',
          isOutline: true,
        },
      ],
      form: {
        input: {
          surname: {
            label: 'Прізвище',
            placeholder: 'Іванов',
            caption: 'Введіть прізвище',
          },
          name: {
            label: 'Ім’я',
            placeholder: 'Іван',
            caption: 'Введіть Ім’я',
          },
          phone: {
            label: 'Мобільний телефон',
            placeholder: '+38 (XXX) XXX XX XX',
            caption: 'Введіть телефон',
          },
          email: {
            label: 'Пошта',
            placeholder: 'ivanivanov@ukr.net',
            caption: 'Введіть Пошту',
          },
        },
        switch: [
          {
            text: 'Отримувати інформацію про новинки',
            isActive: false,
          },
          {
            text: 'Отримувати інформацію про знижки',
            isActive: true,
          },
        ],
      },
    },
    action_block: [
      { text: 'Швидке замовлення', isSuccess: true },
      { text: 'Видалити', isDanger: true },
      { text: 'Детальніше', isInfo: true },
    ],
    total: {
      title: 'Всього',
      item_list: [
        { name: 'Ноут', price: '25 000 ₴' },
        { name: 'Мишка', price: '25 000 ₴' },
        { name: 'Клава', price: '25 000 ₴' },
      ],
      additional_info: [
        { text: 'Всього товарів', value: '75 000 ₴' },
        { text: 'Купони', value: 'Немає' },
        { text: 'Доставка', value: 'Безкоштовно' },
      ],
      total_price: {
        text: 'Всього товарів',
        value: '75 000 ₴',
      },
      button: [
        {
          text: 'Підтвердити замовлення',
          isPrimary: true,
        },
        {
          text: 'Відмінити купони',
          isOutline: true,
        },
      ],
    },
    delivery: {
      title: 'Доставка',
      select: [
        {
          label: 'Місто доставки',
          placeholder: 'Оберіть місто доставки',
          options: [
            { value: '1', text: 'Київ' },
            { value: '2', text: 'Харків' },
            { value: '3', text: 'Одеса' },
            { value: '4', text: 'Львів' },
            { value: '5', text: 'Дніпро' },
            { value: '6', text: 'Донецьк' },
          ],
        },
        {
          label: 'Район доставки',
          placeholder: 'Оберіть район доставки',
          options: [
            { value: '1', text: 'Голосіївський' },
            { value: '2', text: 'Оболонський' },
            { value: '3', text: 'Печерський' },
            { value: '4', text: 'Дарницький' },
            { value: '5', text: 'Деснянський' },
            { value: '6', text: 'Подільський' },
          ],
        },
      ],
      delivery_type: [
        {
          type: 'Самовивіз з відділення Нової пошти',
        },
        {
          type: 'Кур’єром Нової пошти',
        },
        {
          type: 'Самовивіз з магазину',
        },
        {
          type: 'Доставка закордон',
        },
      ],
      payment: {
        title: 'Оплата',
        list: [
          {
            type: 'Оплата при отриманні',
            description: 'За тарифами перевізника',
          },
          {
            type: 'Оплатити зараз',
          },
        ],
      },
      contact: {
        title: 'Контактні дані отримувача',
        surname: {
          label: 'Прізвище',
          placeholder: 'Іванов',
          caption: 'Введіть прізвище',
        },
        name: {
          label: 'Ім’я',
          placeholder: 'Іван',
          caption: 'Введіть Ім’я',
        },
        phone: {
          label: 'Мобільний телефон',
          placeholder: '+38 (XXX) XXX XX XX',
          caption: 'Введіть телефон',
        },
        email: {
          label: 'Пошта',
          placeholder: 'ivanivanov@ukr.net',
          caption: 'Введіть Пошту',
        },
      },
      coment: {
        label: 'Коментар',
        placeholder: 'Я хочу,щоб',
      },
    },
    coupon: {
      title: 'Купони',
      select: {
        availabel_coupon: {
          label: 'Наявні купони',
          placeholder: 'Виберіть купон',
          options: [
            { value: '1', text: 'SEEYALATER' },
            { value: '2', text: 'HOTEL10' },
            { value: '3', text: 'DOWNLOAD25' },
          ],
        },
        friend_coupon: {
          label: 'Купони за запрошених друзів',
          placeholder: 'Виберіть купон',
          options: [
            { value: '1', text: 'TRAVEL5' },
            { value: '2', text: '75VACA' },
            { value: '3', text: '150VACA' },
          ],
        },
      },
      add: {
        friend: {
          label: 'Запросіть друзів та отримайте ще купонів',
          placeholder:
            'Введіть контактні дані друзів через ;',
          caption:
            'Напишіть електронні адреси/телефон друзів через “;”',
        },
        colleague: {
          label: 'Запросити колег',
          placeholder:
            'Введіть контактні дані колег через ;',
          caption:
            'Напишіть електронні адреси/телефон колег через “;”',
        },
      },
    },
    quiz: {
      title: 'Домоможи краще нам тебе зрозуміти',
      preference: {
        title:
          'Який тип обладнання ви зацікавлені в придбанні?',
        options: [
          'Смартфони',
          'Ноутбуки',
          'Планшети',
          'ПК',
          'Телевізори',
        ],
      },
      your_expirience: {
        label: 'Який у Вас досвід користування ПК',
      },
      purchase_frequency: {
        label: 'Як часто ви купуєте обладнання?',
        placeholder: 'Оберіть варіант',
        options: [
          { value: '1', text: 'Раз в тиждень' },
          { value: '2', text: 'Раз в місяць' },
          { value: '3', text: 'Раз в рік' },
        ],
      },
      factors: {
        title:
          'Які з наведених нижче факторів є для вас важливими при купівлі обладнання?',
        options: [
          'Ціна',
          'Репутація бренду',
          'Якість',
          'Особливості',
          'Гарантія',
          'Доступність',
          'Обслуговування клієнтів',
        ],
      },
    },

      ],
  
    header: {
      title: 'Кошик',
      button: {
        text: 'Продовжити покупки',
        link: 'https://www.youtube.com/',
      },
    },

    goodsBlock: [
      {
        image: 'https://picsum.photos/110/110',
        name: 'Samsung Galaxy S21 Ultra ',
        description:
          'екран 6.8", процесор Exynos 2100/Snapdragon 888, 12 ГБ ОЗУ, камера 108 МП, акумулятор 5000 мАг',
        price: { title: 'Ціна', value: '25 000 ₴' },
        amount: '1 шт.',
        buttons: [
          { text: 'Додати', isPrimary: true },
          { text: 'Видалити', isDanger: true },
        ],
      },
      {
        image: 'https://picsum.photos/110/110',
        name: 'Ноутбук Dell XPS 13',
        description:
          'екран 13.3", процесор Intel Core i7-1165G7, 16 ГБ ОЗУ, SSD на 512 ГБ, вага 1.2 кг.',
        price: { title: 'Ціна', value: '25 000 ₴' },

        amount: '1 шт.',
        buttons: [
          { text: 'Додати', isPrimary: true },
          { text: 'Видалити', isDanger: true },
        ],
      },
      {
        image: 'https://picsum.photos/110/110',
        name: 'Телевізор LG OLED CX',
        description:
          'екран 55", роздільна здатність 4K, Smart TV, HDR, звук Dolby Atmos, 4 HDMI порти, 3 USB порти.',
        price: { title: 'Ціна', value: '25 000 ₴' },

        amount: '1 шт.',
        buttons: [
          { text: 'Додати', isPrimary: true },
          { text: 'Видалити', isDanger: true },
        ],
      },
      {
        image: 'https://picsum.photos/110/110',
        name: 'Навушники Sony WH-1000XM4',
        description:
          'Bluetooth 5.0, активне шумозаглушення, 30 годин автономної роботи, сенсорне управління, вага 254 г.',
        price: { title: 'Ціна', value: '25 000 ₴' },

        amount: '1 шт.',
        buttons: [
          { text: 'Додати', isPrimary: true },
          { text: 'Видалити', isDanger: true },
        ],
      },
    ],

    total: {
      title: 'Сума замовлення',
      amount: '75 000 ₴',
      delivery: 'Без доставки',
      buttons: [
        {
          text: 'Оформити замовлення',
          link: 'https://www.youtube.com/',
          isSuccess: true,
        },
        {
          text: 'Офрмити кредит',
          link: 'https://www.youtube.com/',
          isOutline: true,
        },
      ],
    },

    goodsOtherBlock: {
      title: 'See other products',
      cards: [
        {
          image: 'https://picsum.photos/400/200',
          title: 'iPhone 13',
          description:
            'The latest iPhone model features a new A15 Bionic chip, improved camera system, and longer battery life.',
          isHot: false,
          idNew: false,
        },
        {
          image: 'https://picsum.photos/400/200',
          title: 'MacBook Pro',
          description:
            "Apple's high-end laptop features a 16-inch Retina display, powerful M1 Pro or M1 Max chip, and up to 64GB of RAM.",
          isHot: true,
          idNew: false,
        },
        {
          image: 'https://picsum.photos/400/200',
          title: 'AirPods Pro',
          description:
            "Apple's premium wireless earbuds feature active noise cancellation, a customizable fit, and up to 4.5 hours of listening time.",
          isHot: false,
          idNew: false,
        },
      ],
    },

    subscribe: {
      header: 'Unlock Premium Content',
      description:
        'Subscribe to access exclusive content and features.',
      buttons: [
        {
          text: 'Register Now',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Buy Subscription',
          link: 'https://www.youtube.com/',
        },
      ],

    header: 'Мої замовлення',

    purchase: {
      tabs: ['Всі замовлення', 'Гарантія та повернення'],
      actionBlock: {
        input: { placeholder: 'Placeholder' },
        buttons: [
          {
            text: 'Знайти',
            link: 'https://www.youtube.com/',
            isSuccess: true,
          },
          {
            text: 'Виділити все',
            link: 'https://www.youtube.com/',
            isOutline: true,
          },
          {
            text: 'Очистити все',
            link: 'https://www.youtube.com/',
            isDanger: true,
          },
        ],
      },
      itemList: [
        {
          number: '№12587463 від 01.01.2023',
          status: 'Виконано',
          amount: { title: 'Сума', value: '25 000 ₴' },
          images: ['https://picsum.photos/110/100'],
          button: {
            text: 'Детальніше',
            link: 'https://www.youtube.com/',
            isPrimary: true,
          },
        },
        {
          number: '№12587463 від 01.01.2023',
          status: 'Виконано',
          amount: { title: 'Сума', value: '25 000 ₴' },
          images: [
            'https://picsum.photos/110/100',
            'https://picsum.photos/110/100',
            'https://picsum.photos/110/100',
          ],
          button: {
            text: 'Детальніше',
            link: 'https://www.youtube.com/',
            isPrimary: true,
          },
        },
        {
          number: '№12587463 від 01.01.2023',
          status: 'Виконано',
          amount: { title: 'Сума', value: '25 000 ₴' },
          images: [
            'https://picsum.photos/110/100',
            'https://picsum.photos/110/100',
          ],
          button: {
            text: 'Детальніше',
            link: 'https://www.youtube.com/',
            isPrimary: true,
          },
        },
      ],
    },
    userInfo: {
      title: 'Особиста інформація',
      profileData: {
        title: 'Особисті дані',
        fullName: {
          surname: {
            title: 'Прізвище',
            value: 'Іванов',
          },
          name: {
            title: 'Ім’я',
            value: 'Іван',
          },
          middleName: {
            title: 'По-батькові',
            value: 'Іванович',
          },
        },
        otherInfo: {
          birthday: {
            title: 'Дата народження',
            value: '01.01.2000',
          },
          sex: {
            title: 'Стать',
            value: 'Чоловіча',
          },
          language: {
            title: 'Мова',
            value: 'Українська',
          },
        },
      },
      buttons: [
        {
          text: 'Редагувати',
          link: 'https://www.youtube.com/',
          isPrimary: true,
        },
        {
          text: 'Очистити',
          link: 'https://www.youtube.com/',
          isSecondary: true,
        },
        {
          text: 'Видалити',
          link: 'https://www.youtube.com/',
          isDanger: true,
        },
      ],
      recipients: {
        title: 'Отримувачі',
        users: [
          {
            name: 'Іванов Іван Іванович',
            phone: '+38 (098) 222 22 22',
            button: {
              text: 'Редагувати',
              link: 'https://www.youtube.com/',
            },
          },
          {
            name: 'Петров Петро Петрович',
            phone: '+38 (098) 111 11 11',
            button: {
              text: 'Редагувати',
              link: 'https://www.youtube.com/',
            },
          },
        ],
      },
      contacts: {
        title: 'Контакти',
        contactData: [
          {
            title: 'Номер телефону',
            value: '+38 (098) 222 22 22',
            button: {
              text: 'Редагувати',
              link: 'https://www.youtube.com/',
              isPrimary: true,
            },
          },
          {
            title: 'Додатковий номер телефону',
            value: '+38 (098) 111 11 11',
            button: {
              text: 'Очистити',
              link: 'https://www.youtube.com/',
              isSecondary: true,
            },
          },
          {
            title: 'Електронна адреса',
            value: 'ivanivanov@ukr.net',
            button: {
              text: 'Видалити',
              link: 'https://www.youtube.com/',
              isDanger: true,
            },
          },
        ],
      },
    },

    footer: [
      [
        {
          text: 'Home',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Trending',
          link: 'https://www.youtube.com/feed/trending',
        },
        {
          text: 'Subscriptions',
          link: 'https://www.youtube.com/feed/subscriptions',
        },
        {
          text: 'Library',
          link: 'https://www.youtube.com/feed/library',
        },
      ],
      [
        {
          text: 'History',
          link: 'https://www.youtube.com/feed/history',
        },
        {
          text: 'Your Videos',
          link: 'https://www.youtube.com/feed/my_videos',
        },
        {
          text: 'Live',
          link: 'https://www.youtube.com/live',
        },
        {
          text: 'Settings',
          link: 'https://www.youtube.com/account',
        },
      ],
      [
        {
          text: 'Watch Later',
          link: 'https://www.youtube.com/playlist?list=WL',
        },
        {
          text: 'Liked Videos',
          link: 'https://www.youtube.com/playlist?list=LL',
        },
        {
          text: 'Music',
          link: 'https://www.youtube.com/music',
        },
        {
          text: 'Gaming',
          link: 'https://www.youtube.com/gaming',
        },
      ],
      [
        {
          text: 'Sports',
          link: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
        },
        {
          text: 'News',
          link: 'https://www.youtube.com/news',
        },
        {
          text: 'Fashion & Beauty',
          link: 'https://www.youtube.com/channel/UC1x8rV_f-2yPpzlN0JWZXIQ',
        },
        {
          text: 'Learning',
          link: 'https://www.youtube.com/learning',
        },
      ],
      [
        {
          text: 'Report History',
          link: 'https://www.youtube.com/feed/history/report_history',
        },
        {
          text: 'Help',
          link: 'https://support.google.com/youtube/?hl=en',
        },
        {
          text: 'Send Feedback',
          link: 'https://support.google.com/youtube/answer/4347644?hl=en',
        },
        {
          text: 'About',
          link: 'https://www.youtube.com/about/',
        },
      ],

    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})



// ==================
router.get('/shophome', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('shophome', {
    layout: 'shop',
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
    },

    newsBlock: {
      title: 'Latest News',
      cards: [
        {
          title: 'COVID-19 Vaccinations Begin in Europe',
          description:
            'As the world continues to grapple with the ongoing COVID-19 pandemic, Europe begins its vaccination rollout, with healthcare workers and the elderly among the first to receive the vaccine.',
          isTop: false,
          isNew: false,
        },
        {
          title: 'Tesla Stock Surges After Record Sales',
          description:
            "Tesla's stock price jumps 10% following the company's announcement of record sales in the last quarter, thanks in part to strong demand for its electric vehicles.",
          isTop: true,
          isNew: true,
        },
        {
          title:
            'New Study Shows Benefits of Meditation for Mental Health',
          description:
            'A new study published in the Journal of the American Medical Association finds that practicing mindfulness meditation can lead to improved mental health outcomes for people struggling with depression and anxiety.',
          isTop: false,
          isNew: false,
        },
        {
          title: 'NASA Launches New Mars Rover',
          description:
            "NASA's Perseverance rover successfully launches on a mission to explore Mars, with the goal of collecting samples of the planet's surface and searching for signs of ancient microbial life.",
          isTop: false,
          isNew: true,
        },
        {
          title:
            'GameStop Shares Soar as Reddit Traders Rally',
          description:
            'Shares of GameStop surge as amateur traders on the social media platform Reddit rally to drive up the price, in what some are calling a battle between Wall Street and Main Street.',
          isTop: false,
          isNew: false,
        },
        {
          title:
            'UK Announces Plan to Ban Sale of Gas-Powered Cars by 2030',
          description:
            'In an effort to combat climate change, the UK government announces a plan to ban the sale of new gas-powered cars and vans by 2030, with hybrid vehicles to follow in 2035.',
          isTop: true,
          isNew: false,
        },
        {
          title:
            'New Study Shows Link Between Exercise and Longevity',
          description:
            'A new study published in the Journal of the American Medical Association suggests that regular exercise can help people live longer, with participants who exercised regularly having a lower risk of premature death.',
          isTop: false,
          isNew: false,
        },
        {
          title: 'Amazon Expands Grocery Delivery Service',
          description:
            'Amazon announces an expansion of its grocery delivery service, with plans to offer free delivery to Prime members on orders over $35 and to expand its selection of fresh and organic produce.',
          isTop: false,
          isNew: true,
        },
      ],
    },

    goodsBlock: {
      tabs: [
        {
          isActive: true,
          isDisabled: false,
          text: 'Electronics',
        },
        {
          isActive: false,
          isDisabled: false,
          text: 'Home & Kitchen',
        },
        {
          isActive: false,
          isDisabled: false,
          text: 'Clothing & Accessories',
        },
        {
          isActive: false,
          isDisabled: true,
          text: 'Toys & Games',
        },
      ],
      cards: [
        {
          image: 'https://picsum.photos/400/200',
          title: 'iPhone 13',
          description:
            'The latest iPhone model features a new A15 Bionic chip, improved camera system, and longer battery life.',
          isHot: false,
          isNew: false,
        },
        {
          image: 'https://picsum.photos/400/200',
          title: 'MacBook Pro',
          description:
            "Apple's high-end laptop features a 16-inch Retina display, powerful M1 Pro or M1 Max chip, and up to 64GB of RAM.",
          isHot: true,
          isNew: false,
        },
        {
          image: 'https://picsum.photos/400/200',
          title: 'AirPods Pro',
          description:
            "Apple's premium wireless earbuds feature active noise cancellation, a customizable fit, and up to 4.5 hours of listening time.",
          isHot: false,
          isNew: false,
        },
        {
          image: 'https://picsum.photos/400/200',
          title: 'Sony Bravia XR A90J',
          description:
            'This OLED TV boasts a 4K resolution, HDR support, and a high refresh rate for smooth motion handling.',
          isHot: false,
          isNew: true,
        },
        {
          image: 'https://picsum.photos/400/200',
          title: 'Nintendo Switch OLED Model',
          description:
            'The latest iteration of the popular gaming console features a larger OLED screen and improved audio quality.',
          isHot: false,
          isNew: false,
        },
        {
          image: 'https://picsum.photos/400/200',
          title: 'Bose SoundLink Revolve+',
          description:
            'This portable Bluetooth speaker features 360-degree sound, water-resistant construction, and up to 16 hours of battery life.',
          isHot: true,
          isNew: true,
        },
      ],
    },
    subscribe: {
      header: 'Unlock Premium Content',
      description:
        'Subscribe to access exclusive content and features.',
      buttons: [
        {
          text: 'Register Now',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Buy Subscription',
          link: 'https://www.youtube.com/',
        },
      ],
    },
    service: {
      title: 'Our Services',
      description:
        'We offer a variety of services to meet your needs, including web design, content creation, and social media management.',
      buttons: [
        {
          text: 'Show More',
          link: 'https://www.youtube.com/',
        },
      ],
    },

    footer: [
      [
        {
          text: 'Home',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Trending',
          link: 'https://www.youtube.com/feed/trending',
        },
        {
          text: 'Subscriptions',
          link: 'https://www.youtube.com/feed/subscriptions',
        },
        {
          text: 'Library',
          link: 'https://www.youtube.com/feed/library',
        },
      ],
      [
        {
          text: 'History',
          link: 'https://www.youtube.com/feed/history',
        },
        {
          text: 'Your Videos',
          link: 'https://www.youtube.com/feed/my_videos',
        },
        {
          text: 'Live',
          link: 'https://www.youtube.com/live',
        },
        {
          text: 'Settings',
          link: 'https://www.youtube.com/account',
        },
      ],
      [
        {
          text: 'Watch Later',
          link: 'https://www.youtube.com/playlist?list=WL',
        },
        {
          text: 'Liked Videos',
          link: 'https://www.youtube.com/playlist?list=LL',
        },
        {
          text: 'Music',
          link: 'https://www.youtube.com/music',
        },
        {
          text: 'Gaming',
          link: 'https://www.youtube.com/gaming',
        },
      ],
      [
        {
          text: 'Sports',
          link: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
        },
        {
          text: 'News',
          link: 'https://www.youtube.com/news',
        },
        {
          text: 'Fashion & Beauty',
          link: 'https://www.youtube.com/channel/UC1x8rV_f-2yPpzlN0JWZXIQ',
        },
        {
          text: 'Learning',
          link: 'https://www.youtube.com/learning',
        },
      ],
      [
        {
          text: 'Report History',
          link: 'https://www.youtube.com/feed/history/report_history',
        },
        {
          text: 'Help',
          link: 'https://support.google.com/youtube/?hl=en',
        },
        {
          text: 'Send Feedback',
          link: 'https://support.google.com/youtube/answer/4347644?hl=en',
        },
        {
          text: 'About',
          link: 'https://www.youtube.com/about/',
        },
      ],
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})


// Підключаємо роутер до бек-енду
module.exports = router
