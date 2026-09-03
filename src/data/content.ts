// Contenido bilingüe (es/en) del portafolio de Paul Delgado.
// Fuente de datos reales: hoja-de-vida.md
import imgProyecto1 from "../assets/projects/wordygo.png";
import imgProyecto2 from "../assets/projects/disnomia.png";
import imgProyecto3 from "../assets/projects/docentra.png";
import imgProyecto4 from "../assets/projects/pinlogy.jpeg";
import imgProyecto5 from "../assets/projects/electronica.webp";

export type Lang = "es" | "en";

export const links = {
  email: "bryand9970@gmail.com",
  phone: "+593 958689080",
  github: "https://github.com/bryandelgado99",
  linkedin: "https://www.linkedin.com/in/pauldelgado9924/",
  instagram: "https://www.instagram.com/paul_delgado_dev",
  portfolio: "https://pauldelgado.vercel.app",
  cvUrl:
    "https://drive.google.com/file/d/1DmqTHoRfk6rOYvtZJWVbV-FAiQvyUL1M/view?usp=drive_link",
} as const;

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  techs: string[];
  githubUrl?: string;
  demoUrl?: string;
  image: string;
  gridClass: string;
}

export interface CareerItem {
  period: string;
  role: string;
  company: string;
  description: string;
  url?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  year: string;
  details: string[];
}

export interface StatItem {
  value: string;
  label: string;
}

const es = {
  langName: "Español",
  meta: {
    name: "Paul Delgado",
    fullName: "Bryan Paul Delgado Yela",
    initials: "PD",
    role: "Desarrollador Full Stack",
    roleShort: "Software Developer",
    tagline: "Portafolio",
    location: "Quito, Ecuador",
    availability: "Disponible para trabajar",
    bio: "Desarrollador de software con sede en Quito, Ecuador, impulsado por la pasión por los videojuegos, la innovación tecnológica y las soluciones prácticas. Busco activamente retroalimentación constante como motor de mejora continua, tanto en proyectos personales como en entornos profesionales, fortaleciendo así mis habilidades de programación de forma constante.",
  },
  nav: {
    home: "Inicio",
    about: "Sobre Mí",
    services: "Servicios",
    career: "Trayectoria",
    projects: "Proyectos",
    education: "Educación",
    skills: "Habilidades",
    testimonials: "Testimonios",
    contact: "Contacto",
  },
  hero: {
    badge: "Disponible para trabajar",
    greeting: "Hola, soy",
    title: "Paul Delgado",
    subtitle: "Desarrollador Full Stack",
    description:
      "Creo aplicaciones web y móviles innovadoras, combinando diferentes tecnologías y paradigmas para entregar software robusto, escalable y con experiencia de usuario cuidada.",
    ctaWork: "Ver Portafolio",
    ctaResume: "Descargar CV",
    card: {
      specialty: "Full-Stack & Móvil",
      location: "Quito, Ecuador",
      experience: "4+ años",
      status: "Activo",
      idTag: "PD-SOFT-DEV",
      brand: "PAUL DELGADO",
    },
  },
  about: {
    heading: "Apasionado por la",
    headingAccent: "Innovación Digital",
    bio: "Desarrollador de software con sede en Quito, Ecuador, enfocado en crear soluciones multiplataforma. Me mueve la pasión por los videojuegos, el diseño y la tecnología, y busco mejorar continuamente a través de la retroalimentación constante en cada proyecto personal y profesional.",
    stats: [
      { value: "4+", label: "Años de Experiencia" },
      { value: "30+", label: "Proyectos Completados" },
      { value: "20+", label: "Clientes Satisfechos" },
      { value: "15+", label: "Tecnologías Dominadas" },
    ] as StatItem[],
  },
  services: {
    heading: "Lo que hago",
    subtitle:
      "Soluciones digitales integrales que cubren todo el ciclo de vida del desarrollo de software.",
    items: [
      {
        title: "Desarrollo Web",
        description:
          "Aplicaciones web modernas y responsivas con React, TypeScript, Astro y Tailwind CSS, optimizadas para rendimiento y accesibilidad.",
      },
      {
        title: "Desarrollo Móvil",
        description:
          "Apps nativas y multiplataforma con Flutter y React Native para iOS y Android, con integración de servicios en la nube.",
      },
      {
        title: "APIs y Backend",
        description:
          "Backends de alto rendimiento con Node.js, NestJS, Go y .NET, con bases de datos SQL/NoSQL y servicios BaaS como Supabase y Firebase.",
      },
      {
        title: "UI/UX y Prototipado",
        description:
          "Diseño de interfaces intuitivas y modernas, maquetación y prototipado con Figma y Adobe XD, cuidando la experiencia de usuario.",
      },
    ] as ServiceItem[],
  },
  career: {
    heading: "Trayectoria",
    headingAccent: "Profesional",
    subtitle: "Un camino en evolución de liderazgo, innovación e impacto",
    items: [
      {
        period: "Mar 2026 — Presente",
        role: "CEO & Desarrollador Full Stack",
        company: "eCondor Digital",
        description:
          "Fundé y dirijo eCondor Digital, liderando un equipo de 2 desarrolladores en proyectos activos como WordyGo y Docentra. Diseño backends de alto rendimiento con Go, NestJS y .NET Core; desarrollo Disnomia (motor de evaluación con inferencia de datos) y WordyGo para Salazar Editores. Manejo PostgreSQL y servicios BaaS como Supabase, PocketBase y Firebase.",
        url: "https://econdordigital.org",
      },
      {
        period: "Mar 2024 — Presente",
        role: "Desarrollador Flutter Freelance",
        company: "Freelance",
        description:
          "Desarrollo apps móviles para clientes: Jonezzer App (distribuidora Royal Prestige), Pinlogy (app social de geolocalización con OpenStreetMap y Google Maps) y Electrónica Zurita (gestión de tickets con backend Express, panel web React y app Flutter). Maquetación y diseño con Adobe XD y Figma.",
      },
      {
        period: "Mar 2025 — Abr 2025",
        role: "Desarrollador Full Stack JR",
        company: "Ammeno - Seneca",
        description:
          "Colaboré en la integración de módulos en una app móvil Flutter/Dart, y en el mantenimiento del backend Node.js/Express y frontend Vue.js. Trabajé con contenedores Docker en entornos Linux y servidor en Azure para tareas de soporte al despliegue.",
        url: "https://ammeno.com/",
      },
      {
        period: "Nov 2025 — Dic 2025",
        role: "Auxiliar Logístico",
        company: 'Patronato Municipal San José — "Dona con Corazón"',
        description:
          "Lideré equipos logísticos para la ejecución de campañas de recolección del municipio de Quito. Gestioné la recepción, clasificación y envío de insumos donados, organicé kits alimenticios y brindé apoyo humanitario en eventos de la campaña.",
        url: "https://patronato.quito.gob.ec/",
      },
      {
        period: "Nov 2023 — Abr 2024",
        role: "Desarrollador y editor de contenido CMS",
        company: "ESFOT | EPN",
        description:
          "Gestioné el sitio web de la facultad mediante Joomla (publicaciones y banners) y colaboré en un chatbot de Telegram para difundir información a estudiantes. Participé en revisiones de código y mejora de estándares dentro del equipo.",
        url: "https://www.esfot.epn.edu.ec",
      },
    ] as CareerItem[],
  },
  skills: {
    heading: "Experiencia y",
    headingAccent: "Habilidades",
    technicalHeading: "Arsenal Técnico",
    technicalTag: "Stack",
    softHeading: "Rasgos Profesionales",
    softTag: "Competencias",
    learnerTitle: "Aprendiz constante",
    learnerText:
      "En evolución continua con frameworks de IA, arquitecturas distribuidas y sistemas de diseño web modernos.",
    technical: [
      { name: "Flutter / Dart", level: 92 },
      { name: "React / React Native", level: 88 },
      { name: "TypeScript / JavaScript", level: 86 },
      { name: "Node.js / Express", level: 84 },
      { name: "Python (Django/Flask)", level: 80 },
    ],
    soft: [
      "Liderazgo",
      "Resolución de problemas",
      "Metodologías ágiles",
      "Trabajo en equipo",
      "Aprendizaje continuo",
      "Comunicación",
    ],
  },
  projects: {
    heading: "Proyectos",
    headingAccent: "Seleccionados",
    subtitle:
      "Una muestra de sistemas, aplicaciones y plataformas que he construido.",
    items: [
      {
        id: "wordygo",
        title: "WordyGo",
        description:
          "Plataforma de ejercicios de inglés basada en el catálogo editorial, desarrollada para Salazar Editores.",
        techs: ["NestJS", "React", "Tailwind", "Supabase", "PostgreSQL"],
        demoUrl: "https://wordy-go.com",
        image: imgProyecto1,
        gridClass: "md:col-span-7 h-[420px]",
      },
      {
        id: "disnomia",
        title: "Disnomia",
        description:
          "Motor de evaluación automática de ejercicios con inferencia de datos para calificación inteligente.",
        techs: ["NestJS", "Nginx"],
        demoUrl: "https://disnomia.econdordigital.org",
        image: imgProyecto2,
        gridClass: "md:col-span-5 h-[420px]",
      },
      {
        id: "docentra",
        title: "Docentra",
        description:
          "Plataforma de gestión académica para la administración y seguimiento de evaluaciones.",
        techs: ["React", "Supabase", ".NET Core", "Entity Framework", "Cloudflare"],
        demoUrl: "https://adocentra.econdordigital.org/",
        image: imgProyecto3,
        gridClass: "md:col-span-5 h-[360px]",
      },
      {
        id: "pinlogy",
        title: "Pinlogy",
        description:
          "App social de geolocalización que permite triangular un área poligonal entre participantes de una sala y medir terreno de forma satelital.",
        techs: ["Flutter", "OpenStreetMap", "Google Maps", "Firebase"],
        githubUrl: "https://github.com/bryandelgado99/Pin-logy",
        image: imgProyecto4,
        gridClass: "md:col-span-7 h-[360px]",
      },
      {
        id: "electronica_zurita",
        title: "Electrónica Zurita",
        description:
          "Sistema de gestión de tickets de reparación de equipos electrónicos y línea gris. Backend en Express, panel web en React y app en Flutter para que los clientes sigan el estado de sus tickets en tiempo real.",
        techs: ["Flutter", "React", "Express", "Supabase"],
        demoUrl:
          "https://play.google.com/store/apps/details?id=com.pauldev.electronica_zurita",
        githubUrl: "https://github.com/bryandelgado99/Electronica-Zurita--Mobile-App",
        image: imgProyecto5,
        gridClass: "md:col-span-12 h-[420px]",
      },
    ] as ProjectItem[],
  },
  contact: {
    heading: "Trabajemos",
    headingAccent: "Juntos",
    description:
      "¿Tienes un proyecto en mente o quieres conversar? Me encantaría escuchar tus ideas y ayudarte a hacerlas realidad.",
    info: {
      emailLabel: "Email",
      phoneLabel: "Teléfono",
      locationLabel: "Ubicación",
    },
    form: {
      name: "Tu nombre",
      namePlaceholder: "Juan Pérez",
      email: "Tu correo",
      emailPlaceholder: "juan@email.com",
      message: "Mensaje",
      messagePlaceholder: "Cuéntame sobre tu proyecto...",
      send: "Enviar mensaje",
    },
  },
  footer: {
    role: "Desarrollador Full Stack",
    rights: "Todos los derechos reservados.",
    madeWith: "Hecho con",
    by: "por",
    backToTop: "Volver arriba",
    innovates: "Innovar y construir",
    roles: [
      "Desarrollador Full Stack",
      "Desarrollador Flutter",
      "Desarrollador Web",
      "Paul Delgado",
    ],
    copyrightLine: "Paul Delgado. Hecho con",
  },
  education: {
    heading: "Formación",
    headingAccent: "Académica",
    subtitle:
      "Base teórica y metodologías que potencian mi práctica de ingeniería.",
    items: [
      {
        degree: "Tecnología Superior en Desarrollo de Software",
        school: "Escuela Politécnica Nacional",
        year: "2020 — 2024",
        details: [
          "Diseño, maquetación y desarrollo de bases de datos relacionales y no relacionales.",
          "Diseño e implementación de metodologías ágiles e interfaces funcionales y modernas.",
          "Programación funcional y multiparadigma con diversos lenguajes y tecnologías.",
          "Modelos de aprendizaje automático e inteligencia artificial.",
        ],
      },
      {
        degree: "Bachillerato",
        school: 'Colegio Nacional "Juan Pío Montúfar"',
        year: "2012 — 2017",
        details: [
          "Formación secundaria completa en Quito, Ecuador.",
        ],
      },
    ] as EducationItem[],
  },
  testimonials: {
    heading: "Testimonios de",
    headingAccent: "Clientes",
    subtitle:
      "Próximamente compartiré experiencias de clientes y colegas con los que he colaborado.",
    items: [],
  },
};

const en: typeof es = {
  langName: "English",
  meta: {
    name: "Paul Delgado",
    fullName: "Bryan Paul Delgado Yela",
    initials: "PD",
    role: "Full Stack Developer",
    roleShort: "Software Developer",
    tagline: "Portfolio",
    location: "Quito, Ecuador",
    availability: "Available for work",
    bio: "Software developer based in Quito, Ecuador, driven by a passion for video games, technological innovation and practical solutions. I actively seek constant feedback as an engine for continuous improvement, both in personal projects and professional environments, steadily strengthening my programming skills.",
  },
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    career: "Career",
    projects: "Projects",
    education: "Education",
    skills: "Skills",
    testimonials: "Testimonials",
    contact: "Contact",
  },
  hero: {
    badge: "Available for work",
    greeting: "Hi, I'm",
    title: "Paul Delgado",
    subtitle: "Full Stack Developer",
    description:
      "I build innovative web and mobile applications, combining different technologies and paradigms to deliver robust, scalable software with a polished user experience.",
    ctaWork: "View Work",
    ctaResume: "Download Resume",
    card: {
      specialty: "Full-Stack & Mobile",
      location: "Quito, Ecuador",
      experience: "4+ years",
      status: "Active",
      idTag: "PD-SOFT-DEV",
      brand: "PAUL DELGADO",
    },
  },
  about: {
    heading: "Passionate about",
    headingAccent: "Digital Innovation",
    bio: "Software developer based in Quito, Ecuador, focused on building cross-platform solutions. I'm driven by a passion for video games, design and technology, and I constantly look to improve through feedback on every personal and professional project.",
    stats: [
      { value: "4+", label: "Years Experience" },
      { value: "30+", label: "Projects Completed" },
      { value: "20+", label: "Happy Clients" },
      { value: "15+", label: "Technologies" },
    ] as StatItem[],
  },
  services: {
    heading: "What I Do",
    subtitle:
      "Delivering comprehensive digital solutions that cover the entire software development lifecycle.",
    items: [
      {
        title: "Web Development",
        description:
          "Modern and responsive web applications with React, TypeScript, Astro and Tailwind CSS, optimized for performance and accessibility.",
      },
      {
        title: "Mobile Development",
        description:
          "Native and cross-platform apps with Flutter and React Native for iOS and Android, with cloud service integration.",
      },
      {
        title: "APIs & Backend",
        description:
          "High-performance backends with Node.js, NestJS, Go and .NET, with SQL/NoSQL databases and BaaS services like Supabase and Firebase.",
      },
      {
        title: "UI/UX & Prototyping",
        description:
          "Intuitive and modern interface design, mockups and prototyping with Figma and Adobe XD, always caring about user experience.",
      },
    ] as ServiceItem[],
  },
  career: {
    heading: "Career",
    headingAccent: "Journey",
    subtitle: "An evolving path of leadership, innovation and impact",
    items: [
      {
        period: "Mar 2026 — Present",
        role: "CEO & Full Stack Developer",
        company: "eCondor Digital",
        description:
          "Founded and lead eCondor Digital, managing a team of 2 developers across active projects like WordyGo and Docentra. I design high-performance backends with Go, NestJS and .NET Core; build Disnomia (an exercise-grading engine with data inference) and WordyGo for Salazar Editores. I work with PostgreSQL and BaaS services like Supabase, PocketBase and Firebase.",
        url: "https://econdordigital.org",
      },
      {
        period: "Mar 2024 — Present",
        role: "Freelance Flutter Developer",
        company: "Freelance",
        description:
          "I build mobile apps for clients: Jonezzer App (Royal Prestige distributor), Pinlogy (social geolocation app with OpenStreetMap and Google Maps) and Electrónica Zurita (ticket management with Express backend, React web panel and Flutter app). UI mockups and design with Adobe XD and Figma.",
      },
      {
        period: "Mar 2025 — Apr 2025",
        role: "Junior Full Stack Developer",
        company: "Ammeno - Seneca",
        description:
          "Collaborated on integrating modules in a Flutter/Dart mobile app and maintaining the Node.js/Express backend and Vue.js frontend. Worked with Docker containers on Linux environments and an Azure server for deployment support.",
        url: "https://ammeno.com/",
      },
      {
        period: "Nov 2025 — Dec 2025",
        role: "Logistics Assistant",
        company: 'Patronato Municipal San José — "Dona con Corazón"',
        description:
          "Led logistics teams for the municipality of Quito donation campaigns. Managed the reception, sorting and shipping of donated supplies, organized food kits and provided humanitarian support at campaign events.",
        url: "https://patronato.quito.gob.ec/",
      },
      {
        period: "Nov 2023 — Apr 2024",
        role: "CMS Developer & Content Editor",
        company: "ESFOT | EPN",
        description:
          "Managed the faculty website with Joomla (posts and banners) and collaborated on a Telegram chatbot to share information with students. Participated in code reviews and coding standards improvements within the team.",
        url: "https://www.esfot.epn.edu.ec",
      },
    ] as CareerItem[],
  },
  skills: {
    heading: "Expertise &",
    headingAccent: "Skills",
    technicalHeading: "Technical Arsenal",
    technicalTag: "Stack",
    softHeading: "Professional Traits",
    softTag: "Competencies",
    learnerTitle: "Constant learner",
    learnerText:
      "Continuously evolving with AI frameworks, distributed architectures and modern web design systems.",
    technical: [
      { name: "Flutter / Dart", level: 92 },
      { name: "React / React Native", level: 88 },
      { name: "TypeScript / JavaScript", level: 86 },
      { name: "Node.js / Express", level: 84 },
      { name: "Python (Django/Flask)", level: 80 },
    ],
    soft: [
      "Leadership",
      "Problem Solving",
      "Agile Methodologies",
      "Team Collaboration",
      "Continuous Learning",
      "Communication",
    ],
  },
  projects: {
    heading: "Selected",
    headingAccent: "Works",
    subtitle:
      "A showcase of systems, applications and platforms I've engineered.",
    items: [
      {
        id: "wordygo",
        title: "WordyGo",
        description:
          "English exercise platform based on the editorial catalog, built for Salazar Editores.",
        techs: ["NestJS", "React", "Tailwind", "Supabase", "PostgreSQL"],
        demoUrl: "https://wordy-go.com",
        image: imgProyecto1,
        gridClass: "md:col-span-7 h-[420px]",
      },
      {
        id: "disnomia",
        title: "Disnomia",
        description:
          "Automatic exercise-grading engine with data inference for intelligent scoring.",
        techs: ["NestJS", "Nginx"],
        demoUrl: "https://disnomia.econdordigital.org",
        image: imgProyecto2,
        gridClass: "md:col-span-5 h-[420px]",
      },
      {
        id: "docentra",
        title: "Docentra",
        description:
          "Academic management platform for administering and tracking assessments.",
        techs: ["React", "Supabase", ".NET Core", "Entity Framework", "Cloudflare"],
        demoUrl: "https://adocentra.econdordigital.org/",
        image: imgProyecto3,
        gridClass: "md:col-span-5 h-[360px]",
      },
      {
        id: "pinlogy",
        title: "Pinlogy",
        description:
          "Social geolocation app that lets room participants triangulate a polygonal area and measure terrain via satellite.",
        techs: ["Flutter", "OpenStreetMap", "Google Maps", "Firebase"],
        githubUrl: "https://github.com/bryandelgado99/Pin-logy",
        image: imgProyecto4,
        gridClass: "md:col-span-7 h-[360px]",
      },
      {
        id: "electronica_zurita",
        title: "Electrónica Zurita",
        description:
          "Repair ticket management system for electronic and gray-line equipment. Express backend, React web panel and a Flutter app that lets customers track their ticket status in real time.",
        techs: ["Flutter", "React", "Express", "Supabase"],
        demoUrl:
          "https://play.google.com/store/apps/details?id=com.pauldev.electronica_zurita",
        githubUrl: "https://github.com/bryandelgado99/Electronica-Zurita--Mobile-App",
        image: imgProyecto5,
        gridClass: "md:col-span-12 h-[420px]",
      },
    ] as ProjectItem[],
  },
  contact: {
    heading: "Let's",
    headingAccent: "Connect",
    description:
      "Have a project in mind or want to talk? I'd love to hear your ideas and help you bring them to life.",
    info: {
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
    },
    form: {
      name: "Your name",
      namePlaceholder: "John Doe",
      email: "Your email",
      emailPlaceholder: "john@email.com",
      message: "Message",
      messagePlaceholder: "Tell me about your project...",
      send: "Send Message",
    },
  },
  footer: {
    role: "Full Stack Developer",
    rights: "All rights reserved.",
    madeWith: "Made with",
    by: "by",
    backToTop: "Back to top",
    innovates: "Innovate & Build",
    roles: [
      "Full Stack Developer",
      "Flutter Developer",
      "Web Developer",
      "Paul Delgado",
    ],
    copyrightLine: "Paul Delgado. Crafted with",
  },
  education: {
    heading: "Academic",
    headingAccent: "Background",
    subtitle:
      "The theoretical foundation and methodologies that power my engineering practice.",
    items: [
      {
        degree: "Software Development Technology Degree",
        school: "Escuela Politécnica Nacional",
        year: "2020 — 2024",
        details: [
          "Design, mockup and development of relational and non-relational databases.",
          "Design and implementation of agile methodologies and functional, modern interfaces.",
          "Functional and multi-paradigm programming across languages and technologies.",
          "Machine learning and artificial intelligence models.",
        ],
      },
      {
        degree: "High School Diploma",
        school: 'Colegio Nacional "Juan Pío Montúfar"',
        year: "2012 — 2017",
        details: ["Completed secondary education in Quito, Ecuador."],
      },
    ] as EducationItem[],
  },
  testimonials: {
    heading: "Client",
    headingAccent: "Testimonials",
    subtitle:
      "Soon I'll share experiences from clients and colleagues I've worked with.",
    items: [],
  },
};

export const content = { es, en } as const;

export type Content = typeof es;
