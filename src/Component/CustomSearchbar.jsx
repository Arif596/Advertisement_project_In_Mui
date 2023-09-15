import {
  Box,
  Typography,
  Grid,
  InputBase,
  Button,
  Paper,
  Avatar,
} from "@mui/material";
import {
  typostyle,
  newstyle,
  savebtn,
  imagestyle,
  SearchItem,
  stylebtn,
  settingIcon,
} from "../Style/Conts";
import sixthImage from "../assets/icons/reactan.png";
import rightbarimage from "../assets/images/rightbar.jpg";
import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import websitepic from "../assets/icons/global.png";
import restrictionpic from "../assets/icons/close-circle.png";
import discountpic from "../assets/icons/discount-shape.jpg";
import discountcodepic from "../assets/icons/receipt-2.png";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import StorefrontIcon from "@mui/icons-material/Storefront";
import calenderpic from "../assets/icons/calendar.png";
import ButtonCom from "./ButtonCom";
import searchicons from "../assets/icons/search-normal.png";

export default function CustomSearchbar() {
  return (
    <div>
      <Box position="sticky" width={300}>
        <Grid container>
          <Grid item xs={9}>
            <Typography style={typostyle}>Edit Ad Details</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography style={newstyle}>Duplicate</Typography>
          </Grid>
        </Grid>
        <Typography
          sx={{
            mt: 2,
            fontFamily: "Quicksand",
            fontWeight: 500,
            fontSize: "16px",
            fontStyle: "normal",
            lineHeight: "nromal",
            letterSpacing: -0.3,
            color: "#000",
            fontFeatureSettings: " 'clif' off 'liga' off ",
          }}
        >
          Upload Image
        </Typography>
        <Box sx={{ mt: 1 }}>
          <img src={sixthImage} style={imagestyle} alt="" />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 4,
          }}
        >
          <img src={discountpic} style={settingIcon} />
          <span
            style={{
              marginLeft: "5px",
              display: "inline-flex",
              alignItems: "baseline",
              color: "#63636F",
              fontSize: "14px",
              fontFamily: "Quicksand",
              fontStyle: "normal",
              lineHeight: "normal",
            }}
          >
            Discount Info
          </span>
        </Box>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <SearchItem>
            <InputBase
              placeholder="20% off on all our journals"
              sx={{
                marginTop: "10px",
                textAlign: "center",
                marginLeft: "10px",
                input:{
                  "::placeholder":{
                    fontSize:'16px',
                    fontFamily:'Quicksand',
                    fontStyle:'normal',
                    lineHeight:'normal',
                    fontWeight:500
                  }
                }
              }}
            />
          </SearchItem>
        </Grid>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 4,
          }}
        >
          <img src={discountcodepic} alt="" style={settingIcon} />
          <span
            style={{
              marginLeft: "5px",
              display: "inline-flex",
              alignItems: "baseline",
              color: "#63636F",
              fontSize: "14px",
              fontFamily: "Quicksand",
              fontStyle: "normal",
              lineHeight: "normal",
            }}
          >
            Discount Code (if applicable)
          </span>
        </Box>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <SearchItem>
            <InputBase
              placeholder="Journal away"
              sx={{
                marginTop: "10px",
                textAlign: "center",
                marginLeft: "10px",
                input:{
                  "::placeholder":{
                    fontSize:'16px',
                    fontFamily:'Quicksand',
                    fontStyle:'normal',
                    lineHeight:'normal',
                    fontWeight:500
                  }
                }
              }}
            />
          </SearchItem>
        </Grid>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 4,
          }}
        >
          <img src={restrictionpic} style={settingIcon} />
          <span
            style={{
              marginLeft: "5px",
              display: "inline-flex",
              alignItems: "baseline",
              color: "#63636F",
              fontSize: "14px",
              fontFamily: "Quicksand",
              fontStyle: "normal",
              lineHeight: "normal",
            }}
          >
            Restrictions
          </span>
        </Box>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <SearchItem>
            <InputBase
              placeholder="Online only"
              sx={{
                marginTop: "10px",
                textAlign: "center",
                marginLeft: "10px",
                input:{
                  "::placeholder":{
                    fontSize:'16px',
                    fontFamily:'Quicksand',
                    fontStyle:'normal',
                    lineHeight:'normal',
                    fontWeight:500
                  }
                }
              }}
              endAdornment={<KeyboardArrowDownOutlinedIcon sx={{ ml: 10 }} />}
            />
          </SearchItem>
        </Grid>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 4,
          }}
        >
          <StorefrontIcon style={settingIcon} />
          <span
            style={{
              marginLeft: "5px",
              display: "inline-flex",
              alignItems: "baseline",
              color: "#63636F",
              fontSize: "14px",
              fontFamily: "Quicksand",
              fontStyle: "normal",
              lineHeight: "normal",
            }}
          >
            Brand or Store Name
          </span>
        </Box>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <SearchItem>
            <InputBase
              placeholder="Open Book Journal"
              sx={{
                marginTop: "10px",
                textAlign: "center",
                marginLeft: "10px",
                input:{
                  "::placeholder":{
                    fontSize:'16px',
                    fontFamily:'Quicksand',
                    fontStyle:'normal',
                    lineHeight:'normal',
                    fontWeight:500
                  }
                }
              }}
            />
          </SearchItem>
        </Grid>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 4,
          }}
        >
          <img src={websitepic} style={settingIcon} />
          <span
            style={{
              marginLeft: "5px",
              display: "inline-flex",
              alignItems: "baseline",
              color: "#63636F",
              fontSize: "14px",
              fontFamily: "Quicksand",
              fontStyle: "normal",
              lineHeight: "normal",
            }}
          >
            Website URL
          </span>
        </Box>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <SearchItem>
            <InputBase
              placeholder="https://www.openbookjournal.com/journ"
              sx={{
                marginTop: "10px",
                textAlign: "center",
                marginLeft: "10px",
                input:{
                  "::placeholder":{
                    fontSize:'16px',
                    fontFamily:'Quicksand',
                    fontStyle:'normal',
                    lineHeight:'normal',
                    fontWeight:500
                  }
                }
              }}
            />
          </SearchItem>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 4,
              
              }}
            >
              <img src={calenderpic} style={settingIcon} />
              <span
                style={{
                  marginLeft: "5px",
                  display: "inline-flex",
                  alignItems: "baseline",
                  color: "#63636F",
                  fontSize: "14px",
                  fontFamily: "Quicksand",
                  fontStyle: "normal",
                  lineHeight: "normal",
                }}
              >
                Start Date
              </span>
            </Box>
            <SearchItem sx={{ width: "150px",height:'54px', mt: 2 }}>
              <InputBase
                placeholder="01/05/2023"
                sx={{
                  marginTop: "10px",
                  textAlign: "center",
                  marginLeft: "10px",
                }}
                endAdornment={
                  <CalendarMonthIcon
                    sx={{
                      borderRadius: "10px",
                      background:
                        "linear-gradient(151deg, #56C0CA 11%, #4489D4 46.16%, #723ADE 79.15%)",
                      width: "38px",
                      height: "38px",
                      marginRight: "4px",
                      
                    }}
                  />
                }
              />
            </SearchItem>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 4,
              }}
            >
              <img src={calenderpic} style={settingIcon} />
              <span
                style={{
                  marginLeft: "5px",
                  display: "inline-flex",
                  alignItems: "baseline",
                  color: "#63636F",
                  fontSize: "14px",
                  fontFamily: "Quicksand",
                  fontStyle: "normal",
                  lineHeight: "normal",
                }}
              >
                End Date
              </span>
            </Box>
            <SearchItem sx={{  width: "150px",height:'54px', marginLeft: "12px", mt: 2 }}>
              <InputBase
                placeholder="30/05/2023"
                sx={{
                  marginTop: "10px",
                  textAlign: "center",
                  marginLeft: "10px",
                }}
                endAdornment={
                  <CalendarMonthIcon
                    sx={{
                      borderRadius: "10px",
                      background:
                        "linear-gradient(151deg, #56C0CA 11%, #4489D4 46.16%, #723ADE 79.15%)",
                      width: "38px",
                      height: "38px",
                      marginRight: "4px",
                    }}
                  />
                }
              />
            </SearchItem>
          </Grid>
        </Grid>
        <Typography
          sx={{ mt: 3, color: "#000", fontWeight: "bold", fontSize: "14px" }}
        >
          Select from Templates
        </Typography>

        <img
          src={rightbarimage}
          alt=""
          style={{ width: "300px", marginTop: "5px" }}
        />
        <Typography
          sx={{
            color: "#000",
            fontFamily: "Quicksand",
            fontSize: "16px",
            fontWeight: 700,
            fontStyle: "normal",
            lineHeight: "normal",
            mt: 1,
            mb: 2,
          }}
        >
          Target Audience Location
        </Typography>
        <Box>
          <ButtonCom />

          <Grid item xs={12} sx={{ mt: 3 }}>
            <SearchItem>
              <InputBase
                placeholder="Search locations and press enter.."
                sx={{
                  marginTop: "10px",
                  textAlign: "center",
                  marginLeft: "10px",
                  input:{
                    "::placeholder":{
                      fontSize:'16px',
                      fontFamily:'Quicksand',
                      fontStyle:'normal',
                      lineHeight:'normal',
                      fontWeight:500
                    }
                  }
                }}
                startAdornment={
                  <img
                    src={searchicons}
                    style={{
                      width: "18px",
                      height: "18px",
                      marginRight: "7px",
                    }}
                  />
                }
              />
            </SearchItem>
          </Grid>
        </Box>
        <Typography
          sx={{
            color: "#000",
            fontWeight: 700,
            fontSize: "16px",
            fontStyle:'normal',
            lineHeight:'normal',
            mt: 2,

          }}
        >
          Priority Ranking
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 2,
          }}
        >
          <span
            style={{
              marginLeft: "5px",
              display: "inline-flex",
              alignItems: "baseline",
              color: "#63636F",
              fontSize: "14px",
              fontFamily: "Quicksand",
              fontStyle: "normal",
              lineHeight: "normal",
            }}
          >
            Ad should show up.
          </span>
        </Box>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <SearchItem>
            <InputBase
              placeholder="Often - 3 times per day"
              sx={{
                marginTop: "10px",
                textAlign: "center",
                marginLeft: "10px",
                input:{
                  "::placeholder":{
                    fontSize:'16px',
                    fontFamily:'Quicksand',
                    fontStyle:'normal',
                    lineHeight:'normal',
                    fontWeight:500
                  }
                }
              }}
              endAdornment={<KeyboardArrowDownOutlinedIcon sx={{ ml: 10 }} />}
            />
          </SearchItem>
        </Grid>
        <Button style={savebtn}>Save</Button>
      </Box>
    </div>
  );
}
