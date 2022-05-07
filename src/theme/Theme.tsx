export const theme = {
  colors: {
    primary: {
      default: "#FF7700",
      highlightSurface: "#FEF9F7",
    },
    secondary: {
      default: "#E04D01",
    },
    textPrimary: {
      default: "#251D3A",
    },
    textSecondary: {
      default: "#251D3A",
    },
    light: {
      default: "#ffffff",
    },
  },
  spacing: {
    xss: `${0.25}rem`,
    xs: `${0.5}rem`,
    sm: `${1}rem`,
    md: `${1.5}rem`,
    lg: `${2}rem`,
    xl: `${2.5}rem`,
    xxl: `${4.5}rem`,
  },
};

export type ThemeInterface = typeof theme;
declare module "styled-components" {
  interface DefaultTheme extends ThemeInterface {}
}
