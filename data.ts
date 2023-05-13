import { RiComputerLine } from "react-icons/ri";
import { FaDatabase, FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> React Js</b>,<b> Next Js</b>  and <b>Vue Js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Laravel</b>, <b>Node </b> & <b>Express </b>",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about: "I can develop  REST API using <b>Laravel</b>  & <b>Node API</b> ",
  },
  {
    Icon: FaDatabase,
    title: "Databases",
    about:
      "working on different databases like <b>MySql</b>, <b>Firebase</b>  and <b>Mongo DB</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "CSS Frameworks",
    about:
      "building beautifull websites using <b>Tailwind CSS</b>  and  <b>Bootstrap</b> ",
  },
  // {
  //   Icon: RiComputerLine,
  //   title: "Whatever",
  //   about:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  // },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Laravel",
    level: "95",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Next",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Vue",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Tailwind CSS",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "90",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Canva",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Office",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Power Point",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Excel",
    level: "80",
  },
];

export const projects: IProject[] = [
  {
    name: "Smartgenix",
    image_path: "/images/smartgenix.png",
    deployed_url: "http://smartgenix.co.uk/",
    github_url: "https://github.com/usmanlatif306",
    category: ["laravel", "Livewire"],
    description:
      "Book a car service appointment with a local garage as easy as it is to get an Italian pizza.",
    key_techs: ["Laravel", "MySql", "Livewire", "Stripe", "Bootstrap"],
  },
  {
    name: "Scholarly Help",
    image_path: "/images/scholarlyhelp.png",
    deployed_url: "https://scholarlyhelp.com/",
    github_url: "https://github.com/usmanlatif306",
    category: ["laravel", "vue"],
    description:
      "Leading Academic Writing Services, Light on your Pocket. We deliver the most trustworthy academic writing assistance for your online class!",
    key_techs: ["Laravel", "MySql", "Vue", "Stripe"],
  },

  {
    name: "Synicare",
    description: "Medication History Easily Accessible",
    image_path: "/images/synicare.png",
    deployed_url: "https://synicare.com",
    github_url: "https://github.com/usmanlatif306",
    category: ["laravel"],
    key_techs: ["Laravel", "Jquery", "LiveWire", "MySql", "Stripe"],
  },

  {
    name: "Competent Writer",
    image_path: "/images/competent.png",
    deployed_url: "https://competentwriter.com/",
    github_url: "https://github.com/usmanlatif306",
    category: ["laravel", "vue"],
    description:
      "Competent Writer is essay and articles writing platform where student can hire any writer to write their essay",
    key_techs: ["Laravel", "MySql", "Vue", "Stripe"],
  },

  {
    name: "Eduintello",
    description: "Eduintello is essay writing service",
    image_path: "/images/edu.png",
    deployed_url: "http://eduintello.com",
    github_url: "https://github.com/usmanlatif306",
    category: ["laravel"],
    key_techs: ["Laravel", "Jquery", "MySql", "Stripe"],
  },

  {
    name: "Phone Locally",
    image_path: "/images/phonelocally.png",
    deployed_url: "https://phonelocally.com/",
    github_url: "https://github.com/usmanlatif306",
    category: ["laravel"],
    description:
      "PhoneLocally makes business communication easier by providing highly customizable cloud-based contact center solutions. Our innovative tools can be tailored to meet your unique business needs.",
    key_techs: ["Laravel", "MySql", "Jquery", "Bootstrap", "Stripe"],
  },

  {
    name: "Fast Insurance",
    image_path: "/images/insurance.png",
    deployed_url: "https://fast-insurance.eu/",
    github_url: "#",
    category: ["laravel"],
    description:
      "Travel medical insurance to Europe, for residency. At Fast Insurance, we understand that life can be unpredictable. That's why we offer fast and reliable insurance solutions to help you protect what matters most. We work hard to make the insurance process as simple and stress-free as possible, so you can focus on what really matters.",
    key_techs: ["Laravel", "MySql", "Jquery", "Bootstrap", "Stripe", "Paypal"],
  },

  {
    name: "Placemenet",
    image_path: "/images/placemenet.png",
    deployed_url: "https://placemenet.com/",
    github_url: "#",
    category: ["laravel"],
    description:
      "UK and Ireland’s leading hybrid recruiter, Place Me Net combines online recruitment solutions with personalised service and expertise to deliver real results to businesses throughout the UK, Ireland and beyond!",
    key_techs: ["Laravel", "MySql", "Jquery", "Bootstrap", "Stripe", "Paypal"],
  },

  {
    name: "Easy Pupils",
    description: "Easy pupils is a school management system.",
    image_path: "/images/school.png",
    deployed_url: "http://school.javaplums.com",
    github_url: "https://github.com/usmanlatif306",
    category: ["laravel"],
    key_techs: ["Laravel", "Jquery", "MySql"],
  },

  {
    name: "VPS2Days",
    image_path: "/images/vps.png",
    deployed_url: "https://vps2days.com/",
    github_url: "https://github.com/usmanlatif306",
    category: ["laravel"],
    description: "VPS2Days is vps providing services on cheap rates",
    key_techs: ["Laravel", "MySql", "Jquery", "Bootstrap", "Stripe"],
  },

  {
    name: "Lyriks",
    image_path: "/images/musify.png",
    deployed_url: "https://instagram-clone-git-main-usmanlatif306.vercel.app",
    github_url: "https://github.com/usmanlatif306/music",
    category: ["react", "next"],
    description:
      "Instagram clone is social media app based on instagram with google authentication where user can create, view and comment on any post",
    key_techs: [
      "React",
      "Next Js",
      "Tailwind",
      "Firebase",
      "Google Auth",
      "Node",
    ],
  },

  {
    name: "Instagram Clone",
    image_path: "/images/inst.png",
    deployed_url: "https://instagram-clone-git-main-usmanlatif306.vercel.app",
    github_url: "https://github.com/usmanlatif306/instagram-clone",
    category: ["react"],
    description:
      "Instagram clone is social media app based on instagram with google authentication where user can create, view and comment on any post",
    key_techs: ["React", "Next Js", "Tailwind", "Firebase", "Google Auth"],
  },

  {
    name: "Air Bnb",
    image_path: "/images/air.png",
    deployed_url: "https://airbnb-clone-usmanlatif306.vercel.app",
    github_url: "https://github.com/usmanlatif306/airbnb-clone",
    category: ["react"],
    description:
      "Hulu clone is hotel booking app  with google authentication where user can book any hotel for their trip in any where in the world",
    key_techs: ["React", "Next Js", "Tailwind", "Next Auth"],
  },
  {
    name: "Hulu Clone",
    image_path: "/images/hulu.png",
    deployed_url: "https://hulu-clone-usmanlatif306.vercel.app",
    github_url: "https://github.com/usmanlatif306/hulu-clone",
    category: ["react"],
    description:
      "Hulu clone is tv series searching app with google authentication where user can search any type of tv series and movies",
    key_techs: ["React", "Next Js", "Tailwind"],
  },
  {
    name: "Amazone Clone",
    image_path: "/images/emazon.png",
    deployed_url: "https://amazone-2-0-usmanlatif306.vercel.app/",
    github_url: "https://github.com/usmanlatif306/amazone-2.0",
    category: ["react"],
    description:
      "Amazone clone is ecommerece app where user can purchase anything online and can pay thier charges through stripe payment gateway",
    key_techs: ["React", "Next Js", "Tailwind", "Firebase"],
  },
  {
    name: "Green Escape Journey",
    image_path: "/images/green.png",
    deployed_url: "!#",
    github_url: "https://github.com/usmanlatif306/green-escape-journey",
    category: ["react", "node"],
    description:
      "Amazone clone is a tourist base company which offer different tour plan for people, People can choose any plan according to the number of people",
    key_techs: ["React", "Bootstrap", "Firebase", "Node"],
  },
];
