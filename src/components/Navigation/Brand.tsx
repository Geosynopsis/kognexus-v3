import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";


const Brand: React.FC = () => {
  const router = useRouter();

  const takeMeHome = () => {
    router.push("/");
  };
  return (
      <Box
        component="img"
        onClick={takeMeHome}
        src="/asimovian_kognexus_light.svg"
        alt="Kognexus Logo"
        sx={{
          height: 30,
          width: "auto",
          filter: "drop-shadow(0 2px 4px rgba(0, 128, 255, 0.3))",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      />
  );
};

export default Brand;
