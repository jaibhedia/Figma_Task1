/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        black: "var(--black)",
        "brand1-6": "var(--brand1-6)",
        buy: "var(--buy)",
        "cards-bg": "var(--cards-bg)",
        "dark-blue": "var(--dark-blue)",
        "icons-color-02": "var(--icons-color-02)",
        "iris-100": "var(--iris-100)",
        "light-black": "var(--light-black)",
        "text-3": "var(--text-3)",
        "text-5": "var(--text-5)",
        textffffff: "var(--textffffff)",
        transfer: "var(--transfer)",
        white: "var(--white)",
      },
    },
  },
  plugins: [],
};
