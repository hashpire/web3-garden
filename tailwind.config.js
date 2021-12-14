module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          light: {
            head: '#ff9700',
            body: '#3c3c3c',
            bg: '#ffffff',
          },
          dark: {
            head: '#ff9700',
            body: '#ffffff',
            bg: '#3c3c3c',
          },
        },
        accent: {
          DEFAULT: '#F08E00',
          pressed: '#CC8114',
          focus: '#FF9700',
        },
        primary: {
          1: '#FFEACC',
          2: '#FFDCAA',
          3: '#FFCB80',
          4: '#FFBA55',
          5: '#FFA82B',
          6: '#FF9700',
          7: '#CC8114',
          8: '#AA6500',
          9: '#804C00',
          10: '#553200',
          11: '#331E00',
          12: '#FF970033',
          DEFAULT: '#1E1E1E',
          light: '#262626',
        },
        secondary: {
          DEFAULT: '#F2F2F2',
        },
        neutral: {
          1: '#F5F5F5',
          2: '#E0E0E0',
          3: '#9E9E9E',
          4: '#616161',
          5: '#0A0A0A',
        },
      },
      boxShadow: {
        1: '0px 1px 2px rgba(0, 0, 0, 0.12)',
        2: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        popup: '4px 4px 40px -1px rgba(0, 0, 0, 0.25)',
        input: 'inset 2px 2px 4px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/aspect-ratio')],
};
