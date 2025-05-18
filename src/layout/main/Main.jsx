import { Box } from "@mui/material";
import React from "react";

export default function Main({ children }) {
  return (
    <Box sx={{ backgroundColor: "#e3f2fd", minHeight: "80vh" }}>{children}</Box>
  );
}
