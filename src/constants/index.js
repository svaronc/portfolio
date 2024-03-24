import wiki from "../assets/WIKIMAPS.png";
import basico from "../assets/diploma-basico-programacion.jpg";
import git from "../assets/diploma-git-github.jpg";
import certReact from "../assets/diploma-react.jpg";
import diplo from "../assets/diplomado_en_desarrollo_web_full_stackfront_end_back_end (1).jpg";
import webFunda from "../assets/diploma-web-fundamentos.jpg";
import wikitest1 from "../assets/wikitest1.mp4";
import photolabsVideo from '../assets/Photolabs.mp4'
import photolabs from '../assets/photolabs.png'
import soon from '../assets/soon.jpg'

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const cardInfo = [ 
  {
    id: 1,
    title: "WikiMaps",
    description: "WikiMaps - A collaborative mapping web app that allow users to create maps with various points of interest, keep a list of favorites and contribute to maps on the Discover page.",
    stack: ["jquery", "postgresql", "js", "css3", "nodejs", "html5"],
    image: wiki,
    repo: 'https://github.com/glowiep/WikiMaps',
    video: wikitest1,
    deployed: 'https://wikimaps.up.railway.app/'
  },
  {
    id: 2,
    title: "Photolabs",
    description: "PhotoLabs is an engaging photo browsing application that allows users to explore a diverse collection of images across various categories. With its user-friendly interface, PhotoLabs offers the following key features: Browse by Topic, Like Photos and preview them in full screen.",
    stack: ["reactjs", "postgresql", "js", "css3", "nodejs", "html5"],
    image: photolabs,
    repo: 'https://github.com/svaronc/photolabs-starter',
    video: photolabsVideo
    
  },
  {
    id: 3,
    title: "Smart Agent",
    description: "This is an ongoing project that aims to provide a platfomr for cusstomer support agents to manage their tickets and provide a better service to their customers.",
    stack: ["ruby", "rails","postgresql", "js", "tailwindcss", "reactjs"],
    image: soon,
    repo: 'https://github.com/glowiep/SmartAgent',
    video: null
  },
]

export const certifications = [
  {
    id: 1,
    url: "https://platzi.com/p/sebastianvaron96/curso/1050-basico-programacion/diploma/detalle/",
    image: basico,
  },
  {
    id: 2,
    url: "https://platzi.com/p/sebastianvaron96/curso/1557-git-github/diploma/detalle/",
    image: git,
  },
  {
    id: 3,
    url: "https://platzi.com/p/sebastianvaron96/curso/7395-react/diploma/detalle/",
    image: certReact,
  },
  {
    id: 4,
    url: "https://www.ucatalunya.edu.co/certificados/5L9WZ",
    image: diplo,
  },
  {
    id: 5,
    url: "https://platzi.com/p/sebastianvaron96/ruta/7039-web-fundamentos/diploma/detalle/",
    image: webFunda,
  }
]