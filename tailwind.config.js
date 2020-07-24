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
            color: "#805AD5",
            textDecoration: "none",
          },
          "img[class*=gatsby-resp-image-image]": {
            borderRadius: "0.375rem",
            boxShadow:
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important",
          },
          "pre[class*=language-]": {
            fontSize: "1rem",
            borderRadius: "0",
            margin: "1.25rem -1.5rem",
            padding: "1.5rem",
          },
          "@media (min-width: 768px)": {
            "pre[class*=language-]": {
              borderRadius: "0.375rem",
              margin: "1.25rem auto",
            },
          },
        },
      },
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/typography")],
}
