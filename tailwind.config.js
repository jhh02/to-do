module.exports = {
    mode: 'jit',
    purge: ['./*.html', './src/**/*.js'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#23232e',
                secondary: '#141418',
                text_primary: '#b6b6b6',
                text_secondary: '#ececec',
            },
            screens: {
                sm: { max: '600px' },
                lg: '600px',
            },
            transitionProperty: {
                width: 'width',
            },
            transitionTimingFunction: {
                ease: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)',
            },
            fontFamily: {
                roboto: ['Roboto', 'Open Sans', 'Noto San JP', 'Lato'],
            },
        },
        variants: {},
        plugins: [],
    },
};
