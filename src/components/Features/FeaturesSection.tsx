"use client";

import {
  AutoAwesomeMosaic,
  Battery4Bar,
  Compost,
  Savings
} from "@mui/icons-material";
import { Box, Chip, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const featureCategories = [
  {
    category: "Sustainability",
    color: "#00D2FF",
    features: [
      {
        icon: <Compost fontSize="large" />,
        title: "Sustainable",
        description:
          "Our robots are designed with sustainability at the core, utilizing rare-earth magnet-free technology to minimize environmental impact. By eliminating the need for scarce and ecologically disruptive materials, we ensure a greener future for industrial automation while maintaining peak performance and longevity.",
      },
    ],
  },
  {
    category: "Efficiency",
    color: "#00FF88",
    features: [
      {
        icon: <Battery4Bar fontSize="large" />,
        title: "Efficient",
        description:
          "Engineered for unparalleled efficiency, our gravity-compensated robots optimize power consumption through advanced algorithms and intelligent management systems. This results in reduced energy costs, extended operational lifespans, and a smaller carbon footprint, making them ideal for sustainable industrial applications.",
      },
    ],
  },
  {
    category: "Affordability",
    color: "#FF0080",
    features: [
      {
        icon: <Savings fontSize="large" />,
        title: "Affordabile",
        description:
          "We prioritize affordability without sacrificing quality, offering cost-effective robots that deliver exceptional value. By leveraging innovative design and materials, we reduce production costs while ensuring high performance, reliability, and scalability for businesses of all sizes.",
      },
    ],
  },
  {
    category: "Interface",
    color: "#FFAA00",
    features: [
      {
        icon: <AutoAwesomeMosaic fontSize="large" />,
        title: "Intuitive",
        description:
          "Featuring an intuitive user interface, our robots are designed for seamless operation and management. With user-friendly controls, real-time monitoring, and easy integration into existing workflows, they empower operators to achieve productivity gains with minimal training and maximum ease.",
      },
    ],
  },
];

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

export const FeaturesSection: React.FC = () => {
  return (
    <Box
      component="section"
      id="platform"
      sx={{
        background: "#000000",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        padding: 0,
        "@keyframes pulse": {
          "0%": {
            opacity: 0.6,
            transform: "translate(-50%, -50%) scale(0.9)",
          },
          "100%": {
            opacity: 0.9,
            transform: "translate(-50%, -50%) scale(1.1)",
          },
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          padding: 0,
        },
      }}
    >
      <Grid
        container
        maxWidth="xl"
        spacing={2}
        sx={{ mt: 0, pt: 0, ml: 0, pl: 0, position: "relative" }}
      >
        <Grid
          size={{ xs: 0, lg: 6 }}
          sx={{
            mt: 0,
            pt: 0,
            pl: 0,
            ml: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&::before": {
                content: '""',
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "80%",
                height: "80%",
                background:
                  "radial-gradient(circle, rgba(240, 248, 255, 0.15) 0%, rgba(173, 216, 230, 0.1) 50%, rgba(255, 255, 255, 0.05) 100%)",
                borderRadius: "50%",
                filter: "blur(40px)",
                zIndex: 0,
                animation: "pulse 3s ease-in-out infinite alternate",
              },
            }}
          >
            <Box
              component="img"
              src="/silhoutte.png"
              alt="Industrial robot automation visualization"
              sx={{
                width: "100%",
                minHeight: "100%",
                objectFit: "cover",
                position: "relative",
                zIndex: 1,
                filter: "drop-shadow(0 0 20px rgba(173, 216, 230, 0.3))",
              }}
            />
          </Box>
        </Grid>
        <Grid size={{ md: 12, lg: 6 }} sx={{ mt: 8, mb: 8, p: 5 }}>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Box textAlign="center" sx={{ mb: 8 }}>
                <Chip
                  label="🤖 Features"
                  variant="outlined"
                  sx={{
                    mb: 3,
                  }}
                />
                {/* <Typography
                  variant="h2"
                  component="h2"
                  sx={{
                    mb: 3,
                    fontWeight: 700,
                  }}
                >
                  We are Building
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  sx={{
                    maxWidth: "800px",
                    mx: "auto",
                    lineHeight: 1.6,
                  }}
                >
                  Robots platform fine-tuned for different skillsets that learns, adapts, and performs with reliability and ease of management.
                </Typography> */}
              </Box>
            </motion.div>
            <Grid container spacing={6} alignItems="center">
              <Grid size={{ xs: 12 }}>
                <Grid container spacing={6}>
                  {featureCategories.map((cat, idx) => (
                    <Grid size={{ xs: 12 }} key={`${cat.category}_${idx}`}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 3,
                        }}
                      >
                        {cat.features.map((feature) => (
                          <Box
                            key={feature.title}
                            sx={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 3,
                              transition: "all 0.3s ease",
                              "&:hover": {
                                transform: "translateX(8px)",
                              },
                            }}
                          >
                            <Box
                              sx={{
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                backgroundColor: cat.color,
                                mt: 1,
                                flexShrink: 0,
                                boxShadow: `0 0 12px ${cat.color}88`,
                              }}
                            />
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: 2,
                                flex: 1,
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  color: cat.color,
                                  mt: 0.5,
                                }}
                              >
                                {feature.icon}
                              </Box>
                              <Box sx={{ flex: 1 }}>
                                <Typography
                                  variant="body1"
                                  sx={{
                                    mb: 1,
                                  }}
                                >
                                  {feature.title}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  sx={{
                                    lineHeight: 1.6,
                                  }}
                                >
                                  {feature.description}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        ))}
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeaturesSection;
