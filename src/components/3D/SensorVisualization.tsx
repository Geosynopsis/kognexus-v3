"use client";

import { Box, useTheme } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import React from "react";

import AnimatedSpheres from "./AnimatedSphares";

/*
 * DataVisualization is a React functional component that renders a 3D scene using react-three-fiber.
 * It includes animated spheres and a particle field to visualize data streams in a dynamic way.
 *
 * The component uses a dark gradient background and ambient lighting to enhance the 3D effect.
 */
export const SensorVisualization: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
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
            // radial-gradient(circle at 80% 20%, ${theme.palette.secondary.main}22 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, ${theme.palette.primary.main}11 0%, transparent 50%)
          `,
        },
      }}
    >
      <Canvas camera={{ position: [10, 10, 10], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={500} />
        <AnimatedSpheres count={1000} span={40} />
      </Canvas>
    </Box>
  );
};

export default SensorVisualization;
