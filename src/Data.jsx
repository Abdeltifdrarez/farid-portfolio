import { ImPencil } from "react-icons/im";
import { BsShop, BsHeart, BsWatch, BsStar } from "react-icons/bs";
import { BiCoffeeTogo } from "react-icons/bi";
import { TiDeviceDesktop } from "react-icons/ti";
import { TbSpeakerphone } from "react-icons/tb";

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
    href: "home",
  },
  {
    id: 2,
    text: "Projects",
    href: "projects",
  },
  {
    id: 3,
    text: "Services",
    href: "services",
  },
  {
    id: 4,
    text: "Contact",
    href: "contact",
  },
];

export const services = [
  {
    id: 1,
    icon: <ImPencil />,
    title: "Copywrite",
  },
  {
    id: 2,
    icon: <BsShop />,
    title: "Ecommerce",
  },
  {
    id: 3,
    icon: <TiDeviceDesktop />,
    title: "Web Design",
  },
  {
    id: 4,
    icon: <TbSpeakerphone />,
    title: "Marketing",
  },
];
export const serviceFinishes = [
  {
    id: 1,
    icon: <BsHeart />,
    text: "Happy Clients",
    amount: 566,
  },
  {
    id: 2,
    icon: <BsWatch />,
    text: "Working Hours",
    amount: 5335,
  },
  {
    id: 3,
    icon: <BsStar />,
    text: "Awards Won",
    amount: 13,
  },
  {
    id: 4,
    icon: <BiCoffeeTogo />,
    text: "Coffee Consumed",
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
