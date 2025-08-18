// src/data/projects.ts
import type { ImageMetadata } from 'astro';
import {
    SiReact,
    SiFlutter,
    SiNodedotjs,
    SiTypescript,
    SiTailwindcss,
    SiFirebase,
    SiPython,
    SiDocker
} from 'react-icons/si';

// Interfaces
export interface Technology {
    icon: any; // Componente de react-icons
    name: string;
    alt: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    backgroundImage: ImageMetadata;
    technologies: Technology[];
    githubUrl: string;
    demoUrl?: string;
    status: 'completed' | 'in-progress' | 'planned';
    featured: boolean;
}

export type SupportedLanguages = 'es' | 'en';

// Función para crear proyectos con imágenes importadas
export function createProjectsData(images: {
    project1: ImageMetadata;
    project2: ImageMetadata;
    project3: ImageMetadata;
    project4: ImageMetadata;
}) {
    const projectsData = {
        es: [
            {
                id: 'ecommerce',
                title: "E-commerce App",
                description: "Aplicación completa de e-commerce con carrito de compras, pagos integrados, gestión de inventario y panel administrativo.",
                backgroundImage: images.project1,
                technologies: [
                    { icon: SiReact, name: "React", alt: "React" },
                    { icon: SiTypescript, name: "TypeScript", alt: "TypeScript" },
                    { icon: SiTailwindcss, name: "Tailwind CSS", alt: "Tailwind" }
                ],
                githubUrl: "https://github.com/tuusuario/ecommerce-app",
                demoUrl: "https://ecommerce-demo.vercel.app",
                status: 'completed' as const,
                featured: true
            },
            {
                id: 'task-manager',
                title: "Task Manager Mobile",
                description: "App móvil para gestión de tareas con sincronización en tiempo real, notificaciones push y colaboración en equipo.",
                backgroundImage: images.project2,
                technologies: [
                    { icon: SiFlutter, name: "Flutter", alt: "Flutter" },
                    { icon: SiFirebase, name: "Firebase", alt: "Firebase" },
                    { icon: SiTypescript, name: "TypeScript", alt: "TypeScript" }
                ],
                githubUrl: "https://github.com/tuusuario/task-manager",
                status: 'completed' as const,
                featured: true
            },
            {
                id: 'ai-analytics',
                title: "AI Data Analytics",
                description: "Plataforma de análisis de datos con inteligencia artificial para insights empresariales y visualizaciones interactivas.",
                backgroundImage: images.project3,
                technologies: [
                    { icon: SiPython, name: "Python", alt: "Python" },
                    { icon: SiDocker, name: "Docker", alt: "Docker" },
                    { icon: SiReact, name: "React", alt: "React" }
                ],
                githubUrl: "https://github.com/tuusuario/ai-analytics",
                status: 'in-progress' as const,
                featured: true
            },
            {
                id: 'social-network',
                title: "Red Social Colaborativa",
                description: "Red social con funciones de chat en tiempo real, posts multimedia, sistema de seguimiento y grupos temáticos.",
                backgroundImage: images.project4,
                technologies: [
                    { icon: SiNodedotjs, name: "Node.js", alt: "Node.js" },
                    { icon: SiReact, name: "React", alt: "React" },
                    { icon: SiFirebase, name: "Firebase", alt: "Firebase" }
                ],
                githubUrl: "https://github.com/tuusuario/social-network",
                status: 'completed' as const,
                featured: true
            }
        ] as Project[],
        en: [
            {
                id: 'ecommerce',
                title: "E-commerce Platform",
                description: "Complete e-commerce application with shopping cart, integrated payments, inventory management and admin dashboard.",
                backgroundImage: images.project1,
                technologies: [
                    { icon: SiReact, name: "React", alt: "React" },
                    { icon: SiTypescript, name: "TypeScript", alt: "TypeScript" },
                    { icon: SiTailwindcss, name: "Tailwind CSS", alt: "Tailwind" }
                ],
                githubUrl: "https://github.com/tuusuario/ecommerce-app",
                demoUrl: "https://ecommerce-demo.vercel.app",
                status: 'completed' as const,
                featured: true
            },
            {
                id: 'task-manager',
                title: "Task Manager Mobile",
                description: "Mobile app for task management with real-time synchronization, push notifications and team collaboration.",
                backgroundImage: images.project2,
                technologies: [
                    { icon: SiFlutter, name: "Flutter", alt: "Flutter" },
                    { icon: SiFirebase, name: "Firebase", alt: "Firebase" },
                    { icon: SiTypescript, name: "TypeScript", alt: "TypeScript" }
                ],
                githubUrl: "https://github.com/tuusuario/task-manager",
                status: 'completed' as const,
                featured: true
            },
            {
                id: 'ai-analytics',
                title: "AI Data Analytics",
                description: "Data analytics platform with artificial intelligence for business insights and interactive visualizations.",
                backgroundImage: images.project3,
                technologies: [
                    { icon: SiPython, name: "Python", alt: "Python" },
                    { icon: SiDocker, name: "Docker", alt: "Docker" },
                    { icon: SiReact, name: "React", alt: "React" }
                ],
                githubUrl: "https://github.com/tuusuario/ai-analytics",
                status: 'in-progress' as const,
                featured: true
            },
            {
                id: 'social-network',
                title: "Collaborative Social Network",
                description: "Social network with real-time chat features, multimedia posts, follow system and thematic groups.",
                backgroundImage: images.project4,
                technologies: [
                    { icon: SiNodedotjs, name: "Node.js", alt: "Node.js" },
                    { icon: SiReact, name: "React", alt: "React" },
                    { icon: SiFirebase, name: "Firebase", alt: "Firebase" }
                ],
                githubUrl: "https://github.com/tuusuario/social-network",
                status: 'completed' as const,
                featured: true
            }
        ] as Project[]
    };

    return projectsData;
}

// Función helper para obtener proyectos filtrados
export function getProjectsData(
    lang: SupportedLanguages,
    projectsData: ReturnType<typeof createProjectsData>,
    options: {
        featuredOnly?: boolean;
        status?: Project['status'];
        limit?: number;
    } = {}
): Project[] {
    const { featuredOnly = false, status, limit } = options;
    let projects = projectsData[lang] || projectsData.es;

    if (featuredOnly) projects = projects.filter(p => p.featured);
    if (status) projects = projects.filter(p => p.status === status);
    if (limit) projects = projects.slice(0, limit);

    return projects;
}

// Función para obtener un proyecto específico por ID
export function getProjectById(
    id: string,
    lang: SupportedLanguages,
    projectsData: ReturnType<typeof createProjectsData>
): Project | undefined {
    const projects = projectsData[lang] || projectsData.es;
    return projects.find(project => project.id === id);
}