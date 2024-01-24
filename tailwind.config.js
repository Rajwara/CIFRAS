/** @type {import('tailwindcss').Config} */
// import img from '../cifras/src/assets/images/loginandsignup/main_screen_bg.svg'
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"

    ],
    theme: {
        extend: {

        },

        fontFamily: {
            'rubik': ["Rubik", "sans-serif"],


        }
    },
    plugins: [
        require('flowbite/plugin')({
            charts: true,
        }),
    ],
}