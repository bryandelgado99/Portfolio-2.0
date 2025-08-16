import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return key in ui[lang] ? (ui[lang] as any)[key] : ui[defaultLang][key];
    }
}

export function getPathWithoutLang(url: URL) {
    const [, lang, ...rest] = url.pathname.split('/');
    // Si el primer segmento es un idioma válido, lo removemos
    if (lang in ui) {
        return rest.join('/');
    }
    // Si no es un idioma válido, mantenemos toda la ruta
    return url.pathname.slice(1); // Removemos solo la primera barra
}