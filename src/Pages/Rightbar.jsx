import { Box } from "@mui/material";
import React from "react";
import CustomSearchbar from '../Component/CustomSearchbar'

export default function Rightbar() {
  return (
    <Box flex={2} p={2}>
      <CustomSearchbar />
    </Box>
  );
}
