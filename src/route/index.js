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
  res.render('bootstrap', {
    layout: 'basic',
  })
  //                  ↑↑ сюди вводимо JSON дані
})
// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
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
      ],
    },

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

// ================================================================

// ==================
// Підключаємо роутер до бек-енду
module.exports = router
