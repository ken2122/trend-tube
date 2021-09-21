module.exports = {
    purge: ['./src/components/**/*.tsx', './pages/*.tsx'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            width: {
                '1/3-8': 'calc(33.3333% - 32px)',
                '1/2-4': 'calc(50% - 16px)',
                '100%-2': 'calc(100% - 8px)',
                '800px': '800px',
            },
            screens: {
                'sm-max': { max: '639px' },
                '380px-max': { max: '379px' },
                'md-800px': { min: '800px' },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
    important: true,
};
