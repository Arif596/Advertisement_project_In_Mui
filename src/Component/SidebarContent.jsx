import React, { useState } from "react";
import { List, ListItemButton, ListItemText, Box } from "@mui/material";
import profileicon from "../assets/icons/profile.png";
import adminicons from "../assets/icons/admin.png";
import storyimage from "../assets/icons/task-square.png";
import reportpic from "../assets/icons/document-text.png";
import advertiseimage from "../assets/icons/advertise.png";
import activitypic from "../assets/icons/activity.png";
export default function SidebarContent() {
  const [activePage, setActivePage] = useState("");
  const handleItemClick = (pageName) => {
    setActivePage(pageName);
  };
  return (
    <div>
      <Box position="fixed">
        <List>
          <ListItemButton component="a" href="#">
            <img
              src={adminicons}
              alt=""
              style={{ width: "18px", height: "18px", marginRight: "10px" }}
            />
            <ListItemText
              primary="Admin Accounts"
              style={{ ml: 2, fontFamily: "Quicksand" }}
            />
          </ListItemButton>
        </List>
        <List>
          <ListItemButton component="a" href="#">
            <img
              src={profileicon}
              alt=""
              style={{ width: "18px", height: "18px", marginRight: "10px" }}
            />
            <ListItemText
              primary="UserAccount"
              style={{ ml: 1.5, fontFamily: "Quicksand" }}
            />
          </ListItemButton>
        </List>
        <List>
          <ListItemButton
            onClick={() => handleItemClick("Advertisement")}
            component="a"
            href="#"
            className={activePage === "Advertisement" ? "active" : ""}
          >
            <img
              src={storyimage}
              alt=""
              style={{ width: "18px", height: "18px", marginRight: "10px" }}
            />
            <ListItemText
              primary="New Realities & Stories"
              style={{ ml: 2, fontFamily: "Quicksand" }}
            />
          </ListItemButton>
        </List>
        <List>
          <ListItemButton
            onClick={() => handleItemClick("Advertisement")}
            style={{
              background:
                activePage === "Advertisement"
                  ? "linear-gradient(90deg, rgba(114, 58, 222, 0.15) 0%, rgba(114, 58, 222, 0.00) 100%)"
                  : "initial",
                  borderLeft:'1px solid #723ADE'
            }}
          >
            <img
              src={advertiseimage}
              alt=""
              style={{
                width: "18px",
                height: "18px",
                marginRight: "10px",
              }}
            />
            <ListItemText
              primary="Advertisement"
              style={{
                ml: 2,
                fontFamily: "Quicksand",
                color: activePage === "Advertisement" ? "#723ADE" : "initial",
              }}
            />
          </ListItemButton>
        </List>
        <List>
          <ListItemButton>
            <img
              src={reportpic}
              alt=""
              style={{ width: "18px", height: "18px", marginRight: "10px" }}
            />
            <ListItemText
              primary="Reports"
              style={{ ml: 2, fontFamily: "Quicksand" }}
            />
          </ListItemButton>
        </List>
        <List>
          <ListItemButton>
            <img
              src={activitypic}
              alt=""
              style={{ width: "18px", height: "18px", marginRight: "10px" }}
            />
            <ListItemText
              primary="Analytics & Statistics"
              style={{ ml: 2, fontFamily: "Quicksand" }}
            />
          </ListItemButton>
        </List>
      </Box>
    </div>
  );
}
