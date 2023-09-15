import {
  Box,
} from "@mui/material";
import React from "react";
import SidebarContent from "../Component/SidebarContent";
export default function Sidebar() {
  return (
      <Box 
      flex={1.5}
       p={2} 
       sx={{ display: { sm: "block", xs: "none" } }}>
      <SidebarContent/>
      </Box>
  );
}
