import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is ',
  name: 'Lauri',
  subtitle: "I 'm a software Tester / Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am an ICT professional having experience in different technical environments like software development / testing, telecommunications and microchip testing. I have made documentations, as well as some modelling. I have participated in projects as a member or as the project manager.',
  paragraphTwo:
    'Lastly on ICT-sector I worked as a programmer / tester. I find the continuous learning through work and studying very important.',
  paragraphThree:
    'My work colleagues consider me as a systematic, and cooperative. I am used to teamwork being also initiative. I have experience in project management and customer service work.',
  resume: 'https://www.linkedin.com/in/laurikyttala/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'argentine-tango.jpg',
    title: 'Dance Calendar',
    info: 'Comment and save your favourite ballrooms, make calendar notes and much more',
    info2: 'Nodejs, React, Redux, MongoDB',
    url: 'https://dance-calendar.herokuapp.com/home',
    repo: 'https://github.com/lasse1900/dance-calendar-test', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'girlsFace.jpg',
    title: 'Facerecognition App',
    info: 'AI face recognition',
    info2: 'Nodejs, ReactJS, PostgreSQL',
    url: 'https://facerecognition-lk.herokuapp.com/',
    repo: 'https://github.com/lasse1900/facerecognition-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'LUT.jpg',
    title: 'My Thesis',
    info: 'The Development of Practical Programming Course at LUT-university',
    info2: '',
    url: 'https://lutpub.lut.fi/handle/10024/72533',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/laurikyt',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://github.com/lasse1900',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/laurikyttala/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/lasse1900',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
