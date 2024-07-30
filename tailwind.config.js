/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
        fontFamily: {
            inter: ['Inter', 'sans-serif'],
        },
        fontSize: {
            'xxs': '10px',
        },
        container: {
            center: true,
            screens: {
                sm: '540px',
                md: '720px',
                lg: '960px',
                xl: '1140px',
                '2xl': '1320px',
            },
            padding: {
                DEFAULT: '1.25rem',
            },
        },
        backgroundImage: {
            'home-image': "url('/img/homepage.jpg')",
            'employers-mobile': "url('/images/for_employers_mobile.png')",
            'auth-banner': "url('/images/auth-banner.svg')",
            'employer-auth-banner': "url('/images/employer-auth-banner.svg')",
            'view-all-banner': "url('/images/view-all-banner.svg')",
            'admin-auth-banner-1': "url('/images/admin/auth-banner-1.png')",
            'location': 'linear-gradient(0deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.45) 100%)',
        },
        spacing: {
            '22': '84px',
            '23': '86px'
        },
        boxShadow: {
            'custom': '0px 16px 40px 0px rgba(112, 144, 176, 0.25)',
        }
    },
    colors: {
        'white': '#ffffff',
        'black': '#000000',
        'primary-100': '#4169E1',
        'primary-200': '#214CCE',
        'primary-300': '#0077B5',
        'light-100': '#FFF8E6',
        'light-200': '#FEFEFE',
        'light-300': '#FAFAFA',
        'light-400': '#F9FAFB',
        'green-100': '#228B60',
        'silver-100': '#707070',
        'silver-200': '#F5F5F5',
        'gray-100': '#DCDCDC',
        'gray-200': '#DDDDDD',
        'gray-300': '#D3D2D3',
        'gray-400': '#C1C9D2',
        'crystal-blue' : '#62A0B8',
        'dark-100': '#0F0800',
        'danger-100': '#DB4437',
        'danger-200': '#FF0000',

    },
},

  plugins: [],
}