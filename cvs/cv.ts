export interface Curriculum {
    principal : {
        nombre :string
        apellido :string
        profesion :string
        direccion :string
        cuidad :string
        pais :string
        postal :string
        celular :string
        email: string
    }
    educacion : {
        titulo :string
        institucion :string
        fecha :string
        detalle :string
    }
    about : {
        resume :string
    }
    experiencia : [
        {
            cargo :string
            empresa :string
            inicio :string
            fin :string
            lugar :string
            descrip :string
        }
    ],
    personales : {
        nacimiento :string
        nacionalidad :string
        visado :string
        civil :string
    },
    habilidades : string[],
    links : {
        github :string
        linkedin :string
    },
    referencias : [
        {
            nombre :string
            empresa :string
            celular :string
            email :string
        }
    ],
    proyectos : [
        {
            nombre : string
            inicio : string
            fin : string
            descrip : string
            url : string
            skills : string[]
        }
    ]
}

export const curriculum = {
    principal: {
        nombre : "paúl",
        apellido : "guachichullca",
        profesion : "desarrollador Web | Full-Stack",
        direccion : "Coronel C. Monsalve",
        cuidad : "cuenca",
        pais : "ecuador",
        postal : "010107",
        celular : "+593 98 0958291",
        email : "paulguachichullca023@gmail.com"
    },
    educacion : {
        titulo :"Desarrollor Full-Stack",
        institucion : "academía conquer Blocks",
        fecha : "2023",
        detalle : "Me especializo en el desarrollo frontend utilizando tecnologías como React y Astro para crear interfaces de usuario dinámicas y receptivas, y en el desarrollo backend con Node.js y Django, asegurando la eficiencia y seguridad en la manipulación de datos y la comunicación con el frontend."
    },
    about : {
        resume : "Mi pasión por la tecnología comenzó con la maquinaria CNC y el diseño digital, llevándome a estudiar Desarrollo Full-Stack en ConquerBlocks. Aspiro unirme a una empresa socialmente responsable para aplicar mis habilidades y generar un impacto positivo."
    },
    experiencia : [
        {
            cargo: "Sitios Web de Películas",
            empresa: "Autonomo",
            inicio: "feb. 2024",
            fin: "abr. 2024",
            lugar: "cuenca",
            descrip : "Creé un sitio web de películas que permite a los usuarios buscar y ver información sobre diferentes películas. Se integrará posteriormente una API de películas para el almacenamiento y gestión de datos de películas, mejorando la funcionalidad y la experiencia del usuario."
        },
        {
            cargo: "Sitio Web de Shopping",
            empresa: "Conquer Blocks",
            inicio: "jun. 2024",
            fin: "Actual",
            lugar: "cuenca",
            descrip : "Desarrollo de un sitio web de comercio en línea para una tienda de cursos online. El sitio por el momento no cuenta con registros para compra si no más bien en una página para reforzar conocimientos."
        }
    ],
    personales : {
        nacimiento : "Dec. 26, 2000",
        nacionalidad : "Ecuatoriana",
        visado : "Aprobado",
        civil : "Soltero"
    },
    habilidades : [
        "HTML5",
        "CSS3",
        "React",
        "NodeJS",
        "MySQL",
        "Git",
        "Github",
        "Javascript",
        "Tailwind",
        "TypeScript",
    ],
    links : {
        github : "https://github.com/Paul1226",
        linkedin : "https://www.linkedin.com/in/paul-guachichullca-2287602b1/"
    },
    referencias : [
        {
            nombre : "verónica giomara morocho jerez",
            empresa : "bucle",
            celular : "0987442514",
            email : "giomaramjerez22@gmail.com"
        },
        {
            nombre : "john abraham orellana sanchez",
            empresa : "prolínea",
            celular : "0992880832",
            email : "john94ore@outlook.es"
        }
    ],
    proyectos : [
        {
            nombre : "MisPeliculas",
            inicio :"jun. 2024",
            fin : "abr. 2024",
            descrip : "Creé un sitio web de películas que permite a los usuarios buscar y ver información sobre diferentes películas. Se integrará posteriormente una API de películas para el almacenamiento y gestión de datos de películas, mejorando la funcionalidad y la experiencia del usuario.",
            url : "https://mispeliculas-1226.netlify.app/",
            skills : ["HTML", "CSS", "JavaScript", "API de pelis"]
        },
        {
            nombre : "Shopp.PD",
            inicio :". 2024",
            fin : "Actual",
            descrip : "Desarrollo de un sitio web de comercio en línea para una tienda de cursos online. El sitio por el momento no cuenta con registros para mostrar, en una página para reforzar conocimientos.",
            skills : ["HTML", "CSS", "JavaScript"]
        },
        {
            nombre : "+ 10 páginas web",
            inicio :"oct. 2023",
            fin : "dec. 2023",
            descrip : "He desarrollado más de 10 páginas web con HTML, CSS y JavaScript. Esto me ha dado una sólida comprensión de la estructura y diseño web, permitiéndome crear interfaces de usuario responsivas y atractivas, así como implementar buenas prácticas de codificación.",
            skills : ["HTML", "CSS", "JavaScript"]
        },
    ]
}