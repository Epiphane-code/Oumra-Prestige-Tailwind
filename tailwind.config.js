module.exports = {
  content: ["./*.html", "./src/**/*.html"],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.33%)' },
        },
      },
      animation: {
        slide: 'slide 6s linear infinite'
      },
      colors: { 
        test: "#BE8E27" 
      },
    },
  },
  plugins: [],
};
