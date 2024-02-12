/** @type {import('tailwindcss').Config} */
// import img from '../cifras/src/assets/images/loginandsignup/main_screen_bg.svg'
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js",
        "./node_modules/tailwind-datepicker-react/dist/**/*.js", // <--- Add this line


    ],
    theme: {
        extend: {

        },

        fontFamily: {
            'lexend': ["Lexend", "sans-serif"],
            'inter': ["Inter", "sans-serif"],




        }
    },
    plugins: [
        require('flowbite/plugin')({
            charts: true,
        }),
    ],
}