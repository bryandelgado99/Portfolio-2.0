/** @type {import('tailwindcss').Config} */

const config = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                // Fuente para encabezados, títulos y labels
                'rubik': ['Rubik', 'sans-serif'],
                // Fuente para texto general
                'nunito': ['Nunito', 'sans-serif'],
                // Mantener las fuentes por defecto como fallback
                'sans': ['Nunito', 'ui-sans-serif', 'system-ui'],
                'display': ['Rubik', 'ui-sans-serif', 'system-ui']
            },
            // Configuración específica para diferentes elementos con Rubik
            typography: {
                'heading-1': {
                    fontFamily: ['Rubik', 'sans-serif'],
                    fontWeight: '800', // Extra Bold
                },
                'heading-2': {
                    fontFamily: ['Rubik', 'sans-serif'],
                    fontWeight: '700', // Bold
                },
                'heading-3': {
                    fontFamily: ['Rubik', 'sans-serif'],
                    fontWeight: '600', // SemiBold
                },
                'heading-4': {
                    fontFamily: ['Rubik', 'sans-serif'],
                    fontWeight: '500', // Medium
                },
                'label': {
                    fontFamily: ['Rubik', 'sans-serif'],
                    fontWeight: '500', // Medium
                },
                'button': {
                    fontFamily: ['Rubik', 'sans-serif'],
                    fontWeight: '600', // SemiBold
                }
            },
            colors: {
                // Paleta 1: Verde Lima & Café Oscuro
                sage: {
                    50: '#f8fcf0',
                    100: '#f0f9e0',
                    200: '#E2F1AF', // Color base claro ✨
                    300: '#cee891',
                    400: '#b5dd6f',
                    500: '#9dd04d',
                    600: '#82b93c',
                    700: '#689432',
                    800: '#537529',
                    900: '#445f23',
                    950: '#31231E'   // Color base oscuro ✨
                },

                // Paleta 2: Azul Teal & Gris Claro
                ocean: {
                    50: '#f0fdfa',
                    100: '#ccfbf1',
                    200: '#99f6e4',
                    300: '#5eead4',
                    400: '#2dd4bf',
                    500: '#14b8a6',
                    600: '#2C666E', // Color base oscuro ✨
                    700: '#0f766e',
                    800: '#115e59',
                    900: '#134e4a',
                    950: '#0f172a',
                    light: '#F0EDEE' // Color base claro ✨
                },

                // Paleta 3: Rosa Mauve & Beige
                rose: {
                    50: '#fdf8f6',
                    100: '#f2e8e5',
                    200: '#E6CCBE', // Color complementario claro ✨
                    300: '#d6a3a6',
                    400: '#c47a85',
                    500: '#A07178', // Color base medio ✨
                    600: '#8f5a61',
                    700: '#76464b',
                    800: '#5c3538',
                    900: '#4a2d30',
                    950: '#2a1a1c'
                }
            }
        }
    }
}

export default config