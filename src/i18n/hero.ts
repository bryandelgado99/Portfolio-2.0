// src/i18n/hero.ts
export const heroTranslations = {
    es: {
        'projects.featured': 'Proyectos Destacados',
        'projects.previous': 'Proyecto anterior',
        'projects.next': 'Siguiente proyecto',
        'projects.github': 'Ver en GitHub',
        'hero.title': 'Desarrollador Full Stack',
        'hero.description': 'Creo aplicaciones web y móviles innovadoras utilizando las últimas tecnologías.',
        'hero.technologies': {
            flutter: {
                name: 'Flutter',
                description: 'Desarrollo de aplicaciones móviles nativas con interfaces modernas y fluidas.'
            },
            react: {
                name: 'React',
                description: 'Construcción de interfaces web interactivas y escalables.'
            },
            java: {
                name: 'Java',
                description: 'Desarrollo de aplicaciones robustas y backend confiable.'
            },
            dotnet: {
                name: '.NET',
                description: 'Creación de aplicaciones empresariales y servicios web de alto rendimiento.'
            }
        }
    },
    en: {
        'projects.featured': 'Featured Projects',
        'projects.previous': 'Previous project',
        'projects.next': 'Next project',
        'projects.github': 'View on GitHub',
        'hero.title': 'Full Stack Developer',
        'hero.description': 'I create innovative web and mobile applications using the latest technologies.',
        'hero.technologies': {
            flutter: {
                name: 'Flutter',
                description: 'Build native mobile apps with modern, smooth UIs.'
            },
            react: {
                name: 'React',
                description: 'Create interactive and scalable web interfaces.'
            },
            java: {
                name: 'Java',
                description: 'Develop robust applications and reliable backend systems.'
            },
            dotnet: {
                name: '.NET',
                description: 'Build enterprise applications and high-performance web services.'
            }
        }
    }
} as const;

export type HeroTranslationKeys = keyof typeof heroTranslations['es'];
export type SupportedLanguages = keyof typeof heroTranslations;

export function getHeroTranslations(lang: SupportedLanguages) {
    return heroTranslations[lang] || heroTranslations.es;
}