import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  edu,
  php,
  nextjs,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  java,
  mysql,
  firebase,
  chat,
  chatbot,
  evernote,
  jk,
  letsnote,
  letzchat,
  letzread,
  letzwatch,
  letzwrite,
  markv1,
  newzio,
  oldportfolio,
  adbn,
  quiz,
  todo,
  imagine,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Experience  2+ Years Working",
    icon: web,
  },
  {
    title: "Students 100+ Helped",
    icon: mobile,
  },
  {
    title: "Projects 10+ Completed",
    icon: backend,
  },
  {
    title: "Technologies Known 6+ ",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "mysql",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "Pursuing Graduation",
    company_name: "Grace College of Engineering",
    icon: edu,
    iconBg: "#383E56",
    date: "Sept 2020 - June 2023",
    points: [
      "Currently I Am Studying In Final Year, Pursuing My Bachelors In Computer Science & Engineering From Grace College Of Engineering, Tuticorin.",
      "Which Is Under Anna University And Afflicated To AICTE(All India Council Of Technical Education).",
    ],
  },
  {
    title: "Higher Education",
    company_name: "Gems Polytechnic College",
    icon: edu,
    iconBg: "#E6DEDD",
    date: "Aug 2017 - July 2020",
    points: [
      "Completed Diploma In Computer Science & Engineering from Gems Polytechnic College, Arungabad-Bihar.",
      "With An Total Of 85% Under AICTE(All India Council Of Technical Education).",
    ],
  },
  {
    title: "Secondary Education",
    company_name: "DC Lewis Memorial School",
    icon: edu,
    iconBg: "#383E56",
    date: "Jan 2016 - May 2017",
    points: [
      "I Completed My Secondary Education With An Total Of 70%.",
      "From D.C Lewis Memorial School,Renukoot Which Was Of An ICSE Standard",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "LetzWatch",
    description:
      "Web-based platform that allows users to watch youtube videos for free without any ads.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: letzwatch,
    source_code_link: "https://github.com/Daniel-V-Richardson/letzwatch",
    live_demo_link: "https://letzwatch-yt.netlify.app/",
  },
  {
    name: "Imagine (An Free AI image generation and tool and sharing platform)",
    description:
      "Web-based platform that allows users to generate images based on prompts and can share it with the imagine community showcase. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: imagine,
    source_code_link: "https://github.com/Daniel-V-Richardson/Imagine",
    live_demo_link: "https://imagine-puce.vercel.app/",
  },
  {
    name: "Mark v1 (Coding Assistant)",
    description:
      "Web-based platform that allows users to ask any type of coding or general questions and gives an accurate answer just like ChatGPT.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: markv1,
    source_code_link: "https://github.com/Daniel-V-Richardson/Coding-Mark",
    live_demo_link: "https://mark-daniel-v-richardson.vercel.app/",
  },
  {
    name: "Let's Note (Android App)",
    description:
      "An Android Application which allows users to create,edit,delete and update notes realtime. The main feature of this application is that it allows users to prioritize notes and filter them out accordingly.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "android",
        color: "pink-text-gradient",
      },
    ],
    image: letsnote,
    source_code_link: "https://github.com/Daniel-V-Richardson/Let-s-Note",
    live_demo_link: "https://github.com/Daniel-V-Richardson/Let-s-Note",
  },
  {
    name: "Newzio (Simple News Application - RAPIDAPI)",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "ibmdb",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "RapidAPI",
        color: "red-text-gradient",
      },
    ],
    image: newzio,
    source_code_link: "https://github.com/Daniel-V-Richardson/Newzio",
    live_demo_link: "https://github.com/Daniel-V-Richardson/Newzio",
  },
  {
    name: "LetzRead (Blog WebApp)",
    description:
      "Web-based platform that allows users to Create, view, update, and delete blogs with more advanced Editing Interface.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: letzread,
    source_code_link: "https://github.com/Daniel-V-Richardson/letzread",
    live_demo_link: "https://letzread-v1.vercel.app/",
  },
  {
    name: "LetzWrite (A simple Document Writer webapp)",
    description:
      "Web-based platform that allows users to write documents and can also share the document throughout the internet",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: letzwrite,
    source_code_link: "https://github.com/Daniel-V-Richardson/letzwrite",
    live_demo_link: "https://letzwrite.vercel.app/",
  },
  {
    name: "LetzChat (Universal Messenger)",
    description:
      "Web-based platform that allows users to Chat with other Signedin users realtime",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: letzchat,
    source_code_link: "https://github.com/Daniel-V-Richardson/letzchat",
    live_demo_link: "https://github.com/Daniel-V-Richardson/letzchat",
  },
  {
    name: "My Old Portfolio",
    description:
      "Its just an Old Portfolio of mine.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: oldportfolio,
    source_code_link: "https://github.com/Daniel-V-Richardson/danielrichardson.github.io",
    live_demo_link: "https://daniel-v-richardson.vercel.app/",
  },

  {
    name: "JK Seafoods (MERN APP)",
    description:
      "Web-based Ecommerce platform that allows users to buy various seafood items through online mode and they can also track their purchase progress",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "red-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "pink-text-gradient",
      },
    ],
    image: jk,
    source_code_link: "https://github.com/Daniel-V-Richardson/jkseafoods",
    live_demo_link: "https://jkseafoods.herokuapp.com/",
  },
  {
    name: "LetzAnswer (React Quiz)",
    description:
      "A simple React Quiz App which allows users to answer questions with 5 sec time limit for each question and finally display the score.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "vercel",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: quiz,
    source_code_link: "https://github.com/Daniel-V-Richardson/Quiz-App-React",
    live_demo_link: "https://letzanswer.vercel.app/",
  },
  {
    name: "ADBN News (News Classifier App)",
    description:
      "A simple News Classifier Application developed using Python to Provide users with latest news updates and it also supports categories and search functionality",
    tags: [
      {
        name: "Python-Flask",
        color: "blue-text-gradient",
      },
      {
        name: "newsapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: adbn,
    source_code_link: "https://github.com/Daniel-V-Richardson/ADBN-Newz",
    live_demo_link: "https://github.com/Daniel-V-Richardson/ADBN-Newz",
  },
  {
    name: "Evernote Clone (React)",
    description:
      "An exact clone of Evernote, developed using React where users can login and create, update and delete their notes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: evernote,
    source_code_link:
      "https://danielrichardson.netlify.app/workinprogress.html",
    live_demo_link: "https://danielrichardson.netlify.app/workinprogress.html",
  },
  {
    name: "To Do (Android App)",
    description:
      "A simple todo App developed using java, with this app users can create tasks,update them and mark as complete when the task is completed.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "xml",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link:
      "https://danielrichardson.netlify.app/workinprogress.html",
    live_demo_link: "https://danielrichardson.netlify.app/workinprogress.html",
  },
  {
    name: "Let's Chat (React Messenger)",
    description:
      "An online Chatting platform where users can login and chat with each other and this app allows users to create group chats and much more..",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: chat,
    source_code_link: "https://github.com/Daniel-Richardson-20/Let-s-Chat",
    live_demo_link: "https://letschatwith.netlify.app/",
  },
  {
    name: "Covid 19 Chatbot",
    description:
      "A simple chatbot which could provide answers regarding covid-19 queries.",
    tags: [
      {
        name: "Python-Flask",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: chatbot,
    source_code_link:
      "https://github.com/Daniel-Richardson-20/Mark-Covid-19-Chatbot",
    live_demo_link:
      "https://github.com/Daniel-Richardson-20/Mark-Covid-19-Chatbot",
  },
];

export { services, technologies, experiences, testimonials, projects };
