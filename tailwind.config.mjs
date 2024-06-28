/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
        "./node_modules/preline/dist/*.js",
    ],
    theme: {
        extend: {
            colors: {
                safer: {
                    50: "#fdf4f3",
                    100: "#fde5e3",
                    200: "#fbd0cd",
                    300: "#f7afaa",
                    400: "#f18078",
                    500: "#e6574d",
                    600: "#d23a30",
                    700: "#b12d24",
                    800: "#8f2821",
                    900: "#7a2822",
                    950: "#42100d",
                },
            },
        },
    },
    plugins: [require("preline/plugin"), require("tailwindcss-animated")],
    future: {
        hoverOnlyWhenSupported: true,
    },
};
