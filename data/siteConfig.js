module.exports = {
  siteTitle: "Hi! I'm Alejandro Jaramillo!",
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Alejandro Jaramillo',
  twitterUsername: 'al3jodev',
  githubUsername: 'al3jodev',
  authorAvatar: '/images/avatar_aj.jpg',
  authorDescription: `Developer, passionate about what I do. Always interested in new technologies, currently mischievous with <strong>Gatsby</strong>,I started studying Systems Engineering in 2001. </br>
                      In 2011 I started working as a support technician, however I did development in php, dojo and ireport. In 2014 I started working at the National Telecommunications Corporation where I developed mobile applications on <strong>Ionicframework</strong> and development of services on <strong>WebSphere, Integration Bus V8 and V9</strong>. </br>
                      I am currently working as a developer at Technisys. </br>
                      Learning <strong>Javascript, NodeJS and React</strong>.`,
  skills: [
    {
      name: 'HTML',
      level: 70,
    },
    {
      name: 'CSS',
      level: 40,
    },
    {
      name: 'Javascript',
      level: 50,
    },
    {
      name: 'NodeJs',
      level: 10,
    },
    {
      name: 'React',
      level: 10,
    },
    {
      name: 'Git',
      level: 60,
    },
    {
      name: 'Ionic Framewrok',
      level: 70,
    },
    {
      name: 'IBM WebSphere and Integration Bus',
      level: 70,
    },
  ],
  jobs: [
    {
      company: 'Technisys',
      begin: {
        month: 'may',
        year: '2021',
      },
      duration: null,
      occupation: 'CMM Developer',
      description: `The Technisys banking core has a middleware in charge of communicating to the different channels with the bank's core, for which it develops canonical and orchestrated services in Websphere Message Broker and IBM Integration Bus.`,
    },
    {
      company: 'CNT EP',
      begin: {
        month: 'jan',
        year: '2020',
      },
      duration: '1 yr e 5 mos',
      occupation: 'IT Architecture Analyst',
      description:
        'I am part of the IT Architecture team responsible for the development of banking services on the ESB for the collection of mobile and fixed telephony services through financial entities.',
    },
    {
      company: 'CNT EP',
      begin: {
        month: 'oct',
        year: '2014',
      },
      duration: '5 yr e 4 mos',
      occupation: 'Senior developer',
      description:
        'As part of the Developers team I am responsible for mobile applications developed on Ionicframework.',
    },
    {
      company: 'Civil registration and identification',
      begin: {
        month: 'may',
        year: '2011',
      },
      duration: '3 yrs',
      occupation: 'Support Technician',
      description:
        'Responsible for the implementation and parameterization of the system, training and customer support. Acting also in person in real estate launches guaranteeing the success and good use of the tool.',
    },
  ],
  portifolio: [
    {
      image: '/images/gatsby-starter-cv.png',
      description: 'Gatsby starter CV template',
      url: 'https://www.gatsbyjs.org/starters/al3jodev/gatsby-starter-cv/',
    },
    {
      image: '/images/awesome-grid.png',
      description: 'Responsive grid for ReactJS',
      url: 'https://github.com/al3jodev/react-awesome-styled-grid',
    },
  ],
  hobby: [
    {
      image: '/images/gatsby-starter-cv.png',
      description: 'Gatsby starter CV template',
      url: 'https://www.gatsbyjs.org/starters/al3jodev/gatsby-starter-cv/',
    },
    {
      image: '/images/awesome-grid.png',
      description: 'Responsive grid for ReactJS',
      url: 'https://github.com/al3jodev/react-awesome-styled-grid',
    },
  ],
  courses: [
    {
      image: '/images/gatsby-starter-cv.png',
      description: 'Gatsby starter CV template',
      url: 'https://www.gatsbyjs.org/starters/al3jodev/gatsby-starter-cv/',
    },
    {
      image: '/images/awesome-grid.png',
      description: 'Responsive grid for ReactJS',
      url: 'https://github.com/al3jodev/react-awesome-styled-grid',
    },
  ],
  social: {
    twitter: 'https://twitter.com/al3jodev',
    linkedin: 'https://www.linkedin.com/al3jodev',
    github: 'https://github.com/al3jodev',
    email: 'al3jodev@outlook.com',
  },
  siteUrl: 'https://al3jodev.gatsbyjs.io',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/fondo_header.jpg',
  googleAnalyticsId: 'G-JC4PKPWYWX',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: '#000000cc',
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portifolio',
      url: '/portifolio',
    },
    {
      label: 'Courses',
      url: '/courses',
    },
    ,
    {
      label: 'Hobby',
      url: '/hobby',
    },
  ],
}
