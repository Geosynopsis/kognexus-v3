"use client";

import {
  AppBar,
  Box,
  Button,
  Toolbar,
  useTheme
} from "@mui/material";
import { motion } from "framer-motion";
import React, { JSX } from "react";
import Brand from "./Brand";

const navigationItems: { name: string; href: string; icon: JSX.Element }[] = [
  // { name: "Platform", href: "#platform", icon: <Radar /> },
];

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

export const Navigation: React.FC = () => {
  const theme = useTheme();
  return (
    <AppBar
      elevation={0}
      position="fixed"
      sx={{ justifyContent: "center", alignItems: "center" }}
    >
      <Toolbar
        sx={{
          justifyContent: "start",
          alignItems: "center",
          display: "flex",
          width: "80%",
          minHeight: "80px",
          py: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ display: "flex", alignItems: "center", gap: "12px" }}
        >
          <Brand />
        </motion.div>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, ml: "auto" }}>
          {navigationItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Button
                color="inherit"
                href={item.href}
                startIcon={item.icon}
                sx={{
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(0, 128, 255, 0.1)",
                    transform: "translateY(-2px)",
                    boxShadow: `0 4px 8px ${theme.customColors.glow}`,
                  },
                }}
              >
                {item.name}
              </Button>
            </motion.div>
          ))}

          {/* <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              color="inherit"
              onClick={() => scrollToSection('platform')}
              sx={{
                px: 2,
                py: 1,
                borderRadius: 2,
                transition: "all 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "rgba(0, 128, 255, 0.1)",
                  transform: "translateY(-2px)",
                  boxShadow: `0 4px 8px ${theme.customColors.glow}`,
                },
              }}
            >
              Features
            </Button>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              color="inherit"
              onClick={() => scrollToSection('pilot-program')}
              sx={{
                px: 2,
                py: 1,
                borderRadius: 2,
                transition: "all 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "rgba(0, 128, 255, 0.1)",
                  transform: "translateY(-2px)",
                  boxShadow: `0 4px 8px ${theme.customColors.glow}`,
                },
              }}
            >
              Contact Us
            </Button>
          </motion.div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
