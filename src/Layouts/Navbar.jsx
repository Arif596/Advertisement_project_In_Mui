import {
  AppBar,
  Avatar,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { StyledToolbar, Search, Userbox } from "../Style/Conts";
import SearchIcon from "@mui/icons-material/Search";
import mypic from "../assets/images/modal3.png";
import arrowpic from '../assets/icons/arrow-down.png'
import iconsimage from "../assets/icons/image1.png";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
export default function Navbar() {
  const [open, setOpen] = useState(null);

  const handleUserClick = (e) => {
    setOpen(e.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <div>
      <AppBar position="sticky" sx={{ background: "black" }}>
        <StyledToolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={iconsimage}
              style={{ width: "48.277px", height: "48px" }}
            />
            <Typography
              sx={{
                display: { sm: "block", xs: "none" },
                ml: 1,
                fontSize: "24px",
              }}
            >
              AllTRUEistic
            </Typography>
          </Box>
          <Search>
            <InputBase
              placeholder="Search Here"
              startAdornment={<SearchIcon sx={{ mr: 1 }} />}
              sx={{ width: "100%" }}
            />
          </Search>

          <Userbox onClick={handleUserClick}>
            <Avatar
              sx={{ width: 35, height: 35 }}
              src={mypic}
              alt="Your Name"
            />
            <Typography
              sx={{
                color: "white",
                fontFamily: "Quicksand",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "normal",
                display:'flex',
                alignItems:'center'
              }}
            >
              John Doe
             <img src={arrowpic} style={{width:'18px',height:'18px',flexShrink:0,marginLeft:'1px'}} alt="" />
            </Typography>
          </Userbox>
          <Menu
            anchorEl={open}
            open={Boolean(open)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </StyledToolbar>
      </AppBar>
    </div>
  );
}
