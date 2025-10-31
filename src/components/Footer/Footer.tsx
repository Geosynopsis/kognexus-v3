"use client";

import { Email, LinkedIn } from "@mui/icons-material";
import { Box, Container, Grid, IconButton, Link, Typography, useTheme } from "@mui/material";

const footerItems: { name: string; href: string }[] = [
  { name: "Privacy Policy", href: "/privacy" },
  // { name: "Terms of Service", href: "#" },
  // { name: "Cookie Policy", href: "#" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/109167224",
    icon: <LinkedIn />,
    color: "#0077B5",
  },
  {
    name: "Email",
    href: "mailto:info@kognexus.ai",
    icon: <Email />,
    color: "#EA4335",
  },
];

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        borderTop: `1px solid ${theme.customColors.grid}`,
        position: "relative",
        background: `${theme.palette.background.default}`,
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4} sx={{ mb: 4 }}>
          <Grid size={{ lg: 8, xs: 12 }}>
          <Typography
            variant="body1"
            sx={{ color: theme.palette.text.secondary }}
          >
            © 2025 Kognexus. Shaping the future of workforce.
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: theme.palette.text.secondary, fontStyle: "italic" }}
          >
            Disclaimer: The images, videos, and product demonstrations shown on this website are for illustrative purposes only. Our technology is still under active development, and the product may differ significantly from what is currently displayed. We anticipate deploying our first units by 2027.
          </Typography>
          </Grid>
          <Grid size={{ lg: 4, xs: 12}} sx={{ textAlign: { lg: "right", xs: "left" } }}>
            <Box sx={{ display: "flex", gap: 2, justifyContent: { lg: "flex-end", xs: "flex-start" }, mb: 2 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.name}
                  component="a"
                  href={social.href}
                  target={social.name === "Email" ? "_self" : "_blank"}
                  rel={social.name === "Email" ? "" : "noopener noreferrer"}
                  sx={{
                    color: theme.palette.text.secondary,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: social.color,
                      transform: "translateY(-2px)",
                      backgroundColor: `${social.color}15`,
                    },
                  }}
                  aria-label={`Visit our ${social.name}`}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
            
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {footerItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  color="inherit"
                  sx={{
                    color: theme.palette.text.secondary,
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    "&:hover": {
                      color: theme.palette.primary.main,
                    },
                    transition: "color 0.2s",
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
