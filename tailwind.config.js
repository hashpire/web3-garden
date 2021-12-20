const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FF9700',
          white: '#FFFFFF',
          grey: '#3C3C3C',
        },
        primary: {
          DEFAULT: '#FF9700',
          dark: '#CC8114',
        },
        neutral: {
          100: '#F5F5F5',
          200: '#E5E5E5',
          400: '#A3A3A3',
          500: '#737373',
          900: '#171717',
        },
        background: {
          DEFAULT: '#262626',
          darker: '#1E1E1E',
        },
      },
      boxShadow: {
        1: '0px 1px 2px rgba(0, 0, 0, 0.12)',
        2: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        // popup: '4px 4px 40px -1px rgba(0, 0, 0, 0.25)',
        // input: 'inset 2px 2px 4px rgba(0, 0, 0, 0.12)',
      },
      // height: {
      //   content: 'calc(100vh - 64px)',
      // },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/aspect-ratio')],
  safelist: [
    // font weight
    'font-normal',
    'font-semibold',
    'font-bold',
    // text size
    'text-xs',
    'text-sm',
    'text-base',
    'text-xl',
    'text-2xl',
    'text-3xl',
    // text color
    'text-primary',
    'text-neutral-200',
    'text-neutral-400',
    'text-red-500',
    // background
    'bg-primary',
    // border & rounded
    'border',
    'border-brand-grey',
    'border-brand-yellow',
    'border-l-2',
    'rounded-lg',
    // hover
    'hover:underline',
    // active
    'active:text-primary-dark',
    // background
    // width & height
    'w-full',
    // margin & padding
    'py-1',
    'px-2',
    'pl-6',
    'ml-6',
    'ml-5',
    'mt-6',
    // rounded
    'rounded',
    // list
    'list-disc',
    'list-decimal',
    // ::marker
    'marker:text-primary',
  ],
};
