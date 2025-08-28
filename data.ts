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
      "working on different databases like <b>MySql</b>, <b>PostgreSQL</b>, <b>Firebase</b>  and <b>Mongo DB</b> ",
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
    name: "Figma",
    level: "80",
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
  {
    Icon: BsCircleFill,
    name: "Canva",
    level: "50",
  },
];

export const projects: IProject[] = [
  {
    name: "Adlee",
    image_path: "/images/adlee.png",
    deployed_url: "https://adlee.io/",
    github_url: "https://github.com/usmanlatif306",
    category: ["laravel", "Livewire"],
    description:
      "Adlee streamlines the sponsorship process for all stakeholders, connecting sponsors to organizations and events that need them.",
    key_techs: ["Laravel", "MySql", "Livewire", "Stripe", "Tailwind"],
  },
  {
    name: "MyMechanic",
    image_path: "/images/mymechanic.png",
    deployed_url: "https://mymechanic.com/",
    github_url: "https://github.com/usmanlatif306",
    category: ["react"],
    description:
      "Mymechanic provides helping to find out best car repair mechanic in your area. You provide your issue with your vehicle and will receive best estimate for your repairing issue.",
    key_techs: ["React", "Nextjs", "MySql", "Stripe", "Tailwind"],
  },
  {
    name: "Smartgenix",
    image_path: "/images/smartgenix.png",
    deployed_url: "http://smartgenix.co.uk/",
    github_url: "https://github.com/usmanlatif306",
    category: ["laravel", "Livewire"],
    description:
      "Developed custom web portal and booking service to address the disconnect between mechanics and vehicle owners in the auto repair industry.",
    key_techs: ["Laravel", "MySql", "Livewire", "Stripe", "Bootstrap"],
  },
  {
    name: "YoungCreek Recreational",
    image_path: "/images/ycr.png",
    deployed_url: "https://www.youngcreekrec.com/",
    github_url: "https://github.com/usmanlatif306",
    category: ["laravel", "Livewire"],
    description:
      "YCR is e-commerece application where user can buy items related commercial playground equipments for children.",
    key_techs: ["Laravel", "MySql", "Livewire", "Stripe", "Bootstrap"],
  },
  {
    name: "Rent Soft",
    image_path: "/images/rent-soft.png",
    deployed_url: "https://rentsofthq.com/",
    github_url: "https://github.com/usmanlatif306",
    category: ["laravel", "Livewire"],
    description:
      "RentSoftHQ is all-in-one platform for managing rental properties, creating manager to handle your all records regarding properties, create talents, book lease for tenants, system automatically generate invoices for rent for each lease on specified date.",
    key_techs: ["Laravel", "MySql", "Livewire", "Stripe", "Bootstrap"],
  },
  {
    name: "Northern Star Airlines",
    image_path: "/images/northern.png",
    deployed_url: "https://northernstarairlines.com/homepage",
    github_url: "https://github.com/usmanlatif306",
    category: ["laravel", "react"],
    description:
      "Northern Star Airlines is a visionary aviation enterprise focused on transforming Ethiopia’s Tigray region into a premier aviation hub for Africa and beyond.",
    key_techs: ["Laravel", "MySql", "React", "Stripe", "Tailwind", "Inertia"],
  },
  {
    name: "A1Case",
    image_path: "/images/a1case.png",
    deployed_url: "https://a1case.mymechanic.com/",
    github_url: "https://github.com/usmanlatif306",
    category: ["laravel", "react"],
    description:
      "A1Case is e-commerce plateform to purchase phone case for you phone model and brand. You can select your brand, model and the desired design of phone case you want.",
    key_techs: ["Laravel", "MySql", "React", "Stripe", "Tailwind", "Inertia"],
  },
  {
    name: "Typedd",
    image_path: "/images/typedd.png",
    deployed_url: "https://app.typedd.com",
    github_url: "https://github.com/usmanlatif306",
    category: ["laravel", "react"],
    description:
      "Typedd provides easily create your personal blog using your social media posts & unlock a new wave oftraffic for your personal brand to grow.",
    key_techs: ["React", "Nextjs", "MySql", "Paddle", "Tailwind"],
  },
  {
    name: "Share Holders",
    image_path: "/images/shareholder.png",
    deployed_url: "https://shareholders.pro/",
    github_url: "https://github.com/usmanlatif306",
    category: ["laravel", "livewire"],
    description:
      "ShareHolders developed a platform for the Real Estate marketplace that allows buyers and sellers to easily execute a transaction on their own.",
    key_techs: ["Laravel", "MySql", "Livewire", "Stripe", "Bootstrap"],
  },
  {
    name: "Thrifty",
    image_path: "/images/therifty.png",
    deployed_url: "https://www.thethriftyapp.com",
    github_url: "https://github.com/usmanlatif306",
    category: ["laravel"],
    description:
      "ShareHolders developed a platform for the Real Estate marketplace that allows buyers and sellers to easily execute a transaction on their own. ",
    key_techs: ["Laravel", "MySql", "Stripe", "Bootstrap"],
  },
  {
    name: "Scholarly Help",
    image_path: "/images/scholarlyhelp.png",
    deployed_url: "https://scholarlyhelp.com/",
    github_url: "https://github.com/usmanlatif306",
    category: ["laravel", "vue"],
    description:
      "ScholarlyHelp is an academic writing service provider that holds a vast team of professional writers, certified with advanced degrees in respective fields. ",
    key_techs: ["Laravel", "MySql", "Vue", "Stripe"],
  },
  {
    name: "Easy Pupils",
    description: "Easy pupils is a school management system.",
    image_path: "/images/school.png",
    deployed_url: "#",
    github_url: "https://github.com/usmanlatif306",
    category: ["laravel"],
    key_techs: ["Laravel", "Jquery", "MySql"],
  },

  // {
  //   name: "Lyriks",
  //   image_path: "/images/musify.png",
  //   deployed_url: "https://instagram-clone-git-main-usmanlatif306.vercel.app",
  //   github_url: "https://github.com/usmanlatif306/music",
  //   category: ["react", "next"],
  //   description:
  //     "Instagram clone is social media app based on instagram with google authentication where user can create, view and comment on any post",
  //   key_techs: [
  //     "React",
  //     "Next Js",
  //     "Tailwind",
  //     "Firebase",
  //     "Google Auth",
  //     "Node",
  //   ],
  // },

  // {
  //   name: "Instagram Clone",
  //   image_path: "/images/inst.png",
  //   deployed_url: "https://instagram-clone-git-main-usmanlatif306.vercel.app",
  //   github_url: "https://github.com/usmanlatif306/instagram-clone",
  //   category: ["react"],
  //   description:
  //     "Instagram clone is social media app based on instagram with google authentication where user can create, view and comment on any post",
  //   key_techs: ["React", "Next Js", "Tailwind", "Firebase", "Google Auth"],
  // },

  // {
  //   name: "Air Bnb",
  //   image_path: "/images/air.png",
  //   deployed_url: "https://airbnb-clone-usmanlatif306.vercel.app",
  //   github_url: "https://github.com/usmanlatif306/airbnb-clone",
  //   category: ["react"],
  //   description:
  //     "Hulu clone is hotel booking app  with google authentication where user can book any hotel for their trip in any where in the world",
  //   key_techs: ["React", "Next Js", "Tailwind", "Next Auth"],
  // },
  // {
  //   name: "Hulu Clone",
  //   image_path: "/images/hulu.png",
  //   deployed_url: "https://hulu-clone-usmanlatif306.vercel.app",
  //   github_url: "https://github.com/usmanlatif306/hulu-clone",
  //   category: ["react"],
  //   description:
  //     "Hulu clone is tv series searching app with google authentication where user can search any type of tv series and movies",
  //   key_techs: ["React", "Next Js", "Tailwind"],
  // },
  // {
  //   name: "Amazone Clone",
  //   image_path: "/images/emazon.png",
  //   deployed_url: "https://amazone-2-0-usmanlatif306.vercel.app/",
  //   github_url: "https://github.com/usmanlatif306/amazone-2.0",
  //   category: ["react"],
  //   description:
  //     "Amazone clone is ecommerece app where user can purchase anything online and can pay thier charges through stripe payment gateway",
  //   key_techs: ["React", "Next Js", "Tailwind", "Firebase"],
  // },
  // {
  //   name: "Green Escape Journey",
  //   image_path: "/images/green.png",
  //   deployed_url: "!#",
  //   github_url: "https://github.com/usmanlatif306/green-escape-journey",
  //   category: ["react", "node"],
  //   description:
  //     "Amazone clone is a tourist base company which offer different tour plan for people, People can choose any plan according to the number of people",
  //   key_techs: ["React", "Bootstrap", "Firebase", "Node"],
  // },
];
