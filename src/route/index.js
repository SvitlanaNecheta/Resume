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
router.get('/web', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('web', {
    layout: 'web',
    web: {
      languages: [
        {
          name: 'HTML',
          version: 'HTML5',
          description:
            'Hypertext Markup Language is the standard markup language for creating web pages and web applications.',
          elements: [
            {
              name: 'div',
              description:
                'Defines a division or a section in an HTML document.',
              attributes: [
                {
                  name: 'id',
                  description:
                    'Specifies a unique id for an HTML element.',
                },
                {
                  name: 'class',
                  description:
                    'Specifies one or more class names for an HTML element.',
                },
              ],
            },
            {
              name: 'p',
              description:
                'Defines a paragraph in an HTML document.',
              attributes: [
                {
                  name: 'id',
                  description:
                    'Specifies a unique id for an HTML element.',
                },
                {
                  name: 'class',
                  description:
                    'Specifies one or more class names for an HTML element.',
                },
              ],
            },
          ],
        },
        {
          name: 'CSS',
          version: 'CSS3',
          description:
            'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in HTML or XML.',
          properties: [
            {
              name: 'color',
              description: 'Sets the color of the text.',
              values: [
                {
                  value: 'red',
                  description:
                    'Sets the text color to red.',
                },
                {
                  value: 'blue',
                  description:
                    'Sets the text color to blue.',
                },
              ],
            },
            {
              name: 'background-color',
              description:
                'Sets the background color of an element.',
              values: [
                {
                  value: 'white',
                  description:
                    'Sets the background color to white.',
                },
                {
                  value: 'black',
                  description:
                    'Sets the background color to black.',
                },
              ],
            },
          ],
        },
        {
          name: 'JavaScript',
          version: 'ES6',
          description:
            'JavaScript is a programming language used to create interactive effects within web browsers.',
          functions: [
            {
              name: 'alert()',
              description:
                'Displays an alert box with a specified message and an OK button.',
              parameters: [
                {
                  name: 'message',
                  type: 'string',
                  description:
                    'The message to display in the alert box.',
                },
              ],
            },
            {
              name: 'getElementById()',
              description:
                'Returns the element with the specified ID.',
              parameters: [
                {
                  name: 'id',
                  type: 'string',
                  description:
                    'The ID of the element to find.',
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ===========================
// Підключаємо роутер до бек-енду
module.exports = router
