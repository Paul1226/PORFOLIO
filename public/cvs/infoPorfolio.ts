// types
interface PersonalType {
  [key: string]: string;
};

interface EducacionType {
  [key: string]: string;
};
interface ExperienciaType {
  subtitulo: string;
  proyecto: string;
  descripcion: string;
  tecnologias: string[];
  link?: string;
  inicio: string;
  fin: string;
};

interface ProyectosType {
  nombre: string;
  descrip: string;
  tecn: string[];
  url?: string;
  repo: string;
  img: string;
}

export const personal: PersonalType = {
  nombre: "Paul",
  apellido: "Dev",
  titulo: "Desarrollador Web",
  resumen: "Soy Paúl Esteban, conocido como PaulDev. Mi pasión por la tecnología comenzó con el CNC y diseño digital, llevándome a estudiar Desarrollo Full-Stack en ConquerBlocks para dominar el frontend y backend.",
  email: "paulguachichullca@gmail.com",
  celular: "+593 98 0958291",
  cumpleanios: "2000-12-26",
  ubicacion: "Cuenca, Ecuador",
  githubUrl: "https://github.com/Paul1226",
  linkedinUrl: "https://www.linkedin.com/in/paul-guachichullca-2287602b1/",
  emailUrl: "mailto:paulguachichullca023@gmail.com"
}

export const educacion: EducacionType[] = [
  {
    institucion: "Academia Conquer Blocks",
    titulo: "Desarrollador Frontend",
    inicio: "2023",
    fin: "Actual",
    descripcion: "Me especializo en el desarrollo frontend utilizando tecnologías como React y Astro para crear interfaces de usuario dinámicas y receptivas, proporcionando una experiencia de usuario de alta calidad."
  },
  {
    institucion: "Academia Conquer Blocks",
    titulo: "Desarrollador Backend",
    inicio: "2023",
    fin: "Actual",
    descripcion: "Desarrollo la lógica del servidor y la gestión de bases de datos con Node.js y Django, asegurando la eficiencia y seguridad en la manipulación de datos y en la comunicación con el frontend."
  }
]

export const experiencia : ExperienciaType[] = [
  {
    subtitulo: "Aplicación de Películas",
    proyecto: "Página de Películas",
    descripcion: "Creé una página web de películas que permite a los usuarios buscar y ver información sobre diferentes películas. Se integrará posteriormente una base de datos para el almacenamiento y gestión de datos de películas, mejorando la funcionalidad y la experiencia del usuario.",
    tecnologias: ["HTML", "CSS", "JavaScript", "API de películas"],
    link: "https://mispeliculas-1226.netlify.app/",
    inicio: "Marzo-2024",
    fin: "Actual"
  },
  {
    subtitulo: "Desarrollo de Sitios Completos",
    proyecto: "Sitios Web Completos",
    descripcion: "Desarrollé dos sitios web que incluyen funcionalidades avanzadas como sistemas de autenticación, manejo de formularios, y conexión a bases de datos. Utilicé tecnologías como React y Node.js para construir aplicaciones web robustas y escalables, proporcionando una experiencia de usuario eficiente y segura.",
    tecnologias: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    inicio: "Enero-2024",
    fin: "Feb-2024"
  },
  {
    subtitulo: "Desarrollo Web Básico",
    proyecto: "Páginas Web en HTML, CSS y JavaScript",
    descripcion: "He creado más de 10 páginas web utilizando HTML, CSS y JavaScript, enfocándome en el diseño responsivo, la implementación de animaciones y la lógica de programación en JavaScript. Estos proyectos me han permitido profundizar mis conocimientos en el desarrollo frontend.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    inicio: "Sep-2023",
    fin: "Dic-2023"
  }
]

export const proyectos : ProyectosType[] = [
  {
    nombre: "Mis Películas",
    descrip: "Una plataforma web que permite a los usuarios explorar una amplia variedad de películas, ver detalles como sinopsis, reparto y calificaciones. Utiliza tecnologías modernas para ofrecer una experiencia de usuario fluida y atractiva.",
    tecn: [
      "astro",
      "tailwind",
      "MongoDB"
    ],
    url: "https://mispeliculas-1226.netlify.app/",
    repo: "https://github.com/Paul1226/MisPeliculas",
    img: "https://raw.githubusercontent.com/Paul1226/PaulDev-Porfolio/main/public/proyecto-pelis.webp"
  },
  {
    nombre: "Coworking Space",
    descrip: "Este proyecto es una landing page diseñada para un espacio de coworking, creada para profundizar mis conocimientos en CSS. La página destaca las características del coworking, las tarifas de membresía y una galería de imágenes.",
    tecn: [
      "astro",
      "tailwind",
      "javaScript"
    ],
    repo: "https://github.com/Paul1226/Coworking-Space",
    img: "https://raw.githubusercontent.com/Paul1226/PaulDev-Porfolio/main/public/microsite01.webp"
  }
]