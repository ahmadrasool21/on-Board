/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans"],
      },
      maxWidth: {
        411: "411px",
        426: "426px",
      },
      // backgroundImage: {
      //   Montreal: "url('assets/Images/Montreal.png')",
      // },
      colors: {
        "custom-blue": "#1565D8",
      },
    },
  },
  plugins: [],
};
