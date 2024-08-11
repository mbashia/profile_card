/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        kumbh: ["Kumbh Sans"],
      },
      fontWeight: {
        extra_light: 200,
        light: 500,
        regular: 400,
        bold: 700,
        extra_bold: 800,
      },
      backgroundImage: {
        "bottom-pattern": "url('/public/images/bg-pattern-bottom.svg')",
        "card-pattern": "url('/public/images/bg-pattern-card.svg')",
        "top-pattern": "url('/public/images/bg-pattern-top.svg')",
      },
    },
  },
  plugins: [],
};
