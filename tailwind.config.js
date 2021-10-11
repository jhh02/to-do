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
                svg_color: '#ff7eee',
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
            minWidth: {
                0: '0',
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
                full: '100%',
                1.5: '1.5rem',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
