

export const navItems = [
  { name: "Sobre mí", href: "#about" },
  { name: "Proyectos", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Formación", href: "#training" },
  { name: "Contacto", href: "#contact" },
];

export const projects = [
  {
  name: "FishHunter",
  title: "App Web de Gestión de Capturas de Pesca",
  description: "Aplicación web full-stack para la gestión de capturas de pesca, con autenticación y autorización mediante JWT, control de roles y panel de administración.",
  description2: "Incluye pronóstico del tiempo usando APIs externas.",
  tech: [
    "Java",
    "Spring Boot",
    "JWT",
    "JPA",
    "PostgreSQL",
    "React",
    "TypeScript",
    "Tailwind CSS"
  ],
  demo: "https://fish-hunter-fj.netlify.app/",
  img: "/fish_hunter.png",
  featured: true

  },
  {
    name: "SonrieConmigo.es",
    title: "E-Commerce Web",
    description: "Tienda online completa con carrito de compras, pasarela de pagos, panel de administración y gestión de inventario.",
    tech: ["Wordpress", "Elementor", "Woocomerce", "Stripe"],

    demo: "https://sonrieconmigo.es/",
    img: "/sonrieconmigo.png",
    featured: true,
  },
  {
    name: "TrassTarea",
    title: "App de Gestión de Tareas",
    description: "Aplicación Android para la gestión de tareas, desarrollada en Java con persistencia local mediante Room DB",
    tech: ["Java", "Android", "Room DB"],
    img: "/Trasstarea.png",
    featured: true,
  },
  {
    title: "App Web Gestión de Proyectos",
    description: "Aplicación Web para la gestión de proyectos y desarrolladores. Jwt, control por roles. Estructura MVC.",
    tech: ["Java", "Spring Boot", "Thymeleaf"],
  },
  {
    title: "Portfolio Personal",
    description: "Este mismo portfolio, construido con tecnologías modernas de desarrollo web.",
    tech: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Videojuego 2D",
    description: "Videojuego ambientado en un cementerio, con exploración, tesoros, NPCs, colisiones y mejoras visuales",
    tech: ["Java", "LibGDX", "Tiled"],
    github: "https://github.com",
  },
];


export const skills = [
  {
    category: "Lenguajes",
    items: ["Java", "C#", "TypeScript", "Python", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "HTML/CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Spring Boot","PostgreSQL", "MySQL"],
  },
  {
    category: "Herramientas",
    items: ["Git", "Android Studio", "VS Code"],
  },
]

export const education = [
  {
    title: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma",
    institution: "IES Trassierra",
    period: "2022 - 2024",
    description:
      "Formación completa en desarrollo de aplicaciones para diferentes plataformas. Aprendizaje de lenguajes como Java, C# y tecnologías web modernas.",
  },
  {
    title: "Bachillerato Tecnológico",
    institution: "IES Trassierra",
    period: "2020 - 2022",
    description:
      "Formación preuniversitaria con enfoque en tecnología y ciencias.",
  },
]

export const certifications = [
  {
    name:"Foundational C# with Microsoft",
    url: "https://www.freecodecamp.org/certification/fcc-dae8ba16-8b59-420d-8ed4-76aa56e00239/foundational-c-sharp-with-microsoft"
  },
]