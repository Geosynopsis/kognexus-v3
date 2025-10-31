"use client";
import Footer from "@/components/Footer/Footer";
import { Navigation } from "@/components/Navigation/Navigation";
import PrivacyComponent from "@/components/Privacy/PrivacyComponent";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Navigation />
      <PrivacyComponent />
      <Footer />
    </Box>
  );
}
