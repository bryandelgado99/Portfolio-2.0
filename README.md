# Paul Delgado | Portfolio

Portafolio personal de **Bryan Paul Delgado Yela** — Desarrollador de Software (Full Stack & Mobile).

Construido con **React + TypeScript + Vite**, sobre el sistema de componentes **Lightswind UI**, con **Tailwind CSS v4**, **Framer Motion** (animaciones) y **Lenis** (scroll suave). Incluye tema claro/oscuro y **selector de idioma español/inglés**.

## Contenido

- **Hero** con foto y tarjeta colgante interactiva
- **Sobre mí** con estadísticas
- **Servicios** (desarrollo web, móvil, APIs/backend, UI/UX)
- **Proyectos seleccionados** (WordyGo, Disnomia, Docentra, Pinlogy)
- **Trayectoria profesional** (timeline con scroll)
- **Educación y habilidades**
- **Contacto** (email, teléfono, ubicación)
- Footer con enlaces a redes y navegación

## Comandos

```bash
npm install       # instalar dependencias
npm run dev       # servidor de desarrollo (http://localhost:8080)
npm run build     # build de producción (tsc -b && vite build)
npm run preview   # previsualizar el build
npm run lint      # eslint
```

## Estructura

```text
/
├── public/               # favicon y estáticos
├── src/
│   ├── assets/           # imágenes (foto, proyectos)
│   ├── components/       # secciones + librería lightswind
│   ├── data/content.ts   # contenido bilingüe es/en
│   ├── i18n/             # contexto y hook de idioma
│   ├── hooks/  lib/      # utilidades
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── vite.config.ts
└── package.json
```

> El contenido real proviene de `hoja-de-vida.md` (raíz). La carpeta `portfolio01/` se conserva como respaldo del proyecto original.
