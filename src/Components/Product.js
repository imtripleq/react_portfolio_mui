import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import js from "../img/js.png";

const Product = ({ img }) => {
  const useStyles = makeStyles({
    p: {
      width: "40%",
      height: "30vh",
      margin: "20px 30px",
      border: "2px solid rgb(243,242,242)",
      borderRadius: "10px 10px 0px 0px",
      overflow: "hidden",
    },
    browser: {
      height: "20px",
      backgroundColor: "rgb(243,242,242)",
      display: "flex",
      alignItems: "center",
      position: "sticky",
      zIndex: "2",
    },
    circle: {
      width: "6px",
      height: "6px",
      backgroundColor: "white",
      margin: "3px",
      borderRadius: "50%",
    },
    img: {
      width: "100%",
      transition: "all 10s ease",
      "&:hover": { transform: "translateY(-100%)" },
    },
  });

  const classes = useStyles();
  console.log(img);
  return (
    <>
      <Box component="div" className={classes.p}>
        <Box component="div" className={classes.browser}>
          <Box component="div" className={classes.circle}></Box>
          <Box component="div" className={classes.circle}></Box>
          <Box component="div" className={classes.circle}></Box>
        </Box>

        <img src={js} alt="dennis project" className={classes.img} />
      </Box>
    </>
  );
};

export default Product;
