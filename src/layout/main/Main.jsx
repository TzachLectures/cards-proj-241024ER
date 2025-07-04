import { Box } from "@mui/material";
import React from "react";
import { useTheme } from "../../providers/CustomThemeProvider";

export default function Main({ children }) {
  const { isDark } = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: isDark ? "#333333" : "#e3f2fd",
        minHeight: "80vh",
      }}
    >
      {children}
    </Box>
  );
}
