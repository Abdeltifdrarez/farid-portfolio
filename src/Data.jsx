import { ImPencil } from "react-icons/im";
import { BsShop, BsHeart, BsWatch, BsStar } from "react-icons/bs";
import { BiCoffeeTogo } from "react-icons/bi";
import { TiDeviceDesktop } from "react-icons/ti";
import { TbSpeakerphone } from "react-icons/tb";

import image1 from "./assets/technologies/image1.png";
import image2 from "./assets/technologies/image2.png";
import image3 from "./assets/technologies/image3.png";
import image4 from "./assets/technologies/image4.png";
import image5 from "./assets/technologies/image5.png";
import image6 from "./assets/technologies/image6.png";
import image7 from "./assets/technologies/image7.png";
import image8 from "./assets/technologies/image8.png";

import project1 from "./assets/project1.jpg";
import project2 from "./assets/project2.jpg";
import project3 from "./assets/project3.jpg";
import project4 from "./assets/project4.jpg";
import project5 from "./assets/project5.jpg";
import project6 from "./assets/project6.jpg";
import project7 from "./assets/project7.jpg";


import { TfiHeadphoneAlt } from "react-icons/tfi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GoMailRead } from "react-icons/go";

export const navLinks = [
  {
    id: 1,
    text: "Home",
    textfr: "Accueil",
    href: "home",
  },
  {
    id: 2,
    text: "Services",
    textfr: "Services",
    href: "services",
  },
  {
    id: 3,
    text: "Skills",
    textfr: "Technologies",
    href: "technologies",
  },

  {
    id: 4,
    text: "Projects",
    textfr: "Projets",
    href: "projects",
  },
  {
    id: 5,
    text: "Contact",
    textfr: "Contact",
    href: "contact",
  },
];


export const services = [
  {
    id: 1,
    icon: <ImPencil />,
    title: "CREATION OF BUSINESS CARDS",
    description: "Stand out from the crowd by creating your own business cards with a custom design",
    titlefr: "CRÉATION DES CARTES DE VISITE",
    descriptionfr: "Démarquez-vous en créant vos propres cartes de visite avec une conception personnalisée",
  },
  {
    id: 2,
    icon: <BsShop />,
    title: "DESIGN OF PROFESSIONAL LOGOS",
    description: "Large selection of logos. Each logo is customized for your organization or company",
    titlefr: "CRÉATION DES LOGOS PROFESSIONNELS",
    descriptionfr: "Grande sélection de logos. Chaque logo est personnalisé pour votre organisation ou votre société",
  },
  {
    id: 3,
    icon: <TiDeviceDesktop />,
    title: "Web Design & Mobile",
    description: "The Website and Mobile Design will include all the basic and advanced features you want responsive, motion, 3D...",
    titlefr: "Création des maquettes web et mobile",
    descriptionfr: "La création maquettes web et mobile inclura toutes les fonctions de base et avancées que vous souhaitez",
  },
  {
    id: 4,
    icon: <TbSpeakerphone />,
    title: "CREATION OF ADVERTISING POSTERS",
    description: "Graphic creation of poster for your communication, adapted to your message and your graphic charter",
    titlefr: "CRÉATION DES AFFICHES PUBLICITAIRES",
    descriptionfr: "Création graphique d'affiche pour votre communication, adapté à votre message et votre charte graphique",
  },
];

export const serviceFinishes = [
  {
    id: 1,
    icon: <BsHeart />,
    text: "Happy Clients",
    textfr: "Des Clients Satisfaits",
    amount: 566,
  },
  {
    id: 2,
    icon: <BsWatch />,
    text: "Working Hours",
    textfr: "Heures De Travail",
    amount: 5335,
  },
  {
    id: 3,
    icon: <BsStar />,
    text: "Projects",
    textfr: "Projets",
    amount: 500,
  },
  {
    id: 4,
    icon: <BiCoffeeTogo />,
    text: "Coffee Consumed",
    textfr: "Café Consommé",
    amount: 1189,
  },
];

export const btns = [
  { id: 1, name: "All", value: "all" },
  { id: 2, name: "UI/UX", value: "ui/ux" },
  { id: 3, name: "Web Design", value: "web design" },
  { id: 4, name: "Marketing", value: "marketing" },
  { id: 5, name: "Logo", value: "logo" },
  { id: 6, name: "Marketing", value: "marketing" },
];

export const technologiesData = [
  {
    id: 1,
    name: "After Effects",
    image: image1,
  },
  {
    id: 2,
    name: "Illustrator",
    image: image2,
    
  },
  {
    id: 3,
    name: "Figma",
    image: image3,
  },
  {
    id: 4,
    name: "Filmora",
    image: image4,
  },
  {
    id: 5,
    name: "Indesign",
    image: image5,
  },
  {
    id: 6,
    name: "Photoshop",
    image: image6,
  },
  {
    id: 7,
    name: "Premiere Pro",
    image: image7,
  },
  {
    id: 8,
    name: "Xd",
    image: image8,
  },
  
];

export const projects = [
  {
    id: 1,
    image: project1,
    value: "web design",
  },
  {
    id: 2,
    image: project2,
    value: "ui/ux",
  },
  {
    id: 3,
    image: project3,
    value: "ui/ux",
  },
  {
    id: 4,
    image: project4,
    value: "web design",
  },
  {
    id: 5,
    image: project5,
    value: "ui/ux",
  },
  {
    id: 6,
    image: project6,
    value: "marketing",
  },
  {
    id: 7,
    image: project7,
    value: "marketing",
  },
];

export const contacts = [
  {
    id: 1,
    icon: <TfiHeadphoneAlt />,
    text: "+212 629 092 604",
  },
  {
    id: 2,
    icon: <HiOutlineLocationMarker />,
    text: "Fez - Meknes Morocco",
  },
  {
    id: 3,
    icon: <GoMailRead />,
    text: "drarezf@gmail.com",
  },
];
