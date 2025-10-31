import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const updatedDate = "2025-09-11";

// Define the privacy policy data in JSON format
const privacyData = [
  {
    id: "header",
    title: "Privacy Policy",
    content: `Last updated: ${updatedDate}\n\nAt Kognexus, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our websites (https://www.kognexus.ai and https://www.kognexus.com), in compliance with the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).`,
    type: "header",
  },
  {
    id: "information",
    title: "1. Information We Collect",
    content:
      "When you submit a contact form on our website, we may collect:\n\n- Name\n- Email address\n- Phone number\n- Any other details you choose to provide\n\nWe do not use cookies, tracking technologies, Google Analytics, or Google Tags on this website.",
    type: "section",
  },
  {
    id: "legal_basis",
    title: "2. Legal Basis for Processing (GDPR)",
    content:
      "We process personal data under the following lawful bases:\n\n- Consent: When you provide your details via the contact form.\n- Contractual necessity: To respond to your inquiry or provide requested information.",
    type: "section",
  },
  {
    id: "how_we_use",
    title: "3. How We Use Your Information",
    content:
      "We use the data we collect to:\n\n- Respond to your inquiries\n- Provide the information or services you requested\n- Communicate with you regarding your interest in our services",
    type: "section",
  },
  {
    id: "sharing",
    title: "4. Sharing of Information",
    content:
      "We do not sell, rent, or trade your personal information. Your information is only shared if required by law or necessary to provide services you have requested.",
    type: "section",
  },
  {
    id: "retention",
    title: "5. Data Retention",
    content:
      "Form submissions are stored only as long as necessary to fulfill the purpose for which they were collected, or as required by law.",
    type: "section",
  },
  {
    id: "rights",
    title: "6. Your Rights",
    content:
      "Depending on your location, you may have the following rights:\n\nUnder GDPR (EU/EEA):\n- Access, update, or delete your personal data\n- Withdraw consent at any time\n- Request data portability\n- Restrict or object to processing\n\nUnder CCPA (California):\n- Request disclosure of categories and specific pieces of personal information collected\n- Request deletion of personal information\n- Opt out of the sale of personal information (we do not sell personal data)\n- Non-discrimination for exercising your privacy rights\n\nTo exercise your rights, please contact us at: privacy@kognexus.ai",
    type: "section",
  },
  {
    id: "security",
    title: "7. Data Security",
    content:
      "We implement reasonable security measures to protect your personal information. However, no online system is 100% secure.",
    type: "section",
  },
  {
    id: "children",
    title: "8. Children’s Privacy",
    content:
      "Our website is not directed to children under 16, and we do not knowingly collect their data.",
    type: "section",
  },
  {
    id: "changes",
    title: "9. Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised “Last updated” date.",
    type: "section",
  },
  {
    id: "contact",
    title: "10. Contact Us",
    content:
      "If you have any questions about this Privacy Policy, please contact us at:\n\nKognexus\n📧 privacy@kognexus.ai\n\n🌐 https://www.kognexus.ai | https://www.kognexus.com",
    type: "section",
  },
];

const PrivacyComponent: React.FC = () => {
  return (
    <Box
      component="section"
      id="privacy"
      sx={{
        background: "#000310",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        },
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ p: 5, mt: 5, mb: 5, position: "relative" }}
        direction="column"
      >
        {privacyData.map((section) => (
          <Grid size={{ xs: 12, md: 6 }} key={section.id}>
            {section.type === "header" ? (
              <Typography variant="h2" component="h2" gutterBottom>
                {section.title}
              </Typography>
            ) : (
              <Typography variant="h3" component="h3" gutterBottom>
                {section.title}
              </Typography>
            )}
            <Typography
              variant="body1"
              component="p"
              style={{ whiteSpace: "pre-line" }}
            >
              {section.content}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PrivacyComponent;
