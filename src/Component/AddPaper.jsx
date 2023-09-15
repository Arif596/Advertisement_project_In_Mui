import { Paper, Typography, Button, Grid } from "@mui/material";
import { PaperStyle, StyleTypo, styleimage, buttonstyle } from "../Style/Conts";
import AnalyticalModal from "./AnalyticalModal";
import deleteimage from "../assets/icons/delete.png";
import editimage from "../assets/icons/edit.png";
import React, { useState } from "react";
import bookicons from "../assets/icons/book.png";
import calendericons from "../assets/icons/calendar.png";
export default function AdPaper({ imgSrc }) {
  const [open, setOpen] = useState(false);
  const handelClose = () => {
    setOpen(false);
  };
  const handelOpen = () => {
    setOpen(true);
  };
  return (
    <Paper elevation={10} style={PaperStyle}>
      <Grid container>
        <Grid item xs={9} sx={{ display: "flex", mt: 2 }}>
          <img src={imgSrc} alt="first image" style={styleimage} />
          <Typography style={StyleTypo}>
            20%Off
            <br />
            <div style={{ display: "flex" }}>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  fontStyle: "normal",
                  lineHeight: "normal",
                  marginTop: "5px",
                  fontFamily: "Quicksand",
                  fontFeatureSettings: "'clig' off, 'liga' off",
                }}
              >
                on all of our journals
              </p>
              <p
                style={{
                  fontSize: "14px",
                  marginTop: "6px",
                  fontFamily: "Quicksand",
                  color: "#723ADE",
                  marginLeft: "1px",
                  fontWeight: 500,
                  fontStyle: "normal",
                  lineHeight: "normal",
                  fontFeatureSettings: "'clig' off, 'liga' off",
                }}
              >
                Until November 23
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  fontStyle: "normal",
                  lineHeight: "normal",
                  marginTop: "7px",
                  fontFamily: "Quicksand",
                  fontFeatureSettings: "'clig' off, 'liga' off",
                }}
              >
                {" "}
                Use Code
              </p>

              <p
                style={{
                  fontSize: "14px",
                  marginTop: "7px",
                  fontFamily: "Quicksand",
                  color: "#723ADE",
                  marginLeft: "1px",
                  fontWeight: 500,
                  fontStyle: "normal",
                  lineHeight: "normal",
                  fontFeatureSettings: "'clig' off, 'liga' off",
                }}
              >
                “Journal Away”
              </p>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  fontStyle: "normal",
                  lineHeight: "normal",
                  marginTop: "8px",
                  fontFamily: "Quicksand",
                  fontFeatureSettings: "'clig' off, 'liga' off",
                }}
              >
                Online Only
              </p>
            </div>
          </Typography>
        </Grid>
        <Grid item xs={3} sx={{ mt: 3.5 }}>
          <div style={{ flexDirection: "column" }}>
            <div style={{ display: "flex" }}>
              <img
                src={bookicons}
                alt=""
                style={{ marginRight: "3px", width: "16px", height: "16px" }}
              />
              <p
                style={{
                  fontFamily: "Quicksand",
                  fontWeight: 700,
                  color: "#000",
                  fontSize: "14px",
                  fontStyle: "normal",
                  marginLeft: "2px",
                  fontFeatureSettings: "'clig' off, 'liga' off",
                }}
              >
                Open Book Journal
              </p>
            </div>
            <p
              style={{
                fontFamily: "Quicksand",
                fontWeight: 600,
                color: "#4A4949",
                fontSize: "14px",
                fontStyle: "normal",
                marginTop: "10px",
                marginLeft: "1px",
                fontFeatureSettings: "'clig' off, 'liga' off",
              }}
            >
              <img src={calendericons} alt="" style={{ marginRight: "5px" }} />
              Starts: 11/20/21
            </p>
            <p
              style={{
                fontFamily: "Quicksand",
                fontWeight: 600,
                color: "#4A4949",
                fontSize: "14px",
                fontStyle: "normal",
                marginTop: "10px",
                marginLeft: "1px",
                fontFeatureSettings: "'clig' off, 'liga' off",
              }}
            >
              <img src={calendericons} alt="" style={{ marginRight: "5px" }} />
              Ends: 11/20/23
            </p>
          </div>
        </Grid>
      </Grid>
      <div
        className="main"
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div className="left">
          <Button onClick={handelOpen} style={buttonstyle}>
            View Analytics
          </Button>
        </div>
        <div className="right" style={{ display: "flex", marginLeft: "5px" }}>
          <img
            src={deleteimage}
            style={{ marginRight: "10px", width: "34px", height: "34px",color:'#E13B31' }}
            alt="hello"
          />
          <img
            src={editimage}
            style={{ marginleft: "10px", width: "34px", height: "34px" }}
            alt="hello"
          />
        </div>
      </div>
      <AnalyticalModal open={open} onClose={handelClose} />
    </Paper>
  );
}
