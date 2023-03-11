// tailwind.config.cjs
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    content: [
        './public/**/*.html',
        './src/**/*.tsx',
    ]
}