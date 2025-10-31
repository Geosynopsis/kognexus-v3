"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { kognexusTheme } from "./index";

interface KognexusThemeProviderProps {
  children: React.ReactNode;
}

export const KognexusThemeProvider: React.FC<KognexusThemeProviderProps> = ({
  children,
}) => {
  return (
    <ThemeProvider theme={kognexusTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default KognexusThemeProvider;
