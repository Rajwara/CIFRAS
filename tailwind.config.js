/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {},

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