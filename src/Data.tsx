// Import image files
import Project1 from './assets/project1.jpg';
import Project2 from './assets/project2.jpg';
import Project3 from './assets/project3.jpg';
import Project4 from './assets/project4.jpg';
import Project5 from './assets/project5.jpg';
import Project6 from './assets/project6.jpg';
import Project7 from './assets/project7.jpg';
import Project8 from './assets/project8.gif';
import Project9 from './assets/project9.jpg';

import Testimonials from './assets/testimonials.jpg';

import Theme1 from './assets/rosebrown.png';
import Theme2 from './assets/greenlight.png';
import Theme3 from './assets/bluelight.png';
import Theme4 from './assets/redlight.png';
import Theme5 from './assets/orangelight.png';
import Theme6 from './assets/magentalight.png';
import Theme7 from './assets/brownlight.png';
import Theme8 from './assets/greylight.png';
import Theme9 from './assets/yellowlight.png';
import Theme10 from './assets/pinklight.png';

// Define interfaces for types
interface Link {
  name: string;
  path: string;
}

interface Service {
  id: number;
  name: string;
  title: string;
  description: string;
}

interface Skill {
  id: number;
  name: string;
  percentage: number;
  description: string;
}

interface Project {
  id: number;
  img: string;
  category: string;
  title: string;
  link: string,
  description: string;
  blurhash: string; 
}

interface CVItem {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  category: 'education' | 'experience';
}

interface Testimonial {
  id: number;
  img: string;
  name: string;
  author: string;
  description: string;
}

interface Colorswitcher {
  id: number;
  img: string;
  color: string;
}

// Define data using TypeScript
export const links: Link[] = [
    {
      name: 'Home',
      path: 'home',
    },
    {
      name: 'Services',
      path: 'services',
    },
    {
      name: 'Skills',
      path: 'skills',
    },
    {
      name: 'Works',
      path: 'work',
    },
    {
      name: 'Resume',
      path: 'resume',
    },
    {
      name: 'Testimonials',
      path: 'testimonial',
    },
    {
      name: 'Plans',
      path: 'plans',
    },
    {
      name: 'Contact',
      path: 'contact',
    },
  ];

export const services: Service[] = [
    {
      id: 1,
      name: ' Web Design ',
      title: ' Web Development ',
      description:
        ' Web designers craft the overall vision & plan for a website layout. Professional logo development: Business, Company, or Personal. ',
    },
    {
      id: 2,
      name: ' Poster, Logo & Brochures ',
      title: ' Graphics Designer ',
      description:
        ' Detail-oriented graphics designer known for pushing creative boundaries and delivering aesthetically pleasing designs that resonate with target audiences. ',
    },
    {
      id: 3,
      name: ' Web & App ',
      title: ' UI/UX Designer ',
      description:
        ' Innovative UI/UX designer with a keen eye for detail, transforming complex user requirements into visually appealing and user-friendly design solutions. ',
    },
    {
      id: 4,
      name: ' Animated and Slider video ',
      title: ' Video Editing ',
      description:
        ' Craft visually dynamic and impactful videos through our precise editing, where every frame is curated to convey your message effectively and captivate viewers. ',
    },
    {
      id: 5,
      name: ' React Js Development ',
      title: ' Front End Development ',
      description:
        ' Skilled React.js developer adept at translating design concepts into elegant and efficient user interfaces, ensuring a seamless and engaging web experience. ',
    },
  ];

export const skills: Skill[] = [
    {
      id: 1,
      name: 'Html',
      percentage: 85,
      description:
        ' My skill in HTML extends to crafting web pages with meticulous structure, ensuring not only technical proficiency but also optimal user experience.',
    },
  
    {
      id: 2,
      name: 'Css',
      percentage: 75,
      description:
        'Skilled in crafting visually appealing and responsive user interfaces through CSS, ensuring a seamless and engaging user experience.',
    },
  
    {
      id: 3,
      name: 'Bootstrap',
      percentage: 80,
      description:
        'Experienced in leveraging Bootstrap to expedite the development process, creating mobile-friendly and responsive designs with ease.',
    },
  
    {
      id: 4,
      name: 'Javascript',
      percentage: 70,
      description:
        'Proficient in implementing dynamic and interactive features using JavaScript, enhancing user interactivity and overall website functionality.',
    },

    {
      id: 5,
      name: 'React Js',
      percentage: 65,
      description:
        'Adept at building modern, scalable web applications with React.js, utilizing component-based architecture for efficient and maintainable code.',
    },
    
    {
      id: 6,
      name: 'Adobe Photoshop',
      percentage: 70,
      description:
        'Expertise in utilizing Adobe Photoshop for precise and creative graphic design, ensuring visually stunning and polished website elements.',
    },
    
    {
      id: 7,
      name: 'Adobe Illustrator',
      percentage: 70,
      description:
        'Skilled in Adobe Illustrator for vector graphics, contributing to the creation of unique and eye-catching illustrations and branding elements.',
    },
    
    {
      id: 8,
      name: 'Figma',
      percentage: 75,
      description:
        'Proficient in Figma for collaborative design and prototyping, facilitating seamless communication and iteration in the design process.',
    },
  
    {
      id: 9,
      name: 'Adobe XD',
      percentage: 65,
      description:
        'Proficient in Adobe XD for prototyping and designing user experiences, translating ideas into intuitive and user-friendly interfaces.',
    },
  ];

export const projects: Project[] = [
    {
      id: 1,
      img: Project1,
      category: 'Shopify',
      title: 'TCL',
      link: 'https://www.thecollegiatelineup.com/',
      description:
        'In this project, I breathe life into digital experiences, crafting captivating websites with HTML and CSS in Shopify.',
        blurhash: 'UxLN73rxxvSitdf8ahah~qS2RQr?xoWEWXbG',
    },
    {
      id: 2,
      img: Project2,
      category: 'React JS',
      title: 'TraderFi',
      link: 'https://traderfi.trader2b.com/',
      description:
        'I navigate the design realms, sculpting websites with a harmonious blend of HTML, CSS, Bootstrap, and JS in this project in React.',
        blurhash: 'UIECU^D$%4xa~W9rInNG=*%LITt8nONYInxa',
    },
    {
      id: 3,
      img: Project3,
      category: 'Wordpress',
      title: 'WE ARE AERIAL',
      link: 'https://www.weareaerial.com/',
      description:
        'I craft web experiences with WordPress plugin themes and CSS as a UI Developer in this project in Wordpress.',
        blurhash: 'UfFPpJ#5_MrqwGNLxBWEyDt2NKbbnNaekBoJ',
    },
    {
      id: 4,
      img: Project4,
      category: 'React JS',
      title: 'Highschool Babysitters',
      link: 'https://highschoolbabysitters.com/',
      description:
        'I craft immersive digital realms by sculpting HTML, CSS, Bootstrap, and JS, bringing vibrant life to web experiences in React.',
        blurhash: 'UKN0*r.R00NYtkxbNFsD009Y~XO9t7nlR%t8',
    },
    {
      id: 5,
      img: Project5,
      category: 'Angular JS',
      title: 'Kyobee',
      link: 'https://admin.kyobee.com/',
      description:
        'I design web wonders, harmonizing HTML, CSS, and Bootstrap to bring unique flair to this project in Angular.',
        blurhash: 'UGRxy3yDrWV@xtR5pcVsQ8gOuiniZ$oLtRkW',
    },
    {
      id: 6,
      img: Project6,
      category: 'React JS',
      title: 'Web Admin',
      link: 'https://t2badm.trader2b.com/admin',
      description:
        'I sculpt digital landscapes, fusing HTML, CSS, Bootstrap, and JS to breathe life into this project web experiences in React.',
        blurhash: 'UIAm3o]}slNy}k=wxDR*^4=Ys.S5=Y-AoMWB',
    },
    {
      id: 7,
      img: Project7,
      category: 'Native App',
      title: 'Trader2B',
      link: 'https://apps.apple.com/us/app/trader2b/id1593255607',
      description:
        'I craft immersive digital realms, sculpting websites with React Native elegance and CSS flair in this project.',
        blurhash: 'UhIE^ISIxtocXWNGR+WV~ot2R*fiETobSOfk',
    },
    {
      id: 8,
      img: Project8,
      category: 'Graphics Design',
      title: 'Tanvi`s Chocopedia',
      link: 'https://www.instagram.com/10v_chocopedia/',
      description:
        'Animating festival delights through PowerPoint, whipping up sweet and chocolaty offers in a social media video.',
        blurhash: 'UFQ0N[004Tof~q?bx]NG%3-p%MxuNGIoRkof',
    },
    {
      id: 9,
      img: Project9,
      category: 'Graphics Design',
      title: 'Tanvi`s Chocopedia',
      link: 'https://www.instagram.com/10v_chocopedia/',
      description:
        'Illustrating festive vibes through Adobe Illustrator, crafting vibrant social media posters that capture the spirit of celebration.',
        blurhash: 'U8R1^dgR?cjZ^b006WNz?_xU02NHGJ5B|Bng',
    },
  ];

export const cv: CVItem[] = [
    {
      id: 1,
      title: 'Master`s in Computer Engineering (CSE)',
      subtitle: 'L.D. College of Engineering',
      date: '2022 - 2024',
      description:
        'Achieved a vibrant 8.11 CPI in Master Engineering in CSE, mastering new foundational subjects along the way.',
      category: 'education',
    },
  
    {
      id: 2,
      title: 'Bachelor`s in Information Technology',
      subtitle: 'Gandhinagar Institute of Technology',
      date: '2019-2022',
      description:
        'Achieved a vibrant 8.58 CPI in Bachelor Engineering in IT, mastering new foundational subjects along the way.',
      category: 'education',
    },
  
    {
      id: 3,
      title: 'Diploma Engg. in Information Technology',
      subtitle: 'Government Polytechnic. Ahmedabad',
      date: '2015 - 2018',
      description:
        'Achieved a vibrant 8.11 CPI in Diploma Engineering in IT, mastering new foundational subjects along the way.',
      category: 'education',
    },
  
    {
      id: 4,
      title: 'Ordex Technology Solution Inc',
      subtitle: 'Jr. Software Developer',
      date: '2022 - PRESENT',
      description:
        'UI Intern Jan-Jun 2022, adept at transforming XD/Figma designs to responsive using HTML, CSS, Bootstrap, and JS with React, Angular, WordPress.',
      category: 'experience',
    },
  
    {
      id: 5,
      title: 'Tanvi`s Chocopedia',
      subtitle: 'Freelancer Graphics Designer',
      date: '2023 - PRESENT',
      description:
        'Freelance graphic designer excelling in social media content creation using Photoshop, Illustrator, and PowerPoint.',
      category: 'experience',
    },
  
    {
      id: 6,
      title: 'Jivkorbai Lallubhai High School',
      subtitle: 'Computer Teacher',
      date: '2018 - 2019',
      description:
        'Inspiring as a visitor computer teacher, guiding 9th and 10th-grade students on the exciting journey of computer education.',
      category: 'experience',
    }
  ];

export const testimonials: Testimonial[] =  [
  {
    id: 1,
    img: Testimonials,
    name: 'Burhani Foundation',
    author: 'Founder',
    description:
      'Brother(Krushang) You have perfectly done work. You are good at you work and also completed work before time with very affordable price.',
  },
  {
    id: 2,
    img: Testimonials,
    name: 'Befikre Holidays',
    author: 'Sahil Tripathi',
    description:
      'Krushang your work style so amazing and perfect. You are work with so many efforts and you work in so reasonable price. You work so hard.',
  },
  {
    id: 3,
    img: Testimonials,
    name: 'Sunrise Elevators',
    author: 'Vrajesh Chauhan',
    description:
      'Krushang you work perfectly and your efforts and your work speed so fast. your working streatergy was totally powerful. your comunication skill so amazing.',
  },
  {
    id: 4,
    img: Testimonials,
    name: 'Tevar Tourism',
    author: 'CEO & Founder',
    description:
      'Krushang done his works within time and sometime before time that his plus point and he is very good at his work with economical rate with good quality.',
  },
  {
    id: 5,
    img: Testimonials,
    name: 'Tanvi`s Chocopedia',
    author: 'Tanvi shah',
    description:
      'Krushang done his works with so much Perfection and Dedication at it is best. Thank you so much for giving us best work.',
  },
];

export const theme: Colorswitcher[] = [
  {
    id: 1,
    img: Theme1,
    color: '#BC8F8F',
  },

  {
    id: 2,
    img: Theme2,
    color: '#29A385',
  },

  {
    id: 3,
    img: Theme3,
    color: '#ADD8E6',
  },

  {
    id: 4,
    img: Theme4,
    color: '#FF7F7F',
  },

  {
    id: 5,
    img: Theme5,
    color: '#F89880',
  },

  {
    id: 6,
    img: Theme6,
    color: '#F49AC2',
  },

  {
    id: 7,
    img: Theme7,
    color: '#C19A6B',
  },

  {
    id: 8,
    img: Theme8,
    color: '#ACACAC',
  },

  {
    id: 9,
    img: Theme9,
    color: '#FBD499',
  },
  
  {
    id: 10,
    img: Theme10,
    color: '#DECCFF',
  },
];
