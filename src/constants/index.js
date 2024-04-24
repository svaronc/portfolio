import wiki_small from '../assets/WIKIMAPS_(Small).png';
import wiki_medium from '../assets/WIKIMAPS_(Medium).png';
import wiki_large from '../assets/WIKIMAPS_(Large).png';
import photo_small from '../assets/photolabs_(Small).png';
import photo_medium from '../assets/photolabs_(Medium).png';
import photo_large from '../assets/photolabs_(Large).png';
import wiki_video from '../assets/wikitest1.mp4';
import photo_video from '../assets/Photolabs.mp4';
import basico_small from '../assets/diploma_basico_programacion_(Small).jpg';
import basico_medium from '../assets/diploma_basico_programacion_(Medium).jpg';
import basico_large from '../assets/diploma_basico_programacion_(Large).jpg';
import git_small from '../assets/diploma_git_github_(Small).jpg';
import git_medium from '../assets/diploma_git_github_(Medium).jpg';
import git_large from '../assets/diploma_git_github_(Large).jpg';
import react_small from '../assets/diploma_react_(Small).jpg';
import react_medium from '../assets/diploma_react_(Medium).jpg';
import react_large from '../assets/diploma_react_(Large).jpg';
import uc_small from '../assets/diplomado_en_desarrollo_web_full_stackfront_end_back_end_(1)_(Small).jpg';
import uc_medium from '../assets/diplomado_en_desarrollo_web_full_stackfront_end_back_end_(1)_(Medium).jpg';
import uc_large from '../assets/diplomado_en_desarrollo_web_full_stackfront_end_back_end_(1)_(Large).jpg';
import web_small from '../assets/diploma_web_fundamentos_(Small).jpg';
import web_medium from '../assets/diploma_web_fundamentos_(Medium).jpg';
import web_large from '../assets/diploma_web_fundamentos_(Large).jpg';

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
    title: "Smart Agent",
    description:
      "SmartAgent is a customer support ticket management application, paired with an AI assistant, this was the final project for the Lighthouse Labs Full Stack Web Development Bootcamp.",
    stack: ["ruby", "rails", "postgresql", "js", "tailwindcss", "reactjs"],
    image: { small: '../assets/WIKIMAPS_(Small).png', medium: '../assets/WIKIMAPS_(Medium).png', large: '../assets/WIKIMAPS_(Large).png'},
    repo: "https://github.com/glowiep/SmartAgent",
    video: null,
  },
  {
    id: 2,
    title: "WikiMaps",
    description:
      "WikiMaps - A collaborative mapping web app that allow users to create maps with various points of interest, keep a list of favorites and contribute to maps on the Discover page.",
    stack: ["jquery", "postgresql", "js", "css3", "nodejs", "html5"],
    image: { small: wiki_small, medium: wiki_medium, large: wiki_large},
    repo: "https://github.com/glowiep/WikiMaps",
    video: wiki_video,
    deployed: "https://wikimaps.up.railway.app/",
  },
  {
    id: 3,
    title: "Photolabs",
    description:
      "PhotoLabs is an engaging photo browsing application that allows users to explore a diverse collection of images across various categories. With its user-friendly interface, PhotoLabs offers the following key features: Browse by Topic, Like Photos and preview them in full screen.",
    stack: ["reactjs", "postgresql", "js", "css3", "nodejs", "html5"],
    image: { small: photo_small, medium: photo_medium, large: photo_large},
    repo: "https://github.com/svaronc/photolabs-starter",
    video: photo_video
  },
  
];

export const certifications = [
  {
    id: 1,
    name: "Basico Programacion",
    url: "https://platzi.com/p/sebastianvaron96/curso/1050-basico-programacion/diploma/detalle/",
    images: {small: basico_small, medium: basico_medium, large: basico_large},

  },
  {
    id: 2,
    name: "Git Github",
    url: "https://platzi.com/p/sebastianvaron96/curso/1557-git-github/diploma/detalle/",
    images: {small: git_small, medium: git_medium, large: git_large},
  },
  {
    id: 3,
    name: "React",
    url: "https://platzi.com/p/sebastianvaron96/curso/7395-react/diploma/detalle/",
    images: {small: react_small, medium: react_medium, large: react_large},
  },
  {
    id: 4,
    name: "UCatalunya",
    url: "https://www.ucatalunya.edu.co/certificados/5L9WZ",
    images: {small: uc_small, medium: uc_medium, large: uc_large},
  },
  {
    id: 5,
    name: "Web Fundamentos",
    url: "https://platzi.com/p/sebastianvaron96/ruta/7039-web-fundamentos/diploma/detalle/",
    images: {small: web_small, medium: web_medium, large: web_large},
  },
];
export const stack = [
  'reactjs',
  'git',
  'github',
  'js',
  'jquery',
  'nodejs',
  'postgresql',
  'rails',
  'ruby',
  'tailwindcss',
  'vitejs',
  'html5',
  'css3',
  'cypress',
  'reactjs',
  'git',
  'github',
  'js',
  'jquery',
  'nodejs',
  'postgresql',
  'rails',
  'ruby',
  'tailwindcss',
  'vitejs',
  'html5',
  'css3',
  'cypress',
];
