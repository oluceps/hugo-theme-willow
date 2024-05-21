const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;
const hexToRgb = (hex) => {
  hex = hex.replace("#", "");
  hex = hex.length === 3 ? hex.replace(/./g, "$&$&") : hex;
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `${r} ${g} ${b}`;
};

module.exports = {
  content: [
    "./themes/**/layouts/**/*.html",
    "./content/**/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.html",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
        "3xl": "1920px",
        "4xl": "2560px",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: "80ch",
            a: {
              color: "#313e29",
              "&:hover": {
                color: "#6f9052",
              },
            },
            pre: {
              color: theme("colors.grey.1000"),
              backgroundColor: theme("colors.grey.100"),
            },
            "pre code::before": {
              "padding-left": "unset",
            },
            "pre code::after": {
              "padding-right": "unset",
            },
            code: {
              backgroundColor: theme("colors.grey.100"),
              color: "#ce5777",
              fontWeight: "400",
              "border-radius": "0.25rem",
            },
            "code::before": {
              content: '""',
              "padding-left": "0.25rem",
            },
            "code::after": {
              content: '""',
              "padding-right": "0.25rem",
            },
            "--tw-prose-body": theme("colors.sprout[800]"),
            "--tw-prose-headings": theme("colors.sprout[900]"),
            "--tw-prose-lead": theme("colors.sprout[700]"),
            "--tw-prose-links": theme("colors.sprout[900]"),
            "--tw-prose-bold": theme("colors.sprout[900]"),
            "--tw-prose-counters": theme("colors.sprout[600]"),
            "--tw-prose-bullets": theme("colors.sprout[400]"),
            "--tw-prose-hr": theme("colors.sprout[300]"),
            "--tw-prose-quotes": theme("colors.sprout[900]"),
            "--tw-prose-quote-borders": theme("colors.sprout[300]"),
            "--tw-prose-captions": theme("colors.sprout[700]"),
            "--tw-prose-code": theme("colors.sprout[900]"),
            "--tw-prose-pre-code": theme("colors.sprout[900]"),
            "--tw-prose-pre-bg": "#eff1f5",
            "--tw-prose-th-borders": theme("colors.sprout[300]"),
            "--tw-prose-td-borders": theme("colors.sprout[200]"),
            "--tw-prose-invert-body": theme("colors.sprout[200]"),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-lead": theme("colors.sprout[300]"),
            "--tw-prose-invert-links": theme("colors.white"),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-counters": theme("colors.sprout[400]"),
            "--tw-prose-invert-bullets": theme("colors.sprout[600]"),
            "--tw-prose-invert-hr": theme("colors.sprout[700]"),
            "--tw-prose-invert-quotes": theme("colors.sprout[100]"),
            "--tw-prose-invert-quote-borders": theme("colors.sprout[700]"),
            "--tw-prose-invert-captions": theme("colors.sprout[400]"),
            "--tw-prose-invert-code": theme("colors.white"),
            "--tw-prose-invert-pre-code": theme("colors.sprout[300]"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.sprout[600]"),
            "--tw-prose-invert-td-borders": theme("colors.sprout[700]"),
            h1: {
              marginTop: "0",
              fontSize: em(20, 14),
              marginTop: em(32, 20),
              marginBottom: em(16, 20),
              lineHeight: round(28 / 20),
            },
            h2: {
              fontSize: em(18, 14),
              marginTop: em(28, 18),
              marginBottom: em(8, 18),
              lineHeight: round(28 / 18),
            },
            h3: {
              marginTop: em(20, 14),
              marginBottom: em(8, 14),
              lineHeight: round(20 / 14),
            },
            h4: {
              marginTop: em(20, 14),
              marginBottom: em(8, 14),
              lineHeight: round(18 / 14),
            },
          },
        },
      }),
      colors: {
        sprout: {
          50: "#f3f6ef",
          100: "#e4ecdb",
          200: "#ccdabc",
          300: "#b5caa0",
          400: "#8dab70",
          500: "#6f9052",
          600: "#55713f",
          700: "#435833",
          800: "#39472d",
          900: "#313e29",
          950: "#182013",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
