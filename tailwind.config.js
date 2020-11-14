module.exports = {
  purge: {
    mode: "all",
    content: ["./src/**/*.js"],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "IBM Plex Sans",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
    container: {
      center: true,
      padding: {
        default: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "8rem",
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
          "code::before": {
            content: "",
          },
          "code::after": {
            content: "",
          },
        },
      },
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [],
}
