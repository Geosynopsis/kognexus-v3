import { createTheme, Shadows, Theme } from "@mui/material/styles";
import themeConfig from "./theme.json";

declare module "@mui/material/styles" {
  interface Palette {
    surface: {
      main: string;
      light: string;
      dark: string;
    };
  }

  interface PaletteOptions {
    surface?: {
      main: string;
      light: string;
      dark: string;
    };
  }

  interface Theme {
    customColors: {
      neonBlue: string;
      neonGreen: string;
      warningYellow: string;
      alertRed: string;
      grid: string;
      glow: string;
    };
  }

  interface ThemeOptions {
    customColors?: {
      neonBlue: string;
      neonGreen: string;
      warningYellow: string;
      alertRed: string;
      grid: string;
      glow: string;
    };
  }
}

export const kognexusTheme: Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: themeConfig.palette.primary.main,
      light: themeConfig.palette.primary.light,
      dark: themeConfig.palette.primary.dark,
      contrastText: themeConfig.palette.primary.contrastText,
    },
    secondary: {
      main: themeConfig.palette.secondary.main,
      light: themeConfig.palette.secondary.light,
      dark: themeConfig.palette.secondary.dark,
      contrastText: themeConfig.palette.secondary.contrastText,
    },
    warning: {
      main: themeConfig.palette.warning.main,
      light: themeConfig.palette.warning.light,
      dark: themeConfig.palette.warning.dark,
      contrastText: themeConfig.palette.warning.contrastText,
    },
    error: {
      main: themeConfig.palette.error.main,
      light: themeConfig.palette.error.light,
      dark: themeConfig.palette.error.dark,
      contrastText: themeConfig.palette.error.contrastText,
    },
    info: {
      main: themeConfig.palette.info.main,
      light: themeConfig.palette.info.light,
      dark: themeConfig.palette.info.dark,
      contrastText: themeConfig.palette.info.contrastText,
    },
    success: {
      main: themeConfig.palette.success.main,
      light: themeConfig.palette.success.light,
      dark: themeConfig.palette.success.dark,
      contrastText: themeConfig.palette.success.contrastText,
    },
    background: {
      default: themeConfig.palette.background.default,
      paper: themeConfig.palette.background.paper,
    },
    surface: {
      main: themeConfig.palette.surface.main,
      light: themeConfig.palette.surface.light,
      dark: themeConfig.palette.surface.dark,
    },
    text: {
      primary: themeConfig.palette.text.primary,
      secondary: themeConfig.palette.text.secondary,
      disabled: themeConfig.palette.text.disabled,
    },
    divider: themeConfig.palette.divider,
    action: {
      active: themeConfig.palette.action.active,
      hover: themeConfig.palette.action.hover,
      selected: themeConfig.palette.action.selected,
      disabled: themeConfig.palette.action.disabled,
      disabledBackground: themeConfig.palette.action.disabledBackground,
    },
  },
  typography: {
    fontFamily: themeConfig.typography.fontFamily,
    h1: themeConfig.typography.h1,
    h2: themeConfig.typography.h2,
    h3: themeConfig.typography.h3,
    h4: themeConfig.typography.h4,
    h5: themeConfig.typography.h5,
    h6: themeConfig.typography.h6,
    body1: themeConfig.typography.body1,
    body2: themeConfig.typography.body2,
    caption: themeConfig.typography.caption,
  },
  shape: {
    borderRadius: themeConfig.shape.borderRadius,
  },
  shadows: themeConfig.shadows as Shadows,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
          padding: "10px 24px",
          fontWeight: 600,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        },
        contained: {
          boxShadow: "0px 4px 12px rgba(0, 128, 255, 0.4)",
          background: "linear-gradient(135deg, #0080FF 0%, #0066CC 100%)",
          "&:hover": {
            background: "linear-gradient(135deg, #1A90FF 0%, #0E7ADB 100%)",
            boxShadow: "0px 6px 16px rgba(0, 128, 255, 0.6)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "linear-gradient(135deg, #1A1A1A 0%, #252525 100%)",
          border: "1px solid rgba(0, 128, 255, 0.2)",
          backdropFilter: "blur(10px)",
          "&:hover": {
            border: "1px solid rgba(0, 128, 255, 0.4)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(10, 10, 10, 0.95)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(0, 128, 255, 0.2)",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)",
          minHeight: "100vh",
        },
      },
    },
  },
  customColors: {
    neonBlue: themeConfig.customColors.neonBlue,
    neonGreen: themeConfig.customColors.neonGreen,
    warningYellow: themeConfig.customColors.warningYellow,
    alertRed: themeConfig.customColors.alertRed,
    grid: themeConfig.customColors.grid,
    glow: themeConfig.customColors.glow,
  },
});

export default kognexusTheme;
