import { hex2rgba, shadeHex } from "@utils"

const PRIMARY = "#CB8589"
const BG = "#796465"

const theme = {
  colors: {
    background: BG,
    lightBackground: shadeHex(BG, 5),
    primary: PRIMARY,
    textPrimary: "#D7B29D",
    textSecondary: "#E8D2AE",
    transPrimary: hex2rgba(PRIMARY, 0.07),
    shadowBg: hex2rgba(BG, 0.7),
    white: "#eee",
  },

  fonts: {
    main: "Nunito, sans-serif",
  },

  fontSizes: {
    xs: "14px",
    smish: "15px",
    sm: "16px",
    md: "18px",
    lg: "20px",
    xl: "22px",
    xxl: "24px",
    h3: "32px",
  },

  easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",

  borderRadius: "3px",
  navHeight: "100px",
  navScrollHeight: "70px",
  margin: "20px",

  tabHeight: 42,
  tabWidth: 120,
  radius: 3,

  hamburgerWidth: 30,
  hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
  hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,

  navDelay: 1000,
  loaderDelay: 2000,
}

export default theme
