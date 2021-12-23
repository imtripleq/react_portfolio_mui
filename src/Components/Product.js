import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const Product = ({ img, title, link }) => {
  const useStyles = makeStyles({
    div: {
      width: "40%",
      height: "60vh",
      margin: "20px 30px",
      justifyContent: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: "#C5C6C7",
    },
    p: {
      width: "100%",
      height: "50vh",
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
    buttonContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
  });

  const classes = useStyles();
  console.log(img);
  return (
    <>
      <Box component="div" className={classes.div}>
        <Box>
          <Typography variant="h6">{title}</Typography>
        </Box>
        <Box component="div" className={classes.p}>
          <Box component="div" className={classes.browser}>
            <Box component="div" className={classes.circle}></Box>
            <Box component="div" className={classes.circle}></Box>
            <Box component="div" className={classes.circle}></Box>
          </Box>
          <img src={img} alt="dennis project" className={classes.img} />
        </Box>
        <Box component="div" className={classes.buttonContainer}>
          <a href={link} target="_blank" rel="noreferrer">
            <Button>Github</Button>
          </a>
        </Box>
      </Box>
    </>
  );
};

export default Product;
