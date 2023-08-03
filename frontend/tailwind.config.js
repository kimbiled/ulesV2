/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/routes/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-linear': 'linear-gradient(136deg, #5C97CD 0%, #0D2435 100%);',
        'gradient-linear2': 'linear-gradient(0deg, #5C97CD 0%, #0E2537 100%);',
        'gradient-linear3':
          'linear-gradient(180deg, #5C97CD 0%, #0E2537 100%);',
        'gradient-linearDropDown':
          'linear-gradient(135deg, #10283A 0%, #5A94C8 100%);',
        heroBg: "url('../../public/assets/hero-bg.png')",
      },
      colors: {
        ulsDark: '#0D2435;',
      },
      backgroundColor: {
        volunteerColor: 'rgba(217, 217, 217, 0.20)',
        volunteerColorHover: 'rgba(217, 217, 217, 0.40)',
        organisationInput: 'rgba(255, 255, 255, 0.20);',
      },
    },
  },
  plugins: [],
};
