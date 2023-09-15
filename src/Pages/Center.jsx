import React from "react";
import { Box, Button, Typography } from "@mui/material";
import "../Css/Style.css";

import AdPaper from "../Component/AddPaper";
import FirstImage from "../assets/images/center.png";
import secondimage from "../assets/images/center2.png";
import thirdimage from "../assets/images/center3.png";
import fourimage from "../assets/images/center4.png";
import addicons from "../assets/icons/add.png";
export default function Center() {
  return (
    <Box flex={4} p={2}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          sx={{
            color: "#000",
            fontFamily: "Quicksand",
            fontWeight: 600,
            fontSize: "20px",
            fontStyle: "normal",
            fontHeight: "normal",
          }}
        >
          Advertisements
        </Typography>
        <img src={addicons} alt="" />
      </Box>
      <p
        style={{
          marginTop: "3px",
          fontSize: "12px",
          color: "#4A4949",
          fontFamily: " Quicksand",
          fontWeight: 600,
          fontStyle: 'normal',
          lineHeight: '20px',
          width:'617px'
        }}
      >
        Click on a created ad below to edit the details on the right panel.
        Click on “view analytics” to view the different stats for this ad.
      </p>
      <Box sx={{ mt: 4, width: "700px", height: "216px" }}>
        <AdPaper imgSrc={FirstImage} />
      </Box>
      <Box sx={{ mt: 5 }}>
        <AdPaper imgSrc={secondimage} />
      </Box>
      <Box sx={{ mt: 5 }}>
        <AdPaper imgSrc={thirdimage} />
      </Box>
      <Box sx={{ mt: 5 }}>
        <AdPaper imgSrc={fourimage} />
      </Box>
      <Box sx={{ mt: 5 }}>
        <AdPaper imgSrc={fourimage} />
      </Box>
      <Box sx={{ mt: 5 }}>
        <AdPaper imgSrc={fourimage} />
      </Box>
    </Box>
  );
}
