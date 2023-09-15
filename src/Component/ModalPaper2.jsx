import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import modalpic from "../assets/images/modal3.png";
import { papermodal } from "../Style/Conts";
import emailpic from "../assets/icons/sms.png";
import phonepic from "../assets/icons/call.png";
import eyepic from "../assets/icons/eye.png";
export default function ModalPaper2() {
  return (
    <div>
      <Paper style={papermodal}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={modalpic}
            alt="modal pic"
            style={{
              marginLeft: "5px",
              marginTop: "8px",
              borderRadius: "50px",
              width: "50px",
              height: "50px",
              border: "1px solid #DADADA",
            }}
          />
          <div style={{ marginLeft: "10px" }}>
            <Typography sx={{ color: "black", fontWeight: "bold" }}>
            Cooper Wilson
            </Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={emailpic}
                style={{ marginRight: "3px", width: "16px", height: "16px" }}
                alt=""
              />
              <p>j.smith@clarovigeo.com</p>
              <img
                src={phonepic}
                style={{
                  marginRight: "3px",
                  marginLeft: "3px",
                  width: "16px",
                  height: "16px",
                }}
                alt=""
              />
              <p>+1 580-504-0450</p>
            </div>
          </div>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img
                src={eyepic}
                alt=""
                style={{ width: "13px", height: "11px", marginTop: "8px" }}
              />
              <p
                style={{
                  marginBottom: "0",
                  color: "gray",
                  marginTop: "5px",
                  marginRight: "8px",
                }}
              >
                Viewed:
              </p>
              <p style={{ marginTop: "5px", marginRight: "8px" }}>
                Nov. 13, 2022 at 3:23PM
              </p>
            </div>
            <p style={{ marginTop: "10px", marginRight: "20px" }}>Miami, FL</p>
          </div>
        </div>
      </Paper>
    </div>
  );
}
