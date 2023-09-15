import { Box, Button, Grid, Modal, Paper, Typography } from "@mui/material";
import {
  StyledModal,
  newpaper,
  modalpic,
  StyleTypo,
  btnpaper,
  btnpaper2
} from "../Style/Conts";
import Papercom2 from "./Papercom2";
import Papercom1 from "./Papercom1";
import bookicons from "../assets/icons/book.png";
import calendericons from "../assets/icons/calendar.png";
import Papercom3 from "./Papercom3";
import FirstImage from "../assets/images/center.png";
import Progresscom from "./Progresscom";
import ModalPaper from "./ModalPaper";
import ModalPaper1 from "./ModalPaper1";
import ModalPaper2 from "./ModalPaper2";


export default function AnalyticalModal({ open, onClose }) {
  return (
    <StyledModal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      
    >
      <Box
        width={650}
        // height={700}
        borderRadius='8px'
        p={3}
        sx={{
          "&::-webkit-scrollbar": {
            width : "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "gray",
            borderRadius: "4px",
            
            "::before": {
              content: "''",
              display: "block",
              height: "6px", 
            },
            "::after": {
              content: "''",
              display: "block",
              height: "6px", 
            },
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "gray",
          },
         mt: 3, mb: 3, overflowY: "scroll !important", overflowX: "hidden"}}
        backgroundColor="background.default"
        color={"text.primary"}
      >
        
        <Typography variant="h6" color="gray">
          Analytics & Performance
        </Typography>
        <Paper style={newpaper}>
          <Grid container>
            <Grid item xs={9} sx={{ display: "flex" }}>
              <img src={FirstImage} style={modalpic} alt="modalpic" />
              <Typography style={StyleTypo}>
                20%Off
                <br />
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "normal",
                    marginTop: "px",
                  }}
                >
                  on all of our journals Until November 23
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "normal",
                    marginTop: "8px",
                  }}
                >
                  Use Code “Journal Away” Online Only
                </p>
              </Typography>
            </Grid>
            <Grid item xs={3} sx={{ mt: 2 }}>
              <Typography sx={{ color: "#000", fontWeight: "bold" }}>
                <img src={bookicons} alt="" style={{ marginRight: "5px" }} />
                Open Book Journal
                <br />
                <p
                  style={{
                    fontFamily: "Quicksand",
                    fontWeight: "normal",
                    marginTop: "5px",
                  }}
                >
                  <img
                    src={calendericons}
                    alt=""
                    style={{ marginRight: "5px" }}
                  />
                  Starts: 11/20/21
                </p>
                <p
                  style={{
                    fontFamily: "Quicksand",
                    fontWeight: "normal",
                    marginTop: "2px",
                  }}
                >
                  <img
                    src={calendericons}
                    alt=""
                    style={{ marginRight: "5px" }}
                  />
                  Ends: 11/20/23
                </p>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Button>Life time</Button>
        <Button>Yearly</Button>
        <Button>Weakly</Button>
        <Button>Daily</Button>
        <Button>Custom</Button>
        <Grid container sx={{ mt: 3 }}>
          <Grid item xs={4}>
            <Papercom1 />
          </Grid>
          <Grid item xs={4}>
            <Papercom2 />
          </Grid>
          <Grid item xs={4}>
            <Papercom3 />
          </Grid>
        </Grid>
        <Typography
          sx={{ color: "black", fontWeight: 700, fontSize: "16px", mt: 4 }}
        >
          Top 5 States Who Viewed Ad
        </Typography>

        <Progresscom />
        <Typography
          sx={{ color: "black", mt: 2, fontWeight: "bold", fontSize: "16px" }}
        >
          User Specifics
        </Typography>
        <Box sx={{ mt: 2 }}>
          <ModalPaper />
        </Box>
        <Box sx={{ mt: 2 }}>
          <ModalPaper1 />
        </Box>
        <Box sx={{ mt: 2 }}>
          <ModalPaper2 />
        </Box>
        <Box sx={{display:'flex',gap:'20px'}}>
        <Paper style={btnpaper}>
          <Typography
            sx={{
              textAlign: "center",
              mt: 1.5,
              color: "#723ADE",
              fontFamily: "Quicksand",
              fontWeight: 700,
            }}
          >
            Export to CSV
          </Typography>
        </Paper>
        <Paper style={btnpaper2}>
        <Typography
         sx={{
          textAlign: "center",
          mt: 1.5,
          color: "#fff",
          fontFamily: "Quicksand",
          fontWeight: 700,
        }}>
        Export to Pdf
        </Typography>
        </Paper>
        </Box>
      </Box>

    </StyledModal>
  );
}
