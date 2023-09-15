import { Modal, Toolbar, styled } from "@mui/material";

export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "60px",
});

export const Search = styled("div")(({ theme }) => ({
  background: "gray",
  padding: "0 10px",
  borderRadius: "7px",
  width: "35%",
  marginRight: "150px",
}));
export const Userbox = styled("Box")(({ theme }) => ({
  display: "flex",
  gap: "10px",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
export const PaperStyle = {
  width: "700px",
  height: "216px",
  borderRadius: "24px",
  border: "1px solid #723ADE",
  background: "#fff",
  boxShadow: '0px 4px 30px 0px rgba(28, 29, 66, 0.10)'
};
export const StyleTypo = {
  color: "#000",
  fontFamily: "Quicksand",
  fontSize: "22px",
  fontStyle: "normal",
  fontWeight: 700,
  marginLeft: "10px",
  marginTop: "5px",
};
export const StyleTypography = {
  color: "#000",
  fontFamily: "Quicksand",
  fontSize: "22px",
  fontStyle: "normal",
  fontWeight: 700,
  marginLeft: "10px",
  marginTop: "5px",
};
export const styleimage = {
  width: "102px",
  height: "104px",
  borderRadius: "20px",
  marginTop: "10px",
  marginLeft: "10px",
};
export const buttonstyle = {
  width: "200px",
  height: "40px",
  color: "white",
  borderRadius: "60px",
  background:
    "linear-gradient(151deg, #56C0CA 11%, #4489D4 46.16%, #723ADE 79.15%)",
  marginTop: "10px",
};
export const typostyle = {
  color: "#000",
  fontFamily: "Quicksand",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight:'normal'

};
export const newstyle = {
  color: "#723ADE",
  fontFamily: "Quicksand",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 700,
  textDecorationLine:'underline',
  lineHeight:'normal'
};
export const imagestyle = {
  width: "300px",
  height: "182px",
  borderRadius: "24px",
  border: "1px solid blue",
};
export const settingIcon = {
  width: "18px",
  color: "#723ADE",
  height: "18px",
};
export const SearchItem = styled("div")((theme) => ({
  width: "300px",
  height: "54px",
  borderRadius: "12px",
  border: "1px solid #DFDFDF",
  background: "#FFF",
}));
export const stylebtn = {
  color: "#723ADE",
  fontWeight: 600,
  fontSize: "14px",
  fontFamily: "Quicksand",
  fontStyle: "normal",
  lineHeight:'normal',
 
 
  boxShadow: '0px 4px 30px 0px rgba(28, 29, 66, 0.10)',

};
export const savebtn = {
  borderRadius: "60px",
  background:
    "linear-gradient(151deg, #56C0CA 11%, #4489D4 46.16%, #723ADE 79.15%)",
  width: "280px",
  height: "50px",
  color: "white",
  marginTop: "25px",
};
export const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItem: "center",
  width: "100% !important",
  height: "100%",
});
export const newpaper = {
  width: "660px",
  height: "134px",
  borderRadius: "24px",
  background: "#FFF",
  marginTop: "10px",
};
export const modalpic = {
  width: "102px",
  height: "104px",
  borderRadius: "24px",
  marginLeft: "10px",
  marginTop: "10px",
};
export const gridpaper = {
  width: "195px",
  height: "60px",
  borderRadius: "20px",
  border: "1px solid rgba(114, 58, 222, 0.20)",
  background: "#fff",
  color: "#723ADE33",
  marginLeft:'10px'
};
export const papernewstyle = {
  width: "660px",
  borderRadius: "24px",
  background: "rgba(114, 58, 222, 0.05)",
  color: "#723ADE0D",
  marginTop: "10px",
};
export const papermodal = {
  width: "660px",
  height: "78px",
  borderRadius: "24px",
  background: "#fff",
};

export const btnpaper = {
  width: "280px",
  height: "50px",
  borderRadius: "60px",
  border: "1px solid #723ADE",
  background: "#FFF",
  marginTop:'30px',
  marginLeft:'25px'
};
export const btnpaper2 = {
  width: "280px",
  height: "50px",
  borderRadius: "60px",
  border: "1px solid #723ADE",
  background: " linear-gradient(151deg, #56C0CA 11%, #4489D4 46.16%, #723ADE 79.15%)",
  marginTop:'30px'
};
