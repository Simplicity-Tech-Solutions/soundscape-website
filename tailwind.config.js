/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // https://tailwindcss.com/docs/content-configuration
    "./src/**/*.{js,jsx,ts,tsx}",
    './*.php',
    './inc/**/*.php',
    './templates/**/*.php',
    './safelist.txt'
    //'./**/*.php', // recursive search for *.php (be aware on every file change it will go even through /node_modules which can be slow, read doc)
  ],
  theme: {
    screens: {
      'mobile': '320px',
      'tablet': '640px',
      's-laptop': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
      'tv': '1536px',
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: { 
        'poppins': ['Poppins', 'sans-serif'],
        'work-sans': ['Work Sans', 'sans-serif'], 
      },
      objectPosition: {
        'hero-big-screen': 'top 0px left 80%',
      },
      flexBasis:{
        'eList-1': '650px',
        'eList-2': '650px',
      },
      fontSize: {
        'hero-title': '2.75rem',
        'hero-title-sub': '1.75rem',
      },
      margin: {
        'header-gap': '85px',
      },
      height: {
        header: '85px',
        'main-hero': '575px',
        'main-hero-big': '42.5vw',
        'phone': '400px',
        'section-img': '80%',
      },
      width: {
        'fill-available': '-webkit-fill-available',
      },
      borderRadius: {
        'header-btn': '10px',
        'primary-btn': '8px',
        'primary-input': '4px',
        'section-image': '32px',
      },
      backgroundImage: {
        'hero': 'url(/src/assets/images/Desktop_Hero_Image.jpg)',
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
        marquee2: 'marquee2 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
    colors: {
      'white': '#FFFFFF',
      'navy-blue': '#243A66',
      'cyan-blue': '#4DD1FF',
      'dark-blue': '#0F1F38',
      'orange': '#b24000',
      'dark-grey': '#4b5364',
      'pale-bg': '#FFFFFF1A',
      'navy-blue-bg': '#243A66',
      'light-grey-bg': '#EDEFF3',
      'grey-bg': '#DEE1E5',
      'soundscape-white': '#FFFFFF',
      'soundscape-blue': '#243A66',
      'soundscape-bright-blue': '#4DD1FF',
      'soundscape-dark-blue': '#0F1F38',
      'soundscape-orange': '#B24000',
      'soundscape-dark-orange': '#CC4900',
      'soundscape-dark-grey': '#4b5364',
      'soundscape-input-bg': '#FFFFFF1A',
      'soundscape-blue-bg': '#243A66',
      'soundscape-grey-bg': '#EDEFF3',
      'soundscape-white-bg': '#DEE1E5',
    }
  },
  
  plugins: [],
}

