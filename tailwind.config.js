module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sourceSansPro: ["Source Sans Pro", "sans-serif"],
      },
    },
    typography: {
      default: {
        css: {
          h1: {
            fontWeight: "700",
          },
          h2: {
            fontWeight: "600",
          },
          h3: {
            fontWeight: "500",
          },
          h4: {
            fontWeight: "400",
          },
          a: {
            color: "#667EEA",
            textDecoration: "none",
          },
        },
      },
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/typography")],
}
