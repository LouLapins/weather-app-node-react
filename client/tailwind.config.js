/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'palace': "url('../public/img/royal-palace-full.jpg')"
            }
        },
    },
    plugins: [],
}