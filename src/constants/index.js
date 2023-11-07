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
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  offre,
  mario,
  pendu,
  asie,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "A propos",
  },
  {
    id: "work",
    title: "Mon parcours",
  },
  {
    id: "contact",
    title: "Me contacter",
  },
];

const services = [
  {
    title: "BTS MCO Management Commercial Opérationnel (IESA)",
    icon: web,
  },
  {
    title: "LICENCE professionnelle Droit Economie Gestion (CNAM)",
    icon: mobile,
  },
  {
    title: "PRÉ-MASTER Architecte logiciel et développeur d'application (EPITECH)",
    icon: backend,
  },
  {
    title: "MASTER 1 MASTER 2 Architecte logiciel et développeur d'application (EPITECH)",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Téléconseiller",
    company_name: "BMW",
    icon: starbucks,
    iconBg: "#383E56",
    date: "05/2023-09/2023",
    points: [
      "Former de nouveaux téléconseillers sur les techniques de vente et de communication.",
      "Réaliser un taux de satisfaction client de 95% grâce à une approche personnalisée et une écoute active.",
      "Collaborer avec une équipe de téléconseillers pour partager les meilleures pratiques et améliorer les performances collectives.",
    ],
  },
  {
    title: "Assistant manager",
    company_name: "Norauto",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "01/2019 - 01/2022",
    points: [
      "Gérer les stockes et les commandes, garantissant une disponibilité continue des produits.",
      "Former et encadrer de nouveaux membres de l'équipe de vente, facilitant leur intégration rapide et améliorant leurs performances.",
      "Organiser et participer à des événements promotionnels, accroissant la visibilité de l'entreprise et attirant de nouveaux clients",
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
    name: "Site d'offre d'emploi",
    description:
      "Projet scolaire m'ayant permis de maîtriser, REACT, TAILWIND CSS, PHP ainsi que les réquêtes SQL",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
     
      {
        name: "SQL",
        color: "blue-text-gradient",
      },
    ],
    image: offre,
    source_code_link: "https://github.com/OGESebastien",
  },
  {
    name: "Jeu Mario",
    description:
      "Création d'un jeu MArio avec Java et l'IDE ECLIPSE. L'objectif étant d'apprendre la programmation orienté objet.",
    tags: [
      {
        name: "JAVA",
        color: "blue-text-gradient",
      },
      {
        name: "ECLIPSE",
        color: "green-text-gradient",
      },
    ],
    image: mario,
    source_code_link: "https://github.com/OGESebastien",
  },
  {
    name: "Jeu du pendu",
    description:
      "Avec Python, j'ai réaliser un jeu du pendu en utilisant l'IDE Visual Studio Code. Bien qu'il ne soit pas encore utilisable dans une interface graphique, il est fonctionnel.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Visual Studio Code",
        color: "green-text-gradient",
      },
    ],
    image: pendu,
    source_code_link: "https://github.com/OGESebastien",
  },
  {
    name: "Site de voyage",
    description:
      "Utilisation du langage HTML et CSS pour réaliser, sans l'aide d'aucun framework, un site de voyage permettant de sélectionner différentes destinations en Asie. C'était mon tout premier projet, que j'ai présenté à EPITECH pour mon admission",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
    ],
    image: asie,
    source_code_link: "https://github.com/OGESebastien",
  },
];

export { services, technologies, experiences, testimonials, projects };
