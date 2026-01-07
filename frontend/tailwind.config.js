/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                primary: {
                    50: '#EEF2FF',
                    100: '#E0E7FF',
                    200: '#C7D2FE',
                    300: '#A5B4FC',
                    400: '#818CF8',
                    500: '#6366F1',
                    600: '#4F46E5', // Main Brand Color
                    700: '#4338CA',
                    800: '#3730A3',
                    900: '#312E81',
                },
                secondary: {
                    500: '#EC4899', // Pink Accent
                },
                teal: {
                    500: '#14B8A6', // Success/Validation
                },
                gray: {
                    900: '#111827', // Headings
                    600: '#4B5563', // Body text
                    300: '#D1D5DB', // Borders
                    50: '#F9FAFB',  // Backgrounds
                }
            },
            animation: {
                fadeIn: 'fadeIn 0.5s ease-out forwards',
                scaleIn: 'scaleIn 0.3s ease-out forwards',
                'bounce-slow': 'bounce 3s infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                }
            }
        },
    },
    plugins: [],
}
