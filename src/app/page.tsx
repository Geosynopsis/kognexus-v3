"use client";
// import CapabilitiesSection from "@/components/Capabilities/CapabilitiesSection";
import FeaturesSection from "@/components/Features/FeaturesSection";
import Footer from "@/components/Footer/Footer";
import { HeroSection } from "@/components/Hero/HeroSection";
import { Navigation } from "@/components/Navigation/Navigation";
import PilotProgramSection from "@/components/Pilot/PilotProgramSection";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Navigation />
      <HeroSection />
      {/* <CapabilitiesSection /> */}
      {/* <FeaturesSection /> */}
      <PilotProgramSection />
      <Footer />
    </Box>
  );
}
