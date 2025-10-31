"use client";

import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
  Typography
} from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

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

export const PilotProgramSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
    company: string;
    submissionDate: string;
  } | null>(null);

  // Check localStorage for previous submission on component mount
  useEffect(() => {
    const cachedSubmission = localStorage.getItem('pilotProgramSubmission');
    if (cachedSubmission) {
      try {
        const data = JSON.parse(cachedSubmission);
        setSubmittedData(data);
        setIsSubmitted(true);
      } catch (error) {
        console.error('Error parsing cached submission:', error);
        // Clear invalid cache data
        localStorage.removeItem('pilotProgramSubmission');
      }
    }
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    agreeToContact: false,
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  // Email validation regex
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Global phone number validation regex (supports various formats)
  const isValidPhone = (phone: string) => {
    // Remove all non-digit characters except + and spaces/dashes
    const cleanPhone = phone.replace(/[^\d+\-\s()]/g, '');
    // Allow formats like: +1234567890, +1-234-567-8900, (123) 456-7890, etc.
    const phoneRegex = /^[\+]?[\d\s\-\(\)]{7,20}$/;
    return phoneRegex.test(cleanPhone) && cleanPhone.replace(/[^\d]/g, '').length >= 7;
  };

  const validateField = (name: string, value: string) => {
    const newErrors = { ...errors };
    
    if (name === 'email') {
      if (value.trim() && !isValidEmail(value)) {
        newErrors.email = "Please enter a valid email address";
      } else {
        newErrors.email = "";
      }
    }
    
    if (name === 'phone') {
      if (value.trim() && !isValidPhone(value)) {
        newErrors.phone = "Please enter a valid phone number";
      } else {
        newErrors.phone = "";
      }
    }
    
    setErrors(newErrors);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Validate field on change
    validateField(name, value);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      agreeToContact: event.target.checked,
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    // Validate all fields before submission
    validateField('email', formData.email);
    if (formData.phone.trim()) {
      validateField('phone', formData.phone);
    }
    
    if (!formData.agreeToContact) {
      alert("Please agree to be contacted by our team to proceed.");
      return;
    }
    
    if (errors.email || errors.phone) {
      alert("Please correct the fields errors before submitting.");
      return;
    }
    
    if (!isValidEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    
    if (formData.phone.trim() && !isValidPhone(formData.phone)) {
      alert("Please enter a valid phone number or leave it empty.");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Google Form submission URL
      const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSee5DSpXdRYoS6ZJ4DmpOtRqYPnk9iKeZGUn24G9gKHgk7KPw/formResponse";
      
      // Create form data for Google Forms
      // TO GET THE CORRECT ENTRY IDs:
      // 1. Open your Google Form: https://docs.google.com/forms/d/e/1FAIpQLSee5DSpXdRYoS6ZJ4DmpOtRqYPnk9iKeZGUn24G9gKHgk7KPw/viewform
      // 2. Right-click and select "View Page Source" or "Inspect Element"
      // 3. Search for "entry." in the source code
      // 4. Find the entry IDs for each field (e.g., entry.123456789)
      // 5. Replace the placeholder IDs below with the actual ones
      
      const formDataToSubmit = new FormData();
      
      // IMPORTANT: Replace these placeholder entry IDs with actual ones from your Google Form
      // You can find them by inspecting the form source code
      formDataToSubmit.append("entry.1685861010", formData.name); // Name field - REPLACE WITH ACTUAL ENTRY ID
      formDataToSubmit.append("entry.688213563", formData.email); // Email field - REPLACE WITH ACTUAL ENTRY ID
      formDataToSubmit.append("entry.197666047", formData.phone); // Phone field - REPLACE WITH ACTUAL ENTRY ID
      formDataToSubmit.append("entry.933230505", formData.company); // Company field - REPLACE WITH ACTUAL ENTRY ID
      
      // Submit to Google Forms using fetch with no-cors mode
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: formDataToSubmit,
      });
      
      // Since we can't get a response with no-cors mode, we assume success
      const submissionData = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        submissionDate: new Date().toISOString(),
      };

      // Cache the submission data in localStorage
      localStorage.setItem('pilotProgramSubmission', JSON.stringify(submissionData));
      
      // Update component state
      setSubmittedData(submissionData);
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        agreeToContact: false,
      });
      setErrors({ email: "", phone: "" });
      
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = 
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    isValidEmail(formData.email) &&
    formData.company.trim() !== "" &&
    formData.agreeToContact &&
    !errors.email &&
    !errors.phone &&
    (formData.phone.trim() === "" || isValidPhone(formData.phone)) &&
    !isSubmitting;

  // Function to clear cache and show form again (for testing or if user wants to resubmit)
  const handleShowFormAgain = () => {
    localStorage.removeItem('pilotProgramSubmission');
    setIsSubmitted(false);
    setSubmittedData(null);
  };

  // Confirmation card component
  const ConfirmationCard = () => (
    <Box
      sx={{
        maxWidth: "600px",
        mx: "auto",
        p: 4,
        background: "rgba(173, 216, 230, 0.1)",
        borderRadius: 3,
        border: "2px solid rgba(173, 216, 230, 0.3)",
        backdropFilter: "blur(10px)",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: "linear-gradient(45deg, rgba(173, 216, 230, 0.8) 0%, rgba(240, 248, 255, 0.6) 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mx: "auto",
          mb: 3,
          fontSize: "2rem",
        }}
      >
        ✓
      </Box>
      
      <Typography
        variant="h4"
        sx={{
          mb: 2,
          fontWeight: 700,
          color: "rgba(173, 216, 230, 0.9)",
        }}
      >
        You have submitted a request the Pilot Program!
      </Typography>
      
      <Typography
        variant="h6"
        sx={{
          mb: 3,
          opacity: 0.9,
        }}
      >
        Welcome aboard, {submittedData?.name}!
      </Typography>
      
      <Typography
        variant="body1"
        sx={{
          mb: 3,
          opacity: 0.8,
          lineHeight: 1.6,
        }}
      >
        Thank you for joining our exclusive pilot program. Our team will reach out to you at{" "}
        <strong style={{ color: "rgba(173, 216, 230, 0.9)" }}>{submittedData?.email}</strong>{" "}
        within the next few business days to discuss the next steps.
      </Typography>
      
      <Typography
        variant="body2"
        sx={{
          opacity: 0.7,
          mb: 3,
        }}
      >
        Submitted on {submittedData?.submissionDate ? new Date(submittedData.submissionDate).toLocaleDateString() : 'recently'}
      </Typography>
      
      <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
        <Button
          variant="outlined"
          onClick={handleShowFormAgain}
          sx={{
            color: "rgba(173, 216, 230, 0.8)",
            borderColor: "rgba(173, 216, 230, 0.3)",
            "&:hover": {
              borderColor: "rgba(173, 216, 230, 0.6)",
              backgroundColor: "rgba(173, 216, 230, 0.1)",
            },
          }}
        >
          Submit Another Application
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box
      component="section"
      id="pilot-program"
      sx={{
        background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
        py: 12,
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 50% 50%, rgba(173, 216, 230, 0.05) 0%, transparent 70%)",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <Box textAlign="center" sx={{ mb: 8 }}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  mb: 3,
                  fontWeight: 700,
                }}
              >
                {isSubmitted ? "Pilot Program Status" : "Join the Pilot Program"}
              </Typography>
              <Typography
                variant="h6"
                component="p"
                sx={{
                  maxWidth: "600px",
                  mx: "auto",
                  lineHeight: 1.6,
                  opacity: 0.9,
                }}
              >
                {isSubmitted 
                  ? "You've successfully joined our exclusive pilot program. We're excited to have you on board!"
                  : "Be among the first to experience our revolutionary robotics platform. Join our exclusive pilot program and help shape the future of industrial automation."
                }
              </Typography>
            </Box>
          </motion.div>

          <motion.div variants={fadeInUp}>
            {isSubmitted ? (
              <ConfirmationCard />
            ) : (
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                maxWidth: "800px",
                mx: "auto",
                p: 4,
                background: "rgba(255, 255, 255, 0.02)",
                borderRadius: 3,
                border: "1px solid rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {/* Row 1: Full Name */}
                <TextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      "& fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.2)",
                      },
                      "&:hover fieldset": {
                        borderColor: "rgba(173, 216, 230, 0.5)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "rgba(173, 216, 230, 0.8)",
                      },
                    },
                  }}
                />

                {/* Row 2: Email */}
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  error={!!errors.email}
                  helperText={errors.email}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      "& fieldset": {
                        borderColor: errors.email ? "rgba(244, 67, 54, 0.5)" : "rgba(255, 255, 255, 0.2)",
                      },
                      "&:hover fieldset": {
                        borderColor: errors.email ? "rgba(244, 67, 54, 0.7)" : "rgba(173, 216, 230, 0.5)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: errors.email ? "rgba(244, 67, 54, 0.8)" : "rgba(173, 216, 230, 0.8)",
                      },
                    },
                    "& .MuiFormHelperText-root": {
                      color: "rgba(244, 67, 54, 0.8)",
                    },
                  }}
                />

                {/* Row 3: Phone Number */}
                <TextField
                  fullWidth
                  label="Phone Number (Optional)"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  error={!!errors.phone}
                  helperText={errors.phone || "Include country code for international numbers (e.g., +1 234-567-8900)"}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      "& fieldset": {
                        borderColor: errors.phone ? "rgba(244, 67, 54, 0.5)" : "rgba(255, 255, 255, 0.2)",
                      },
                      "&:hover fieldset": {
                        borderColor: errors.phone ? "rgba(244, 67, 54, 0.7)" : "rgba(173, 216, 230, 0.5)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: errors.phone ? "rgba(244, 67, 54, 0.8)" : "rgba(173, 216, 230, 0.8)",
                      },
                    },
                    "& .MuiFormHelperText-root": {
                      color: errors.phone ? "rgba(244, 67, 54, 0.8)" : "rgba(255, 255, 255, 0.6)",
                    },
                  }}
                />

                {/* Row 4: Company */}
                <TextField
                  fullWidth
                  label="Company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      "& fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.2)",
                      },
                      "&:hover fieldset": {
                        borderColor: "rgba(173, 216, 230, 0.5)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "rgba(173, 216, 230, 0.8)",
                      },
                    },
                  }}
                />

                {/* Row 5: Agreement Checkbox */}
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.agreeToContact}
                      onChange={handleCheckboxChange}
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        "&.Mui-checked": {
                          color: "rgba(173, 216, 230, 0.8)",
                        },
                      }}
                    />
                  }
                  label={
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      I agree to be contacted by the Kognexus team regarding the pilot program
                    </Typography>
                  }
                />

                {/* Row 7: Submit Button */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={!isFormValid}
                  sx={{
                    py: 1.5,
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    background: isFormValid
                      ? "linear-gradient(45deg, rgba(173, 216, 230, 0.8) 0%, rgba(240, 248, 255, 0.6) 100%)"
                      : "rgba(255, 255, 255, 0.1)",
                    color: isFormValid ? "#000" : "rgba(255, 255, 255, 0.5)",
                    border: "1px solid rgba(173, 216, 230, 0.3)",
                    "&:hover": {
                      background: isFormValid
                        ? "linear-gradient(45deg, rgba(173, 216, 230, 0.9) 0%, rgba(240, 248, 255, 0.7) 100%)"
                        : "rgba(255, 255, 255, 0.1)",
                      transform: isFormValid ? "translateY(-1px)" : "none",
                      boxShadow: isFormValid
                        ? "0 4px 20px rgba(173, 216, 230, 0.3)"
                        : "none",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  {isSubmitting ? "Submitting..." : "Join Pilot Program"}
                </Button>
              </Box>
            </Box>
            )}
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default PilotProgramSection;