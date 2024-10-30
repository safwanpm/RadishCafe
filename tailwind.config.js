/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scrollBehavior: ['smooth'],
      fontFamily: {
        // Your custom font family settings can go here
      },
      colors: {
        // 'textcolor': '#FFFFFF',
        'textcolor': '#1A2634',
        'blue':'#047037',
        // 'blue': '#3b5d50',
        'orangecolor': '#FFA500', // Use a valid hex code or a named color
        'yellow': '#FFD700',
        // 'yellow':'#F9BF29',
        'lightyellow': '#FFE57D',
        'extralightyellow': '#FFF3B2',
        'background': '#F5F5F5',
        // 'background':'#E5f1E3'
    },
    
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "3rem",
          lg: "0rem",
        },
      },
    },
  },
  plugins: [],
};
