/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const tailwindcss = require('tailwindcss');

module.exports = {
    plugins: [tailwindcss('./tailwind.config.js'), require('autoprefixer')],
};
