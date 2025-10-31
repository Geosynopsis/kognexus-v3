"use client";

import { PlayArrow } from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import React, { JSX } from "react";
import { SensorVisualization } from "../3D/SensorVisualization";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const robotCapabilities: { name: string; icon: JSX.Element; color: string }[] =
  [
    // { name: "AI-Powered", icon: <Radar />, color: "#32CD32" },
    // { name: "Learning", icon: <Analytics />, color: "#0080FF" },
    // { name: "Intuitive", icon: <Security />, color: "#FFD700" },
    // { name: "Empathetic", icon: <Satellite />, color: "#FF6B6B" },
  ];

export const HeroSection: React.FC = () => {
  const theme = useTheme();

  const scrollToPilotProgram = () => {
    const pilotSection = document.getElementById("pilot-program");
    if (pilotSection) {
      pilotSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <Box
        sx={{
          background: "transparent",
          overflow: "hidden",
          backdropFilter: "blur(10px)",
          position: "absolute",
          top: 0,
          left: 0,
          p: 0,
          width: "100%",
          height: "100vh",
          zIndex: 10,
        }}
      >
        <SensorVisualization />
      </Box>
      <Box
        component="section"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          pt: 8,
          pb: 4,
          background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
            radial-gradient(circle at 20% 80%, ${theme.customColors.glow} 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, ${theme.palette.secondary.main}22 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, ${theme.palette.primary.main}11 0%, transparent 50%)
          `,
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 20 }}>
          <Grid
            container
            spacing={6}
            alignItems="center"
            justifyContent="center"
          >
            <Grid size={{ xs: 12 }} sx={{ textAlign: "center" }}>
              <motion.div
                initial="initial"
                animate="animate"
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp}>
                  <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                      mb: 3,
                      background: `linear-gradient(45deg, ${theme.palette.text.primary}, ${theme.palette.primary.main})`,
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      lineHeight: 1.1,
                      textAlign: "center",
                    }}
                  >
                    Rethinking Robotics in a Resource-Constrained
                    World
                  </Typography>
                </motion.div>

                {/* <motion.div variants={fadeInUp}>
                  <Typography
                    variant="h5"
                    component="p"
                    sx={{
                      mb: 2,
                      color: theme.palette.text.secondary,
                      lineHeight: 1.6,
                      maxWidth: "600px",
                      textAlign: "center",
                      mx: "auto",
                    }}
                  >
                    Pioneering autonomous humanoid robots with advanced
                    artificial intelligence
                  </Typography>
                </motion.div> */}

                <motion.div variants={fadeInUp}>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 4,
                      color: theme.palette.text.secondary,
                      // fontStyle: "italic",
                      maxWidth: "800px",
                      textAlign: "center",
                      mx: "auto",
                    }}
                  >
                    Kognexus builds next-generation efficient, sustainable and
                    affordable robotic systems that merge advanced artificial
                    intelligence with precision electro-mechanical engineering.
                  </Typography>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      mb: 4,
                      flexWrap: "wrap",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<PlayArrow />}
                      onClick={scrollToPilotProgram}
                      sx={{
                        px: 4,
                        py: 1.5,
                        borderRadius: 2,
                        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        boxShadow: `0 8px 32px ${theme.customColors.glow}`,
                        position: "relative",
                        overflow: "hidden",
                        cursor: "pointer",
                        // Glassy effect
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          background:
                            "linear-gradient(120deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 100%)",
                          opacity: 0.7,
                          borderRadius: 2,
                          pointerEvents: "none",
                          zIndex: 1,
                        },
                        // Gloss highlight
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "45%",
                          background:
                            "linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 100%)",
                          borderTopLeftRadius: 8,
                          borderTopRightRadius: 8,
                          opacity: 0.7,
                          pointerEvents: "none",
                          zIndex: 2,
                        },
                        color: "#fff",
                        backdropFilter: "blur(2px)",
                        WebkitBackdropFilter: "blur(2px)",
                        transition: "transform 0.2s, box-shadow 0.2s",
                        "&:hover": {
                          transform: "translateY(-2px) scale(1.03)",
                          boxShadow: `0 12px 40px ${theme.customColors.glow}`,
                        },
                      }}
                    >
                      Join the Pilot Program
                    </Button>
                  </Box>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      flexWrap: "wrap",
                      justifyContent: "center",
                      mt: 3,
                    }}
                  >
                    {robotCapabilities.map((capability, index) => (
                      <motion.div
                        key={capability.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      >
                        <Chip
                          icon={capability.icon}
                          label={capability.name}
                          variant="outlined"
                          sx={{
                            borderColor: capability.color,
                            color: capability.color,
                            backgroundColor: `${capability.color}11`,
                            "&:hover": {
                              backgroundColor: `${capability.color}22`,
                            },
                          }}
                        />
                      </motion.div>
                    ))}
                  </Box>
                </motion.div>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HeroSection;
