module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        extend: {
            backgroundColor: {
                //for dark background theme
                'darkBlue': 'hsl(209, 23%, 22%)', //Dark Mode Elements
                'veryDarkBlue': 'hsl(207, 26%, 17%)', //Dark Mode Background
                //for light background theme
                'darkGray': 'hsl(0, 0%, 52%)' // for light theme input


            },
            color: {
                //for light background theme
                'veryDarkBlue': 'hsl(200, 15%, 8%)', //Light Mode text

                //for dark background theme

            },
            fontFamily: {
                'nunito': ['nunito', 'sans-serif'],
                'MyFont': ['"My Font"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
            },
            top: {
                'top50': '50%'
            },
            spacing: {
                '1/2': '50%',
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%',
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                '1/6': '16.666667%',
                '2/6': '33.333333%',
                '3/6': '50%',
                '4/6': '66.666667%',
                '5/6': '83.333333%',
                '1/12': '8.333333%',
                '2/12': '16.666667%',
                '3/12': '25%',
                '4/12': '33.333333%',
                '5/12': '41.666667%',
                '6/12': '50%',
                '7/12': '58.333333%',
                '8/12': '66.666667%',
                '9/12': '75%',
                '10/12': '83.333333%',
                '11/12': '91.666667%',

            }
        },
    },
    variants: {

    },
    plugins: [],
}