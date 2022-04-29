module.exports = {
  mode: "jit",
  purge: ["./src/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
