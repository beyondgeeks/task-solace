/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            gradientColorStopPositions: {
                33: "33%",
                66: "66%",
            },
        },
    },
    plugins: [],
};
