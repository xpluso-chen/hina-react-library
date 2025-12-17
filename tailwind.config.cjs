/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#4C9DB0",
                secondary: "#3A7C8C", // Slightly darker version of primary
                accent: "#FFEBAF",
                "content-main": "#754c01", // Title/Main Content
                "content-sub": "#8c7c6c", // Subtitle/Supplementary
            },
            fontFamily: {
                // 常用字體
                'sans-tc': ['"Noto Sans TC"', 'sans-serif'],
                'roboto': ['"Roboto"', 'sans-serif'],
                'lexend': ['"Lexend"', 'sans-serif'], // New
                // 特殊字體
                'serif-tc': ['"Noto Serif TC"', 'serif'],
                'playfair': ['"Playfair Display"', 'serif'],
                'oswald': ['"Oswald"', 'sans-serif'], // New
                'anton': ['"Anton"', 'sans-serif'], // New
                'barlow': ['"Barlow Condensed"', 'sans-serif'], // New
                'alegreya': ['"Alegreya Sans"', 'sans-serif'], // New (User requested "Serif Alegreya Sans" but it is technically sans. I put it here.)
            },
            animation: {
                fadeIn: 'fadeIn 0.8s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    'from': { opacity: '0', transform: 'translateY(20px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
